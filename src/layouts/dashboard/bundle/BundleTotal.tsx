import Image from "next/image";
import Button from "../../../components/button/Button";
import styles from "./bundletotal.module.scss";

interface BundleTotalProps {
  toggleDepositModal: () => void;
}
const BundleTotal = ({ toggleDepositModal }: BundleTotalProps) => {
  return (
    <div className={styles.bundleTotal}>
      <div className={styles.bundleLeft}>
        <div className={styles.title}>bundle Total</div>
        <div className={styles.moneySign}>
          ₦ <span className={styles.amt}>300,000,000</span>
        </div>
      </div>
      <div className={styles.bundleRight}>
        <Button
          onClick={toggleDepositModal}
          label={"Deposit"}
          className={"primaryBtnWhiteBackground"}
          image={
            <Image
              src="/icons/bank.svg"
              alt="bundle avatar"
              width={18}
              height={18}
            />
          }
        />
        <Button
          label={"Add to bundle"}
          image={
            <Image
              src="/icons/plus.svg"
              alt="bundle avatar"
              width={18}
              height={18}
            />
          }
        />
      </div>
    </div>
  );
};

export default BundleTotal;
