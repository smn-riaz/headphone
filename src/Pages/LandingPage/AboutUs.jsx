import React from "react";
import about from '../../Assets/about.avif'
import BuyNowBtn from "../../Components/BuyNowBtn";

const AboutUs = () => {
  return (
    <main className="">
        <div className="md:flex justify-center items-center m-2 sm:m-12 space-y-8">  
        <div className="basis-1/2 space-y-6 p-4 my-auto">
          <div>
            <h2 className="text-4xl text-slate-800 font-bold">About Us</h2>
          </div>
          <div className="space-y-4 text-white text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              excepturi accusantium voluptatibus quam atque, non id inventore
              consequuntur provident expedita. Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus deserunt dolore a voluptatum officiis sint.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus deserunt dolore a voluptatum officiis sint.
            </p>
          </div>
          <div>
            <BuyNowBtn />
          </div>
        </div>

        <div className="basis-1/2 flex justify-center">
          <img src={about} className="" alt="" />
        </div>

        </div>
    </main>
  );
};

export default AboutUs;
