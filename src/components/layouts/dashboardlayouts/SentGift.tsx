import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const SendGift = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Send Gift Cards" src="/icons/send.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="send and receive photo"
            url="/images/dashboard2.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Upload a list of beneficiaries and respective Gift Cash amounts, add a single note for all and send instantly."
            heading="Send Gift Cash"
            text="Bulk Send  Gift Cash to all your staff "
            src="/icons/send.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SendGift;
