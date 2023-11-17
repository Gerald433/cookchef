import styles from "./Connexion.module.scss";
import { Link } from "react-router-dom";

function Connexion() {
  return (
    <>
      <div className={`${styles.box}`}>
        <h2>Ici c 'est la page connexion</h2>
        <Link to={"/"}>Retour Accueil</Link>
      </div>
    </>
  );
}

export default Connexion;
