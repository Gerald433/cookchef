import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import HeaderMenuXs from "./components_HeaderMenuXs/HeaderMenuXs/HeaderMenuXs";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center `}>
      <div className="flex-fill">
        <img src={logo} alt="logo du site" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-sharp fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
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
