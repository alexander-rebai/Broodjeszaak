import styles from "../../styles/Order.module.css";
import Image from "next/image";
import axios from "axios"

const Order = ({ order }) => {
  console.log(order.products)
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.row}>
          <table className={styles.table}>
            <thead>
              <tr className={styles.trTitle}>
                <th>Bestellings ID</th>
                <th>Klant</th>
                <th>Adres</th>
                <th>Totaal</th>
                <th>Bestelling</th>
              </tr>
            </thead>
            <tbody>
              <tr className={styles.tr}>
                <td>
                  <span className={styles.total}>{order._id}</span>
                </td>
                <td>
                  <span className={styles.total}>{order.customer}</span>
                </td>
                <td>
                  <span className={styles.total}>{order.address}</span>
                </td>
                <td>
                  <span className={styles.total}>€{(order.total).toFixed(2)}</span>
                </td>
                <td>
                  <div className={styles.total}>
                    {order.products.map((p, i) => {
                      return <span key={i} className={styles.total}>{p} </span>
                    })}
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Winkelmandje</h2>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Totaal:</b>€{(order.total).toFixed(2)}
          </div>
          <button disabled className={styles.button}>
            {order.paymentMethod === 0 ? "Betalen met Cash bij levering." : "Reeds betaald."}
          </button>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`http://localhost:3000/api/orders/${params.id}`);
  return {
    props: {
      order: res.data
    }
  }
}

export default Order;
