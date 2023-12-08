import { useState, createRef } from "react";
import styles from "./Recipe.module.scss";
import PropTypes from "prop-types";

function Recipe({ recipe }) {
  const { _id, image, title, price } = recipe;

  // Ajoutez l'état pour suivre si le bouton a été cliqué
  const [buttonClicked, setButtonClicked] = useState(false);

  // Ajoutez un état pour suivre la visibilité du bouton
  const [buttonVisible, setButtonVisible] = useState(true);

  function addOrUpdate(e) {
    // Crée un nouvel élément à ajouter au panier
    const cartItem = { _id, title, quantity: 1, price };

    // Récupère le panier actuel du localStorage
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    // Ajoute le nouvel élément au panier
    cart.push(cartItem);

    // Met à jour le localStorage avec le nouveau panier
    localStorage.setItem("cart", JSON.stringify(cart));

    // Masque le bouton
    setButtonVisible(false);
    setButtonClicked(true);
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
          {/* <input
            type="number"
            id="exempleInput"
            name="exempleInput"
            className={`${styles.quantitySelect}`}
            min="1"
            ref={input}
          />
          <span>X</span> */}
          <p className={`${styles.price} `}>{price}</p>
          <span>€</span>
        </div>
      </div>
      <div className={`${styles.addGeneral} d-flex justify-content-center`}>
        {buttonVisible && (
          <button
            onClick={addOrUpdate}
            className={`${styles.add}`}
            // disabled={added} // Désactive le bouton si l'élément a déjà été ajouté
          >
            Valider
          </button>
        )}

        {buttonClicked && (
          <span className={`${styles.successMessage}`}>Ajouté au panier!</span>
        )}
      </div>
    </div>
  );
}

// Recipe.propTypes = {
//   recipe: PropTypes.shape({
//     _id: PropTypes.string.isRequired,
//     like: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     image: PropTypes.string.isRequired,
//     price: PropTypes.number.isRequired,
//   }).isRequired,
//   addToWishListCallBack: PropTypes.func.isRequired,
//   removeFromWishListCallBack: PropTypes.func.isRequired,
//   updateReceivedQuantity: PropTypes.func.isRequired,
// };

export default Recipe;
