import { useState } from "react";
import styles from "./Recipe.module.scss";

function Recipe({
  recipe: { _id, like, title, image, price },
  updateLike,
  addToWishListCallBack,
  removeFromWishListCallBack,
}) {
  const [added, setAdded] = useState(false);

  const handleClick = () => {
    updateLike(_id, !like);
  };

  const handleAddToWishList = () => {
    console.log("addToWishListCallBack:", addToWishListCallBack);
    console.log("removeFromWishListCallBack:", removeFromWishListCallBack);

    if (!added) {
      addToWishListCallBack(_id);
    } else {
      removeFromWishListCallBack(_id);
    }

    setAdded(!added);
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
          <input
            type="number"
            id="exempleInput"
            name="exempleInput"
            className={`${styles.quantitySelect}`}
          />
          <span>X</span>
          <p className={`${styles.price} `}>{price}</p>
          <span>€</span>
        </div>
      </div>
      <div className={`${styles.addGeneral} d-flex justify-content-center`}>
        {/* <button onClick={handleClick}>{like ? "Unlike" : "Like"}</button> */}
        <button
          onClick={handleAddToWishList}
          className={`${styles.add} ${
            added ? styles.disabled : ""
          } btn-primary`}
          // disabled={added} // Désactive le bouton si l'élément a déjà été ajouté
        >
          {added ? "C'est noté" : "Ajouter"}
        </button>
      </div>
    </div>
  );
}

export default Recipe;
