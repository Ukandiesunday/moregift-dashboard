import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const DepositBank = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Deposit To Bank" src="/icons/bank.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="send and receive photo2"
            url="/images/depositbank.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Don’t feel like shopping with your Gift Card? Stop trying to trade it. Moregift Cards allow you to instantly deposit your gift cash into your bank account anytime."
            heading="Deposit To Bank"
            text="You can now Deposit your Gift Cash into your bank account whenever you want"
            src="/icons/bank.svg"
            content="View use case"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DepositBank;
