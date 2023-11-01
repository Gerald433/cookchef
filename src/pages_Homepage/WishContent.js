import React from "react";
import styles from './WishContent.module.scss'

function WishContent() {
  // Récupérer la liste de souhaits depuis localStorage
  const wishList = JSON.parse(localStorage.getItem('wishList')) || [];

  // Afficher la liste de souhaits
  return (
    <div>
      <h2>Ma liste de souhaits</h2>
      <ul className={`${styles.listTotal}`}>
        {wishList.map((recipe) => (
          <li key={recipe._id}>
            {recipe.title} <span>{recipe.price}</span>
            {/* Afficher d'autres détails de la recette si nécessaire */}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WishContent;






