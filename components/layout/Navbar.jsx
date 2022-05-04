import Link from "next/link";
import { useContext } from "react";
import { useRouter } from "next/router";
import AuthContext from "../context/AuthContext";
import Logo from "./logo";
import styles from "./Navbar.module.scss";

function Navbar() {
  const [auth, setAuth] = useContext(AuthContext);
  const router = useRouter();

  //function to handle logout link in navbar (only visible if logged in)
  function HandleLogout() {
    setAuth(null);
    router.push("/");
  }

  // render logo on navbar plus conditional logout button
  return (
    <header className={styles.navbar} aria-label="navbar">
      <Logo aria-label="logo" />

      <nav className={styles.navbar__navigation} aria-label="logout button">
        <ul>
          {auth ? (
            <li className={styles.navigation__link}>
              <Link href="/">
                <a onClick={HandleLogout}>Logout</a>
              </Link>
            </li>
          ) : null}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
