import { apps } from '@utils/constants'
import { getApps, getApp } from '@services/apps'

describe('Testing if have any duplicate apps', () => {
  test('Should check if an app has been duplicated', () => {
    let hasDuplication: boolean = false

    apps.forEach(app => {
      if (
        apps.filter(
          appFromFilter => appFromFilter.toLowerCase() === app.toLowerCase()
        ).length > 1
      ) {
        hasDuplication = true
      }
    })

    expect(hasDuplication).toBeFalsy()
  })
})

const defaultLocale: string = 'en-US'

describe('Testing "getApps" method from "apps" module', () => {
  test('Should check if all apps match the apps names', () => {
    const appNames: string[] = getApps(defaultLocale).map(app => app.name)
    apps.forEach(app => {
      expect(appNames).toContain(app)
    })
  })
})

describe('Testing "getApp" method from "apps" module', () => {
  test('Should check if it correctly returns an existing app', () => {
    const existingApps = apps
    existingApps.forEach(existingApp => {
      const app = getApp(existingApp, defaultLocale)
      expect(app).toBeDefined()
    })
  })

  test('Should check if it returns "undefined" for a non-existing app', () => {
    const nonExistingApp = 'Non-existing App'
    const app = getApp(nonExistingApp, defaultLocale)
    expect(app).toBeUndefined()
  })
})
