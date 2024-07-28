import { AiFillDelete } from "react-icons/ai";
import styles from "./useractions.module.scss";
import { BsSend } from "react-icons/bs";
import { FaRegEdit } from "react-icons/fa";

const UserActions = () => {
  return (
    <span className={styles.userActions}>
      <FaRegEdit className={styles.actionIcon} />
      <BsSend className={styles.actionIcon} />
      <AiFillDelete className={styles.actionIconDelete} />
    </span>
  );
};

export default UserActions;
