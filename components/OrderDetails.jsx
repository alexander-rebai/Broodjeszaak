import React, { useState } from 'react';
import styles from "../styles/OrderDetail.module.css"

const OrderDetails = ({ total, createOrder, products, saladItems }) => {

    const [customer, setCustomer] = useState("");
    const [phone, setPhone] = useState("");
    const [comment, setComment] = useState("");

    const handleClick = () => {
        createOrder({ customer, phone, total, paymentMethod: 0, products, saladItems, comment });
    }

    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={styles.title}>Het te betalen bedrag bedraagt €{(total).toFixed(2)} bij AFHALING.</div>
                <div className={styles.item}>
                    <label className={styles.label}>Naam</label>
                    <input
                        placeholder="Peter de Vries"
                        type="text"
                        className={styles.input}
                        onChange={(e) => setCustomer(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Telefoonnummer</label>
                    <input
                        placeholder="+32 123 345 678"
                        type="text"
                        className={styles.input}
                        onChange={(e) => setPhone(e.target.value)} />
                </div>
                <div className={styles.item}>
                    <label className={styles.label}>Opmerking</label>
                    <input
                        placeholder="Gewenste saus, ophaaluur, etc."
                        type="textarea"
                        className={styles.input}
                        onChange={(e) => setComment(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    BESTEL NU!
                </button>
            </div>
        </div>
    )
}

export default OrderDetails
