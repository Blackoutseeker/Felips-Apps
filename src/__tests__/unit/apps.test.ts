import { apps } from '@utils/constants'
import { getApps } from '@services/apps'

describe('Testing "getApps" method from "apps" module', () => {
  const defaultLocale: string = 'en-US'

  test('Should check if all apps match the apps names', () => {
    const appNames: string[] = getApps(defaultLocale).map(app => app.name)
    apps.forEach(app => {
      expect(appNames).toContain(app)
    })
  })
})
