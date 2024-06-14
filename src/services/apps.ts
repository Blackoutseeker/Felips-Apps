import type { App } from '@models/index'
import { getContentTranslationForUserLocale } from '@services/pageTranslation'
import { Framework } from '@utils/constants'

/**
 * Get the app icon path for the given app name.
 * @param appName - The name of the app to get the icon for.
 * @returns {string} The icon path for the app.
 */

const getAppIcon = (appName: string): string => {
  return `/assets/apps/${appName}/icon.png`
}

/**
 * Get all apps available for the user.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @returns {App[]} An array of apps for the given locale.
 */

export const getApps = (locale: string | undefined): App[] => [
  {
    name: 'Lineker',
    icon: getAppIcon('Lineker'),
    sourceCodeUrl: 'https://github.com/Blackoutseeker/Lineker-Mobile-Flutter',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.lineker',
    framework: Framework.Flutter,
    content: getContentTranslationForUserLocale(locale, 'Lineker'),
    screenshots: [
      'https://play-lh.googleusercontent.com/nfESY0y7g43pUuj9eV5KYFPA5JyQ_tosc34lyg4e-RfTJgsyb2y5kYovFfl264QYRpc=w720-h310-rw',
      'https://play-lh.googleusercontent.com/hYbYK3GQAlTE4fFYCwm1K5jjX6M2kofkWH_gCSvPnLxexO-WKyibT6Ni2jXp7nhDTQ18=w720-h310-rw'
    ]
  },
  {
    name: 'Qr Coder',
    icon: getAppIcon('Qr Coder'),
    sourceCodeUrl: 'https://github.com/Blackoutseeker/QrCoder-Flutter',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.qrcoder',
    framework: Framework.Flutter,
    content: getContentTranslationForUserLocale(locale, 'Qr Coder'),
    screenshots: [
      'https://play-lh.googleusercontent.com/buNjM8PCPtImkRBkH16OC2gDW5-t-qrP0jauylwCUPz7hEmb3uxyU6_ksp_YyTn_cTw=w720-h310-rw',
      'https://play-lh.googleusercontent.com/mt9-M-3qKrglHbSJcHTXBZN6TM0P1RupHZxu6ieH8_mtkxgCu-vwYSg9qHUsg6_vnQ=w720-h310-rw'
    ]
  },
  {
    name: 'Mister',
    icon: getAppIcon('Mister'),
    sourceCodeUrl: 'https://github.com/Blackoutseeker/Mister',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.mister',
    framework: Framework.Flutter,
    content: getContentTranslationForUserLocale(locale, 'Mister'),
    screenshots: [
      'https://play-lh.googleusercontent.com/UIm6PbNCoVn-BzjuiDCZsGDrY8Ig0sFiCKVr2u2z2BI8v_yWC-d_gGhnCjvTxPJNzJE=w720-h310-rw',
      'https://play-lh.googleusercontent.com/IPDy3Cye2fWG3to39-LQCsgsvwv1R7311rDluVa6QdnpzXIYAsGe4qBJDjCPKB57HIw=w720-h310-rw'
    ]
  },
  {
    name: 'Bookep',
    icon: getAppIcon('Bookep'),
    sourceCodeUrl: 'https://github.com/Blackoutseeker/EEEP-README',
    googlePlayUrl:
      'https://play.google.com/store/apps/details?id=com.FelipsTudio.bookep',
    framework: Framework.ReactNative,
    content: getContentTranslationForUserLocale(locale, 'Bookep'),
    screenshots: [
      'https://play-lh.googleusercontent.com/i6yaa1ayFwNLQIrVlekwWNeq9-_zv_EZsFhCSoztAV0wLiVXmdwTHpa7qwG4MiQjCKk=w720-h310-rw',
      'https://play-lh.googleusercontent.com/XWaOzOKSc0hS39IQOTICXzlDvJvfGPzyx6v6XqQOzMA7O1w9v7hWzdjcpvxSimn4cg=w720-h310-rw'
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
