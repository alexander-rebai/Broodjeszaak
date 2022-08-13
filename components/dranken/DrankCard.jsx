import styles from "../../styles/PizzaCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const DrankCard = ({ drank }) => {

    const [quantity, setQuantity] = useState(1);
    const type = "drank";
    const dispatch = useDispatch();

    const handleClick = () => {
        if (quantity > 0) {
            dispatch(addProduct({ ...drank, quantity, type }));
        }
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{drank.title}</h1>
            <span className={styles.price}>€{(drank.price).toFixed(2)}</span>
            <p className={styles.desc}>
                {drank.ingredients?.map((ing, i) => {
                    if (i === drank.ingredients.length - 1) {
                        return <span key={i}>{ing}</span>
                    } else {
                        return <span key={i}>{ing}-</span>
                    }
                })}
            </p>
            <div className={styles.buttons}>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={handleClick}>Toevoegen</button>
            </div>
        </div>
    );
};

export default DrankCard;
