import styles from "./Display.module.css"
import PropTypes from "prop-types"

const Display = ( {value} ) => {
    return (
        <input type="text" className={styles.display} value={value} readOnly></input>
    );
}

Display.propTypes = {
    value: PropTypes.string.isRequired,
  };

export default Display;