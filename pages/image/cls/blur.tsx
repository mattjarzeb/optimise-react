import Head from 'next/head'
import styles from '../../../styles/Image.module.css'
import * as faker from 'faker'
import { useEffect, useRef, useState } from 'react'

export default function BlurImage() {
  const [loading, setLoading] = useState(true)
  const imgRef = useRef<HTMLImageElement | null>(null)

  useEffect(() => {
    if (imgRef.current?.complete) {
      setLoading(false)
    }
  }, [imgRef])
  return (
    <div className={styles.container}>
      <Head>
        <title>Img - Cloud - blur</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div className={styles.blurContainer}>
          {loading && (
            <img
              ref={imgRef}
              src={'https://res.cloudinary.com/teacode/image/upload/w_10,h_10/v1631468097/studies/landscape.webp'}
              alt={'placeholder'}
              className={styles.blur}
            />
          )}
          <img
            src={'https://res.cloudinary.com/teacode/image/upload/q_80,h_680/v1631468097/studies/landscape.webp'}
            srcSet={
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_750/v1631468097/studies/landscape.webp 750w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_828/v1631468097/studies/landscape.webp 828w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1080/v1631468097/studies/landscape.webp 1080w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1200/v1631468097/studies/landscape.webp 1200w,' +
              'https://res.cloudinary.com/teacode/image/upload/q_80,h_680,w_1920/v1631468097/studies/landscape.webp 1920w'
            }
            alt={'Test image with srcSet'}
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
