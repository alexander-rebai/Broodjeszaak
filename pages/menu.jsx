import React from 'react'
import axios from 'axios'
import BroodjesList from '../components/broodjes/BroodjesList'
import PaniniList from '../components/paninis/PaniniList'
import SnackList from '../components/snacks/SnackList'
import ZoetigheidList from '../components/zoetigheden/ZoetigheidList'
import styles from "../styles/Menu.module.css";
import Saladbar from '../components/Saladbar'
import Image from 'next/image'

const menu = ({ broodjesList, zoetigheidList, snackList, paniniList}) => {
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
      <h1 className={styles.type}>Broodjes</h1>
      <BroodjesList broodjesList={broodjesList} />
      <h1 className={styles.type}>Panini {`&apos`} s</h1>
      <PaniniList paniniList={paniniList}/>
      <h1 className={styles.type}>Snacks</h1>
      <SnackList snackList={snackList} />
      <h1 className={styles.type}>Zoetigheden</h1>
      <ZoetigheidList zoetigheidList={zoetigheidList} />
      <h1 className={styles.type}>Salade Bar - Zelf gemaakt Slaatje vanaf €9</h1>
      <Saladbar/>
    </div>
  )
}

export const getServerSideProps = async () => {
  const res1 = await axios.get("https://broodjeszaak.vercel.app/api/broodjes");
  const res2 = await axios.get("https://broodjeszaak.vercel.app/api/zoetigheden");
  const res3 = await axios.get("https://broodjeszaak.vercel.app/api/snacks");
  const res4 = await axios.get("https://broodjeszaak.vercel.app/api/paninis");
  return {
    props: {
      broodjesList: res1.data,
      zoetigheidList: res2.data,
      snackList: res3.data,
      paniniList: res4.data
    }
  }
}

export default menu