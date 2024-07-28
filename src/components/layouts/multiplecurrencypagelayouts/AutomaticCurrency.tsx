import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const AutomaticCurrency = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text="Automatic Multiple currency accounts"
        src="/icons/currencies.svg"
      />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="automatic currency " url="/images/autmult.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="moregift automatically creates a new account for each Gift Cash currency. This allows you to concentrate on other important things."
            heading="Automatic Multiple currency accounts"
            text="Hold and manage as many Gift Cash currency types you receive from a single account"
            src="/icons/currencies.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AutomaticCurrency;
