import Image from "next/image";
import styles from "./usermodal.module.scss";

const UserModal = () => {
  return (
    <div className={styles.userModal}>
      <div className={styles.userItem}>
        <Image src="/icons/user2.svg" alt="" width={20} height={20} />
        <span>Profile</span>
        <Image src="/icons/chevronright.svg" alt="" width={20} height={20} />
      </div>
      <div className={styles.userItem}>
        <Image src="/icons/logout.svg" alt="" width={20} height={20} />
        <span>Logout</span>
        <Image src="/icons/chevronright.svg" alt="" width={20} height={20} />
      </div>
    </div>
  );
};

export default UserModal;
