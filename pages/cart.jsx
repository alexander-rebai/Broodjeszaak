import styles from "../styles/Cart.module.css";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";
import axios from "axios";
import { useRouter } from "next/router";
import { reset } from "../redux/cartSlice";
import OrderDetails from "../components/OrderDetails";

const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [open, setOpen] = useState(true);
  const [cash, setCash] = useState(false);
  const [amount, setAmount] = useState(cart.total);
  const currency = "USD";
  const style = { layout: "vertical" };
  const dispatch = useDispatch();
  const router = useRouter();

  const saladItems = cart.saladItems?.map((item) => item);

  const items = cart.products.map((p, i) => {
    if (p.title === "Salad") {
      return p.title
    }
    return cart.quantities[i] + "x" + cart.types[i] + ": "+ p.title;
  })

  useEffect(() => {
    if(cart.total < 15){
      setAmount(cart.total + 3);
    }
  } ,[cart.products, cart.total]);

  const createOrder = async (data) => {
    try {
      const res = await axios.post("http://localhost:3000/api/orders", data);
      if (res.status === 201) {
        dispatch(reset());
        router.push(`/orders/${res.data._id}`);
      }
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                total: amount,
                products: items,
                saladItems: saladItems,
                paymentMethod: 1,
                afgewerkt: false,
              });
            });
          }}
        />
      </>
    );
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
                      €{(amount).toFixed(2)}
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
          <h2 className={styles.title}>Winkelmandje {cart.total < 15 ? ("(€3 leveringskost)") : ("")}</h2>
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
                CASH BIJ LEVERING
              </button>
              <PayPalScriptProvider
                options={{
                  "client-id":
                    "AQ44ett-KCh2K0U0SHkxy0tdJitVJ-CK0PDXNhTRtvxC3FQnZjBTHNaW9zrPCD-oC8jU_1-vLO4YJDO2",
                  components: "buttons",
                  currency: "EUR",
                  "disable-funding": "credit,card,p24,sofort,bancontact"
                }}
              >
                <ButtonWrapper currency={currency} showSpinner={false} />
              </PayPalScriptProvider>
            </div>
          ) : (
            <button onClick={() => setOpen(true)} className={styles.button}>
              NU AFREKENEN!
            </button>
          )}
        </div>
      </div>
      {cash && <OrderDetails total={amount} createOrder={createOrder} products={items} saladItems={saladItems}/>}
    </div>
  );
};

export default Cart;