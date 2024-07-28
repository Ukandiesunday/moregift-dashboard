import CardImage from "@/components/atoms/cardimage/CardImage";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
import LearnMore from "@/components/atoms/links/LearnMore";

import MobileTitle from "@/components/atoms/title/MobileTitle";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

const Diaspora = () => {
  return (
    <div className={style.container}>
      <h1 className={style.title}>We cover every need!</h1>

      <MobileTitle text="Diaspora Remittance" src="/icons/send-money.svg" />

      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Sending Gift Cash home? Don’t be hindered by countless regulations and high conversion fees. Our platform offers an easier, cheaper way to connect with loved ones back home."
            heading="Diaspora Gifting"
            text="Save more when you send Gift Cash to loved ones back home from any location"
            src="/icons/send-money.svg"
            content="Learn More"
            url="/opengiftcard"
          />
          <div className={style.links}>
            <GetFreeButton />

            {/* <HowItWorks /> */}
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="diaspora photo" url="/images/home1.png" />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default Diaspora;
