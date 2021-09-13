import Head from 'next/head'
import styles from '../../styles/LongList.module.css'
import React, { useEffect, useState } from 'react'
import { Data } from '../../interfaces/data.interface'
import { FixedSizeList as List } from 'react-window'
import InfiniteLoader from 'react-window-infinite-loader'
import uniqBy from 'lodash/uniqBy'

const itemCount = 5000
interface IRow {
  style?: React.StyleHTMLAttributes<'div'>
  index?: number
}

export default function ScrollBase() {
  const [data, setData] = useState<Data[]>([])

  const fetchData = async (limit?: number) => {
    const res = await fetch(`/api/list-data?limit=${limit || 30}`)
    const data = await res.json()
    setData((prev) => uniqBy([...prev, ...data], 'id')) // upewnijmy się, że dane nie są zduplikowane
    return data
  }

  useEffect(() => {
    fetchData()
  }, [])

  const Row = ({ style, index = 0 }: IRow) => {
    const el = data[index]
    if (!el) return 'Loading...'
    return (
      <div key={el.id} style={style}>
        <h3>
          {index} - {el.firstName} {el.lastName}
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
        <InfiniteLoader
          isItemLoaded={(index) => index < data.length}
          itemCount={itemCount}
          loadMoreItems={(startIndex, stopIndex) => fetchData(stopIndex - startIndex)}
        >
          {({ onItemsRendered, ref }) => (
            <List
              itemCount={itemCount}
              itemSize={300}
              height={1400}
              width={900}
              onItemsRendered={onItemsRendered}
              ref={ref}
            >
              {/*@ts-ignore*/}
              {Row}
            </List>
          )}
        </InfiniteLoader>
      </main>
    </div>
  )
}
