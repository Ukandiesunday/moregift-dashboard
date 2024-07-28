import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import React from "react";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const Convert = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text="Convert between Gift Cash currencies"
        src="/icons/currency-exchange.svg"
      />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt=" convert currency"
            url="/images/convertcurrencies.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Easily convert from one Gift Cash currency to another at your convenience. Deposit to your bank in any Gift Cash currency you need, besides the one that was originally sent to you."
            heading="Convert between Gift Cash currencies"
            text="Convert your Gift Cash to any Gift Cash currency type you like"
            src="/icons/currency-exchange.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Convert;
