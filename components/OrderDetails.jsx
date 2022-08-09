import React, { useState } from 'react';
import styles from "../styles/OrderDetail.module.css"

const OrderDetails = ({ total, createOrder, products, saladItems }) => {

    const [customer, setCustomer] = useState("");
    const [address, setAddsress] = useState("");
    const [phone, setPhone] = useState("");

    const handleClick = () => {
        createOrder({ customer, address, phone, total, paymentMethod: 0, products, saladItems });
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>You have to pay ${(total).toFixed(2)} after delivery.</div>
                <div className={styles.item}>
                    <label className={styles.label}>Name Surname</label>
                    <input
                        placeholder="Jason Derulo"
                        type="text"
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Phone Number</label>
                    <input
                        placeholder="+32 123 345 678"
                        type="text"
                        className={styles.input}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Address</label>
                    <input
                        placeholder="Provincieweg 100, 9552 Borsbeke"
                        type="textarea"
                        className={styles.input}
                        onChange={(e) => setAddsress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    Order Now!
                </button>
            </div>
        </div>
    )
}

export default OrderDetails