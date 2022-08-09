import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";
import Link from "next/link";

const ZoetigheidCard = ({ zoetje }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{zoetje.title}</h1>
            <span className={styles.price}>${zoetje.price}</span>
        </div >
    );
};

export default ZoetigheidCard;
