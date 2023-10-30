import styles from "./Acceuil.module.scss";
import { Link } from "react-router-dom";

function Acceuil() {
  return (
    <>
      <div className={`${styles.container}`}>
        <img
          className={`${styles.imgAccueil}`}
          src="assets/images/imgAccueil.jpg"
          alt="Fromage étiré d'une part de pizza"
        />

        <div>
          <h1>Street Pizza</h1>
          <Link className={`${styles.linkPizzasPage}`} to="/app">
            {" "}
            Passer commande{" "}
          </Link>
        </div>
      </div>
    </>
  );
}

export default Acceuil;
