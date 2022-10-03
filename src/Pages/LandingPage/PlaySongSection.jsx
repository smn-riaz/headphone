import { faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import unstoppable from '../../Assets/unstoppable.mp3'


const useAudio = url => {
    const [audio] = useState(new Audio(unstoppable));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
  
    useEffect(() => {
        playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, toggle];
  };
  


const PlaySongSection = () => {
  return (
    <main className="bg-[#334155] p-8 rounded-t-3xl my-4">
      <section className="bg-[#13171d] text-center p-8 rounded-b-3xl">
        <div className="flex flex-row justify-between text-center text-white">
          <h2 className=" basis-1/3">Headphone UI</h2>
          <h2 className=" basis-1/3">Now Playing</h2>
          <h5 className=" basis-1/3">12:05</h5>
        </div>
        <div className="slider"></div>
        <div>
          <h2 className="text-4xl font-semiboldi text-white">
            Happiness knows a boundaries
          </h2>
          <h4 className="text-gray-400 py-4">The Boxeiders</h4>
        </div>
        <div>
          <div className="">
            <button className=" h-[70px] w-[70px] rounded-full border-2 border-white bg-[#5E6E85]">
              <FontAwesomeIcon className="text-black text-lg" icon={faPlay} />
            </button>
          </div>
        </div>

        <div>
          
        </div>
      </section>
    </main>
  );
};

export default PlaySongSection;
