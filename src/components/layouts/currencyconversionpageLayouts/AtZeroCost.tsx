import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import React from "react";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const AtZeroCost = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Convert at zero cost" src="/icons/no-fee.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="spend gift" url="/images/convertatzer.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="We charge no fees for conversion. You can convert any Gift Cash currency pairs at zero fees."
            heading="Convert at zero cost"
            text="Convert at zero cost"
            src="/icons/no-fee.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AtZeroCost;
