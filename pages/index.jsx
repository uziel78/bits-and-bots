import Head from "next/head";
import styles from "../styles/LandingPage.module.scss";
// import Video from "../public/pexels-ehab-el-gapry-6238188.mp4";

export default function LandingPage() {
  return (
    <>
      <div className={styles.container}>
        <Head>
          <title>Bits&Bots</title>
          <meta name="description" content="Bits&Bots landing page" />
        </Head>

        {/* <Meta />
        <Hero /> */}

        {/* <div className="xx">
            <video autoPlay loop muted>
              <source src={Video} type="video/mp4"></source>
            </video>
          </div> */}
        <h1>Test</h1>
        <div>
          <div>
            <button>Login</button>
          </div>
          <div>
            <button>Register</button>
          </div>
        </div>

        <footer className="footer"></footer>
      </div>
    </>
  );
}
