import React from "react";
import choice1 from "../../Assets/choice1.png";
import choice2 from "../../Assets/choice2.png";
import choice3 from "../../Assets/choice3.png";
import people from "../../Assets/people.jpg";

const FindChoice = () => {
  const choices = [
    {
      name: "Choice 1",
      image: choice1,
    },
    {
      name: "Choice 2",
      image: choice2,
    },
    {
      name: "Choice 3",
      image: choice3,
    },
  ];
  return (
    <main className="p-10 ">
      <section className="md:flex flex-row md:relative">
        <div className="basis-2/5 h-2/3">
          <div className="">
            <img src={people} alt="" />
          </div>
        </div>

        <div className="md:absolute md:left-[20rem] sm:bottom-0 my-auto w-full h-2/3">
          <div className="sm:flex flex-row w-3/4 absolute ">
            {choices.map((best) => (
              <div className="sm:basis-1/3 flex-row-reverse  my-28  border-2 relative m-2">
                <div className="bg-[#67677ee8] pt-40 border-3 ">
                  <h2 className="text-center text-white text-lg font-semibold">
                    {best.name}
                  </h2>
                  <div className="text-center p-4">
                    <button className=" bg-gradient-to-r from-slate-700 via-gray-500 to-slate-600 px-5 rounded-3xl text-white py-2">
                      BUY NOW
                    </button>
                  </div>
                </div>

                <div className="sm:absolute sm:-top-32">
                  <img
                    className="h-full ease-in-out duration-700"
                    src={best.image}
                    alt={best.name}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default FindChoice;
