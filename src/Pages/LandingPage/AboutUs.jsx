import React from "react";
import about from '../../Assets/about.avif'
import BuyNowBtn from "../../Components/BuyNowBtn";

const AboutUs = () => {
  return (
    <main className="">
      <section className="">
        <div className="md:flex flex-row-reverse justify-center bg-slate-700 w-3/4 m-8 rounded-2xl border-2 mx-auto border-slate-300 space-y-8">  

        <div className="basis-1/2 ">
          <img src={about} className="rounded-2xl mx-auto h-full w-full" alt="" />
        </div>


        <div className="basis-1/2 space-y-6 p-4 my-auto flex flex-col justify-center">
          <div>
            <h2 className="text-4xl text-gray-500 font-bold">About Us</h2>
          </div>
          <div className="space-y-4 text-white text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              excepturi accusantium voluptatibus quam atque, non id inventore
              consequuntur provident expedita.
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

        </div>
      </section>
    </main>
  );
};

export default AboutUs;
