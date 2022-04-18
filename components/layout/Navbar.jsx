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
  function handleLogout() {
    setAuth(null);
    router.push("/");
  }

  return (
    <>
      <header className={styles.navbar}>
        <Logo />

        <nav className={styles.navbar__navigation}>
          {!setAuth && (
            <ul>
              <li className={styles.navigation__link}>
                <Link>
                  <a onClick={handleLogout}>Logout</a>
                </Link>
              </li>
            </ul>
          )}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
