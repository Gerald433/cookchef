import styles from "./ChoiceOfCards.module.scss";
import { Link } from "react-router-dom";

function AChoiceOfCards() {
  return (
    <>
      <div className={`${styles.globalBox}   d-flex container`}>
        <Link to="/recipes" className={`${styles.cutInThree}  ${styles.left}`}>
          <div>
            <h2>Pizzas</h2>
          </div>
        </Link>
        <Link className={`${styles.cutInThree}  ${styles.middleBox} `}>
          <div>
            <h2>Boissons</h2>
          </div>
        </Link>
        <Link className={`${styles.cutInThree}  ${styles.right} `}>
          <div>
            <h2>Desserts</h2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AChoiceOfCards;
