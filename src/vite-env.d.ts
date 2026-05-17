/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_READING_PASSWORD_STANDARD: string
  readonly VITE_READING_PASSWORD_SPECIAL: string
  readonly VITE_THAMY_TITLE: string
  readonly VITE_THAMY_TRAITS: string
  readonly VITE_THAMY_SUMMARY_TITLE: string
  readonly VITE_THAMY_SUMMARY_INTRO: string
  readonly VITE_THAMY_MYSTICAL_TEXT: string
  readonly VITE_THAMY_FORBIDDEN_NAME: string
  readonly VITE_THAMY_SECRET_TEXT: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
