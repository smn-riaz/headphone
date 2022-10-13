import React from "react";

const BestSellingSection = () => {
  const bestSelling = [
    {
      image: "https://i.ibb.co/3pqK4fx/best1.png",
      name: "HeadPhone 1",
    },
    {
      image: 'https://i.ibb.co/0tzbJ3C/best2.png',
      name: "HeadPhone 2",
    },
    {
      image: "https://i.ibb.co/nbxQ2Y4/best3.png",
      name: "HeadPhone 3",
    },
  ];
  return (
    <main className="px-10 py-28">
      <section className="sm:flex flex-row">
        <div className="basis-1/4 space-y-4 my-8 sm:my-auto mx-6">
          <h1 className="text-3xl text-white">Best Selling </h1>
          <p className="text-gray-300 text-lg">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id fuga
            obcaecati voluptatibus iste reprehenderit aspernatur itaque ipsa
            voluptate nisi corrupti.
          </p>
        </div>

        {bestSelling.map((best) => (
          <div className="basis-1/4 bg-[#302e2ec9] sm:border-r-2 border-b-2 sm:border-b-0 sm:border-gray-500">
            <div>
              <img
                className="hover:scale-x-110 hover:scale-y-110 ease-in-out duration-700"
                src={best.image}
                alt={best.name}
              />
            </div>
            <h2 className="text-center text-white text-lg font-semibold">
              {best.name}
            </h2>
            <div className="text-center p-4">
              <button className=" bg-gradient-to-r from-slate-700 via-gray-500 to-slate-600 px-5 rounded-3xl text-white py-2">
                BUY NOW
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default BestSellingSection;
