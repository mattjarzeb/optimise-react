import Head from 'next/head'
import styles from '../../../styles/Image.module.css'
import * as faker from 'faker'

export default function Image() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Img - Cloud - white</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.boxContainer}>
          <img
            src={'https://res.cloudinary.com/teacode/image/upload/q_80,h_680/v1631468097/studies/landscape.webp'}
            srcSet={
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_750/v1631468097/studies/landscape.webp 750w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_828/v1631468097/studies/landscape.webp 828w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1080/v1631468097/studies/landscape.webp 1080w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1200/v1631468097/studies/landscape.webp 1200w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1920/v1631468097/studies/landscape.webp 1920w'
            }
            alt={'Text image with srcSet'}
            className={styles.image}
          />
        </div>

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
