import { useState, useEffect, createRef } from "react";
import styles from "./Recipe.module.scss";
import PropTypes from "prop-types";

function Recipe({ recipe }) {
  const { _id, image, title, price } = recipe;

  const [buttonState, setButtonState] = useState(
    JSON.parse(localStorage.getItem(`buttonState_${_id}`)) || {
      clicked: false,
      visible: true,
    }
  );

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
    // Mettez à jour le localStorage avec l'état du bouton
    localStorage.setItem(
      `buttonState_${_id}`,
      JSON.stringify({ clicked: true, visible: false })
    );

    setButtonState({ clicked: true, visible: false });
  }

  useEffect(() => {
    // Mettez à jour l'état du bouton lors du chargement du composant
    setButtonState(
      JSON.parse(localStorage.getItem(`buttonState_${_id}`)) || {
        clicked: false,
        visible: true,
      }
    );
  }, [_id]);

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
        {buttonState.visible && (
          <button
            onClick={addOrUpdate}
            className={`${styles.add}`}
            // disabled={added} // Désactive le bouton si l'élément a déjà été ajouté
          >
            Valider
          </button>
        )}

        {buttonState.clicked && (
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
