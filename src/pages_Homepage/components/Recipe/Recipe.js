import { useState, createRef } from "react";
import styles from "./Recipe.module.scss";
import PropTypes from "prop-types";

function Recipe({ recipe }) {
  const { _id, image, title, price } = recipe;
  const input = createRef();

  function addOrUpdate(e) {
    const cart = JSON.parse(localStorage.getItem("cart") ?? "[]");
    const recipeFound = cart.find((item) => item._id === _id);
    const quantity = input.current.valueAsNumber;

    if (recipeFound) {
      recipeFound.quantity += quantity;
    } else {
      cart.push({ _id, title, quantity, price });
    }

    // met à jour le LS
    localStorage.setItem("cart", JSON.stringify(cart));
  }

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
            min="1"
            ref={input}
          />
          <span>X</span>
          <p className={`${styles.price} `}>{price}</p>
          <span>€</span>
        </div>
      </div>
      <div className={`${styles.addGeneral} d-flex justify-content-center`}>
        <button
          onClick={addOrUpdate}
          className={`${styles.add}`}
          // disabled={added} // Désactive le bouton si l'élément a déjà été ajouté
        >
          Valider
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
