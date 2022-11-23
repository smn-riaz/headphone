import { createContext } from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import LandingPage from "./Pages/LandingPage/LandingPage";

export const PlaySongContext = createContext()

function App() {
  const [playSong, setPlaySong] = useState(false)
  return (
    <PlaySongContext.Provider value={[playSong, setPlaySong]}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
    </PlaySongContext.Provider>
  );
}

export default App;
