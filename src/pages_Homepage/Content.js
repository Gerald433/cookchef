import styles from "./Content.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { data } from "../data/recipes";
import { useState, useEffect } from "react";
import PageLoader from "../components/PageLoader/PageLoader";

function Content() {
  const [recipes, setRecipes] = useState(data);
  const [filter, setFilter] = useState("");
  const [wishList, setWishList] = useState([]);
  const [added, setAdded] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  function updateLike(recipeId, newLikeValue) {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === recipeId ? { ...recipe, like: newLikeValue } : recipe
      )
    );
  }

  function removeFromWishListCallBack(recipeId) {
    const updatedWishList = wishList.filter(
      (recipe) => recipe._id !== recipeId
    );
    localStorage.setItem("wishList", JSON.stringify(updatedWishList));
    setWishList(updatedWishList);
    setAdded(false); // Mettez à jour l'état du bouton
  }

  
  function addToWishListCallBack(recipeId) {
    const selectedRecipe = recipes.find((recipe) => recipe._id === recipeId);
    const currentWishList = JSON.parse(localStorage.getItem("wishList")) || [];

    // Vérifier si la recette n'est pas déjà dans la liste de souhaits
    if (!currentWishList.some((recipe) => recipe._id === selectedRecipe._id)) {
      const updatedWishList = [...currentWishList, selectedRecipe];
      localStorage.setItem("wishList", JSON.stringify(updatedWishList));
      setWishList(updatedWishList);
      setAdded(true); // Mettez à jour l'état du bouton
    }
  }

  // function addToWishListCallBack(recipeId) {
  //   const selectedRecipe = recipes.find((recipe) => recipe._id === recipeId);
  //   setWishList((prevWishList) => [...prevWishList, selectedRecipe]);
  // }

  // useEffect(() => {
  //   // Charger la liste de souhaits depuis le stockage local lors de l'initialisation
  //   const storedWishList = JSON.parse(localStorage.getItem("wishList")) || [];
  //   setWishList(storedWishList);
  // }, []);

  return (
    <>
      {/* <PageLoader /> */}
      <div className=" flex-fill container">
        <h2 className={`${styles.title} my-30`}>
          Découvrez nos nouvelles recettes
        </h2>
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
            {recipes
              .filter((r) => r.title.toLowerCase().startsWith(filter))
              .map((r) => (
                <Recipe
                  key={r._id}
                  price={r.price}
                  recipe={r}
                  updateLike={updateLike}
                  addToWishListCallBack={addToWishListCallBack}
                  removeFromWishListCallBack={removeFromWishListCallBack}
                  added={wishList.some((recipe) => recipe._id === r._id)}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
