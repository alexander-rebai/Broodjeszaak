import Image from "next/image";
import styles from "../styles/Navbar.module.css";
import { useSelector } from "react-redux";
import Link from "next/link";

const Navbar = () => {

  const quantity = useSelector(state => state.cart.quantity);

  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <ul className={styles.list}>
          <Link href="/" passHref>
            <li className={styles.listItem}>Hoofdpagina</li>
          </Link>
          <Link href="/menu" passHref>
            <li className={styles.listItem}>Menu</li>
          </Link>
          <Image src="/img/logoVelje.png" alt="" width="160px" height="69px" />
          <Link href="/about" passHref>
            <li className={styles.listItem}>Wie zijn wij?</li>
          </Link>
        </ul>
        <Link href="/cart" passHref>
          <div className={styles.cart}>
            <Image src="/img/cart.png" alt="" width="30px" height="30px" />
            <div className={styles.counter}>{quantity}</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
