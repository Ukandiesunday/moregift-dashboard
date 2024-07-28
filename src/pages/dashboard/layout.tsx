import DepositModal from "@/components/depositmodal/DepositModal";
import styles from "../dashboard/dashboard.module.scss";
import Navbar from "@/components/navbar/Navbar";
import SendModal from "@/components/sendModal/SendModal";
import Sidebar from "@/layouts/dashboard/sidebar/Sidebar";
import { ReactNode, useState } from "react";
import DepositTransactionModal from "@/components/depositmodal/depositTransaction/DepositTransactionModal";

interface LayoutProps {
  children: ReactNode;
  toggleDepositModal?: () => void;
  isOpenDepositModal?: boolean;
}

const Layout: React.FC<LayoutProps> = ({
  children,
  toggleDepositModal,
  isOpenDepositModal,
}) => {
  const [isOpenSendModal, setOpenSendModal] = useState(false);
  const [depositIndex, setDepositIndex] = useState<number>(0);

  const toggleSendModal = () => {
    setOpenSendModal(!isOpenSendModal);
  };

  return (
    <div className={styles.container}>
      <div className={styles.side_menu}>
        <Sidebar />
      </div>
      <div className={styles.content}>
        <Navbar toggleSendModal={toggleSendModal} />
        <div className={styles.inside_pages}>{children}</div>
      </div>
      <div className={styles.modalContainer}>
        {depositIndex === 0 && (
          <div>
            {isOpenDepositModal && (
              <DepositModal
                toggleDepositModal={toggleDepositModal}
                setDepositIndex={setDepositIndex}
              />
            )}
          </div>
        )}
        {depositIndex === 1 && (
          <DepositTransactionModal
            setDepositIndex={setDepositIndex}
            depositIndex={depositIndex}
          />
        )}

        {isOpenSendModal && <SendModal toggleSendModal={toggleSendModal} />}
      </div>
    </div>
  );
};

export default Layout;
