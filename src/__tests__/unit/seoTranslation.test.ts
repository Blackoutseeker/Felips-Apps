import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import type { SeoTranslation } from '@models/index'
import { locales, pages, apps } from '@utils/constants'

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

  test('Should check if all SEO translation files have all apps as keywords', () => {
    const seoTranslations: SeoTranslation[] = []

    pages.forEach(page => {
      locales.forEach(locale => {
        seoTranslations.push(getSeoTranslationForUserLocale(locale, page))
      })
    })

    const getKeywordsInLowerCase = (
      seoTranslation: SeoTranslation
    ): string[] => {
      return seoTranslation.page.head.keywords.map(keyword =>
        keyword.toLowerCase()
      )
    }

    seoTranslations.forEach(seoTranslation => {
      const keywords = getKeywordsInLowerCase(seoTranslation)
      apps.forEach(app => {
        expect(keywords.includes(app.toLowerCase())).toBeTruthy()
      })
    })
  })
})
