import React, { useState } from "react";
import styles from "../styles/Contact.module.css"

const FORM_ENDPOINT = "https://public.herotofu.com/v1/fe429fb0-2f7d-11ed-8e75-59d5c7f4376d";

const ContactForm = () => {
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = () => {
    setTimeout(() => {
      setSubmitted(true);
    }, 100);
  };

  if (submitted) {
    return (
      <>
        <h2>Bedankt!</h2>
        <div className={styles.bedankt}>We nemen zo snel mogelijk contact met u op.</div>
      </>
    );
  }

  return (
    <form
      className={styles.form}
      action={FORM_ENDPOINT}
      onSubmit={handleSubmit}
      method="POST"
      target="_blank"
    >
      <div className={styles.formItem}>
        <input className={styles.input} type="text" placeholder="Your name" name="name" required />
      </div>
      <div className={styles.formItem}>
        <input className={styles.input} type="email" placeholder="Email" name="email" required />
      </div>
      <div className={styles.formItem}>
        <textarea className={styles.area} placeholder="Your message" name="message" required />
      </div>
      <div className={styles.formItem}>
        <button className={styles.formButton} type="submit">Verstuur</button>
      </div>
    </form>
  );
};

export default ContactForm;