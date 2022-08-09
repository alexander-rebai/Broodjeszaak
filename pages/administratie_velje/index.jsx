import styles from "../../styles/Admin.module.css"
import axios from "axios"
import { useState } from "react";
import Link from "next/link";
import Popup from "../../components/Popup";

const index = ({ orders, products }) => {
    const [orderList, setOrderList] = useState(orders);
    const [popup, setPopup] = useState(false);
    const [currentOrder, setCurrentOrder] = useState({});

    const handleAfgewerkt = async (id) => {
        const res = await axios.put(`http://localhost:3000/api/orders/${id}`, {
            afgewerkt: true,
        });
        if (res.status === 200) {
            setOrderList(orderList?.map((order) => {
                if (order._id === id) {
                    return {
                        ...order,
                        afgewerkt: true,
                    };
                }
                return order;
            }));
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.item} id="borderclass">
                <h1 className={styles.title}> Bestellingen</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>ID</th>
                            <th>Klant</th>
                            <th>Adres</th>
                            <th>Telefoon</th>
                            <th>Totaal</th>
                            <th>Betaling</th>
                            <th>Acties</th>
                        </tr>
                    </tbody>
                    {orderList?.map((order) => (
                        <tbody key={order._id}>
                            {order.afgewerkt === false && order.createdAt.slice(0, 10) === new Date().toISOString().slice(0, 10) && (
                                <tr className={styles.trTitle}>
                                    <td>{order._id.slice(0, 5)}...</td>
                                    <td>{order.customer}</td>
                                    <td>{order.address}</td>
                                    <td>{order.phone}</td>
                                    <td>€{(order.total).toFixed(2)}</td>
                                    <td>
                                        {order.paymentMethod === 0 ? <span>cash</span> : <span>paid</span>}
                                    </td>
                                    <td>
                                        <button className={styles.button} onClick={() => { 
                                            setPopup(true);
                                            setCurrentOrder(order);
                                        }}>Bekijk</button>
                                        <button className={styles.button} onClick={() => handleAfgewerkt(order._id)}>Afgewerkt</button>
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    ))}
                </table>
            </div>
            <Popup trigger={popup} setTrigger={setPopup} order={currentOrder}>
                <h3>test</h3>
            </Popup>
            <div className={styles.item}>
                <h1 className={styles.title}>Afwerkte Bestellingen van Vandaag</h1>
                <table className={styles.table}>
                    <tbody>
                        <tr className={styles.trTitle}>
                            <th>Bestelling ID</th>
                            <th>Klant</th>
                            <th>Betaling</th>
                            <th>Acties</th>
                        </tr>
                    </tbody>
                    {orderList?.map((order) => (
                        <tbody key={order._id}>
                            {order.afgewerkt === true && order.createdAt.slice(0, 10) === new Date().toISOString().slice(0, 10) && (
                                <tr className={styles.trTitle}>
                                    <td>{order._id}</td>
                                    <td>{order.customer}</td>
                                    <td>
                                        {order.paymentMethod === 0 ? <span>cash</span> : <span>paid</span>}
                                    </td>
                                    <button className={styles.button} onClick={() => { 
                                            setPopup(true);
                                            setCurrentOrder(order);
                                        }}>Bekijk</button>  
                                </tr>
                            )}
                        </tbody>
                    ))}
                </table>
            </div>
        </div>
    )
}

export const getServerSideProps = async () => {
    const orderRes = await axios.get("http://localhost:3000/api/orders");

    return {
        props: {
            orders: orderRes.data,
        },
    };
};

export default index