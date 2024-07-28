import Image from "next/image";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import CardImage from "@/components/atoms/cardimage/CardImage";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const Identity = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Identity assurance Level 3" src="/icons/id-card.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="open gift photo" url="/images/home08.png" />
          <LearnMore />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Moregift uses IAL3 verification to ensure that you never send your   Gift Cash to the wrong person. Not only will you see their full name and moregift ID, you will also see the face of your beneficiary  and their complete public profile before you send."
            heading=" Identity assurance Level 3"
            text="Send your Gift Cash to the right person with our IAL3 protocol"
            src="/icons/id-card.svg"
            content="Learn More"
            url="/singleid"
          />
          <div className={style.links}>
            <GetFreeButton />

            {/* <HowItWorks /> */}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Identity;
