import Head from "next/head";
import axios from "axios";
import Featured from "../components/Featured";
import styles from "../styles/Home.module.css";

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Broodjes Velje</title>
        <meta name="description" content="Beste Broodjes" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Featured />
    </div>
  );
}

