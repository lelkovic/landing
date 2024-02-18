import styles from "./styles.module.scss";
//import Logo from "../../assets/images/logo2.png";

const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header__logo}>
        {/* <img src={Logo} alt="Logo" /> */}
      </div>
      <nav className={styles.header__nav}>
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#blog">Blog</a>
      </nav>
      <button className={styles.header__getStarted}>Get Started</button>
    </div>
  );
};
export default Header;
