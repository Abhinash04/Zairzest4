import React, { createContext, useState, useRef, useEffect } from "react";

export const PlayerContext = createContext();

export const PlayerProvider = ({ children }) => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(require("../../assets/Music/darkside.mp3")));

  const togglePlay = () => {
    setPlaying((prev) => {
      if (prev) {
        audio.current.pause();
      } else {
        audio.current.play();
      }
      return !prev;
    });
  };

  useEffect(() => {
    const handleEnded = () => setPlaying(false);
    audio.current.addEventListener("ended", handleEnded);

    return () => {
      audio.current.removeEventListener("ended", handleEnded);
      audio.current.pause();
    };
  }, []);
  const handleUI = () => {
    if (!playing) {
      audio.current
        .play()
        .then(() => {
          setPlaying(true);
        })
        .catch((error) => {
          console.error("Error playing audio:", error);
        });
    }
  };

  return (
    <PlayerContext.Provider value={{ playing, togglePlay, handleUI }}>
      <div onClick={handleUI}>{children}</div>
    </PlayerContext.Provider>
  );
};
