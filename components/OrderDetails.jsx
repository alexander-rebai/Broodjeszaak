import React, { useState, useEffect } from "react";
import styles from "../styles/OrderDetail.module.css";

const OrderDetails = ({ total, createOrder, products, saladItems }) => {
  const [customer, setCustomer] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [data, setData] = useState([]);

  const createDates = () => {
    let dates = [];
    for (let index = 0; index < 7; index++) {
      const today = new Date();
      const date = new Date(today);
      if (date.getHours() > 9) {
        date.setDate(date.getDate() + 1);
      }
      date.setDate(date.getDate() + index);
      let dag;
      let dateString;
      switch (date.getDay()) {
        case 1:
          break;
        case 2:
          dag = "Dinsdag";
          dateString =
            dag +
            " " +
            date.getDate() +
            "/" +
            (date.getMonth()+1) +
            "/" +
            date.getFullYear();
          dates.push(dateString);
          break;
        case 3:
          dag = "Woensdag";
          dateString =
            dag +
            " " +
            date.getDate() +
            "/" +
            (date.getMonth()+1) +
            "/" +
            date.getFullYear();
          dates.push(dateString);
          break;
        case 4:
          dag = "Donderdag";
          dateString =
            dag +
            " " +
            date.getDate() +
            "/" +
            (date.getMonth()+1) +
            "/" +
            date.getFullYear();
          dates.push(dateString);
          break;
        case 5:
          dag = "Vrijdag";
          dateString =
            dag +
            " " +
            date.getDate() +
            "/" +
            (date.getMonth()+1) +
            "/" +
            date.getFullYear();
          dates.push(dateString);
          break;
        case 6:
          dag = "Zaterdag";
          dateString =
            dag +
            " " +
            date.getDate() +
            "/" +
            (date.getMonth()+1) +
            "/" +
            date.getFullYear();
          dates.push(dateString);
          break;
        case 0:
          break;
      }
    }
    setData(dates);
  };

  useEffect(() => {
    createDates();
  }, []);

  const handleClick = () => {
    const ophaalDatum = document.getElementById("dates").value;
    createOrder({
      customer,
      phone,
      total,
      paymentMethod: 0,
      products,
      saladItems,
      comment,
      ophaalDatum,
    });
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.title}>
          Het te betalen bedrag bedraagt €{total.toFixed(2)} bij AFHALING.
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Naam</label>
          <input
            placeholder="Peter de Vries"
            type="text"
            className={styles.input}
            onChange={(e) => setCustomer(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Telefoonnummer</label>
          <input
            placeholder="+32 123 345 678"
            type="text"
            className={styles.input}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Datum van ophalen</label>
          <select id="dates" className={styles.input}>
            {data.map((date, i) => (
              <option key={i} value={date}>{date}</option>
            ))}
          </select>
        </div>
        <div className={styles.item}>
          <label className={styles.label}>Opmerking</label>
          <input
            placeholder="Gewenste saus, ophaaluur, etc."
            type="textarea"
            className={styles.input}
            onChange={(e) => setComment(e.target.value)}
          />
        </div>
        <button className={styles.button} onClick={handleClick}>
          BESTEL NU!
        </button>
      </div>
    </div>
  );
};

export default OrderDetails;
