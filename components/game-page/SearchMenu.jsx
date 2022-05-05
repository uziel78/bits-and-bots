import styles from "./SearchMenu.module.scss";

const SearchMenu = () => {
  //import games props from games page, map through, generate list of options,
  //each with their own dynamic handleClick type of function that dynamically sorts the
  //genres when clicked
  return (
    <>
      <div className={styles.search__container}>
        <label className={styles.label} htmlFor="category">
          Game Category{" "}
        </label>
        {/* {games.map((game) => {
        <select key={game.id} className={styles.select}>
          <option className={styles.options} value={game.genre}>
            {game.genre}
          </option>
        </select>;
      })} */}
        <select className={styles.select}>
          <option className={styles.options} value="placeholder 1">
            Placeholder 1
          </option>
          <option className={styles.options} value="placeholder 2">
            Placeholder 2
          </option>
          <option className={styles.options} value="placeholder 3">
            Placeholder 3
          </option>
          <option className={styles.options} value="placeholder 4">
            Placeholder 4
          </option>
          <option className={styles.options} value="placeholder 5">
            Placeholder 5
          </option>
        </select>
      </div>
    </>
  );
};

export default SearchMenu;
