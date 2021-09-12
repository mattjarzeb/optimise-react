import Head from 'next/head'
import styles from '../../styles/Image.module.css'
import * as faker from 'faker'
// @ts-ignore
import Img from 'react-cloudinary-lazy-image'

export default function Image() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image - CB</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Img src={'/landscape.jpeg'} className={styles.image} />

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
