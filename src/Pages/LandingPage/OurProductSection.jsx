import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const OurProductSection = () => {
  const gadgets = [
    {
      image: "https://i.ibb.co/cr9WzCS/prd1.png",
      price: 23,
      name: "Water Purifier",
      star: 5,
    },
    {
      image: 'https://i.ibb.co/dWYhsNK/prd2.png',
      price: 23,
      name: "Toaster",
      star: 5,
    },
    {
      image: "https://i.ibb.co/mDrjwBV/prd3.png",
      price: 23,
      name: "Coffee Maker",
      star: 3,
    },
    {
      image: "https://i.ibb.co/PjfkCF0/prd4.png",
      price: 23,
      name: "Cleaner",
      star: 4,
    },
    {
      image: "https://i.ibb.co/0cgW5Rz/prd5.png",
      price: 23,
      name: "Hair Dryer",
      star: 4,
    },
    {
      image: "https://i.ibb.co/C1gckGj/prd6.png",
      price: 23,
      name: "Washing Machine",
      star: 5,
    },
    {
      image: "https://i.ibb.co/NSPtX1v/prd7.png",
      price: 23,
      name: "Water Purifier",
      star: 4,
    },
    {
      image: "https://i.ibb.co/XFtwBx9/prd9.png",
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
