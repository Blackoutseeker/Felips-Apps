import type { NextPage, GetStaticPaths, GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'
import { getApp, getApps } from '@services/apps'
import { apps as appPages, locales } from '@utils/constants'
import Head from 'next/head'
import { Header, DeleteAccountForm, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

interface DeleteAccountPageProps {
  appName: string
}

const DeleteAccountPage: NextPage<DeleteAccountPageProps> = ({ appName }) => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, appName)

  const app = getApp(appName, locale)!
  const apps = getApps(locale)

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>{`${appName} - Felip's Apps`}</title>
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
          <DeleteAccountForm app={app} locale={locale} />
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
    props: { appName },
    redirect: {
      destination: '/404'
    }
  }
}

export default DeleteAccountPage
