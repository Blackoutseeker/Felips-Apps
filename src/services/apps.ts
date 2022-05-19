import type { StaticImageData } from 'next/image'
import type { App } from '@models/index'
import { getContentTranslationForUserLocale } from '@services/pageTranslation'
import { Framework } from '@utils/constants'

/**
 * Get the static app icon for the given app name.
 * @param appName - The name of the app to get the icon for.
 * @returns {StaticImageData} The icon for the app.
 */

const getStaticAppIcon = (appName: string): StaticImageData => {
  const appIcon:
    | StaticImageData
    | undefined = require(`@assets/apps/${appName}/icon.png`)

  if (!appIcon) {
    throw new Error(
      `App icon not found for ${appName}, on <root>/src/assets/apps/${appName}/icon.png`
    )
  }

  return appIcon
}

/**
 * Get all apps available for the user.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @returns {App[]} An array of apps for the given locale.
 */

export const getApps = (locale: string | undefined): App[] => [
  {
    name: 'Lineker',
    icon: getStaticAppIcon('Lineker'),
    sourceCodeUrl: 'https://github.com/Blackoutseeker/Lineker-Mobile-Flutter',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.lineker',
    framework: Framework.Flutter,
    content: getContentTranslationForUserLocale(locale, 'Lineker'),
    screenshots: [
      'https://play-lh.googleusercontent.com/nfESY0y7g43pUuj9eV5KYFPA5JyQ_tosc34lyg4e-RfTJgsyb2y5kYovFfl264QYRpc=w720-h310-rw',
      'https://play-lh.googleusercontent.com/hYbYK3GQAlTE4fFYCwm1K5jjX6M2kofkWH_gCSvPnLxexO-WKyibT6Ni2jXp7nhDTQ18=w720-h310-rw'
    ]
  }
]

/**
 * Get the app for the given name.
 * @param appName - The name of the app to get.
 * @param locale - The user's current `locale` (example: `en-US`).
 * @returns {App | undefined} The app for the given name, or `undefined`.
 */

export const getApp = (
  appName: string,
  locale: string | undefined
): App | undefined => {
  const apps = getApps(locale)
  const app = apps.find(app => app.name === appName)
  return app
}
