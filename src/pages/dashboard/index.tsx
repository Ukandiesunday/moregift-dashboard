"use client";
import BundleTotal from "@/layouts/dashboard/bundle/BundleTotal";
import Widgets from "@/layouts/dashboard/widgets/Widgets";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import styles from "./dashboard.module.scss";

import Layout from "./layout";
import UsersTable from "@/components/userstable/UsersTable";
import { columns, data } from "../../assets/scheduledData";
import Event from "@/components/events/Event";

import { Button } from "@/components";
import Icon from "@/components/icon/Icon";
import DepositModal from "@/components/depositmodal/DepositModal";

interface DashboardProps {
  page: number;
  handlePageChange: (page: number) => void;
  setCurrentPage: (page: number) => void;
}
const DashboardPage: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(0);
  const [isOpenDepositModal, setOpenDepositModal] = useState(false);
  const endpoint: string = "https://jsonplaceholder.typicode.com/users";

  const handlePageChange = useCallback((rowId: { id: number }) => {
    const id = rowId.id;
    if (id) {
      setCurrentPage(id);
    }
  }, []);

  const toggleDepositModal = () => {
    setOpenDepositModal(!isOpenDepositModal);
  };

  if (currentPage === 0) {
    return (
      <Layout
        toggleDepositModal={toggleDepositModal}
        isOpenDepositModal={isOpenDepositModal}
      >
        <div className={styles.dashboardPage}>
          <div className={styles.title}>
            <Image src="/icons/home.png" width={20} height={20} alt="house" />
            Dashboard
          </div>
          <div>
            <BundleTotal toggleDepositModal={toggleDepositModal} />
          </div>
          <div className={styles.widgetContainer}>
            <Widgets />
          </div>

          <div className={styles.table}>
            <UsersTable
              endpoint={endpoint}
              columns={columns}
              data={data}
              tableTitle={"Scheduled"}
              handlePageChange={handlePageChange}
              setCurrentPage={setCurrentPage}
              button={
                <Button
                  image={
                    <Icon alt={"send icon"} src={"/icons/sendblack.svg"} />
                  }
                  className={"btnRowReverse primaryBtnWhiteBackground"}
                  label={"Send All Now"}
                />
              }
              icon={<Icon alt={"calendar icon"} src={"/icons/calendar.svg"} />}
            />
          </div>
        </div>
      </Layout>
    );
  }

  if (currentPage >= 1) {
    return <Event setCurrentPage={setCurrentPage} />;
  }
  return null;
};

export default DashboardPage;
