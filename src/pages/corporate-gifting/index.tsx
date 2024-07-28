import BannerDashboard from "@/components/layouts/dashboardlayouts/BannerDasbaord";

import ScheduleStatus from "@/components/layouts/dashboardlayouts/ScheduleStatus";
import SendGift from "@/components/layouts/dashboardlayouts/SentGift";
import TrackRedeem from "@/components/layouts/dashboardlayouts/TrackRedeem";
import NewsLinks from "@/components/molecules/newsLinks/NewsLinks";
import { Header } from "@/components/organisms";
import Footer from "@/components/organisms/footer/Footer";

import Navbar from "@/components/organisms/navbar/Navbar";
import Questions from "@/components/organisms/questions/Questions";

const Index = () => {
  return (
    <>
      <Header
        title={`Corporate dashboard`}
        description={`Learn about corporate dashboard`}
      />

      <Navbar />

      <div style={{ marginBlock: "65px" }}>
        <BannerDashboard />
        <NewsLinks />
        <SendGift />
        <TrackRedeem />
        <ScheduleStatus />
        <Questions />
      </div>

      <Footer />
    </>
  );
};

export default Index;
