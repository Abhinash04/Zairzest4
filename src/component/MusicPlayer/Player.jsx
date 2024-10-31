import React, { useState, useRef, useEffect } from 'react';
import './Player.scss';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Player = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(new Audio(require("../../assets/Music/darkside.mp3")));

  useEffect(() => {
    audioRef.current.loop = true;
    return () => {
      audioRef.current.pause();
    };
  }, []);
  

  const handlePlayPause = () => {
    const audio = audioRef.current;

    if (!isPlaying) {
      audio.play()
        .then(() => {
          setIsPlaying(true);
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
      audioRef.current.pause();
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