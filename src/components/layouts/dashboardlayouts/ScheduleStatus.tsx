import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
const ScheduleStatus = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Schedule sending" src="/icons/Calendar2.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage alt="dasboard photo" url="/images/dashboard04.png" />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="Need to plan ahead for the entire year? No worries, schedule all your company’s gifting events for the year and let us take care of all gift deliveries while you focus on your work. You can edit, cancel, or speed up sending anytime you want."
            heading="Schedule sending"
            text="Schedule bulk sending "
            src="/icons/Calendar2.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleStatus;
