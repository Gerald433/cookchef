import styles from "./Recipe.module.scss";


function Recipe({title, image}) {
  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt="pizza" />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-row justify-content-center align-items-center`}
      >
        <h3>{title}</h3>
      </div>
    </div>
  );
}

export default Recipe;
