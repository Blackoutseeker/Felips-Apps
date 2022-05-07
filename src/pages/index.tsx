import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import Head from 'next/head'
import { Header, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

const HomePage: NextPage = () => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, 'home')

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
      <Header />
      <div className={Styles.appsListWrapper}>
        <ul className={Styles.appsList}></ul>
      </div>
      <Footer />
    </main>
  )
}

export default HomePage
