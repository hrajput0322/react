import styles from "./WelcomeMessage.module.css";
import { Items } from "../store/ItemsStore";
import { useContext } from "react";

const WelcomeMessage = () => {
    const items = useContext(Items);
    return (
        items.length == 0 && <p className={styles.welcome}>Enjoy Your Day</p>
    );
}

export default WelcomeMessage;