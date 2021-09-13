import Head from 'next/head'
import styles from '../../../styles/Image.module.css'
import * as faker from 'faker'

export default function Image() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Img - Cloud - q60</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src={'https://res.cloudinary.com/teacode/image/upload/q_60/v1631468097/studies/landscape.jpg'}
          className={styles.image}
        />

        <h2 className={styles.subtitle}>W tym scenariuszu budujemy testowy obrazek</h2>
        <p className={styles.description}>
          Wpiszmy tu dłuższy blok tekstu: <br />
          {faker.lorem.paragraphs()}
        </p>
      </main>

      <footer className={styles.footer}>Powered by Matt</footer>
    </div>
  )
}
