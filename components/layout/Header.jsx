import PropTypes from "prop-types";
import styles from "./Header.module.scss";

const Header = ({ content }) => {
  return (
    <div>
      <h1 className={styles.title}>{content}</h1>
    </div>
  );
};

Header.propTypes = {
  content: PropTypes.string.isRequired,
};

export default Header;
