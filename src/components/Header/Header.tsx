import styles from "./Header.module.scss";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";

const Header: React.FC = () => {
  return (
    <>
      <GoogleAnalyticsHook />
      <a href="/">
        <img className={styles.image} src="/img/when.png"></img>
      </a>
      <div className={styles.logoText}>when?</div>
    </>
  );
};

export default Header;
