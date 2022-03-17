import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__flexbox}>
        <address className={styles.address}>
          <p>Bits & Bots AS,</p>
          <p>Strandgaten 195,</p>
          <p>5004, Bergen</p>
        </address>
        <div className={styles.social}>social</div>
      </div>
      <div>Copyright</div>
    </footer>
  );
}

export default Footer;
