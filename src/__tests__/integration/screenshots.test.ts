import { locales } from '@utils/constants'
import { getApps } from '@services/apps'
import { getContentTranslationForUserLocale } from '@services/pageTranslation'

describe('Testing texts and images from apps screenshots', () => {
  test('Should check if an app has the same number of text and images from screenshots', () => {
    locales.forEach(locale => {
      const apps = getApps(locale)
      apps.forEach(app => {
        const contentTranslation = getContentTranslationForUserLocale(
          locale,
          app.name
        )
        const screenshotImages = app.screenshots
        const screenshotTexts = contentTranslation.screenshotTexts
        expect(screenshotTexts.length).toEqual(screenshotImages.length)
      })
    })
  })
})
