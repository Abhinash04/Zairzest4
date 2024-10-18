import './cardsection.scss';
import Card from '../card/Card';
import React, { useEffect } from 'react';
import { edata } from '../dataset.js';
import Player from '../../../component/MusicPlayer/Player.jsx';
import AOS from 'aos';
import 'aos/dist/aos.css';

const CardSection = ({ type }) => {
  const filteredData = edata?.filter((event) => {
    return event.event_type === type;
  });

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <>
      <div className="event-container" data-aos="fade-in">
        <div className="mname" data-aos="fade-up">{type}</div>
        <br /><br />
        <div className="card-contain" data-aos="fade-up">
          {filteredData?.map((d, index) => (
            <Card d={d} key={index} />
          ))}
          {filteredData?.length === 0 && <p>No events to display</p>}
        </div>
        <div className="music" data-aos="slide-left">
          <Player />
        </div>
      </div>
    </>
  );
};

export default CardSection;
