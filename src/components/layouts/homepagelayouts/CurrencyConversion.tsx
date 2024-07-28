import React from "react";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const CurrencyConversion = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Currency conversion" src="/icons/convert.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="conversion photo" url="/images/home04.png" />
          <LearnMore />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Seamlessly convert Gift Cash between currencies anytime, anywhere, at zero fees. Your Gift Cash, your way, without limitations."
            heading="Currency conversion"
            text="Instant Gift Cash currency conversion at Zero fees and best rates"
            src="/icons/convert.svg"
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

export default CurrencyConversion;
