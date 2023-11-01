import styles from "./HeaderMenuXs.module.scss";
import { useLocation, Link } from "react-router-dom";


function HeaderMenuXs() {

  const location = useLocation();
  let linkPath = "/wishlist"; // par défaut, le lien pointe vers la page Wishlist
  let buttonText = "Wishlist"; // Texte par défaut pour le bouton

  if (location.pathname === "/wishlist") {
    linkPath = "/recipes"; // Changer le lien pour la page Wishlist
    buttonText = "Recettes"; // Changer le texte pour la page Wishlist
  }
  return (
    <ul className={`${styles.MenuContainer}  card p-20`}>
      
      <li><Link className={`${styles.wishList}`} to={linkPath}>
            <span>{buttonText}</span>
          </Link></li>



      
      <li>Connexion</li>
    </ul>
  );
}

export default HeaderMenuXs;
