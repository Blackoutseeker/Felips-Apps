import { locales, languages } from '@utils/constants'

describe('Testing if have any duplicate localization', () => {
  const isDuplicated = (localizations: string[]): boolean => {
    let hasDuplication: boolean = false

    localizations.forEach(localization => {
      if (
        localizations.filter(
          localeFromFilter =>
            localeFromFilter.toLowerCase() === localization.toLowerCase()
        ).length > 1
      ) {
        hasDuplication = true
      }
    })

    return hasDuplication
  }

  test('Should check if an locale has been duplicated', () => {
    const duplication = isDuplicated(locales)
    expect(duplication).toBeFalsy()
  })

  test('Should check if an language has been duplicated', () => {
    const duplication = isDuplicated(languages)
    expect(duplication).toBeFalsy()
  })
})
