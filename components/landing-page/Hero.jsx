import VideoBackground from "./VideoBackground";
import UserModals from "./UserModals";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <>
      <section className={styles.hero}>
        <VideoBackground />
        <UserModals />
      </section>
    </>
  );
}

export default Hero;
