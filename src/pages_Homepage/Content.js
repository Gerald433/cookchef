import styles from "./Content.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { data } from "../data/recipes";
import { useState } from "react";
import PageLoader from "../components/PageLoader/PageLoader";

function Content({ setWishList }) {
  const [recipes, setRecipes] = useState(data);
  const [filter, setFilter] = useState("");

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

  function addToWishListCallBack(recipeId) {
    const selectedRecipe = recipes.find((recipe) => recipe._id === recipeId);
    setWishList((prevWishList) => [...prevWishList, selectedRecipe]);
  }

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
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
