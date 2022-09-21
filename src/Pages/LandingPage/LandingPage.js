import React from "react";
import AboutUs from "./AboutUs";
import ProductCategorySection from "./ProductCategorySection";
import TopBanner from "./TopBanner";

const LandingPage = () => {
  return (
    <main>
      <section className="bg-gradient-to-r from-slate-700 to-slate-500 py-4">
        <TopBanner />
      </section>
      <section className="bg-gradient-to-r from-slate-500 to-slate-700 py-4">
        <AboutUs />
        <ProductCategorySection />
      </section>
    </main>
  );
};

export default LandingPage;
