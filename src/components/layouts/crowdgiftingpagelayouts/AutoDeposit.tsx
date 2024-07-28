import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const AutoDeposit = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Auto Deposit To Bank" src="/icons/bank.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Connect your bank account and watch all your donations auto deposit as they come. You can also do a manual bulk deposit at your convenience"
            heading="Auto Deposit To Bank"
            text="Initiate real-time deposit to your bank with auto deposit "
            src="/icons/bank.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="auto deposit" url="/images/autodeposit.png" />
        </div>
      </div>
    </div>
  );
};

export default AutoDeposit;
