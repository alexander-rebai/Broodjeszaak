import React from 'react'
import styles from '../styles/Popup.module.css'

const Popup = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.innerPopup}>
                <button className={styles.button} onClick={() => props.setTrigger(false)}>close</button>
                <p>Klant: {props.order.customer}</p>
                <p>Order id: {props.order._id}</p>
                <p>Adres: {props.order.address}</p>
                <p>TelefoonNr: {props.order.phone}</p>
                <p>Prijs: ${(props.order.total).toFixed(2)}</p>
                <p>Aantal producten: {props.order.products.length}</p>
                <p>{props.order.products.filter((p) => p !== "Salad").map((p) => {
                    return (
                        <>
                            <h3>-{p}</h3>
                            <br />
                        </>
                    )
                })}</p>
                {props.order.products.includes("Salad") &&
                    (
                        <>
                            <h3>Salade:</h3>
                            <p>{
                                props.order.products.filter((p) => p === "Salad").map((p) => {
                                    return (
                                        <>
                                            <h3>{props.order.saladItems.map((i) => i + ", ")}</h3>
                                        </>
                                    )
                                })
                            }</p>
                        </>
                    )
                }
            </div>
        </div>
    ) : "";
}

export default Popup