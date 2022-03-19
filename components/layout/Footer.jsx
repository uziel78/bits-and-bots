import styles from "./Footer.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

library.add(
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter
  // more icons go here
);

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border__box}></div>
      <div className={styles.footer__flexbox}>
        <div className={styles.container}>
          <address className={styles.address}>
            <p>Bits & Bots</p>
            <p>Strandgaten 195</p>
            <p>5004, Bergen</p>
            <p>Norway</p>
            <p>email: Bits&Bots@one.com</p>
            <p>Phone: 555-996699</p>
          </address>
        </div>
        <div className={styles.social}>
          <a href="https://discord.com/" target="_blank">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://twitch.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://www.youtube.com/" target="_blank">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://twitter.com/" target="_blank">
            <FontAwesomeIcon icon={faTwitter} />
          </a>
        </div>
      </div>
      <div className={styles.legal}>
        <p>Copyright &copy; Bits &#38; Bots 2022</p>
      </div>
    </footer>
  );
}

export default Footer;
