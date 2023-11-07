import styles from "./Header.module.scss";
import logo from "../../assets/images/logo.jpg";
import { useState } from "react";
import HeaderMenuXs from "./components_HeaderMenuXs/HeaderMenuXs/HeaderMenuXs";
import { useLocation, Link } from "react-router-dom";

function Header() {
  const [showMenu, setShowMenu] = useState(false);

  const location = useLocation();
  let linkPath = "/wishlist"; // par défaut, le lien pointe vers la page Wishlist
  let buttonText = "Wishlist"; // Texte par défaut pour le bouton

  if (location.pathname === "/wishlist") {
    linkPath = "/recipes"; // Changer le lien pour la page Wishlist
    buttonText = "Recettes"; // Changer le texte pour la page Wishlist
  }

  return (
    <header className={`${styles.header} d-flex flex-row align-items-center container`}>
      <div className="flex-fill">
        <Link to={"/"}>
          <img src={logo} alt="logo du site" />
        </Link>
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i className="fa-sharp fa-solid fa-heart mr-5"></i>
          <Link className={`${styles.wishList}`} to={linkPath}>
            <span>{buttonText}</span>
          </Link>
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
