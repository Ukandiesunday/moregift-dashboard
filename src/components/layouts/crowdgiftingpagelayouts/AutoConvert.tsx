import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const AutoConvert = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Auto Convert Currency" src="/icons/convert.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Choose a preferred currency for Gift Cash donations, allowing your supporters from all over the world to give conveniently in their local currency while we handle all your conversions for you."
            heading="Auto Convert Currency"
            text="Don’t let currency conversion discourage your supporters "
            src="/icons/convert.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="auto convert" url="/images/autoconvert.png" />
        </div>
      </div>
    </div>
  );
};

export default AutoConvert;
