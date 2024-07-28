import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const ReceiveDonation = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Receive Gift Cash donations" src="/icons/donate.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="receive donation "
            url="/images/receivedonation.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Receive Gift Cash  donations from across the world for any cause or purpose without worrying about your location, country, or gift cash currency"
            heading="Receive Gift Cash donations"
            text="Receive Gift Cash donations from all over the world! "
            src="/icons/donate.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReceiveDonation;
