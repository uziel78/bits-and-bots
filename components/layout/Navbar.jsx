import Link from "next/link";
import { useContext, useState } from "react";
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
    <>
      <header className={styles.navbar}>
        <Logo />

        <nav className={styles.navbar__navigation}>
          {auth ? (
            <ul>
              <li className={styles.navigation__link}>
                <Link href="/">
                  <a onClick={HandleLogout}>Logout</a>
                </Link>
              </li>
            </ul>
          ) : null}
        </nav>
      </header>
    </>
  );
}

export default Navbar;
