import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApp, getApps } from '@services/apps'
import { apps as appPages, locales } from '@utils/constants'
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
  appName: string
}

const AppPage: NextPage<AppPageProps> = ({ appName }) => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, appName)

  const app = getApp(appName, locale)!
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

  const renderHreflangTags = locales.map(locale => (
    <link
      key={locale}
      rel="alternate"
      href={`https://felips-apps.vercel.app/${locale}/${appName}`}
      hrefLang={locale.toLowerCase()}
    />
  ))

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>{`${appName} - Felip's Apps`}</title>
        {renderHreflangTags}
        <link
          rel="alternate"
          href={`https://felips-apps.vercel.app/${appName}`}
          hrefLang="x-default"
        />
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
            locale={locale ?? 'en'}
            storeButtonTitle={app.content.viewOnGooglePlayStore}
            sourceCodeUrl={app.sourceCodeUrl}
          />
        </article>
      </div>
      <Footer />
    </main>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths: { params: { app: string }; locale: string }[] = []
  appPages.forEach(app => {
    locales.forEach(locale => {
      paths.push({
        params: {
          app
        },
        locale
      })
    })
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async context => {
  const appName = context.params?.app?.toString()
  if (appName) {
    return {
      props: {
        appName
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
