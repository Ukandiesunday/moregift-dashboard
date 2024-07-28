import AtZeroCost from "@/components/layouts/currencyconversionpageLayouts/AtZeroCost";
import Convert from "@/components/layouts/currencyconversionpageLayouts/Convert";
import SetAutoConversion from "@/components/layouts/currencyconversionpageLayouts/SetAutoConversion";
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
        title={`currency conversion`}
        description={`Learn about our currency conversion page`}
      />

      <Navbar />
      <Banner
        checkmark={`/icons/check-mark.png`}
        text1={`Enjoy instant Gift Cash Currency Conversion.`}
        text2={`Convert between Gift Cash currencies`}
        text3={`Set auto-conversion for Gift Cash currencies`}
        text4={`Convert at zero cost`}
        title={`Currency conversion`}
        icon={`/icons/convert.svg`}
        alt={`conversion photo`}
        src={`/images/conversionhero.png`}
      />
      <NewsLinks />
      <Convert />
      <SetAutoConversion />
      <AtZeroCost />
      <Questions />

      <Footer />
    </>
  );
};

export default Index;
