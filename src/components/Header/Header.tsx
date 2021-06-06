import Link from "next/link";
import styles from "./Header.module.scss";
import GoogleAnalyticsHook from "@components/GoogleAnalyticsHook";

const Header: React.FC = () => {
  return (
    <>
      <GoogleAnalyticsHook />
      <Link href="/">
        <a>
          <img className={styles.image} src="/img/when.png"></img>
        </a>
      </Link>
      <div className={styles.logoText}>when?</div>
    </>
  );
};

export default Header;
