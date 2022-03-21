import Head from "next/head";
import styles from "../styles/LandingPage.module.scss";
import Hero from "../components/landing-page/Hero";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bits & Bots</title>
        <meta name="description" content="Bits&Bots landing page" />
      </Head>

      <>
        <Hero />
      </>
    </div>
  );
}
