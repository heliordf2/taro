export type ReadingMode = 'standard' | 'special'

function normalizePassword(value: string): string {
  return value
    .trim()
    .toLowerCase()
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
}

const STANDARD_PASSWORD = normalizePassword(
  import.meta.env.VITE_READING_PASSWORD_STANDARD ?? '',
)
const SPECIAL_PASSWORD = normalizePassword(
  import.meta.env.VITE_READING_PASSWORD_SPECIAL ?? '',
)

export function resolveReadingMode(password: string): ReadingMode | null {
  if (!STANDARD_PASSWORD || !SPECIAL_PASSWORD) return null

  const key = normalizePassword(password)
  if (key === STANDARD_PASSWORD) return 'standard'
  if (key === SPECIAL_PASSWORD) return 'special'
  return null
}

function parseTraits(raw: string): string[] {
  return raw
    .split(',')
    .map((t) => t.trim())
    .filter(Boolean)
}

export const specialCard = {
  title: import.meta.env.VITE_THAMY_TITLE || 'Feiticeira Thamy invocada',
  imageUrl: '/cards/feiticeira-thamy.png',
  traits: parseTraits(import.meta.env.VITE_THAMY_TRAITS ?? ''),
  mysticalText: import.meta.env.VITE_THAMY_MYSTICAL_TEXT ?? '',
  summaryTitle:
    import.meta.env.VITE_THAMY_SUMMARY_TITLE || 'Invocação da Feiticeira Thamy',
  summaryIntro: import.meta.env.VITE_THAMY_SUMMARY_INTRO ?? '',
  forbiddenName: (import.meta.env.VITE_THAMY_FORBIDDEN_NAME ?? '').trim(),
  secretText: import.meta.env.VITE_THAMY_SECRET_TEXT ?? '',
}
