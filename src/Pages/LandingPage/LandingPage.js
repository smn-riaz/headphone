import React from "react";
import ChoiceCard from "../../Components/ChoiceCard";
import AboutUs from "./AboutUs";
import BestSellingSection from "./BestSellingSection";
import FindChoice from "./FindChoice";
import OurProductSection from "./OurProductSection";
import ProductCategorySection from "./ProductCategorySection";
import TopBanner from "./TopBanner";

const LandingPage = () => {
  return (
    <main className="overflow-x-hidden-hidden">
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
      <section className=" py-4">
        <FindChoice />
      </section>
    </main>
  );
};

export default LandingPage;
