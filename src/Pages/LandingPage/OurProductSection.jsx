import React from "react";
import prd1 from "../../Assets/prd1.png";
import prd2 from "../../Assets/prd2.png";
import prd3 from "../../Assets/prd3.png";
import prd4 from "../../Assets/prd4.png";
import prd5 from "../../Assets/prd5.png";
import prd6 from "../../Assets/prd6.png";
import prd7 from "../../Assets/prd7.png";
import prd8 from "../../Assets/prd8.png";
import prd9 from "../../Assets/prd9.png";

const OurProductSection = () => {
  return (
    <main className="">
      <section className="py-8">
        <div>
          <h1 className="text-white text-4xl text-center font-semibold">
            Our Products
          </h1>
        </div>
      </section>
      <section className="w-3/4 mx-auto">
        <div className="sm:grid grid-cols-7">
          <div class="m-2 p-8 col-start-1 col-end-4 bg-blue-400 ">
          <img className="" src={prd2} alt="" />
          </div>
          <div className="m-2 col-start-4 col-span-4 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-1 col-end-5 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-5 col-end-8 col-span-2 row-span-2 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-1 col-end-3 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-3 col-end-5 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-1 col-end-3 bg-blue-400">
            <img className="h-full" src={prd2} alt="" />
          </div>
          <div class="m-2 col-start-3 col-end-9 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
          
          <div class="m-2 col-start-1 col-end-9 bg-blue-400">
            <img className="" src={prd2} alt="" />
          </div>
         
        </div>
      </section>
    </main>
  );
};

export default OurProductSection;
