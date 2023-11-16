import styles from "./ChoiceOfCards.module.scss";
import { Link } from "react-router-dom";

function AChoiceOfCards() {
  return (
    <>
      <div className={`${styles.globalBox}   d-flex container flex-column`}>
        <Link to="/recipes" className={`${styles.cutInThree}  ${styles.left} `}>
          <div className={`${styles.part}  d-flex flex-column`}>
            <img
              className={`${styles.pictureChoice}   d-flex`}
              src="assets/images/pizzaChoice.jpg"
              alt="pizza de présentation"
            />
            <h2 className={`${styles.titleBox}  ${styles.one} d-flex `}>
              Miam Miam
            </h2>
          </div>
        </Link>
        <Link
          to="/drinks"
          className={`${styles.cutInThree}  ${styles.middleBox} `}
        >
          <div className={`${styles.part} `}>
            <img
              className={`${styles.pictureChoice}   d-flex`}
              src="assets/images/sodaChoice.jpg"
              alt="pizza de présentation"
            />
            <h2 className={`${styles.titleBox} ${styles.two}  d-flex `}>
              Glou Glou
            </h2>
          </div>
        </Link>
        <Link
          to="/desserts"
          className={`${styles.cutInThree}  ${styles.right} `}
        >
          <div className={`${styles.part}`}>
            <img
              className={`${styles.pictureChoice}   d-flex`}
              src="assets/images/dessertChoice.jpg"
              alt="pizza de présentation"
            />
            <h2 className={`${styles.titleBox}  ${styles.tree} d-flex `}>
              Wouuhaa !!
            </h2>
          </div>
        </Link>
      </div>
    </>
  );
}

export default AChoiceOfCards;
