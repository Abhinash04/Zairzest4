import React, { useEffect, useRef, useState } from "react";
import { FaRegPlayCircle, FaRegPauseCircle  } from "react-icons/fa";

import "./Player.scss";

export const Player = () => {
  const [playing, setPlaying] = useState(false);
  const audio = useRef(new Audio(require("../../assets/Music/darkside.mp3")));

  useEffect(() => {
    if (playing) {
      audio.current.loop = true;
    } else {
      audio.current.pause();
    }
  }, [playing]);

  const music = () => {
    setPlaying(!playing);
    if (playing) {
      audio.current.pause();
    } else {
      audio.current.play();
    }
  };
  return (
    <div className="pge">
      {playing ? (
        <div id="musicPlayer">
        <div className="barcontainer">
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>
        <button className="play">
          <FaRegPauseCircle
            style={{
              color: "white",
              background: "transparent",
              height: "2.3rem",
              width: "2.3rem",
            }}
            onClick={music}
          />
        </button>
        </div>
        
      ) : (
        <button className="play">
          <FaRegPlayCircle
            style={{
              color: "white",
              background: "transparent",
              height: "2.3rem",
              width: "2.3rem",
            }}
            onClick={music}
          />
        </button>
      )}
    </div>
  );
};
