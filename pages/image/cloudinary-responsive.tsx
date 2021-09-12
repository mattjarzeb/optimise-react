import Head from 'next/head'
import styles from '../../styles/Image.module.css'
import * as faker from 'faker'

export default function Image() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Img - Cloud - jxr</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <img
          src={'https://res.cloudinary.com/teacode/image/upload/q_100/v1631468097/studies/landscape.jpg'}
          srcSet={
            'https://res.cloudinary.com/teacode/image/upload/q_100,w_750/v1631468097/studies/landscape.jpg 750w,' +
            'https://res.cloudinary.com/teacode/image/upload/q_100,w_828/v1631468097/studies/landscape.jpg 828w,' +
            'https://res.cloudinary.com/teacode/image/upload/q_100,w_1080/v1631468097/studies/landscape.jpg 1080w,' +
            'https://res.cloudinary.com/teacode/image/upload/q_100,w_1200/v1631468097/studies/landscape.jpg 1200w,' +
            'https://res.cloudinary.com/teacode/image/upload/q_100,w_1920/v1631468097/studies/landscape.jpg 1920w'
          }
          alt={'Text image with srcSet'}
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
