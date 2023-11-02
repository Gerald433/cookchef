import React, { useState, useEffect } from "react";
import styles from "./WishContent.module.scss";
import * as Yup from "yup";

function WishContent() {
  // // Récupérer la liste de souhaits depuis localStorage
  // const wishList = JSON.parse(localStorage.getItem("wishList")) || [];

  // const storedQuantities = JSON.parse(localStorage.getItem("quantities")) || {};
  // const [quantities, setQuantities] = useState(storedQuantities);

  // // Mettre à jour la quantité sélectionnée pour une recette
  // const handleQuantityChange = (event, recipeId) => {
  //   const { value } = event.target;
  //   // Vérifier si la valeur est un nombre valide et positif avant de mettre à jour l'état
  //   const newValue = Math.max(0, parseInt(value)); // Utilisation de Math.max pour s'assurer que la valeur est positive
  //   const newQuantities = { ...quantities, [recipeId]: newValue };
  //   setQuantities(newQuantities);
  //   localStorage.setItem("quantities", JSON.stringify(newQuantities));
  // };

  const calculateTotal = (recipe) => {
    const quantity = parseInt(quantities[recipe._id]) || 0;
    const price = parseFloat(recipe.price) || 0;
    return (quantity * price).toFixed(2);
  };

  const calculateTotalGeneral = () => {
    let totalGeneral = 0;

    // Parcours de toutes les recettes
    wishList.forEach((recipe) => {
      const recipeTotal = parseFloat(calculateTotal(recipe));
      totalGeneral += recipeTotal;
    });

    return totalGeneral.toFixed(2); // Pour arrondir le total général à 2 décimales
  };

  const handleRemoveItem = (recipeId) => {
    // Filtrer la liste de souhaits pour exclure l'élément à supprimer
    const updatedWishList = wishList.filter(
      (recipe) => recipe._id !== recipeId
    );

    // Mettre à jour la liste de souhaits dans l'état et dans le localStorage
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    setQuantities(updatedWishList); // Mettre à jour l'état avec la liste de souhaits modifiée
  };

  // Afficher la liste de souhaits
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  /////////////////////////////////////////////           YUP              //////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

  const [quantities, setQuantities] = useState({});
  const [wishList, setWishList] = useState([]);

  const validationSchema = Yup.object().shape({
    quantity: Yup.number()
      .typeError("La quantité doit être un nombre")
      .positive("La quantité doit être positive")
      .integer("La quantité doit être un entier"),
  });

  const handleQuantityChange = async (event, recipeId) => {
    const { value } = event.target;
    try {
      await validationSchema.validate({ quantity: value });
      const newValue = Math.max(0, parseInt(value));
      const newQuantities = { ...quantities, [recipeId]: newValue };
      setQuantities(newQuantities);
      // Enregistrez dans localStorage ici
    } catch (error) {
      console.error(error.errors[0]);
    }
  };

  // Fetch wishList and quantities from localStorage on component mount
  useEffect(() => {
    const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
    setWishList(storedWishList);

    const storedQuantities =
      JSON.parse(localStorage.getItem("quantities")) || {};
    setQuantities(storedQuantities);
  }, []);












  
  return (
    // <div>
    //   <h2>Ma liste de souhaits</h2>
    //   <form
    //     action="POST"
    //     className="d-flex align-items-center justify-content-center"
    //   >
    //     <div className={`${styles.listTotal}`}>
    //       <ul className={`${styles.choice}`}>
    //         {wishList.map((recipe) => (
    //           <li className={`${styles.article}`} key={recipe._id}>
    //             {recipe.title} <br />
    //             {/* Afficher d'autres détails de la recette si nécessaire */}
    //             <div className={`${styles.box} d-flex`}>
    //               <div className={`${styles.firstCalcul} d-flex`}>
    //                 <input
    //                   value={quantities[recipe._id] || 0}
    //                   onChange={(event) =>
    //                     handleQuantityChange(event, recipe._id)
    //                   }
    //                   className={`${styles.quantitySelect}`}
    //                   type="number"
    //                 />
    //                 <span className={`${styles.priceUnit}`}>x</span>
    //                 <span className={`${styles.priceUnit}`}>
    //                   {recipe.price}
    //                 </span>
    //                 <span className={`${styles.priceUnit}`}>=</span>
    //               </div>
    //               <div>
    //                 <span className={`${styles.total}`}>
    //                   {calculateTotal(recipe) + " €"}
    //                 </span>
    //                 <button
    //                   className={`${styles.btnDelete} btn-primary`}
    //                   onClick={() => handleRemoveItem(recipe._id)}
    //                 >
    //                   Enlever
    //                 </button>
    //               </div>
    //             </div>
    //           </li>
    //         ))}
    //       </ul>
    //       <div className={`${styles.validPrice} d-flex`}>
    //         <span className={`${styles.ens}`}>
    //           Total = {calculateTotalGeneral()} €
    //         </span>
    //         <button className={`${styles.btnValid} btn-primary`}>
    //           Commander
    //         </button>
    //       </div>
    //     </div>
    //   </form>
    // </div>

    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////           YUP              //////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

    <div>
      <h2>Ma liste de souhaits</h2>
      <form
        action="POST"
        className="d-flex align-items-center justify-content-center"
      >
        <div className={`${styles.listTotal}`}>
          <ul className={`${styles.choice}`}>
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
                    <span className={`${styles.priceUnit}`}>
                      {recipe.price}
                    </span>
                    <span className={`${styles.priceUnit}`}>=</span>
                  </div>
                  <div>
                    <span className={`${styles.total}`}>
                      {calculateTotal(recipe) + " €"}
                    </span>
                    <button
                      className={`${styles.btnDelete} btn-primary`}
                      onClick={() => handleRemoveItem(recipe._id)}
                    >
                      Enlever
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className={`${styles.validPrice} d-flex`}>
            <span className={`${styles.ens}`}>
              Total = {calculateTotalGeneral()} €
            </span>
            <button className={`${styles.btnValid} btn-primary`}>
              Commander
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default WishContent;
