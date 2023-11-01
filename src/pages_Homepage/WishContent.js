import React from "react";

function WishContent() {
  // Récupérer la liste de souhaits depuis localStorage
  const wishList = JSON.parse(localStorage.getItem('wishList')) || [];

  // Afficher la liste de souhaits
  return (
    <div>
      <h2>Ma liste de souhaits</h2>
      <ul>
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






