import React from "react";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const MultiCurrency = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Multi-currency Account" src="/icons/wallet.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="multicurrency photo" url="/images/home06.png" />
          <LearnMore />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="No more hassle! You can now hold and manage accounts in more than one Gift Cash currency. moregift automatically creates accounts for every new Gift Cash currency type you receive. Enjoy effortless global Gift Cash transactions."
            heading="Multi-currency Account"
            text="115+ currencies, all with one Account ID"
            src="/icons/wallet.svg"
            content="Learn More"
            url="/crowdgifting"
          />
          <div className={style.links}>
            <GetFreeButton />

            {/* <HowItWorks /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MultiCurrency;
