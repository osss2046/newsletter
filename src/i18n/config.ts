// src/i18n/config.ts

// Global Language Map
export const langMap: Record<string, string[]> = {
  'en': ['en-US'],
  'es': ['es-ES'],
}

// Giscus Language Map
export const giscusLocaleMap: Record<string, string> = {
  'en': 'en',
  'es': 'es',
}

// Twikoo Language Map
export const twikooLocaleMap: Record<string, string> = {
  'en': 'en',
  'es': 'en', // fallback to English
}

// Waline Language Map
export const walineLocaleMap: Record<string, string> = {
  'en': 'en-US',
  'es': 'es',
}

// Supported Languages
export const supportedLangs = Object.keys(langMap).flat()