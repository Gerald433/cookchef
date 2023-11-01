import React, { useState } from "react";
import styles from "./WishContent.module.scss";

function WishContent() {
  // Récupérer la liste de souhaits depuis localStorage
  const wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  const storedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
  const [quantities, setQuantities] = useState(storedQuantities);

  // Mettre à jour la quantité sélectionnée pour une recette
  const handleQuantityChange = (event, recipeId) => {
    const { value } = event.target;
    const newQuantities = { ...quantities, [recipeId]: value };
    setQuantities({ ...quantities, [recipeId]: value });
    localStorage.setItem("quantities", JSON.stringify(newQuantities));
  };

  const calculateTotal = (recipe) => {
    const quantity = parseInt(quantities[recipe._id]) || 0;
    const price = parseFloat(recipe.price) || 0;
    return (quantity * price).toFixed(2);
  };

  // Afficher la liste de souhaits
  return (
    <div>
      <h2>Ma liste de souhaits</h2>
      <form
        action="POST"
        className="d-flex align-items-center justify-content-center"
      >
        <ul className={`${styles.listTotal}`}>
          {wishList.map((recipe) => (
            <li className={`${styles.article}`} key={recipe._id}>
              {recipe.title} <br />
              {/* Afficher d'autres détails de la recette si nécessaire */}
              <div className={`${styles.box} d-flex`}>
                <div className={`${styles.firstCalcul} d-flex`}>
                  <input
                    value={quantities[recipe._id] || 0}
                    onChange={(event) =>
                      handleQuantityChange(event, recipe._id)
                    }
                    className={`${styles.quantitySelect}`}
                    type="number"
                  />
                  <span className={`${styles.priceUnit}`}>x</span>
                  <span className={`${styles.priceUnit}`}>{recipe.price}</span>
                  <span className={`${styles.priceUnit}`}>=</span>
                </div>
                <div>
                  <span className={`${styles.total}`}>
                    {calculateTotal(recipe) + " €"}
                  </span>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </form>
    </div>
  );
}

export default WishContent;
