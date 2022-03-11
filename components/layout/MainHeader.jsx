import Link from "next/link";
import classes from "./MainHeader.module.scss";

function MainHeader() {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">Bits&Bots</Link>
      </div>
      <nav className={classes.navigation}>
        <ul>
          <li>
            <Link href="/?">xxx</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainHeader;
