import styles from "./Backdrop.module.scss";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClickOutside} />;
}

export default Backdrop;
