import { getStaticTranslationForUserLocale } from '@services/pageTranslation'
import type { StaticTranslation } from '@models/index'
import { locales } from '@utils/constants'

describe('Testing "getStaticTranslationForUserLocale" method from "pageTranslation" module', () => {
  test('Should check for static translation files for all available locales', () => {
    const staticTranslations: StaticTranslation[] = []

    locales.forEach(locale => {
      staticTranslations.push(getStaticTranslationForUserLocale(locale))
    })

    staticTranslations.forEach(staticTranslation => {
      const {
        page: { body }
      } = staticTranslation
      const { titles } = body

      expect(body.searchInputPlaceholder).toBeDefined()
      expect(body.message404).toBeDefined()
      expect(titles.goToHomePage).toBeDefined()
      expect(titles.clearSearchInput).toBeDefined()
      expect(titles.linkedInProfile).toBeDefined()
      expect(titles.googlePlayStoreProfile).toBeDefined()
      expect(titles.gitHubProfile).toBeDefined()
      expect(titles.viewSourceCode).toBeDefined()
      expect(titles.sendEmail).toBeDefined()
      expect(titles.donations.payPal).toBeDefined()
      expect(titles.donations.buyMeACoffee).toBeDefined()
    })
  })
})
