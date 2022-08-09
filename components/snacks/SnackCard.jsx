import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";
import Link from "next/link";

const SnackCard = ({ snack }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{snack.title}</h1>
            <span className={styles.price}>${snack.price}</span>
        </div >
    );
};

export default SnackCard;
