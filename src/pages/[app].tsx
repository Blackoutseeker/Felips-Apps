import type { NextPage, GetServerSideProps } from 'next'
import type { App } from '@models/index'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApp, getApps } from '@services/apps'
import Head from 'next/head'
import {
  Header,
  Banner,
  Section,
  Screenshot,
  SectionFooter,
  Footer
} from '@components/index'
import Styles from '@styles/Page.module.css'

interface AppPageProps {
  app: App
}

const AppPage: NextPage<AppPageProps> = ({ app }) => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, app.name)

  const apps = getApps(locale)

  const renderScreenshots = app.screenshots.map((screenshot, index: number) => {
    const screenshotText = app.content.screenshotTexts[index]
    return (
      <Screenshot
        key={screenshotText}
        screenshotText={screenshotText}
        screenshotImage={screenshot}
        isReverse={index % 2 !== 0}
      />
    )
  })

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>{app.name} - Felip&apos;s Apps</title>
        <meta
          name="description"
          content={seoTranslation.page.head.description}
        />
        <meta
          name="keywords"
          content={`${seoTranslation.page.head.keywords}`}
        />
      </Head>
      <Header apps={apps} />
      <div className={Styles.appsListWrapper}>
        <article className={Styles.appArticleContainer}>
          <Banner
            appIcon={app.icon}
            appName={app.name}
            appFramework={app.framework}
            appDevelopmentText={app.content.developmentText}
          />
          <Section
            title={app.content.descriptionTitle}
            bodyText={app.content.descriptionText}
          />
          {renderScreenshots}
          <Section
            title={app.content.motivationTitle}
            bodyText={app.content.motivationText}
            isMotivation
          />
          <SectionFooter
            googlePlayStoreUrl={app.googlePlayUrl}
            storeButtonTitle={app.content.viewOnGooglePlayStore}
            sourceCodeUrl={app.sourceCodeUrl}
          />
        </article>
      </div>
      <Footer />
    </main>
  )
}

export const getServerSideProps: GetServerSideProps = async context => {
  const appName = context.query.app?.toString()
  if (appName) {
    const app = getApp(appName, context.locale)
    if (app) {
      return {
        props: {
          app
        }
      }
    }
  }
  return {
    props: {},
    redirect: {
      destination: '/404'
    }
  }
}

export default AppPage
