import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApps } from '@services/apps'
import { locales } from '@utils/constants'
import Head from 'next/head'
import { Header, AppCard, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

const HomePage: NextPage = () => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, 'home')

  const apps = getApps(locale)

  const renderAppCards = () =>
    apps.map(app => <AppCard key={app.name} app={app} />)

  const renderHreflangTags = locales.map(locale => (
    <link
      key={locale}
      rel="alternate"
      href={`https://felips-apps.vercel.app/${locale}`}
      hrefLang={locale.toLowerCase()}
    />
  ))

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>Felip&apos;s Apps</title>
        {renderHreflangTags}
        <link
          rel="alternate"
          href="https://felips-apps.vercel.app/"
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
        <ul className={Styles.appsList}>{renderAppCards()}</ul>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
