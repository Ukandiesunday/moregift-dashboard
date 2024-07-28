import AutoConvert from "@/components/layouts/crowdgiftingpagelayouts/AutoConvert";
import AutoDeposit from "@/components/layouts/crowdgiftingpagelayouts/AutoDeposit";
import CauseManager from "@/components/layouts/crowdgiftingpagelayouts/CauseManager";
import ReceiveDonation from "@/components/layouts/crowdgiftingpagelayouts/ReceiveDonation";
import NewsLinks from "@/components/molecules/newsLinks/NewsLinks";
import { Header } from "@/components/organisms";
import Footer from "@/components/organisms/footer/Footer";

import Banner from "@/components/organisms/heros/banner/Banner";
import Navbar from "@/components/organisms/navbar/Navbar";
import Questions from "@/components/organisms/questions/Questions";

const Index = () => {
  return (
    <>
      <Header
        title={`Crowd Gifting`}
        description={`Learn about crowd gifting`}
      />
      <Navbar />
      <div>
        <Banner
          checkmark={`/icons/check-mark.png`}
          text1={`Enable global gift donations for your causes`}
          text2={`Receive Gift Cash in any currency from anywhere`}
          text3={`Auto convert incoming Gift Cash currencies to preferred`}
          text4={`Auto deposit to your bank in realtime`}
          title={`Crowd Gifting`}
          icon={`/icons/donation.svg`}
          alt={`crowd gifting`}
          src={`/images/crowdgiftinghero.png`}
        />
        <NewsLinks />
        <CauseManager />
        <AutoDeposit />
        <ReceiveDonation />
        <AutoConvert />
        <Questions />
      </div>
      <Footer />
    </>
  );
};

export default Index;
