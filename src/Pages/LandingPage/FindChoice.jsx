import React from "react";

import people from "../../Assets/people.jpg";
import ChoiceCard from "../../Components/ChoiceCard";

const FindChoice = () => {
  
  return (
    <main className="px-10 py-16  min-h-screen">
      <section className="md:flex flex-row md:relative space-y-20">
        <div className="basis-1/3 h-2/3">
          <div className="">
            <img src={people} alt="" />
          </div>
        </div>

        <div className="basis-2/3 absolute md:left-[20rem] w-2/3">
          <ChoiceCard />
        </div>
      </section>
    </main>
  );
};

export default FindChoice;
