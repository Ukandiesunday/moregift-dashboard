import React from "react";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const RemittanceFriends = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text=" Gifting to Friends and Family in Diaspora"
        src="/icons/Forex.svg"
      />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="diaspora photo" url="/images/home02.png" />
          <LearnMore />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="You can now send Gift Cash effortlessly to friends and family overseas in your local currency swiftly and securely."
            heading="Gifting to Friends and Family in Diaspora"
            text="Enough with the forex nightmares, just send Gift Cash abroad in your local currency"
            src="/icons/Forex.svg"
            content="Learn More"
            url="/crowdgifting"
          />
          <div className={style.links}>
            <GetFreeButton />

            <HowItWorks />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RemittanceFriends;
