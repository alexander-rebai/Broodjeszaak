import React from 'react'
import styles from '../styles/Cart.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { removeProduct } from "../redux/cartSlice";

const CartItem = ({ product }) => {

    const dispatch = useDispatch();
    const router = useRouter();
    let extraKostBroodje;

    const removeItem = () => {
        dispatch(removeProduct(product));
        router.push(`/cart`);
    }

    const calculatePrice = () => {
        let extraPrijs = 0;
        if (product.type === "broodje"){
            if (product.broodjesType === "bruin (+€0.50)"){
                extraKostBroodje = 0.50;
            }else if (product.broodjesType === "ciabatta (+€0.60)"){
                extraKostBroodje = 0.60
            }else {
                extraKostBroodje = 0;
            }
            extraPrijs = (product.quantity * extraKostBroodje);
        }
        return (product.price * product.quantity) + extraPrijs;
    }

    return (
        <tr className={styles.tr} key={13 * Math.random()}>
            <td>
                <span className={styles.name}>{product.title}</span>
            </td>
            <td>
                <span className={styles.price}>€{product.price} {product.broodjesType ? " | " + product.broodjesType : ""}</span>
            </td>
            <td>
                <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
                <span className={styles.total}>
                    €{(calculatePrice()).toFixed(2)}
                </span>
            </td>
            <td>
                <button className={styles.removeButton} onClick={removeItem}><FaTrashAlt /></button>
            </td>
        </tr>
    )
}

export default CartItem