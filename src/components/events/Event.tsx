import React from "react";
import styles from "./event.module.scss";
import Layout from "@/pages/dashboard/layout";
import Button from "../button/Button";
import Icon from "../icon/Icon";
import UsersTable from "../userstable/UsersTable";
import { beneficiaryData, columns } from "../../assets/beneficiaryData";

const Event = ({ setCurrentPage }: any) => {
  return (
    <div className={styles.eventContainer}>
      <Layout>
        <main className={styles.main}>
          <div className={styles.top}>
            <div className={styles.topLeft}>
              <Button
                className={"primaryBtnWhiteBackground "}
                onClick={() => setCurrentPage(0)}
                image={<Icon src="/icons/arrowback.svg" alt="arrow left" />}
              />

              <span className={styles.eventTitle}>HAPPY EASTER</span>
              <span className={styles.status}>Scheduled</span>
            </div>
            <div className={styles.topRight}>
              <Button
                className={"primaryBtnWhiteBackground btnRowReverse"}
                image={<Icon src="/icons/arrowback.svg" alt="arrow left" />}
                label={"Cancel send"}
              />
              <Button
                className={"primaryBtnWhiteBackground btnRowReverse"}
                image={<Icon src="/icons/edit.svg" alt="edit" />}
                label={"Edit"}
              />
              <Button
                className={"primaryBtnWhiteBackground"}
                image={<Icon src="/icons/send01.svg" alt="send icon" />}
                label={" Send now"}
              />
            </div>
          </div>
          <div className={styles.timeDesc}>
            <span>
              <b>Created:</b> 23/03/2023 09:34
            </span>

            <span>
              <b>Sending</b> 30/03/2023 06:00
            </span>
            <span>
              <b>Last edited</b> 26/03/2023 14:56
            </span>
          </div>
          <div className={styles.totalSendingWrapper}>
            <span className={styles.totalSendingTitle}>Total Sending</span>
            <div className={styles.totalSendingContent}> ₦ 15,000,000.00</div>
          </div>
          <div className={styles.noteWrapper}>
            <span className={styles.noteTitle}>Total Sending</span>
            <div className={styles.noteContent}>
              Hi, <b>#firstname,</b> Your contribution and hard work has helped
              us exceed our expectations this year. Have a blissful Easter
              holiday
            </div>
          </div>
          <UsersTable
            data={beneficiaryData}
            columns={columns}
            tableTitle={"Beneficiary"}
          />
        </main>
      </Layout>
    </div>
  );
};

export default Event;
