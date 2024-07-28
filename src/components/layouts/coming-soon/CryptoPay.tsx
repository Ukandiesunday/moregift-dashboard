import React from "react";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const CryptoPay = () => {
  return (
    <div className={style.container} style={{ paddingTop: "80px" }}>
      <span className={style.crypto_span_mobile}>Not for Nigeria</span>
      <MobileTitle text="Pay with Crypto  " src="/icons/Outline.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="cryptopay photo" url="/images/cryptop.png" />
          <LearnMore />
        </div>
        <div className={style.left}>
          <span className={style.crypto_span}>Not for Nigeria</span>
          <OpenGiftItem
            description="Get the Gift Cash value of your crypto assets effortlessly and securely right when you need it in 120+ currencies. Explore endless possibilities with your Crypto today!"
            heading="Pay with Crypto"
            text="Unlock the power of your crypto with moregift crypto payment option!"
            src="/icons/Outline.svg"
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

export default CryptoPay;
