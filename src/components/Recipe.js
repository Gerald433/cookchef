import styles from "./Recipe.module.scss";
import pizza from "../assets/images/jambon_champignon.jpg";

function Recipe() {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={pizza} alt="pizza" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>Jambon Champignon</h3>
      </div>
    </div>
  );
}

export default Recipe;
