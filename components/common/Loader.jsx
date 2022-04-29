import styles from "./loader.module.scss";

const Loader = () => {
  return (
    <div className={styles.carousel__container}>
      <div className={styles.animation}></div>
    </div>
  );
};

export default Loader;
