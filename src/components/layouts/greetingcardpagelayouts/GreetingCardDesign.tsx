import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const GreetingCardDesign = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text="Greeting Card Designs"
        src="/icons/color-palette.svg"
      />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="send and receive photo"
            // url="/images/greetingcarddesign.png"
            url="/images/greetingcard02.svg"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Utilize message templates for multiple gift categories, choose lovely backgrounds, and add music to personalize your cards for a memorable gifting experience."
            heading="Greeting Card Designs"
            text="Create customized greeting card with moregift's Greeting Cards Designer "
            src="/icons/color-palette.svg"
            remove={`how_it_work`}
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GreetingCardDesign;
