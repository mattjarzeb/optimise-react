import Head from 'next/head'
import styles from '../../styles/LongList.module.css'
import { Data } from '../../interfaces/data.interface'
import { ssrHandler } from '../api/list-data'

interface IProps {
  data: Data[]
}

export default function ScrollSSR({ data }: IProps) {
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
            </div>
          )
        })}
      </main>
    </div>
  )
}

export async function getServerSideProps() {
  const data = ssrHandler()

  return { props: { data } }
}
