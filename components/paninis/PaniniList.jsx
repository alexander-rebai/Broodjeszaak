import styles from "../../styles/PizzaList.module.css";
import PaniniCard from "./PaniniCard";

const PaniniList = ( {paniniList} ) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {paniniList?.map((panini, i) => (
          <PaniniCard key={i} panini={panini} />
        ))}
      </div>
    </div>
  );
};

export default PaniniList;
