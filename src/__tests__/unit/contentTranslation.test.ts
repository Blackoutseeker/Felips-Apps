import { getContentTranslationForUserLocale } from '@services/pageTranslation'
import type { ContentTranslation } from '@models/index'
import { locales, apps } from '@utils/constants'

describe('Testing "getContentTranslationForUserLocale" method from "pageTranslation" module', () => {
  test('Should check if all the pages have an content translation file', () => {
    const contentTranslations: ContentTranslation[] = []

    apps.forEach(app => {
      locales.forEach(locale => {
        contentTranslations.push(
          getContentTranslationForUserLocale(locale, app)
        )
      })
    })

    contentTranslations.forEach(contentTranslation => {
      expect(contentTranslation.presentationText).toBeDefined()
      expect(contentTranslation.viewOnGooglePlayStore).toBeDefined()
      expect(contentTranslation.viewSourceCode).toBeDefined()
      expect(contentTranslation.developmentText).toBeDefined()
      expect(contentTranslation.descriptionTitle).toBeDefined()
      expect(contentTranslation.descriptionText).toBeDefined()
      expect(contentTranslation.screenshotText).toBeDefined()
      expect(contentTranslation.motivationTitle).toBeDefined()
      expect(contentTranslation.motivationText).toBeDefined()
    })
  })
})
