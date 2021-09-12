import Head from 'next/head'
import styles from '../../styles/Image.module.css'
import * as faker from 'faker'
import Img from 'next/image'

interface IImage {
  src: string
  width?: number
  height?: number
  className?: string
}

const ImageComponent = ({ src, className }: IImage) => {
  const hostUrl = `/v1630937293/studies`

  return (
    <div className={styles.container}>
      <Img
        className={className}
        src={`${hostUrl}/${src}`}
        alt="Test Picture"
        layout="fill"
        quality={90}
        loading={'lazy'}
      />
    </div>
  )
}

export default function Image() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Image - SF</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <ImageComponent src={'landscape.jpeg'} className={styles.image} />

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
