import { faHeadphones, faPlay } from "@fortawesome/free-solid-svg-icons";
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

  const [time, setTime] = useState('') 
 useEffect(() => {
  function formatAMPM(date) {
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'pm' : 'am';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0'+minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    setTime(strTime)
  }
  
 formatAMPM(new Date());
 }, [new Date()])
 
  return (
    <main className="bg-[#334155] sm:p-12 rounded-t-3xl flex justify-center mx-4 my-4 sm:my-8">
      <section className="bg-[#0e2d5859] space-y-8 w-11/12 m-2 sm:w-4/5 text-center p-8 rounded-b-3xl">
        <div className="md:flex flex-row justify-between text-center text-white">
          <h2 className="text-xl font-semibold basis-1/3">Music Player</h2>
          <h2 className="text-xl font-semibold basis-1/3">Now <FontAwesomeIcon icon={faHeadphones} /> Playing</h2>
          <h5 className="text-xl font-semibold basis-1/3">{time}</h5>
        </div>
        <div className="slider"></div>
        <div>
          <h2 className="text-4xl font-semiboldi text-white uppercase">
            I'm unstoppable
          </h2>
          <h4 className="text-gray-400 py-4">Song by Sia</h4>
        </div>
        <div>
          <div className="">
            <button className=" h-[70px] w-[70px] rounded-full border-2 border-white hover:bg-[#38465af3] duration-300 bg-[#5E6E85]">
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
