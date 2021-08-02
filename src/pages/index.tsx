import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>iAdopt</title>
        <meta name="description" content="Plataforma de adopción que pone en contacto protectoras y adoptantes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
         Welcome to iAdopt
        </h1>

        <p className={styles.description}>
          Get started 
          <code className={styles.code}>to find your animal</code>
        </p>

        <div className={styles.grid}>
          <Link href="./cats">
            <div className={styles.card}>
              <h2>CATS</h2>
              <p>All cats available here</p>
            </div>
          </Link>
          <Link href="./dogs">
            <div className={styles.card}>
              <h2>DOGS &rarr;</h2>
              <p>All cats available here</p>
            </div>
          </Link>
          <Link href="./all">
            <div className={styles.card}>
              <h2>ALL &rarr;</h2>
              <p>All cats available here</p>
            </div>
          </Link>
          <Link href="./centers">
            <div className={styles.card}>
              <h2>CENTERS &rarr;</h2>
              <p>All cats available here</p>
            </div>
            </Link>
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/favicon.ico" alt="iAdopt" width={50} height={50} />
          </span>
        </a>
      </footer>
    </div>
  )
}
