import styles from "../../styles/PizzaCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const BroodjeCard = ({ broodje }) => {

    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({...broodje, quantity}));
      }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{broodje.title}</h1>
            <span className={styles.price}>${broodje.price}</span>
            <p className={styles.desc}>
                {broodje.ingredients?.map((ing, i) => (
                    <span key={i}>{ing}-</span>
                ))}
            </p>
            <div className={styles.buttons}>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={handleClick}>Toevoegen</button>
            </div>
        </div>
    );
};

export default BroodjeCard;
