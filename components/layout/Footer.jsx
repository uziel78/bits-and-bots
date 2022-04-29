import styles from "./Footer.module.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";

import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

library.add(
  faDiscord,
  faTwitch,
  faYoutube,
  faTwitter,
  faEnvelope,
  faPhone
  // more icons go here
);

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.border__box}></div>
      <div className={styles.border__box}></div>
      <div className={styles.slogan}>
        <h1>The latest games, Fast &#38; Easy!</h1>
      </div>
      <div className={styles.footer__flexbox}>
        <div className={styles.container}>
          <address className={styles.address}>
            <p>Bits &#38; Bots</p>
            <p>Strandgaten 195</p>
            <p>5004, Bergen</p>
            <p>Norway</p>
            <p>
              <span>
                <FontAwesomeIcon icon={faEnvelope} />
              </span>{" "}
              Bits&Bots@one.com
            </p>
            <p>
              <span>
                <FontAwesomeIcon icon={faPhone} />
              </span>{" "}
              555-996699
            </p>
          </address>
        </div>
        <div className={styles.social}>
          <a href="https://discord.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faDiscord} />
          </a>
          <a href="https://twitch.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faTwitch} />
          </a>
          <a href="https://www.youtube.com/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faYoutube} />
          </a>
          <a href="https://twitter.com/" target="_blank" rel="noreferrer">
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
