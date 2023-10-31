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
          <h1>Street - Pizza</h1>
          <p className={`${styles.planning}`}>
            A Sainte Sigolène, Les samedi et dimanche,
            <br /> sur le parking de Carrefour Market.
            <br />
            16h30 - 21h00
          </p>
          <span className={`${styles.priceIndice}`}>10 à 13 euros</span>
          <Link className={`${styles.linkPizzasPage}`} to="/app">
            Recettes
          </Link>
        </div>
      </div>
    </>
  );
}

export default Acceuil;
