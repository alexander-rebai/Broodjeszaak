import React from "react";
import axios from "axios";
import BroodjesList from "../components/broodjes/BroodjesList";
import PaniniList from "../components/paninis/PaniniList";
import SnackList from "../components/snacks/SnackList";
import ZoetigheidList from "../components/zoetigheden/ZoetigheidList";
import DrankList from "../components/dranken/DrankList";
import styles from "../styles/Menu.module.css";
import Saladbar from "../components/Saladbar";
import Image from "next/image";
import Link from "next/link";

const menu = ({
  broodjesList,
  zoetigheidList,
  snackList,
  paniniList,
  drankenList,
}) => {
  const paninis = "Panini's";

  return (
    <div className={styles.container}>
      <div className={styles.type}>
        <div className={styles.callButton}>
          <Image src="/img/telephone.png" alt="" width="32" height="32" />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>BESTEL TELEFONISCH!</div>
          <div className={styles.text}>053 / 41 88 51</div>
          <div className={styles.text}>0495 / 43 44 58</div>
        </div>
      </div>
      <br />
      <br />
      <div className={styles.btns}>
        <a href="menu pdf.pdf" download="Velje Menu.pdf">
          <button className={styles.button}>DOWNLOAD MENU</button>
        </a>
        <Link href="/about">
          <button className={styles.button}>CONTACTEER ONS</button>
        </Link>
      </div>
      <h1 className={styles.type}>Broodjes</h1>
      <BroodjesList broodjesList={broodjesList} />
      <h1 className={styles.type}>{paninis}</h1>
      <PaniniList paniniList={paniniList} />
      <h1 className={styles.type}>Snacks</h1>
      <SnackList snackList={snackList} />
      <h1 className={styles.type}>Zoetigheden</h1>
      <ZoetigheidList zoetigheidList={zoetigheidList} />
      <h1 className={styles.type}>Dranken</h1>
      <DrankList drankenList={drankenList} />
      <h1 className={styles.type}>
        Salade Bar - Zelf gemaakt Slaatje vanaf €9
      </h1>
      <Saladbar />
    </div>
  );
};

export const getServerSideProps = async () => {
  const res1 = await axios.get("http://localhost:3000/api/broodjes");
  const res2 = await axios.get("http://localhost:3000/api/zoetigheden");
  const res3 = await axios.get("http://localhost:3000/api/snacks");
  const res4 = await axios.get("http://localhost:3000/api/paninis");
  const res5 = await axios.get("http://localhost:3000/api/dranken");
  return {
    props: {
      broodjesList: res1.data,
      zoetigheidList: res2.data,
      snackList: res3.data,
      paniniList: res4.data,
      drankenList: res5.data,
    },
  };
};

export default menu;
