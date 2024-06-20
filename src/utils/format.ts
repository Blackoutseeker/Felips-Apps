/**
 * Format the email placeholder with `*` at the end.
 * @param {string} emailPlaceholder - The email placeholder to be formatted.
 * @returns {string} The formatted email placeholder.
 */

export const formatEmailPlaceholder = (emailPlaceholder: string): string => {
  if (emailPlaceholder.endsWith('*')) {
    return emailPlaceholder
  }
  return emailPlaceholder + '*'
}
