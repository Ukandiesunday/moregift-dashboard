import React from "react";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";

import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const CorporateGifting = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Corporate Gifting" src="/icons/payout.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Empower your employees with MoreGift's “flexible” gift cards: spend anywhere, deposit into bank accounts, or get refunded for unredeemed gift cards. No more wasted funds. Enjoy Freedom and convenience!"
            heading="Corporate Gifting"
            text="Give your employees Gift Cards that can pay for things that actually bother them"
            src="/icons/payout.svg"
          />
          <div className={style.links}>
            <GetFreeButton />

            <HowItWorks url={"/corporate-gifting"} />
          </div>
        </div>
        <div className={style.right}>
          <CardImage
            alt="corporate gifting  photo"
            url="/images/corporate-gifting.png"
          />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default CorporateGifting;
