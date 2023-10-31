// import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({
  recipe: { _id, like, title, image, price },
  updateLike,
  addToWishListCallBack,
  
}) {
  const handleClick = () => {
    updateLike(_id, !like);
  };

  const handleAddToWishList = () => {
    addToWishListCallBack(_id);
  };

  return (
    <div onClick={handleClick} className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={`${styles.imgRecipe} `} />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <div>
          <h3 className="mb-10">{title}</h3>
        </div>

        <div
          className={`${styles.under} d-flex justify-content-center align-items-center`}
        >
          <i className={`fa-solid fa-heart ${like ? "text-primary" : ""}`}></i>
          <p className={`${styles.price} `}>{price}</p>
        </div>
      </div>
      <div>
        <button onClick={handleClick}>{like ? "Unlike" : "Like"}</button>
        <button onClick={handleAddToWishList}>Add to Wishlist</button>
      </div>
    </div>
  );
}

export default Recipe;
