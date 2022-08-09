import styles from "../../styles/PizzaList.module.css";
import BroodjeCard from "./BroodjeCard"

const BroodjesList = ( {broodjesList} ) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {broodjesList?.map((broodje, i) => (
          <BroodjeCard key={i} broodje={broodje} />
        ))}
      </div>
    </div>
  );
};

export default BroodjesList;
