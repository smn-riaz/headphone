import {
  faHeadphones,
  faPause,
  faPlay,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { useRef } from "react";
import { PlaySongContext } from "../../App";
import unstoppable from "../../Assets/unstoppable.mp3";

const PlaySongSection = () => {
  const [time, setTime] = useState("");
  useEffect(() => {
    function formatAMPM(date) {
      var hours = date.getHours();
      var minutes = date.getMinutes();
      var ampm = hours >= 12 ? "pm" : "am";
      hours = hours % 12;
      hours = hours ? hours : 12; // the hour '0' should be '12'
      minutes = minutes < 10 ? "0" + minutes : minutes;
      var strTime = hours + ":" + minutes + " " + ampm;
      setTime(strTime);
    }

    formatAMPM(new Date());
  }, [new Date()]);

  const myAudio = useRef();
  const [playSong, setPlaySong] = useContext(PlaySongContext);

  const handlePlaySong = () => {
    if (!playSong) {
      myAudio.current.play();
      setPlaySong(true);
    } else {
      myAudio.current.pause();
      setPlaySong(false);
    }
  };

  useEffect(()=> {
    if(playSong){
      myAudio.current.play()
    } else {
      myAudio.current.pause()
    }
  },[playSong])

  return (
    <main className="bg-[#334155] sm:p-12 rounded-t-[50px] flex justify-center  sm:my-0">
      <section className="bg-[#0e2d5859] rounded-t-[30px] sm:rounded-t-0 space-y-8 w-11/12 m-2 sm:w-4/5 text-center p-8 rounded-b-3xl">
        <div className="flex md:flex-row justify-between flex-col items-center space-y-3 text-center text-white">
          <h2 className="text-xl font-semibold basis-1/3 2xl:text-5xl">Music Player</h2>
          {playSong && (
            <h2 className="text-xl font-semibold basis-1/3">
              Now <FontAwesomeIcon icon={faHeadphones} /> Playing
            </h2>
          )}
          <h2 className="text-xl font-semibold basis-1/3 2xl:text-5xl">{time}</h2>
        </div>

        <div>
          <h2 className="text-4xl font-semiboldi text-white uppercase 2xl:text-5xl">
            I'm unstoppable
          </h2>
          <h4 className="text-gray-400 py-4 2xl:text-3xl">Song by Sia</h4>
        </div>

        <div className="">
          {!playSong ? (
            <button
              onClick={() => handlePlaySong()}
              className=" h-[70px] w-[70px] rounded-full border-2 border-white hover:bg-[#38465af3] duration-300 bg-[#5E6E85]"
            >
              <audio id="beep" ref={myAudio} src={unstoppable} type="audio" />

              <FontAwesomeIcon className="text-black text-lg" icon={faPlay} />
            </button>
          ) : (
            <button
              onClick={() => handlePlaySong()}
              className=" h-[70px] w-[70px] rounded-full border-2 border-white hover:bg-[#38465af3] duration-300 bg-[#5E6E85]"
            ><audio id="beep" ref={myAudio} src={unstoppable} type="audio" />
              <FontAwesomeIcon className="text-black text-lg" icon={faPause} />
            </button>
          )}
        </div>
      </section>
    </main>
  );
};

export default PlaySongSection;
