import { IoIosClose } from "react-icons/io";
import Icon from "../icon/Icon";
import styles from "./styles.module.scss";
import { bankInfo } from "@/utility/bankInfo";

const DepositModal = ({ toggleDepositModal, setDepositIndex }: any) => {
  return (
    <div className={styles.depositModalOverlay}>
      <div className={styles.depositModal}>
        <div className={styles.modalTop}>
          <span className={styles.deposit}>Deposit</span>

          <button onClick={toggleDepositModal} className={styles.btn}>
            <IoIosClose className={styles.closeIcon} />
          </button>
        </div>

        <div className={styles.detailsContainer}>
          <p className={styles.selectBank}>Select bank account</p>
          {bankInfo.map((info, ind) => (
            <div key={ind} className={styles.bankDetails}>
              <Icon src={info.logo} alt={"fcmb logo"} />
              <span className={styles.details}>
                <span>{info.bank_name}</span>
                <span>{info.name}</span>
                <span>{info.account_number}</span>
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DepositModal;
