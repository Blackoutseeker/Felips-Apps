import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { getApps } from '@services/apps'
import Head from 'next/head'
import { Header, Footer } from '@components/index'
import Styles from '@styles/Page.module.css'

const Page404: NextPage = () => {
  const { locale } = useRouter()
  const apps = getApps(locale)

  return (
    <main className={Styles.pageContainer}>
      <Head>
        <title>Felip&apos;s Apps</title>
      </Head>
      <Header apps={apps} />
      <Footer />
    </main>
  )
}

export default Page404
