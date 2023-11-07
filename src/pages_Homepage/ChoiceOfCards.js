import styles from "./ChoiceOfCards.module.scss";
import { Link } from "react-router-dom";

function AChoiceOfCards() {
  return (
    <>
    <div className={`${styles.globalBox} d-flex `} >
    <Link to="/recipes">
        <div>
          <h2>Pizzas</h2>
        </div>
      </Link>
      <Link>
        <div>
          <h2>Boissons</h2>
        </div>
      </Link>
      <Link>
        <div>
          <h2>Desserts</h2>
        </div>
      </Link>
    </div>
      
    </>
  );
}

export default AChoiceOfCards;
