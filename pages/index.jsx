import Head from "next/head";
import styles from "../styles/LandingPage.module.scss";
import Hero from "../components/landing-page/Hero";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bits & Bots webstore</title>
        <meta name="description" content="Bits&Bots webstore page" />
      </Head>

      <>
        <Hero />
      </>
    </div>
  );
}
