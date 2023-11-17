import { useState } from "react";
import styles from "./Recipe.module.scss";
import PropTypes from "prop-types";

function Recipe({
  recipe,

  addToWishListCallBack,
  removeFromWishListCallBack,
  updateReceivedQuantity,
}) {
  const [added, setAdded] = useState(false);
  const [selectedQuantity, setSelectedQuantity] = useState(0);
  const { _id, image, title, price } = recipe;
  const handleQuantityChange = (event) => {
    const value = parseInt(event.target.value);
    setSelectedQuantity(value);
    if (typeof updateReceivedQuantity === "function") {
      updateReceivedQuantity(value);
    }
  };

  const handleAddToWishList = () => {
    console.log("addToWishListCallBack:", addToWishListCallBack);
    console.log("removeFromWishListCallBack:", removeFromWishListCallBack);

    if (!added) {
      addToWishListCallBack(_id);
    } else {
      removeFromWishListCallBack(_id);
    }

    // Mettre à jour le stockage local avec la quantité sélectionnée
    const existingQuantities =
      JSON.parse(localStorage.getItem("quantities")) || {};

    // Mettre à jour la quantité pour la recette actuelle
    existingQuantities[_id] = selectedQuantity;

    // Sauvegarder les quantités mises à jour dans le stockage local
    localStorage.setItem("quantities", JSON.stringify(existingQuantities));

    setAdded(!added);
  };

  return (
    <div className={styles.recipe}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={`${styles.imgRecipe} `} />
      </div>

      <div
        className={`${styles.recipeTitle} d-flex flex-column justify-content-center align-items-center`}
      >
        <h3 className="mb-10">{title}</h3>
        <div
          className={`${styles.under} d-flex justify-content-center align-items-center`}
        >
          <input
            type="number"
            id="exempleInput"
            name="exempleInput"
            className={`${styles.quantitySelect}`}
            value={selectedQuantity}
            onChange={handleQuantityChange}
          />
          <span>X</span>
          <p className={`${styles.price} `}>{price}</p>
          <span>€</span>
        </div>
      </div>
      <div className={`${styles.addGeneral} d-flex justify-content-center`}>
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

Recipe.propTypes = {
  recipe: PropTypes.shape({
    _id: PropTypes.string.isRequired,
    like: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  addToWishListCallBack: PropTypes.func.isRequired,
  removeFromWishListCallBack: PropTypes.func.isRequired,
  updateReceivedQuantity: PropTypes.func.isRequired,
};

export default Recipe;
