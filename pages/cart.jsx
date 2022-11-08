import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetails from "../components/OrderDetails";
import CartItem from "../components/CartItem";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(true);
  const [cash, setCash] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();

  const saladItems = cart.saladItems?.map((item) => item);

  const items = cart.products.map((p, i) => {
    if (p.title === "Salad") {
      return p.title
    }
    return cart.quantities[i] + "x" + cart.types[i] + ": " + p.title + `${p.broodjesType ? " -> " + p.broodjesType : ""}`;
  })

  const handleAfronden = () => {
    const today = new Date();
    if (today.getHours() > 10 || today.getDate() === 7 || today.getDate() === 1) {
      alert("Online bestellen kan van dinsdag tot zaterdag, tot 10u")
    }
    else if (today.getHours() === 10) {
      if (today.getMinutes() > 0) {
        alert("Online bestellen kan van dinsdag tot zaterdag, tot 10u")
      }
    }
    else {
      setOpen(true);
    }
  }

  const createOrder = async (data) => {
    try {
      console.log(data)
      const res = await axios.post("https://www.broodjesvelje.be/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <table className={styles.table}>
          <tbody>
            <tr className={styles.trTitle}>
              <th>Product Naam</th>
              <th>Prijs</th>
              <th>Hoeveelheid</th>
              <th>Totaal</th>
            </tr>
          </tbody>
          <tbody>
            {cart.products.map((product, i) => {
              return (
                <CartItem key={i} product={product}/>
              )
            })}
          </tbody>
        </table>
      </div>
      <div className={styles.right}>
        <div className={styles.wrapper}>
          <h2 className={styles.title}>Winkelmandje {(cart.total).toFixed(2)}</h2>
          <p></p>
          <div className={styles.totalText}>
            <b className={styles.totalTextTitle}>Totaal:</b>€{(cart.total).toFixed(2)}
          </div>
          {open ? (
            <div className={styles.paymentMethods}>
              <button
                className={styles.payButton}
                onClick={() => {
                  if (cart.total > 0) {
                    setCash(true)
                  }
                }}
              >
                CASH/ELEKTRONISCH BIJ AFHALING
              </button>
            </div>
          ) : (
            <button onClick={() => handleAfronden()} className={styles.button}>
              BESTELLING AFRONDEN!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetails total={cart.total} createOrder={createOrder} products={items} saladItems={saladItems} />}
    </div>
  );
};

export default Cart;