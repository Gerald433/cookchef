import styles from "./Acceuil.module.scss";
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <div>
      <img
        className={`${styles.imgAccueil}`}
        src="assets/images/imgAccueil.jpg"
        alt="Fromage étiré d'une part de pizza"
      />
      <h2>page acceuil</h2>
      <Link to="/app"> viens manger </Link>
    </div>
  );
}

export default Acceuil;
