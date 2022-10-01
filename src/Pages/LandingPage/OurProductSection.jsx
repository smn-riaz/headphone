import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import prd1 from "../../Assets/prd1.png";
import prd2 from "../../Assets/prd2.png";
import prd3 from "../../Assets/prd3.png";
import prd4 from "../../Assets/prd4.png";
import prd5 from "../../Assets/prd5.png";
import prd6 from "../../Assets/prd6.png";
import prd7 from "../../Assets/prd7.png";
import prd8 from "../../Assets/prd9.png";

const OurProductSection = () => {
  const gadgets = [
    {
      image: prd1,
      price: 23,
      name: "Water Purifier",
      star: 5,
    },
    {
      image: prd2,
      price: 23,
      name: "Toaster",
      star: 5,
    },
    {
      image: prd3,
      price: 23,
      name: "Coffee Maker",
      star: 3,
    },
    {
      image: prd4,
      price: 23,
      name: "Cleaner",
      star: 4,
    },
    {
      image: prd5,
      price: 23,
      name: "Hair Dryer",
      star: 4,
    },
    {
      image: prd6,
      price: 23,
      name: "Washing Machine",
      star: 5,
    },
    {
      image: prd7,
      price: 23,
      name: "Water Purifier",
      star: 4,
    },
    {
      image: prd8,
      price: 23,
      name: "E-gadget",
      star: 5,
    },
  ];
  return (
    <main className="">
      <section className="py-8">
        <div>
          <h1 className="text-white text-4xl text-center font-semibold">
            Our Electric Gadgets
          </h1>
        </div>
      </section>
      <section className="mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 m-auto w-5/6 ">
          {gadgets.map((gadget) => (
            <div className="basis-1/4 bg-[#2f3b4d] hover:bg-inherit duration-700 m-1 text-center py-4">
              <div className="h-3/4 p-4"><img src={gadget.image} className="w-full" alt="" /></div>
              <div className="h-1/4 py-2 sm:space-y-2">
                <h2 className="text-xl font-semibold text-white">
                  {gadget.name}
                </h2>
                <h2>
                  <FontAwesomeIcon
                    className="text-xs text-orange-300"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-xs text-orange-300"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-xs text-orange-300"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-xs text-orange-300"
                    icon={faStar}
                  />
                  <FontAwesomeIcon
                    className="text-xs text-orange-300"
                    icon={faStar}
                  />
                </h2>
                <h3 className="text-lg font-bold text-gray-400">${gadget.price}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default OurProductSection;
