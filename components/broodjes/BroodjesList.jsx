import styles from "../../styles/PizzaList.module.css";
import BroodjeCard from "./BroodjeCard"

const BroodjesList = ({ broodjesList }) => {

  const kaas = broodjesList.filter(broodje => broodje.categorie === "kaas");
  const veggie = broodjesList.filter(broodje => broodje.categorie === "vegetarisch");
  const vlees = broodjesList.filter(broodje => broodje.categorie === "vlees");
  const vis = broodjesList.filter(broodje => broodje.categorie === "vis");

  return (
    <div className={styles.container4}>
      <h3 className={styles.categorie}>VLEES</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {vlees?.map((broodje, i) => (
            <BroodjeCard key={i} broodje={broodje} />
          ))}
        </div>
      </div>
      <h3 className={styles.categorie}>VIS</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {vis?.map((broodje, i) => (
            <BroodjeCard key={i} broodje={broodje} />
          ))}
        </div>
      </div>
      <h3 className={styles.categorie}>KAAS</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {kaas?.map((broodje, i) => (
            <BroodjeCard key={i} broodje={broodje} />
          ))}
        </div>
      </div>
      <h3 className={styles.categorie}>VEGETARISCH</h3>
      <div className={styles.container}>
        <div className={styles.wrapper}>
          {veggie?.map((broodje, i) => (
            <BroodjeCard key={i} broodje={broodje} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BroodjesList;
