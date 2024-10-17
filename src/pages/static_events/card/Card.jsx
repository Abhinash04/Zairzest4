import './card.scss';
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Card = ({ d }) => {
  const [showOverlay, setShowOverlay] = useState(false); // State to control the overlay visibility

  const toggleOverlay = () => {
    setShowOverlay(!showOverlay);
  };

  return (
    <>
      <div className="card-container">
        <div className="imgsec">
          <img src={require(`../../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
        </div>
        <div className="nameenroll">
          <div className="ename">{d.event_name}</div>
          <i
            className="bx bx-info-circle"
            style={{ color: "#38ccff", fontSize: "23px", cursor: "pointer" }}
            onClick={toggleOverlay}
          ></i>
        </div>
        <div className="dtp">
          <div className="edate">
            <div className="etitle">Date & Time</div>
            <div className="dtime">Coming Soon</div>
          </div>
        </div>

        {/* Overlay card */}
        <div className={`overlay-card ${showOverlay ? 'show' : ''}`}>
          <div className="overlay-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sequi sit quam repudiandae iusto molestiae quod perferendis ratione, molestias cum eius facilis quia rem quaerat aliquid officiis quae vitae tenetur!</p>
            <button className="close-btn" onClick={toggleOverlay}>
              Close
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
