import styles from "../../styles/PizzaList.module.css";
import ZoetigheidCard from "./ZoetigheidCard"

const ZoetigheidList = ( {zoetigheidList} ) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {zoetigheidList?.map((zoetje, i) => (
          <ZoetigheidCard key={i} zoetje={zoetje} />
        ))}
      </div>
    </div>
  );
};

export default ZoetigheidList;
