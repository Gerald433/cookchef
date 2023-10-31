import styles from "./Content.module.scss";
import Recipe from "./components/Recipe/Recipe";
import { data } from "../data/recipes";
import { useState } from "react";
import PageLoader from "../components/PageLoader/PageLoader";

function Content() {
  // const [loading, setLoading] = useState(false);

  // function handleButtonClick() {
  //   setLoading(true);
  // }

  // const recipes = data;
  const [recipes, setRecipes] = useState(data);
  // const [isLoading, setIsLoading] = useState(true);
  const [filter, setFilter] = useState("");

  function handleInput(e) {
    const filter = e.target.value;
    setFilter(filter.trim().toLowerCase());
  }

  const updateLike = (recipeId, newLikeValue) => {
    setRecipes((prevRecipes) =>
      prevRecipes.map((recipe) =>
        recipe._id === recipeId ? { ...recipe, like: newLikeValue } : recipe
      )
    );
  };

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
                <Recipe key={r._id} recipe={r} updateLike={updateLike} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
