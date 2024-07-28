import CardImage from "@/components/atoms/cardimage/CardImage";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import style from "@/components/layouts/sendreceivepagelayouts/style.module.scss";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
// import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";

const BannerDashboard = () => {
  return (
    <div className={`${style.container} ${style.container2}`}>
      <MobileTitle text="Corporate Gifting" src="/icons/payout.svg" />
      <div className={`${style.wrapper} ${style.reverse}`}>
        <div className={style.left}>
          <OpenGiftItem
            description="From movies and spas to school fees and house rents, or just being able to save the Gift Cash in their bank, the way to an employees’ heart is not always in the supermarket. Give them real spending freedom with moregift tokens. They’ll be glad you did!"
            heading="Corporate Gifting"
            text="Your employees want Gift Cards that can pay for things that actually bother them "
            src="/icons/payout.svg"
          />
          <div className={style.links}>
            <GetFreeButton />
            {/* <HowItWorks /> */}
          </div>
        </div>
        <div className={`${style.right} ${style.mobile_dashboard} `}>
          <div className={style.dashb_img_desktop}>
            <CardImage
              alt="send and receive photo"
              url="/images/Sent-items.png"
            />
          </div>
          <div className={style.dashb_img_mobile}>
            <CardImage
              alt="send and receive photo"
              url="/images/Sent-item.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerDashboard;
