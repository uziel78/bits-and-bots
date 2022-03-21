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
        {/* <div className="carousel__container">
          <div className="carousel__container--animation">
          </div>
        </div> */}
        <Hero />

        {/* <h1>Landing Page</h1>*/}
      </>
    </div>
  );
}
