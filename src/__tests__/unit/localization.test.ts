import { locales } from '@utils/constants'

describe('Testing if have any duplicate locales', () => {
  test('Should check if an locale has been duplicated', () => {
    let hasDuplication: boolean = false

    locales.forEach(locale => {
      if (
        locales.filter(
          localeFromFilter =>
            localeFromFilter.toLowerCase() === locale.toLowerCase()
        ).length > 1
      ) {
        hasDuplication = true
      }
    })

    expect(hasDuplication).toBeFalsy()
  })
})
