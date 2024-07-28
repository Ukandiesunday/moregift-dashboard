import Image from "next/image";
import styles from "./styles.module.scss";

const Oauth = () => {
  return (
    <div className={styles.oAuth}>
      <h2>Or login with</h2>
      <div className={styles.socials}>
        <Image
          src="/icons/google.svg"
          alt="social avatars"
          width={20}
          height={20}
          className={styles.socialImg}
        />
        <Image
          src="/icons/apple.svg"
          alt="social avatars"
          width={20}
          height={20}
          className={styles.socialImg}
        />
        <Image
          src="/icons/facebook.svg"
          alt="social avatars"
          width={20}
          height={20}
          className={styles.socialImg}
        />
      </div>
    </div>
  );
};

export default Oauth;
