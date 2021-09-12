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
        <a href={'/image/self-original'}>Image native - self hosted</a>
        <a href={'/image/cloudinary-original'}>Image Cloudinary - original</a>
        <a href={'/image/cloudinary-webp'}>Image Cloudinary - webp</a>
        <a href={'/image/cloudinary-responsive'}>Image Cloudinary - responsive</a>
        <p>Image Cloudinary - Low Quality</p>
        <ul>
          <li>
            <a href={'/image/low-q/100'}>100</a>
          </li>
          <li>
            <a href={'/image/low-q/90'}>90</a>
          </li>
          <li>
            <a href={'/image/low-q/70'}>70</a>
          </li>
          <li>
            <a href={'/image/low-q/50'}>50</a>
          </li>
        </ul>
        <a href={'/image/cloudinary-all-part1'}>Image Cloudinary - all -part 1</a>
        <a href={'/image/next-self'}>Image Next - self hosted</a>
        <a href={'/image/next-cloudinary'}>Image Next - Cloudinary</a>
        <a href={'/image/cloudinary-blur'}>Image Cloudinary - blur</a>
      </main>
    </div>
  )
}
