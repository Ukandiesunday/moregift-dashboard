import Questions from "@/components/organisms/questions/Questions";
import RequestGift from "@/components/layouts/sendreceivepagelayouts/RequestGift";
import SendGiftCards from "@/components/layouts/sendreceivepagelayouts/SendGiftCards";
import DepositBank from "@/components/layouts/sendreceivepagelayouts/DepositBank";

import { Header } from "@/components/organisms";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import Banner from "@/components/organisms/heros/banner/Banner";
import NewsLinks from "@/components/molecules/newsLinks/NewsLinks";

const Index = () => {
  return (
    <>
      <Header
        title={`Send Receive Gift`}
        description={`Learn about our send receive gift page`}
      />
      <Navbar />

      <div style={{ marginBlock: "65px" }}>
        <Banner
          checkmark={`/icons/check-mark.png`}
          text1={`Send and Receive Gift Cash from anywhere, instantly, and tax-free `}
          text2={`Send and receive Gift Cash`}
          text3={`Request Gift Cash`}
          text4={`Deposit Gift Cash into bank account`}
          title={`Send and receive Gift Cash`}
          icon={`/icons/transfer.svg`}
          alt={`send & receive cash photo`}
          src={`/images/sendgifthero.png`}
        />
        <NewsLinks />
        <RequestGift />
        <SendGiftCards />
        <DepositBank />

        <Questions />
      </div>

      <Footer />
    </>
  );
};

export default Index;
