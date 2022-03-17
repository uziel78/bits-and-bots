import Link from "next/link";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">Bits & Bots</Link>
      </div>

      <nav className={styles.navbar__navigation}>
        <ul>
          <li className={styles.navigation__link}>
            <Link href="/games">Games</Link>
          </li>
          <li className={styles.navigation__link}>
            <Link href="/">Logout</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
