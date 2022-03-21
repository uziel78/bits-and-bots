import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";

function Navbar() {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image
              src="/bits&bots_light.png"
              width={160}
              height={60}
              alt="image showing the bits & bots loge"
            />
          </a>
        </Link>
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
