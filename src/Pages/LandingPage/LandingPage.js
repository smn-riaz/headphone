import React, { useEffect, useState } from "react";
import AboutUs from "./AboutUs";
import BestSellingSection from "./BestSellingSection";
import FeaturesSection from "./FeaturesSection";
import FooterSection from "./FooterSection";
import OurProductSection from "./OurProductSection";
import PlaySongSection from "./PlaySongSection";
import ProductCategorySection from "./ProductCategorySection";
import TopBanner from "./TopBanner";
import ScrollToTop from "react-scroll-to-top";
import TopGo from "../../Components/TopGo";
import PreLoader from "../../Components/PreLoader";

const LandingPage = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);
  return (
    <main className="overflow-x-hidden">
      {
        loading ? <PreLoader /> :
        <div>
        <section className="bg-gradient-to-r from-slate-700 to-slate-500 py-4">
          <TopBanner />
        </section>
        <section className="bg-gradient-to-r from-slate-500 to-slate-700 py-4">
          <AboutUs />
          <ProductCategorySection />
          <OurProductSection />
        </section>
        <section className="bg-gray-500">
          <BestSellingSection />
        </section>
        <section>
          <FeaturesSection />
          <PlaySongSection />
        </section>
        <section className="bg-gradient-to-r from-slate-700 to-slate-500 py-4">
          <FooterSection />
        </section>
        <ScrollToTop smooth component={<TopGo />} />
      </div>
      }
    </main>
  );
};

export default LandingPage;
