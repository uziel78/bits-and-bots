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
        {/* <div className="carousel__container">
          <div className="carousel__container--animation">
          </div>
        </div> */}
        <video autoPlay loop style={{ width: "100%", height: "100%" }}>
          <source src="/pexels-ehab-el-gapry-6238188.mp4" type="video/mp4" />
        </video>

        {/* <h1>Landing Page</h1>

        <div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <button>Register</button>
          </div>
        </div> */}
      </>
    </div>
  );
}
