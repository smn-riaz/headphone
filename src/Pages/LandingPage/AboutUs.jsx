import React from "react";
import about from '../../Assets/about.avif'

const AboutUs = () => {
  return (
    <main>
      <section className="sm:flex flex-row justify-center">
        <div className="sm:flex flex-row justify-center py-8 space-x-12 bg-slate-700 w-3/4 rounded-2xl border-2 border-slate-300 space-y-8">
        <div className="basis-1/3 p-8 space-y-6 my-auto">
          <div>
            <h2 className="text-4xl text-slate-800 font-bold">About Us</h2>
          </div>
          <div className="space-y-4 text-white text-lg">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eum
              excepturi accusantium voluptatibus quam atque, non id inventore
              consequuntur provident expedita nihil quod sint rerum tenetur quis.
              Error dignissimos consequuntur laborum repellendus necessitatibus
              recusandae incidunt exercitationem nesciunt omnis mollitia! Iusto,
              amet.
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Necessitatibus deserunt dolore a voluptatum officiis sint.
            </p>
          </div>
          <div>
            <button className="hover:bg-gray-200 px-6 font-semibold hover:text-slate-800 bg-slate-600 text-white border-2 border-slate-200 shadow-white drop-shadow-md py-2">
              BUY NOW
            </button>
          </div>
        </div>

        <div className="basis-1/3 mx-auto">
          <img src={about} className="mx-auto" alt="" />
        </div>
        </div>
      </section>
    </main>
  );
};

export default AboutUs;
