import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetails from "../components/OrderDetails";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(false);
  const [cash, setCash] = useState(false);
  const [amount, setAmount] = useState(cart.total);
  const dispatch = useDispatch();
  const router = useRouter();

  const saladItems = cart.saladItems?.map((item) => item);

  const items = cart.products.map((p, i) => {
    if (p.title === "Salad") {
      return p.title
    }
    return cart.quantities[i] + "x" + cart.types[i] + ": "+ p.title;
  })

  const handleAfronden = () => {
    const today = new Date();
    const time = today.getHours() + today.getMinutes();
    if (parseInt(time) < 1300) {
      setOpen(true);
    } else {
      alert("U kunt alleen Bestellen tot 13:00");
    }
  }

  const createOrder = async (data) => {
    try {
      const res = await axios.post("https://www.broodjesvelje.be//api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // // Custom component to wrap the PayPalButtons and handle currency changes
  // const ButtonWrapper = ({ currency, showSpinner }) => {
  //   // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
  //   // This is the main reason to wrap the PayPalButtons in a new component
  //   const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

  //   useEffect(() => {
  //     dispatch({
  //       type: "resetOptions",
  //       value: {
  //         ...options,
  //         currency: currency,
  //       },
  //     });
  //   }, [currency, showSpinner]);

  //   return (
  //     <>
  //       {showSpinner && isPending && <div className="spinner" />}
  //       <PayPalButtons
  //         style={style}
  //         disabled={false}
  //         forceReRender={[amount, currency, style]}
  //         fundingSource={undefined}
  //         createOrder={(data, actions) => {
  //           return actions.order
  //             .create({
  //               purchase_units: [
  //                 {
  //                   amount: {
  //                     currency_code: currency,
  //                     value: amount,
  //                   },
  //                 },
  //               ],
  //             })
  //             .then((orderId) => {
  //               // Your code here after create the order
  //               return orderId;
  //             });
  //         }}
  //         onApprove={function (data, actions) {
  //           return actions.order.capture().then(function (details) {
  //             const shipping = details.purchase_units[0].shipping;
  //             createOrder({
  //               customer: shipping.name.full_name,
  //               address: shipping.address.address_line_1,
  //               total: amount,
  //               products: items,
  //               saladItems: saladItems,
  //               paymentMethod: 1,
  //               afgewerkt: false,
  //             });
  //           });
  //         }}
  //       />
  //     </>
  //   );
  // };

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
            {cart.products.map((product) => {
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
                      €{(product.price*product.quantity).toFixed(2)}
                    </span>
                  </td>
                </tr>
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
            <b className={styles.totalTextTitle}>Totaal:</b>€{(amount).toFixed(2)}
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
              {/* <PayPalScriptProvider
                options={{
                  "client-id":
                    "AQ44ett-KCh2K0U0SHkxy0tdJitVJ-CK0PDXNhTRtvxC3FQnZjBTHNaW9zrPCD-oC8jU_1-vLO4YJDO2",
                  components: "buttons",
                  currency: "EUR",
                  "disable-funding": "credit,card,p24,sofort,bancontact"
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider> */}
            </div>
          ) : (
            <button onClick={() => handleAfronden()} className={styles.button}>
              BESTELLING AFRONDEN!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetails total={amount} createOrder={createOrder} products={items} saladItems={saladItems}/>}
    </div>
  );
};

export default Cart;