import Head from 'next/head'
import styles from '../styles/Control.module.css'
import * as faker from 'faker'

export default function Control() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Control</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Witaj na stronie poświeconej badaniu optymalizacji w React.js</h1>
        <h2 className={styles.subtitle}>To jest scenariusz kontrolny</h2>

        <p className={styles.description}>
          Wpiszmy tu dłuższy blok tekstu: <br />
          {faker.lorem.paragraphs()}
        </p>
      </main>

      <footer className={styles.footer}>Powered by{'Matt'}</footer>
    </div>
  )
}
