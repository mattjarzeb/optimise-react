import styles from '../styles/Control.module.css'
import Head from 'next/head'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Optimisation React</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>Welcome to testing optimisation techniques</h1>
        <a href={'/control'}>Control</a>
        <a href={'/image/self-hosted'}>Image native - self hosted</a>
        <a href={'/image/next-self'}>Image Next - self hosted</a>
        <a href={'/image/next-cloudinary'}>Image Next - Cloudinary</a>
        <a href={'/image/cloudinary-full'}>Image Cloudinary - full</a>
        <a href={'/image/cloudinary-blur'}>Image Cloudinary - blur</a>
      </main>
    </div>
  )
}
