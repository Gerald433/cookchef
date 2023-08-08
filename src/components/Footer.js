import styles from "./Footer.module.scss";

function Footer() {
  return (
    <footer
      className={` d-flex flex-row align-items-center justify-content-center p-20  ${styles.footer}`}
    >
      <p>Copyright © 2023 Meta Platforms, Inc.</p>
    </footer>
  );
}

export default Footer;
