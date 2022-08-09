import styles from "../../styles/PizzaCard.module.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const PaniniCard = ({ panini }) => {

    const [quantity, setQuantity] = useState(1);
    const type = "panini";
    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(addProduct({ ...panini, quantity, type }));
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{panini.title}</h1>
            <span className={styles.price}>€{(panini.price).toFixed(2)}</span>
            <p className={styles.desc}>
                {panini.ingredients?.map((ing, i) => {
                    if (i === panini.ingredients.length - 1) {
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
        </div >
    );
};

export default PaniniCard;
