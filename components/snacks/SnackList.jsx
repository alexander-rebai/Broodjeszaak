import styles from "../../styles/PizzaList.module.css";
import SnackCard from "./SnackCard"

const SnackList = ( {snackList} ) => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        {snackList?.map((snack, i) => (
          <SnackCard key={i} snack={snack}/>
        ))}
      </div>
    </div>
  );
};

export default SnackList;
