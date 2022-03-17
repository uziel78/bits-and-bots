import styles from "./Footer.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faAmbulance,
  faAnchor,
} from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__flexbox}>
        <address className={styles.address}>
          <p>Bits & Bots AS,</p>
          <p>Strandgaten 195,</p>
          <p>5004, Bergen</p>
        </address>
        <div className={styles.social}>
          <FontAwesomeIcon
            icon={faSearch}
            style={{ fontSize: 20, color: "blue" }}
          />

          <FontAwesomeIcon
            icon={faAmbulance}
            style={{ fontSize: 20, color: "orange" }}
          />

          <FontAwesomeIcon
            icon={faAnchor}
            style={{ fontSize: 20, color: "green" }}
          />
        </div>
      </div>
      <div>Copyright</div>
    </footer>
  );
}

export default Footer;
