import type { NextPage, GetStaticProps } from 'next'
import type { App } from '@models/index'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApps } from '@services/apps'
import Head from 'next/head'
import { Header, AppCard, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

interface HomePageProps {
  apps: App[]
}

const HomePage: NextPage<HomePageProps> = ({ apps }) => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, 'home')

  const renderAppCards = () =>
    apps.map(app => <AppCard key={app.name} app={app} />)

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>Felip&apos;s Apps</title>
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

export const getStaticProps: GetStaticProps = async context => {
  const locale = context.locale ?? 'en-US'
  const apps = getApps(locale)
  return {
    props: {
      apps
    }
  }
}

export default HomePage
