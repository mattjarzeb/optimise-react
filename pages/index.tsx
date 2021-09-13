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
        <h2>Images - Microsoft</h2>
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
            <a href={'/image/low-q/80'}>80</a>
          </li>
          <li>
            <a href={'/image/low-q/60'}>60</a>
          </li>
          <li>
            <a href={'/image/low-q/40'}>40</a>
          </li>
        </ul>
        <a href={'/image/cloudinary-all-part1'}>Image Cloudinary - all -part 1</a>
        <p>Image Cloudinary - CLS</p>
        <ul>
          <li>
            <a href={'/image/cls/white'}>white box</a>
          </li>
          <li>
            <a href={'/image/cls/blur'}>blur</a>
          </li>
        </ul>
        <a href={'/image/cloudinary-all-part2'}>Image Cloudinary - all -part 2</a>
        <h2>Infinite scroll - Facebook</h2>
        <a href={'/scroll/base'}>basic</a>
        <a href={'/scroll/ssr'}>SSR</a>
      </main>
    </div>
  )
}
