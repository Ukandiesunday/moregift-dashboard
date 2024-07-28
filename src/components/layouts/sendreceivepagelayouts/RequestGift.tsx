import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import React from "react";
import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const RequestGift = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Request Gift" src="/icons/gift.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="send and receive photo" url="/images/requst.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Tap 'Request Gift' on your MoreGift App to generate a Gift Card request link and share to anyone and everyone and receive Gift Cards that can pay from any goods or service online and offline or deposit your Gift Cash into your bank account."
            heading="Request Gift"
            text="Request and Receive Open Gift Cards that grant you 100% spending freedom"
            src="/icons/gift.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestGift;
