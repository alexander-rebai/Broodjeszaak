import styles from "../../styles/PizzaList.module.css";
import DrankCard from "./DrankCard"

const DrankList = ({ drankenList }) => {


  return (
    <div className={styles.container}>
    <div className={styles.wrapper}>
      {drankenList?.map((drank, i) => (
        <DrankCard key={i} drank={drank}/>
      ))}
    </div>
  </div>
  );
};

export default DrankList;
