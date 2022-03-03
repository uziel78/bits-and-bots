import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bits&Bots</title>
        <meta name="description" content="Bits&Bots landing page" />
      </Head>

      <main className={styles.main}>
        <h1>Test</h1>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  );
}
