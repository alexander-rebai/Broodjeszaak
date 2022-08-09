import React from 'react'
import styles from '../styles/Popup.module.css'

const Popup = (props) => {
    return (props.trigger) ? (
        <div className={styles.popup}>
            <div className={styles.innerPopup}>
                <p>Klant: {props.order.customer}</p>
                <p>Order id: {props.order._id}</p>
                <p>Adres: {props.order.address}</p>
                <p>TelefoonNr: {props.order.phone}</p>
                <p>Prijs: €{(props.order.total).toFixed(2)}</p>
                <p>Aantal producten: {props.order.products.length}</p>
                <p>{props.order.products.filter((p) => p !== "Salad").map((p, i) => {
                    return (
                        <>
                            <h3 key={i}>-{p}</h3>
                            <br />
                        </>
                    )
                })}</p>
                {props.order.products.includes("Salad") &&
                    (
                        <div>{
                            props.order.products.filter((p) => p === "Salad").map((p, i) => {
                                return (
                                    <>
                                        <h3>Salade:</h3>
                                        <h3>{props.order.saladItems[i].map((i, ind) => {
                                            if (ind === props.order.saladItems.length - 1) {
                                                return <span key={ind}>{i}</span>
                                            } else {
                                                return <span key={ind}>{i} - </span>
                                            }
                                        })}</h3>
                                    </>
                                )
                            })
                        }</div>
                    )
                }
                <button className={styles.button} onClick={() => props.setTrigger(false)}>close</button>
            </div>
        </div>
    ) : "";
}

export default Popup