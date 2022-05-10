import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApps } from '@services/apps'
import Head from 'next/head'
import { Header, AppCard, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

const HomePage: NextPage = () => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, 'home')

  const apps = getApps(locale)

  const renderAppCards = () =>
    apps.map(app => <AppCard key={app.name} app={app} />)

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>Felip&apos;s Apps</title>
        <link rel="icon" href="/favicon.ico" />
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
        <ul className={Styles.appsList}>{renderAppCards()}</ul>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
