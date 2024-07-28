import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const TrackRedeem = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Track redemption status" src="/icons/gift-card.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Know who has redeemed their Gift Cash and who is awaiting redemption. Receive rejected Gift Cash into your corporate Gift Cash bundle and either reuse for subsequent events or deposit to your company bank account."
            heading="Track redemption status"
            text="Keep close track of Gift Cash redemption status "
            src="/icons/gift-card.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="track redeem photo" url="/images/dashboard03.png" />
        </div>
      </div>
    </div>
  );
};

export default TrackRedeem;
