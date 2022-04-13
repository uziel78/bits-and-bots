//import Button from "../common/Button";
import UserModals from "./UserModals";
import styles from "./Hero.module.scss";

function Hero() {
  return (
    <section className={styles.hero}>
      <video autoPlay loop muted className={styles.hero__video}>
        <source
          src="/pexels-ehab-el-gapry-6238188.mp4"
          type="video/mp4"
          alt="background video showing green light horizontally scrolling by"
        />
      </video>

      <div className={styles.btn__container}>
        <div>
          <Button link="/login">Login</Button>
        </div>
        <div>
          <Button link="/register">Register</Button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
