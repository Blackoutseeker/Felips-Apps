import type {
  StaticTranslation,
  SeoTranslation,
  ContentTranslation,
  DeleteTranslation
} from '@models/index'

/**
 * Translates the static content of the page based on the user's current locale.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @returns {StaticTranslation} The translated static content of the page.
 */

export const getStaticTranslationForUserLocale = (
  locale: string | undefined
): StaticTranslation => {
  if (locale) return require(`../locales/static/${locale}.json`)
  return require('../locales/static/en-US.json')
}

/**
 * Translates the SEO content of the page based on the user's current locale.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @param {string} page - The page to be translated.
 * @returns {SeoTranslation} The translated SEO content of the page.
 */

export const getSeoTranslationForUserLocale = (
  locale: string | undefined,
  page: string
): SeoTranslation => {
  if (locale) return require(`../locales/seo/${page}/${locale}.json`)
  return require(`../locales/seo/${page}/en-US.json`)
}

/**
 * Translates the content of the page based on the user's current locale.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @param {string} page - The page to be translated.
 * @returns {ContentTranslation} The translated content of the page.
 */

export const getContentTranslationForUserLocale = (
  locale: string | undefined,
  page: string
): ContentTranslation => {
  if (locale) return require(`../locales/content/${page}/${locale}.json`)
  return require(`../locales/content/${page}/en-US.json`)
}

/**
 * Translates the content of the delete-account page based on the user's current locale.
 * @param {string | undefined} locale - The user's current `locale` (example: `en-US`).
 * @param {string} app - The page to be translated.
 * @returns {DeleteTranslation} The translated static content of the page.
 */

export const getDeleteTranslationForUserLocale = (
  locale: string | undefined,
  app: string
): DeleteTranslation => {
  if (locale) return require(`../locales/delete/${app}/${locale}.json`)
  return require(`../locales/delete/${app}/en-US.json`)
}
