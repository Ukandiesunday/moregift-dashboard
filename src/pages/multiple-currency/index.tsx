// import { Header, } from "@/components/organisms";

import Questions from "@/components/organisms/questions/Questions";

import IdAndUsername from "@/components/layouts/multiplecurrencypagelayouts/IdAndUsername";
import ProfileAndRequest from "@/components/layouts/multiplecurrencypagelayouts/ProfileAndRequest";
import { Header } from "@/components/organisms";
import Navbar from "@/components/organisms/navbar/Navbar";
import Footer from "@/components/organisms/footer/Footer";
import Banner from "@/components/organisms/heros/banner/Banner";
import NewsLinks from "@/components/molecules/newsLinks/NewsLinks";
import AutomaticCurrency from "@/components/layouts/multiplecurrencypagelayouts/AutomaticCurrency";

const Index = () => {
  return (
    <>
      <Header
        title={`multiple currency `}
        description={`Learn about multiple currency`}
      />
      <Navbar />

      <div>
        <Banner
          checkmark={`/icons/check-mark.png`}
          text1={`One Account ID for your all bank accounts and 150+ currencies `}
          text2={`Automatic account creation for new currency type`}
          text3={`Receive and hold Gift Cash in 150+ currencies`}
          text4={`Mask all your bank accounts with one ID and link`}
          title={`Multiple currency with One account ID`}
          icon={`/icons/wallet.svg`}
          alt={`multiple currency`}
          src={`/images/multiple-currencyba.png`}
        />
        <NewsLinks />
        <AutomaticCurrency />
        <IdAndUsername />

        <ProfileAndRequest />

        <Questions />
      </div>

      <Footer />
    </>
  );
};

export default Index;
