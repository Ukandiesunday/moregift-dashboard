import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import React from "react";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const SetAutoConversion = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Set auto-conversion" src="/icons/autoconvert.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Choose preferred Gift Cash currency type for Gift Cash donations to allow your supporters from all over the world to contribute in their local currencies. moregift automatically converts every Gift Cash currency based on  your preference"
            heading="Set auto-conversions"
            text="Set auto-conversion"
            src="/icons/autoconvert.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="spend gift" url="/images/setautocon.png" />
        </div>
      </div>
    </div>
  );
};

export default SetAutoConversion;
