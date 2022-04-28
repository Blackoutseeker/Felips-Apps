import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import type { SeoTranslation } from '@models/index'
import { locales, pages } from '@utils/constants'

describe('Testing "getSeoTranslationForUserLocale" method from "pageTranslation" module', () => {
  test('Should check if all the pages have an SEO translation file', () => {
    const seoTranslations: SeoTranslation[] = []

    pages.forEach(page => {
      locales.forEach(locale => {
        seoTranslations.push(getSeoTranslationForUserLocale(locale, page))
      })
    })

    seoTranslations.forEach(seoTranslation => {
      expect(seoTranslation.page.head.description).toBeDefined()
      expect(seoTranslation.page.head.keywords.length).toBeGreaterThan(0)
    })
  })
})
