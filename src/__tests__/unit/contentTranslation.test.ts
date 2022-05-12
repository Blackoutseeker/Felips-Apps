import {
  getContentTranslationForUserLocale,
  getSeoTranslationForUserLocale
} from '@services/pageTranslation'
import type { ContentTranslation, SeoTranslation } from '@models/index'
import { locales, apps } from '@utils/constants'

describe('Testing "getContentTranslationForUserLocale" method from "pageTranslation" module', () => {
  const contentTranslations: ContentTranslation[] = []

  apps.forEach(app => {
    locales.forEach(locale => {
      contentTranslations.push(getContentTranslationForUserLocale(locale, app))
    })
  })

  test('Should check if all the pages have an content translation file', () => {
    contentTranslations.forEach(contentTranslation => {
      expect(contentTranslation.presentationText).toBeDefined()
      expect(contentTranslation.viewOnGooglePlayStore).toBeDefined()
      expect(contentTranslation.viewSourceCode).toBeDefined()
      expect(contentTranslation.developmentText).toBeDefined()
      expect(contentTranslation.descriptionTitle).toBeDefined()
      expect(contentTranslation.descriptionText).toBeDefined()
      expect(contentTranslation.screenshotTexts.length).toBeGreaterThan(0)
      expect(contentTranslation.motivationTitle).toBeDefined()
      expect(contentTranslation.motivationText).toBeDefined()
    })
  })

  test('Should check if the apps description matches the description of the SEO translations', () => {
    const seoTranslations: SeoTranslation[] = []

    apps.forEach(app => {
      locales.forEach(locale => {
        seoTranslations.push(getSeoTranslationForUserLocale(locale, app))
      })
    })

    contentTranslations.forEach((contentTranslation, index: number) => {
      expect(contentTranslation.descriptionText).toEqual(
        seoTranslations[index].page.head.description
      )
    })
  })
})
