import Head from 'next/head'
import styles from '../../styles/LongList.module.css'
import React, { useEffect, useState } from 'react'
import { Data } from '../../interfaces/data.interface'
import { FixedSizeList as List } from 'react-window'

interface IRow {
  data?: Data[]
  style?: React.StyleHTMLAttributes<'div'>
  index?: number
}

export default function ScrollBase() {
  const [data, setData] = useState<Data[]>([])
  useEffect(() => {
    ;(async function () {
      const res = await fetch('/api/list-data')
      const data = await res.json()
      setData(data)
    })()
  }, [])

  const Row = ({ style, data, index = 0 }: IRow) => {
    if (!data) return
    const el = data[index]
    return (
      <div key={el.id} style={style}>
        <h3>
          {el.firstName} {el.lastName}
        </h3>
        <p>{el.lorem}</p>
        <p>
          You can reach me here: {el.address.street} {el.address.city} {el.address.code}. <br />
          <span>{el.phone}</span>
        </p>
      </div>
    )
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Optimisation React</title>
        <meta name="description" content="Thesis example" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <List height={1400} itemCount={data.length} itemSize={300} width={900} itemData={data}>
          {Row}
        </List>
      </main>
    </div>
  )
}
