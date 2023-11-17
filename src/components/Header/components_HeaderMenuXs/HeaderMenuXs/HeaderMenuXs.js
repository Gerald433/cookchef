import styles from "./HeaderMenuXs.module.scss";
import { useLocation, Link } from "react-router-dom";

function HeaderMenuXs() {
  return (
    <ul className={`${styles.MenuContainer} d-flex flex-column card p-20`}>
      
        <Link to={"/wishList"} className={`${styles.wishList}`}>
          <button><span>Panier</span></button>
          
        </Link>
      

      
        <Link to={"/connexion"} className={`${styles.wishList}`}>
          <button><span>Connexion</span></button>
          
        </Link>
      
    </ul>
  );
}

export default HeaderMenuXs;
