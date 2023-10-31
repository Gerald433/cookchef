import React from "react";

function WishContent({ wishList }) {
  return (
    <div>
      <h2>Ma liste de souhaits</h2>
      {/* <ul>
        {wishList.map((recipe) => (
          <li key={recipe._id}>{recipe.title}</li>
        ))}
      </ul> */}
    </div>
  );
}

export default WishContent;
