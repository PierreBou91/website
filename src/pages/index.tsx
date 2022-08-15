import type { NextPage } from 'next'
import Head from 'next/head'
import styles from 'styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Dev Blog</title>
        <meta name="description" content="Dev blog" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    </div>
  )
}

export default Home
