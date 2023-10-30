import { useState } from "react";
import styles from "./Acceuil.module.scss";
import { Link } from "react-router-dom";
import PageLoader from "../components/PageLoader/PageLoader";

function Acceuil() {
  const [loading, setLoading] = useState(false);

  function handleButtonClick() {
    setLoading(true);
  }

  return (
    <>
      {loading ? (
        <PageLoader /> // Affiche le composant de chargement si loading est true
      ) : (
        <div className={`${styles.container}`}>
          <img
            className={`${styles.imgAccueil}`}
            src="assets/images/imgAccueil.jpg"
            alt="Fromage étiré d'une part de pizza"
          />

          <div>
            <h1>Street - Pizza</h1>
            <Link
              className={`${styles.linkPizzasPage}`}
              to="/app"
              onClick={handleButtonClick}
            >
              Recettes
            </Link>
          </div>
        </div>
      )}
    </>
  );
}

export default Acceuil;
