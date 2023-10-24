import styles from "./Header.module.scss";
import logo from "../assets/images/logo.jpg";

function Header() {
  return (
    <header className={`${styles.header} d-flex flex-row align-items-center `}>
      
      <div className="flex-fill">
        <img src={logo} alt="logo du site" />
      </div>
      <ul className={styles.headerList}>
        <button className="mr-5 btn btn-reverse-primary">
          <i class="fa-sharp fa-solid fa-heart mr-5"></i>
          <span>Wishlist</span>
        </button>
        <button className="btn btn-primary">Connexion</button>
      </ul>
      <i class={`${styles.headerXs} fa-solid fa-bars`}></i>
    </header>
  );
}

export default Header;
