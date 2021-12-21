import Head from 'next/head';
import { SubscribeButton } from '../components/SubscribeButton';

import styles from './home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title> Home | ig.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span> 👏 Hey, Welcome!</span>
          <h1>News About the <span>REACT</span> world</h1>
          <p> Get acess to all thte publications <br />
            <span>for $9.90/Month</span>
          </p>
          <SubscribeButton />

        </section>

        <img src="/images/avatar.svg" alt="Girl Coding" />
      </main>
    </>
  )
}
