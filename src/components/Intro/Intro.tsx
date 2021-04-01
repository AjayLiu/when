import styles from "./Intro.module.scss";

const Intro: React.FC = () => {
  return (
    <div>
      <div className={styles.conversation}>
        <div className={styles.sms}>
          <div className={styles.left}>game night at 6PM PST!</div>
        </div>
        <div className={styles.sms}>
          <div className={styles.right}>im in japan rn, when is that?</div>
        </div>
        <div className={styles.sms}>
          <div className={styles.left}>im in london, when is that?</div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
