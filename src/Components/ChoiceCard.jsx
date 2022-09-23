import React from "react";
import best from "../Assets/best1.png";
import choice1 from "../Assets/choice1.png";
import choice2 from "../Assets/choice2.png";
import choice3 from "../Assets/choice3.png";
import BuyNowBtn from "./BuyNowBtn";

const ChoiceCard = () => {
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
    <div className="sm:flex flex-row">
      {choices.map((choice) => (
        <div className=" h-[350px] basis-1/3 relative p-8 m-4">
          <div className="h-3/5 w-full mx-auto absolute top-10 z-10">
            <img src={choice.image} alt="" className="h-full w-full" />
          </div>
          <div className="h-3/5 text-center bg-[#4642428a] rounded-xl flex justify-center items-end p-6 absolute bottom-0 w-full">
            <div className="space-y-3">
              <h2 className="text-xl font-bold uppercase">{choice.name}</h2>
              <div>
                <button className=" bg-gradient-to-r from-slate-700 via-gray-500 to-slate-600 px-5 rounded-3xl text-white py-2">
                  BUY NOW
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChoiceCard;
