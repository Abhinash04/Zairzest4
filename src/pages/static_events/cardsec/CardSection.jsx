import './cardsection.scss';
import Card from '../card/Card'
import React from 'react';
import {edata} from '../dataset.js';
import Player from '../../../component/MusicPlayer/Player.jsx';

const CardSection = ({type}) => {
  const filteredData = edata?.filter((event) => {
    return event.event_type===type
  })
  return (
    <>
      <div className="event-container">
        <div className="mname">{type}</div>
        <br /><br />
        <div className="card-contain">
          {filteredData?.map((d, index) => (
            <Card d={d} key={index} />
          ))}
          {filteredData?.length === 0 && <p>No events to display</p>}
        </div>
        <div className="music">
            <Player />
        </div>
      </div>
    </>
  )
}

export default CardSection
