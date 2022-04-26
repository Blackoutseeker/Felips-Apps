import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getSeoTranslationForUserLocale } from '@services/pageTranslation'

const HomePage: NextPage = () => {
  const { locale } = useRouter()
  const seoTranslation = getSeoTranslationForUserLocale(locale, 'home')

  return (
    <main className="flex flex-col w-full">
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
    </main>
  )
}

export default HomePage
