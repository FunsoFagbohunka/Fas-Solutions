"""
Translate the English i18n JSON file to all supported languages using Google Translate.
Usage: python scripts/translate.py
"""

import json
import os
import re
import time
import sys
from concurrent.futures import ThreadPoolExecutor, as_completed

try:
    from deep_translator import GoogleTranslator
except ImportError:
    print("Installing deep-translator...")
    os.system(f"{sys.executable} -m pip install deep-translator")
    from deep_translator import GoogleTranslator

# Project paths
SCRIPT_DIR = os.path.dirname(os.path.abspath(__file__))
PROJECT_ROOT = os.path.dirname(SCRIPT_DIR)
I18N_DIR = os.path.join(PROJECT_ROOT, "public", "assets", "i18n")

# Source language
SOURCE_LANG = "en"

# Target languages (code -> Google Translate code)
# Skip languages that already have translation files
TARGET_LANGUAGES = {
    "de": "de",       # German
    "fr": "fr",       # French
    "it": "it",       # Italian
    "es": "es",       # Spanish
    "pt": "pt",       # Portuguese
    "nl": "nl",       # Dutch
    "pl": "pl",       # Polish
    "sv": "sv",       # Swedish
    "da": "da",       # Danish
    "no": "no",       # Norwegian
    "fi": "fi",       # Finnish
    "ru": "ru",       # Russian
    "uk": "uk",       # Ukrainian
    "ja": "ja",       # Japanese
    "ko": "ko",       # Korean
    "zh": "zh-CN",    # Chinese (Simplified)
    "ar": "ar",       # Arabic
    "hi": "hi",       # Hindi
    "tr": "tr",       # Turkish
    "cs": "cs",       # Czech
    "ro": "ro",       # Romanian
    "el": "el",       # Greek
    "th": "th",       # Thai
    "vi": "vi",       # Vietnamese
    "id": "id",       # Indonesian
    "hu": "hu",       # Hungarian
}

# Keys that should NOT be translated (brand names, technical terms, etc.)
DO_NOT_TRANSLATE = {
    "hero.badge",           # "SaaS · Software · Innovation" - universal
    "product.title_name",   # "YounitedTherapy" - brand name
    "services.cloud_title", # "Cloud & DevOps" - technical
}

# Substrings to preserve as-is after translation
PRESERVE_TERMS = [
    "FAS-Solutions",
    "YounitedTherapy",
    "SaaS",
    "GDPR",
    "CI/CD",
    "API",
    "LLM",
    "RAG",
    "B2B",
    "Angular",
    "Node.js",
    "Stripe",
    "WebRTC",
    "i18n",
    "SCSS",
    "SSR",
    "AI/ML",
    "Python",
    "DevOps",
    "Slack",
    "SEO",
    "AOS",
    "FinTech",
    "Health-Tech",
    "CHE-324.599.931",
]


def load_json(filepath):
    with open(filepath, "r", encoding="utf-8") as f:
        return json.load(f)


def save_json(filepath, data):
    with open(filepath, "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=2)
    print(f"  ✅ Saved: {filepath}")


def translate_value(text, target_lang, translator):
    """Translate a single string, preserving brand/technical terms."""
    if not text or not text.strip():
        return text

    # Replace preserve terms with placeholders before translation.
    # Use [KN] format — no underscores, compact, clearly non-linguistic.
    # Double-underscore __KEEPN__ looks like Markdown bold and confuses Google
    # Translate when fused to adjacent text (e.g. __KEEP3__-compliant), causing
    # garbled output and "No translation was found" errors.
    placeholders = {}
    modified_text = text
    for i, term in enumerate(PRESERVE_TERMS):
        placeholder = f"[K{i}]"
        if term in modified_text:
            placeholders[placeholder] = term
            modified_text = modified_text.replace(term, placeholder)

    # Translate
    try:
        translated = translator.translate(modified_text)
        if not translated:
            return text
    except Exception as e:
        print(f"    ⚠️  Translation failed for '{text[:50]}...': {e}")
        return text

    # Restore preserved terms
    for placeholder, term in placeholders.items():
        translated = translated.replace(placeholder, term)
        # Fallback: handle Google lowercasing the placeholder
        translated = translated.replace(placeholder.lower(), term)

    return translated


def translate_file(source_data, target_lang_code, google_lang_code):
    """Translate all values in the source data to the target language."""
    output_path = os.path.join(I18N_DIR, f"{target_lang_code}.json")

    # Skip if file already exists
    # if os.path.exists(output_path):
    #     print(f"  ⏭️  Skipping {target_lang_code} — file already exists")
    #     return

    print(f"\n🌐 Translating to {target_lang_code} ({google_lang_code})...")
    translator = GoogleTranslator(source=SOURCE_LANG, target=google_lang_code)

    translated_data = {}
    total = len(source_data)

    for idx, (key, value) in enumerate(source_data.items(), 1):
        if key in DO_NOT_TRANSLATE:
            translated_data[key] = value
            continue

        translated_data[key] = translate_value(value, google_lang_code, translator)

        # Progress indicator
        if idx % 20 == 0 or idx == total:
            print(f"    [{idx}/{total}] translated...")

        # Small delay to avoid rate limiting
        time.sleep(0.1)

    save_json(output_path, translated_data)


def main():
    # Load English source
    source_path = os.path.join(I18N_DIR, f"{SOURCE_LANG}.json")
    if not os.path.exists(source_path):
        print(f"❌ Source file not found: {source_path}")
        sys.exit(1)

    source_data = load_json(source_path)
    print(f"📖 Loaded {len(source_data)} translation keys from {SOURCE_LANG}.json")

    # Run up to CONCURRENCY language translations at a time.
    # Each language gets its own GoogleTranslator instance inside translate_file,
    # so there are no shared mutable objects between threads.
    # Keep this at 2-3 to stay well within Google Translate's rate limits.
    CONCURRENCY = 3

    languages = list(TARGET_LANGUAGES.items())

    def run(item):
        lang_code, google_code = item
        try:
            translate_file(source_data, lang_code, google_code)
        except Exception as e:
            print(f"  ❌ Failed to translate {lang_code}: {e}")

    with ThreadPoolExecutor(max_workers=CONCURRENCY) as executor:
        futures = {executor.submit(run, item): item[0] for item in languages}
        for future in as_completed(futures):
            lang = futures[future]
            exc = future.exception()
            if exc:
                print(f"  ❌ Thread error for {lang}: {exc}")

    print("\n🎉 All translations complete!")
    print(f"📁 Files saved to: {I18N_DIR}")


if __name__ == "__main__":
    main()
