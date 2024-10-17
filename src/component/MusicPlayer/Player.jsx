import React, { useContext } from "react";
import { FaRegPlayCircle, FaRegPauseCircle } from "react-icons/fa";
import { PlayerContext } from "./PlayerContext";

import "./Player.scss";

export const Player = () => {
  const { playing, togglePlay } = useContext(PlayerContext);

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
          <button className="play" onClick={togglePlay}>
            <FaRegPauseCircle
              style={{ color: "white", height: "2.3rem", width: "2.3rem" }}
            />
          </button>
        </div>
      ) : (
        <button className="play" onClick={togglePlay}>
          <FaRegPlayCircle
            style={{ color: "white", height: "2.3rem", width: "2.3rem" }}
          />
        </button>
      )}
    </div>
  );
};
