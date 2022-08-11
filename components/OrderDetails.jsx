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
                <div className={styles.title}>Het te betalen bedrag bedraagt €{(total).toFixed(2)} na levering.</div>
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
                    <label className={styles.label}>ADRES</label>
                    <input
                        placeholder="Straatnaam nr, Gemeente"
                        type="textarea"
                        className={styles.input}
                        onChange={(e) => setAddsress(e.target.value)} />
                </div>
                <button className={styles.button} onClick={handleClick}>
                    BESTEL NU!
                </button>
            </div>
        </div>
    )
}

export default OrderDetails