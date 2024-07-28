import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const IdAndUsername = () => {
  return (
    <div className={style.container}>
      <MobileTitle
        text="Single Account ID and Username"
        src="/icons/user.svg"
      />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="Need to receive Gift Cash donations on X, Facebook or YouTube while keeping your banking information PRIVATE? Use your moregift ID or Username. All your Gift Cash will be sent to your banks behind the scene."
            heading="Single Account ID and Username"
            text="Protect you banking details in public spaces with your moregift ID or Username "
            src="/icons/user.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
        <div className={style.right}>
          <CardImage alt="id and username" url="/images/id.png" />
        </div>
      </div>
    </div>
  );
};

export default IdAndUsername;
