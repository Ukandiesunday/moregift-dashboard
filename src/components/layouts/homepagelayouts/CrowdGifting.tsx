import CardImage from "@/components/atoms/cardimage/CardImage";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
import LearnMore from "@/components/atoms/links/LearnMore";

import MobileTitle from "@/components/atoms/title/MobileTitle";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

const CrowdGifting = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Crowd gifting" src="/icons/line_cp.svg" />

      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Unlock global support for your causes! Receive and hold any Gift Cash currency. Convert to your preferred Gift Cash currency type at low fees, and expand your outreach and impact."
            heading="Crowd Gifting"
            text="Enjoy seamless and borderless crowd gifting despite your location and currency"
            src="/icons/line_cp.svg"
          />
          <div className={style.links}>
            <GetFreeButton />

            {/* <HowItWorks /> */}
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="crowdgifting photo" url="/images/home03.png" />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};

export default CrowdGifting;
