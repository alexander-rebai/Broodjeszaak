import React from 'react'
import styles from '../styles/Cart.module.css'
import { FaTrashAlt } from 'react-icons/fa'
import { useDispatch } from "react-redux";
import { useRouter } from "next/router";
import { removeProduct } from "../redux/cartSlice";

const CartItem = ({ product }) => {

    const dispatch = useDispatch();
    const router = useRouter();

    const removeItem = () => {
        dispatch(removeProduct(product));
        router.push(`/cart`);
    }

    return (
        <tr className={styles.tr} key={13 * Math.random()}>
            <td>
                <span className={styles.name}>{product.title}</span>
            </td>
            <td>
                <span className={styles.price}>€{product.price}</span>
            </td>
            <td>
                <span className={styles.quantity}>{product.quantity}</span>
            </td>
            <td>
                <span className={styles.total}>
                    €{(product.price * product.quantity).toFixed(2)}
                </span>
            </td>
            <td>
                <button className={styles.removeButton} onClick={removeItem}><FaTrashAlt /></button>
            </td>
        </tr>
    )
}

export default CartItem