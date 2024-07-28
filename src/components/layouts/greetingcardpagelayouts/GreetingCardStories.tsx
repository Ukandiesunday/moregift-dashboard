import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const GreetingCardStories = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Greeting Card Stories" src="/icons/spa.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Unwind by reading through a slide of beautiful messages from your loved ones as many times as you want."
            heading="Greeting Card Stories"
            text="Memories hold lasting value. Relive them with moregift stories"
            src="/icons/spa.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage
            alt="greeting card stories"
            url="/images/greetingcard03.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GreetingCardStories;
