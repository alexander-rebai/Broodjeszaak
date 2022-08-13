import styles from "../../styles/PizzaCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const ZoetigheidCard = ({ zoetje }) => {

    const [quantity, setQuantity] = useState(1);
    const type = "zoetigheid";
    const dispatch = useDispatch();

    const handleClick = () => {
        if (quantity > 0) {
            dispatch(addProduct({ ...zoetje, quantity, type }));
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{zoetje.title}</h1>
            <span className={styles.price}>€{(zoetje.price).toFixed(2)}</span>
            <p className={styles.desc}></p>
            <div className={styles.buttons}>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={handleClick}>Toevoegen</button>
            </div>
        </div >

    );
};

export default ZoetigheidCard;
