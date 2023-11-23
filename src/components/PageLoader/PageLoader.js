import styles from "./PageLoader.module.scss";

function PageLoader() {

  return (
    <div className={`${styles.load}`}>
      <div className={`${styles.loading}`}></div>
      <p className={`${styles.load_text}`}>Aux fourneaux</p>
    </div>
  );
}

export default PageLoader;
