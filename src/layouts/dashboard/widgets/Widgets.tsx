import Image from "next/image";
import styles from "./widgets.module.scss";

import React from "react";

const Widgets = () => {
  return (
    <div className={styles.widgets}>
      <div className={styles.items}>
        <h3 className={styles.title}>scheduled</h3>
        <div className={styles.moneySign}>
          ₦ <span className={styles.amt}>15,000</span>
        </div>
        <div className={styles.percent}>
          <span>15 %</span>
          <span>.</span>
          <span>
            <Image src="/icons/user.svg" alt="user" width={15} height={15} /> 15
            / 15
          </span>
        </div>
      </div>
      <div className={styles.items}>
        <h3 className={styles.title}>all sent</h3>
        <div className={styles.moneySign}>
          ₦ <span className={styles.amt}>23,005,000,000</span>
        </div>
        <div className={styles.percent}>
          <span>15 %</span>
          <span>.</span>
          <span>
            <Image src="/icons/user.svg" alt="user" width={15} height={15} /> 15
            / 15
          </span>
        </div>
      </div>
      <div className={styles.items}>
        <div className={styles.title}>
          <h2>all redeemed</h2>
          <Image
            src="/icons/scorepie.svg"
            alt="user"
            width={41}
            height={41}
            className={styles.img}
          />
        </div>
        <div className={styles.moneySign}>
          ₦ <span className={styles.amt}>23,005,000,000</span>
        </div>
        <div className={styles.percent}>
          <span>15 %</span>
          <span>.</span>
          <span>
            <Image src="/icons/user.svg" alt="user" width={15} height={15} /> 15
            / 15
          </span>
        </div>
      </div>
      <div className={styles.items}>
        <h3 className={styles.title}>All returned</h3>
        <div className={styles.moneySign}>
          ₦ <span className={styles.amt}>15,000</span>
        </div>
        <div className={styles.percent}>
          <span>15 %</span>
          <span>.</span>
          <span>
            <Image src="/icons/user.svg" alt="user" width={15} height={15} /> 15
            / 15
          </span>
        </div>
      </div>
    </div>
  );
};

export default Widgets;
