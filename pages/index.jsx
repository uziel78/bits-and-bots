import Head from "next/head";
import styles from "../styles/LandingPage.module.scss";

export default function LandingPage() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bits & Bots</title>
        <meta name="description" content="Bits&Bots landing page" />
      </Head>

      <>
        <div className="carousel__container">
          <div className="carousel--animation"></div>
        </div>
        <h1>Landing Page</h1>

        <div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <button>Register</button>
          </div>
        </div>
      </>
    </div>
  );
}
