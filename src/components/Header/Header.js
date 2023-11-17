import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPizzaSlice,
  faGlassWater,
  faCookieBite,
  faBasketShopping,
} from "@fortawesome/free-solid-svg-icons";
import HeaderMenuXs from "./components_HeaderMenuXs/HeaderMenuXs/HeaderMenuXs";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();

  const showCardLink =
    location.pathname === "/desserts" ||
    location.pathname === "/wishlist" ||
    location.pathname === "/recipes" ||
    location.pathname === "/connexion" ||
    location.pathname === "/drinks";

  return (
    <header
      className={`${styles.header} d-flex flex-row align-items-center container`}
    >
      <div className="flex-fill">
        <Link to={"/"}>
          <img src={logo} alt="logo du site" />
        </Link>
      </div>
      {showCardLink && (
        <Link to="/choice" className={`${styles.wishList}`}>
          <button className={`${styles.cardList} btn-primary`}>
            <FontAwesomeIcon
              icon={faPizzaSlice}
              className={`${styles.elementFood} ${styles.pizza}`}
            />

            <FontAwesomeIcon
              icon={faGlassWater}
              className={`${styles.elementFood} ${styles.drinker} `}
            />

            <FontAwesomeIcon
              icon={faCookieBite}
              className={`${styles.elementFood} ${styles.cake}  `}
            />
          </button>
        </Link>
      )}

      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <Link className={`${styles.wishList}`} to={"/wishlist"}>
            <span>
              <FontAwesomeIcon
                icon={faBasketShopping}
                className={`${styles.basket}`}
              />{" "}
              Panier
            </span>
          </Link>
        </button>
        <button className="btn btn-primary">
          <Link to={"/connexion"}>Connexion</Link>
        </button>
      </ul>
      <i
        onClick={() => setShowMenu(true)}
        className={`${styles.headerXs} fa-solid fa-bars`}
      ></i>

      {showMenu && (
        <>
          <div onClick={() => setShowMenu(false)} className="calc"></div>
          <HeaderMenuXs />
        </>
      )}
    </header>
  );
}

export default Header;
