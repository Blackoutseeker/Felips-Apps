import type { App } from '@models/index'
import { getContentTranslationForUserLocale } from '@services/pageTranslation'
import LinekerLogo from '@assets/images/apps/Lineker.png'

/**
 * Get all apps available for the user.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @returns {App[]} An array of apps for the given locale.
 */

export const getApps = (locale: string | undefined): App[] => [
  {
    name: 'Lineker',
    image: LinekerLogo,
    sourceCodeUrl: 'https://github.com/Blackoutseeker/Lineker-Mobile-Flutter',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.lineker',
    content: getContentTranslationForUserLocale(locale, 'Lineker')
  }
]
