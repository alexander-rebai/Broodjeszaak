import styles from "../../styles/PizzaCard.module.css";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/cartSlice";

const BroodjeCard = ({ broodje }) => {

    const [quantity, setQuantity] = useState(1);
    const [broodjesType, setBroodjesType] = useState("wit");
    const type = "broodje";
    const dispatch = useDispatch();

    const broodjesTypes = ["bruin (+€0.50)", "ciabatta (+€0.60)"]

    const handleClick = () => {
        if (quantity > 0) {
            dispatch(addProduct({ ...broodje, quantity, type, broodjesType }));
        }
    }

    const handleChange = (e, item) => {
        const checked = e.target.checked;
        setBroodjesType(item);
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>{broodje.title}</h1>
            <span className={styles.price}>€{(broodje.price).toFixed(2)}</span>
            <p className={styles.desc}>
                {broodje.ingredients?.map((ing, i) => {
                    if (i === broodje.ingredients.length - 1) {
                        return <span key={i}>{ing}</span>
                    } else {
                        return <span key={i}>{ing}-</span>
                    }
                })}
            </p>    
            <div>
                {broodjesTypes.map((item, i) => (
                    <div className={styles.option} key={item}>
                    <input
                        type="radio"
                        id={item}
                        name={broodje.title}
                        className={styles.checkbox}
                        onChange={(e) => handleChange(e, item)}
                    />
                    <label htmlFor="double">{item}</label>
                </div>
                ))}
            </div>
            <div className={styles.buttons}>
                <input onChange={(e) => setQuantity(e.target.value)} type="number" defaultValue={1} className={styles.quantity} />
                <button className={styles.button} onClick={handleClick}>Toevoegen</button>
            </div>
        </div>
    );
};

export default BroodjeCard;
