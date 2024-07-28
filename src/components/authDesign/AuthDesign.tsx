import MoreGiftLogo from "../logo/MoregiftLogo";
import styles from "./styles.module.scss";

const AuthDesign = () => {
  return (
    <div className={styles.authPageDesign}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <MoreGiftLogo />
        </div>
        <div className={styles.bottom}>
          <p className={styles.text}>
            Customers will never love a company until the employees love it
            first
          </p>
          <p className={styles.author}> - Simon Sinek</p>
        </div>
      </div>
    </div>
  );
};

export default AuthDesign;
