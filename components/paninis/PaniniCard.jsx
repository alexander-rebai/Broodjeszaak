import Image from "next/image";
import styles from "../../styles/PizzaCard.module.css";
import Link from "next/link";

const PaniniCard = ({ panini }) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{panini.title}</h1>
            <span className={styles.price}>${panini.price}</span>
            <p className={styles.desc}>
                {panini.ingredients?.map((ing, i) => (
                    <span key={i}>{ing}-</span>
                ))}
            </p>
        </div >
    );
};

export default PaniniCard;
