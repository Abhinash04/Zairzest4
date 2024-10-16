import React, { useEffect, useRef, useState } from "react";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
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
        <button className="play">
          <FaPause
            style={{
              color: "white",
              background: "transparent",
              height: "2.3rem",
              width: "2.3rem",
            }}
            onClick={music}
          />
        </button>
      ) : (
        <button className="play">
          <FaPlay
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
