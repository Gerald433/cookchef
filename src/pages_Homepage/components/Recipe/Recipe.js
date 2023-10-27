// import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({ recipe: { _id, like, title, image }, updateLike }) {
  const handleClick = () => {
    updateLike(_id, !like);
  };

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={`${styles.imgRecipe} `} />
      </div>
      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <i className={`fa-solid fa-heart ${like ? "text-primary" : ""}`}></i>
      </div>
    </div>
  );
}

export default Recipe;
