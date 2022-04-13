import Link from "next/link";
import styles from "./Button.module.scss";

function Button(props) {
  //checks if button is a link and return link if accurate
  if (props.link) {
    return (
      <div className={styles.btn__container}>
        <Link href={props.link}>
          <a className={styles.btn}>{props.children}</a>
        </Link>
      </div>
    );
  }
  //else, return a regular button
  return (
    <div className={styles.btn__container}>
      <button className={styles.btn} onClick={props.onClick}>
        {props.children}
      </button>
    </div>
  );
}

export default Button;
