import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import Image from "next/image";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import LearnMore from "@/components/atoms/links/LearnMore";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
const GreetingCard = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Greeting Cards" src="/icons/picture1.png" />

      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Send your Gift Cash with personalized greeting cards on moregift to create a memorable experience. Customize for weddings, birthdays, and more, accompanied by soothing music, enhancing connections with loved ones. "
            heading="Greeting Cards"
            text="Create evergreen memories every time you send Gift Cash to loved ones"
            src="/icons/picture1.png"
            content="Learn More"
            url="/greetingcard"
          />
          <div className={style.links}>
            <GetFreeButton />

            {/* <HowItWorks /> */}
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="greeting cards photo" url="/images/home07.png" />
          <LearnMore />
        </div>
      </div>
    </div>
  );
};
export default GreetingCard;
