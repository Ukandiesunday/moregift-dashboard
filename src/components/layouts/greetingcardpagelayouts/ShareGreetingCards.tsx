import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const ShareGreetingCards = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Share Greeting Cards" src="/icons/share.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="Share greeting cards"
            url="/images/greetingcard04.svg"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Feeling overwhelmed with gratitude and emotions? Let your friends celebrate with you. Share your Greeting Cards and let the world know you’re loved and valued."
            heading="Share Greeting Cards"
            text="Share the love with the world"
            src="/icons/share.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShareGreetingCards;
