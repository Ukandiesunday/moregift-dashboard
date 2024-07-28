import style from "./home.module.scss";

import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import NewsLinks from "@/components/molecules/newsLinks/NewsLinks";

import CorporateGifting from "@/components/layouts/homepagelayouts/CorporateGifting";

import { Header } from "@/components/organisms";

import HeroHome from "@/components/organisms/heros/HeroHome";

import OpenGiftItem from "@/components/molecules/openGiftItem/OpenGiftItem";
import MobileTitle from "@/components/atoms/title/MobileTitle";
import GetFreeButton from "@/components/atoms/getfree/GetFreeButton";
import CardImage from "@/components/atoms/cardimage/CardImage";
import HowItWorks from "@/components/atoms/howItWorksBtn/HowItWorks";
import ToastFree from "@/components/organisms/toastFreedom/ToastFree";

const Index = () => {
  return (
    <div className={style.home}>
      <Header title={`Home`} description={`Get latest about our website`} />

      <Navbar />

      <HeroHome />
      <NewsLinks />
      <ToastFree />
      <h2 className={style.h2}>What you can do with moregift</h2>
      <div className={style.container}>
        <MobileTitle text="Request Gift" src="/icons/gift.svg" />
        <div className={`${style.content} ${style.row}`}>
          <div className={style.left}>
            <OpenGiftItem
              description="Tap 'Request Gift' on your MoreGift App to generate a Gift Card request link and share to anyone and everyone and receive Gift Cards that can pay from any goods or service online and offline or deposit your Gift Cash into your bank account."
              heading="Request Gift"
              text="Request and Receive Open Gift Cards that grant you 100% spending freedom"
              src="/icons/gift.svg"
            />
            <div className={style.links}>
              <GetFreeButton />
              {/* <HowItWorks url={"/home"} /> */}
            </div>
          </div>
          <div className={style.right}>
            <CardImage
              alt="send and receive photo"
              url="/images/requestgift.png"
            />
          </div>
        </div>
      </div>

      <div className={style.container}>
        <MobileTitle text="Send Gift Cards" src="/icons/send.svg" />
        <div className={style.content}>
          <div className={style.right}>
            <CardImage
              alt="send and receive photo2"
              url="/images/sendgiftcad.png"
            />
          </div>
          <div className={style.left}>
            <OpenGiftItem
              description="Gift your beneficiaries open Gift Cards that empower them to spend on anything, anywhere."
              heading="Send Gift Cards"
              text="Send Open Gift Cards that can buy anything from anyone anywhere"
              src="/icons/send.svg"
            />
            <div className={style.links}>
              <GetFreeButton />
              {/* <HowItWorks url={"/send-receive-gift"} /> */}
            </div>
          </div>
        </div>
      </div>
      <div className={style.container}>
        <MobileTitle text="Deposit To Bank" src="/icons/bank.svg" />
        <div className={`${style.content} ${style.row}`}>
          <div className={style.left}>
            <OpenGiftItem
              description="Don’t feel like shopping with your Gift Card? Stop trying to trade it. Moregift Cards allow you to instantly deposit your gift cash into your bank account anytime."
              heading="Deposit To Bank"
              text="You can now Deposit your Gift Cash into your bank account whenever you want"
              src="/icons/bank.svg"
              content="View use case"
            />
            <div className={style.links}>
              <GetFreeButton />
            </div>
          </div>
          <div className={style.right}>
            <CardImage alt="deposit cards photo" url="/images/deposit.png" />
          </div>
        </div>
      </div>

      <div className={style.container}>
        <MobileTitle text="Greeting Cards" src="/icons/picture1.png" />
        <div className={style.content}>
          <div className={style.right}>
            <CardImage
              alt="greeting cards photo"
              url="/images/greetingcard.png"
            />
          </div>
          <div className={style.right}>
            <OpenGiftItem
              description="Send your gift cash with personalized greeting cards on MoreGift to create a memorable experience. Customize for weddings, birthdays, and more, accompanied by soothing music, enhancing connections with loved ones. "
              heading="Greeting Cards"
              text="Create evergreen memories every time you send a Gift Cash to loved ones"
              src="/icons/picture1.png"
              content="Learn More"
              url="/greeting-card"
            />
            <div className={style.links}>
              <GetFreeButton />

              <HowItWorks url={"/greeting-card"} />
            </div>
          </div>
        </div>
      </div>
      <CorporateGifting />
      <Footer />
    </div>
  );
};

export default Index;
