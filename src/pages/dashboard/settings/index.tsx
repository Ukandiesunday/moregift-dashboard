import styles from "./settings.module.scss";
import Layout from "../layout";
import { SlWrench } from "react-icons/sl";
import Image from "next/image";
import { useState } from "react";

import Input from "@/components/input/Input";
import { Button } from "@/components";
import Icon from "@/components/icon/Icon";
import { bankInfo2 } from "@/utility/bankInfo";

const tapItems = [
  {
    text: "Profile settings",
    id: 1,
  },
  {
    text: "Security",
    id: 2,
  },
  {
    text: "Banking information",
    id: 3,
  },
];

const SettingsPage = () => {
  const [tap, setTap] = useState(1);

  function updateTap(id: number) {
    setTap(id);
  }

  return (
    <Layout>
      <div className={styles.settings}>
        <div className={styles.title}>
          <SlWrench />
          Settings
        </div>
        <div className={styles.tapsContainer}>
          {tapItems.map((item, ind) => (
            <div
              className={`${styles.tap} ${
                item.id === tap ? styles.tapUnderline : styles.taps
              }`}
              key={ind}
              onClick={() => updateTap(item.id)}
            >
              {item.text}
            </div>
          ))}
        </div>

        {/* profile content section */}

        {tap === 1 && (
          <div className={styles.profileContainer}>
            <label htmlFor="file" className={styles.label}>
              <Image
                src="/icons/userbig.svg"
                alt="user logo"
                height={100}
                width={100}
                className={styles.img}
              />
              <input
                className={styles.userInput}
                type="file"
                name=""
                id="file"
              />
            </label>

            <div className={styles.bankName}>
              <span>Zenith Bank Plc</span>
              <span>ID234356</span>
            </div>
          </div>
        )}
        {/* Security content section */}
        {tap === 2 && (
          <div className={styles.securityContainer}>
            <div className={styles.securityContent}>
              <Input
                type="text"
                placeholder=" Email e.g:
zen****@gmail.com"
              />
              <Input
                type="password"
                placeholder="password"
                iconButton={
                  <Image
                    alt=""
                    src="/icons/buttonedit.svg"
                    width={40}
                    height={30}
                  />
                }
              />
            </div>
          </div>
        )}
        {/* banking information content section */}
        {tap === 3 && (
          <div className={styles.bankingInfoContainer}>
            <div className={styles.bankingInfoContent}>
              <div className={styles.top}>
                <div className={styles.topLeft}>Banking information</div>
                <div className={styles.topright}>
                  <Button
                    image={
                      <Image
                        src="/icons/plusblack.svg"
                        height={14}
                        width={14}
                        alt=""
                      />
                    }
                    label={"Add bank Account"}
                    image2={
                      <Image
                        src="/icons/bank.svg"
                        height={14}
                        width={14}
                        alt=""
                      />
                    }
                    className={"primaryBtnWhiteBackground"}
                  />
                </div>
              </div>

              <div className={styles.bottom}>
                {bankInfo2.map((info, ind) => (
                  <div key={ind} className={styles.bankDetails}>
                    <div className={styles.detailsWrapper}>
                      <Icon src={info.logo} alt={"fcmb logo"} />
                      <span className={styles.details}>
                        <span>{info.bank_name}</span>
                        <span>{info.second_bank}</span>
                        <span>{info.account_number}</span>
                      </span>
                    </div>

                    <Icon src={info.close} alt="" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
};

export default SettingsPage;
