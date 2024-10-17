import './card.scss';
import { useState } from 'react';
import 'boxicons/css/boxicons.min.css';

const Card = ({ d }) => {
  const [isFlipped, setIsFlipped] = useState(false); // State to control card flip

  const toggleFlip = () => {
    setIsFlipped(!isFlipped); // Toggle flip state
  };

  return (
    <div className="card-container">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face front">
          <div className="imgsec">
            <img src={require(`../../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
          </div>
          <div className="nameenroll">
            <div className="ename">{d.event_name}</div>
            <i
              className="bx bx-info-circle"
              style={{ color: "#38ccff", fontSize: "23px", cursor: "pointer" }}
              onClick={toggleFlip}
            ></i>
          </div>
          <div className="dtp">
            <div className="edate">
              <div className="etitle">Date & Time</div>
              <div className="dtime">Coming Soon</div>
            </div>
          </div>
        </div>
        <div className="card-face back">
          <div className="overlay-content">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ea qui ratione.</p>
            <button className="close-btn" onClick={toggleFlip}>
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
