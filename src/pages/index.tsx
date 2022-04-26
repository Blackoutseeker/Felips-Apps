import type { NextPage } from 'next'
import Head from 'next/head'

const HomePage: NextPage = () => {
  return (
    <main className="flex flex-col w-full">
      <Head>
        <title>Felip&apos;s Apps</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </main>
  )
}

export default HomePage
