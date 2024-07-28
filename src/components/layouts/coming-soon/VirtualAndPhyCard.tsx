import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const VirtualAndPhyCard = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text="Virtual and physical debit cards"
        src="/icons/credit-card.svg"
      />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Spend freely and globally for both card-present and card-not-present transactions with virtual and physical debit cards linked to as many Gift Cash currencies as you want."
            heading="Virtual and physical debit cards"
            text="Hold virtual and physical debit cards linked to the Gift Cash currencies in your moregift account "
            src="/icons/credit-card.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="id and username" url="/images/virtual.png" />
        </div>
      </div>
    </div>
  );
};

export default VirtualAndPhyCard;
