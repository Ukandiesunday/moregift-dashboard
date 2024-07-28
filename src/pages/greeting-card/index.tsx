import GreetingCardDesign from "@/components/layouts/greetingcardpagelayouts/GreetingCardDesign";
import GreetingCardStories from "@/components/layouts/greetingcardpagelayouts/GreetingCardStories";
import ShareGreetingCards from "@/components/layouts/greetingcardpagelayouts/ShareGreetingCards";
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
        title={`Greeting Card`}
        description={`Learn about greeting cards`}
      />
      <Navbar />

      <div style={{ marginBlock: "65px" }}>
        <Banner
          checkmark={`/icons/check-mark.png`}
          text1={`Send memories with moregift Greeting Cards`}
          text2={`Greeting Card designer`}
          text3={`Memorable Stories`}
          text4={`Share to friends`}
          title={`Greeting Cards`}
          icon={`/icons/transfer.svg`}
          alt={`greeting card`}
          // src={`/images/greetingcardhero.png`}
          src={`/images/greetingcard01.svg`}
        />
        <NewsLinks />
        <GreetingCardDesign />
        <GreetingCardStories />
        <ShareGreetingCards />

        <Questions />
      </div>

      <Footer />
    </>
  );
};

export default Index;
