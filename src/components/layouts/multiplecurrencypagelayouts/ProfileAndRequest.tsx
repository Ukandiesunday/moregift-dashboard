import CardImage from "@/components/atoms/cardimage/CardImage";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";

import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";

import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";

const ProfileAndRequest = () => {
  return (
    <div className={style.container}>
      <MobileTitle text="Public Profile Links" src="/icons/link.svg" />
      <div className={style.wrapper}>
        <div className={style.right}>
          <CardImage
            alt="profile and request photo"
            url="/images/multi-public-profile.png"
          />
        </div>
        <div className={style.left}>
          <OpenGiftItem
            description="You can also allow your loved ones and the world send you Gift Cash directly from your profile page using your moregift Public profile link"
            heading="Public Profile Links"
            text="Your moregift Public Profile Link is more than just a link "
            src="/icons/link.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileAndRequest;
