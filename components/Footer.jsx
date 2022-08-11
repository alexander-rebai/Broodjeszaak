import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <div className={styles.card}>
          <h1 className={styles.title}>ONZE LOCATIE</h1>
          <p className={styles.text}>
            Gentsesteenweg 334
            <br /> 9420 Erondegem
            <br /> 053 / 41 88 51
            <br /> 0495 / 43 44 58
            <br /> Bestellingen.velje@outlouk.be
            <br /> Btw nr 0867121602
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPENINGSUREN</h1>
          <p className={styles.text}>
            DINSDAG TOT VRIJDAG
            <br /> 08:00 – 14:30
          </p>
          <p className={styles.text}>
            ZATERDAG
            <br /> 9:00 – 14:00
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>LEVERING - VOOR BEDRIJVEN ENKEL</h1>
          <p className={styles.text}>
            TELEFONISCH BESTELLEN VOOR LEVERINGEN!
          </p>
          <p className={styles.text}>
            GRATIS LEVERING VANAF €15
          </p>
          <p className={styles.text}>
            VOOR 10U BESTELD = VOOR 12U GELEVERD
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>WEBSITE</h1>
          <p className={styles.text}>
            Gemaakt door Alexander Rebai
            <br />
            rebaialexander@hotmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
