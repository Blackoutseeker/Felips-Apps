import type { NextPage, GetServerSideProps } from 'next'
import type { App } from '@models/index'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApp, getApps } from '@services/apps'
import Head from 'next/head'
import { Header, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

interface AppPageProps {
  app: App
}

const AppPage: NextPage<AppPageProps> = ({ app }) => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, app.name)

  const apps = getApps(locale)

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
        <article className={Styles.appArticleContainer}></article>
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
