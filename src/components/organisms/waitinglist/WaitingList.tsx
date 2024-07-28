import WaitingButton from "@/components/atoms/waitinglistbutton/WaitingButton";
import style from "@/components/organisms/waitinglist/WaitingList.module.scss";
import Image from "next/image";
import WaitListEmail from "../waitingemail/WaitListEmail";
import { useState } from "react";
import EmailCongrats from "@/components/molecules/emailCongrats/EmailCongrats";

export const WaitingList = () => {
  const [mailModalOpen, setMailModal] = useState(false);
  const [okOpen, setOkOpen] = useState(false);
  const closeModal = () => {
    if (mailModalOpen) {
      setMailModal(false);
    }
  };

  const handleMailOpen = () => {
    setMailModal(!mailModalOpen);
  };

  return (
    <div>
      <div className={style.waiting_list} onClick={closeModal}>
        <nav className={style.nav}>
          <Image src="/icons/whitelogo.svg" alt="" width="115" height="24" />
          <WaitingButton
            handleMailOpen={handleMailOpen}
            text={`Join the waiting list`}
          />
        </nav>

        <main className={style.main}>
          <div className={style.hero}>
            <div className={style.hero_left}>
              ...meet the <span className={style.span}>world’s first</span>
              Gift-as-a-Service(GaaS) application that gives you 100% spending
              freedom.
            </div>
            <div className={style.hero_right}>
              <Image
                priority
                src="/images/heroimgb.png"
                width={420}
                height={320}
                alt=""
                className={style.img}
              />
            </div>
          </div>
          <div className={style.btn}>
            <WaitingButton
              handleMailOpen={handleMailOpen}
              text={`Join the waiting list`}
            />
          </div>

          <div className={style.description}>
            <p className={style.description_p}>
              <span>We remove every annoying obstacle from your way,</span> from
              inflated fees, inconvenient regulations, taxes, transaction
              restrictions to spending. You can now chill, request, send,
              receive, and spend your gift anyhow and anywhere you like.
            </p>
          </div>
        </main>
      </div>
      <WaitListEmail
        setMailModal={setMailModal}
        mailModal={mailModalOpen}
        okOpen={okOpen}
        setOkOpen={setOkOpen}
      />
      <div>{okOpen && <EmailCongrats setOkOpen={setOkOpen} />}</div>
    </div>
  );
};
