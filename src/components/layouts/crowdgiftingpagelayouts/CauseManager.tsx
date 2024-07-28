import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const CauseManager = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Cause manager" src="/icons/heart2.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="cause manager" url="/images/causemanager.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Seeking gifting for a charity cause? Looking for an easy way to streamline recurrent gift donations in your multinational organization? Need a way for your followers to appreciate you? moregift cause manager has you covered"
            heading="Cause Manager"
            text="Create causes that receive global gift donations with ease "
            src="/icons/heart2.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CauseManager;
