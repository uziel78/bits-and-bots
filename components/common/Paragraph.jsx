import styles from "./Paragraph.module.scss";
import PropTypes from "prop-types";

const Paragraph = ({ content }) => {
  return (
    <div className={styles.description}>
      <p>{content}</p>
    </div>
  );
};

export default Paragraph;

// Paragraph.propTypes = {
//   children: PropTypes.string.isRequired,
// };
