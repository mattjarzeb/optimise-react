import Head from 'next/head'
import styles from '../styles/LongList.module.css'
import { useEffect, useState } from 'react'
import { Data } from '../interfaces/data.interface'

export default function Home() {
  const [data, setData] = useState<Data[]>([])
  useEffect(() => {
    ;(async function () {
      const res = await fetch('/api/list-data')
      const data = await res.json()
      setData(data)
    })()
  }, [])

  return (
    <div className={styles.container}>
      <Head>
        <title>Optimisation React</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        {data.map((el) => {
          return (
            <div key={el.id}>
              <h3>
                {el.firstName} {el.lastName}
              </h3>
              <p>{el.lorem}</p>
              <p>
                You can reach me here: {el.address.street} {el.address.city} {el.address.code}. <br />
                <span>{el.phone}</span>
              </p>
              <img src={el.image} alt={`${el.lastName}-image`} className={styles.img} />
            </div>
          )
        })}
      </main>
    </div>
  )
}
