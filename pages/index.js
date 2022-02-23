import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://www.instagram.com/aliceland_cats/">Aliceland</a>
        </h1>
      </main>

     {/* <footer className={styles.footer}>
      </footer>*/}
    </div>
  )
}
