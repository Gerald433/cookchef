import styles from "./Desserts.module.scss";
import { useState } from "react";
import { data } from "../data/desserts";
import Recipe from "./components/Recipe/Recipe";
import { Link } from "react-router-dom";

function Desserts({ setSelectedRecipe }) {
  const [desserts, setDesserts] = useState(data);
  const [filter, setFilter] = useState("");
  const [wishList, setWishList] = useState([]);

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  function updateLike(dessertId, newLikeValue) {
    setDesserts((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === dessertId ? { ...recipe, like: newLikeValue } : recipe
      )
    );
  }

  function handleRecipeClick(recipeId) {
    const selectedRecipe = desserts.find((recipe) => recipe._id === recipeId);
    setSelectedRecipe(selectedRecipe);
  }

  function addToWishListCallBack(recipeId) {
    const selectedRecipe = desserts.find((recipe) => recipe._id === recipeId);

    // Récupérer les données actuelles de wishList dans localStorage (s'il existe)
    const currentWishList = JSON.parse(localStorage.getItem("wishList")) || [];

    // Vérifier si la recette n'est pas déjà dans la liste de souhaits
    if (!currentWishList.some((recipe) => recipe._id === selectedRecipe._id)) {
      const updatedWishList = [...currentWishList, selectedRecipe];

      // Mettre à jour la liste de souhaits dans localStorage
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));

      // Mettre à jour l'état local de la liste de souhaits
      setWishList(updatedWishList);
    }
  }

  // function addToWishListCallBack(recipeId) {
  //   const selectedRecipe = recipes.find((recipe) => recipe._id === recipeId);
  //   setWishList((prevWishList) => [...prevWishList, selectedRecipe]);
  // }

  return (
    <>
      {/* <PageLoader /> */}
      <div className=" flex-fill container">
        <h2 className={`${styles.title} my-30`}>Une douceur ?</h2>
        <div className={`card d-flex flex-column p-20 ${styles.contentCard}`}>
          <div
            className={`d-flex flex row justify-conytent-center align-items-center my-30 ${styles.searchBar}`}
          >
            <i className="fa-solid fa-magnifying-glass mr-15 ml-15"></i>
            <input
              onInput={handleInput}
              className="flex-fill mr-15 "
              type="text"
              placeholder="Rechercher"
            />
          </div>

          <div className={styles.grid}>
            {desserts
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe
                  key={r._id}
                  price={r.price}
                  recipe={r}
                  updateLike={updateLike}
                  addToWishListCallBack={addToWishListCallBack}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Desserts;
