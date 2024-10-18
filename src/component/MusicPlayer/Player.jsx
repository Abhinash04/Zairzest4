// import React, { useEffect, useRef, useState } from "react";
// import { FaPlay } from "react-icons/fa";
// import { FaPause } from "react-icons/fa";
// import "./Player.scss";

// export const Player = () => {
//   const [playing, setPlaying] = useState(false);
//   const audio = useRef(new Audio(require("../../assets/Music/darkside.mp3")));

//   useEffect(() => {
//     if (playing) {
//       audio.current.loop = true;
//     } else {
//       audio.current.pause();
//     }
//   }, [playing]);

//   const music = () => {
//     setPlaying(!playing);
//     if (playing) {
//       audio.current.pause();
//     } else {
//       audio.current.play();
//     }
//   };
//   return (
//     <div className="pge">
//       {playing ? (
//         <button className="play">
//           <FaPause
//             style={{
//               color: "white",
//               background: "transparent",
//               height: "2.3rem",
//               width: "2.3rem",
//             }}
//             onClick={music}
//           />
//         </button>
//       ) : (
//         <button className="play">
//           <FaPlay
//             style={{
//               color: "white",
//               background: "transparent",
//               height: "2.3rem",
//               width: "2.3rem",
//             }}
//             onClick={music}
//           />
//         </button>
//       )}
//     </div>
//   );
// };


import React, { useState, useRef, useEffect } from 'react';
import './Player.scss';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Make sure this is included

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(require("../../assets/Music/darkside.mp3"))); // Reference to the audio element

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play()
        .then(() => {
          setIsPlaying(true);  // Set to playing state only after successful play
        })
        .catch((error) => {
          console.error("Playback failed: ", error);
        });
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  useEffect(() => {
    return () => {
      audioRef.current.pause(); // Pause the audio when navigating away
      setIsPlaying(false);
    };
  }, []);

  return (
    <div className="music-button">
      <div className="wrapper">
        <div className="video-main">
          <div className="promo-video">
            <div className="waves-block">
              <div className="waves wave-1"></div>
              <div className="waves wave-2"></div>
              <div className="waves wave-3"></div>
            </div>
          </div>
          <div className="video" id="playPauseBtn" onClick={handlePlayPause} style={{ backgroundColor: '#333', width: '50px', height: '50px', borderRadius: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', cursor: 'pointer' }}>
            <i id="playPauseIcon" className={`fa ${isPlaying ? 'fa-pause' : 'fa-play'}`} style={{ color: '#fff', fontSize: '24px' }}></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;