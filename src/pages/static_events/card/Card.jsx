import './card.scss';
import { useState, useEffect } from 'react';
import 'boxicons/css/boxicons.min.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Card = ({ d }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const toggleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);


  return (
    <div className="card-container" data-aos="fade-up">
      <div className={`card ${isFlipped ? 'flipped' : ''}`}>
        <div className="card-face front">
          <div className="imgsec" data-aos="zoom-in">
            <img src={require(`../../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
          </div>
          <div className="nameenroll" data-aos="fade-up">
            <div className="ename">{d.event_name}</div>
            <i
              className="bx bx-info-circle"
              style={{ color: "#38ccff", fontSize: "23px", cursor: "pointer" }}
              onClick={toggleFlip}
            ></i>
          </div>
          <div className="dtp" data-aos="fade-up">
            <div className="edate">
              <div className="etitle">Date & Time</div>
              <div className="dtime">Coming Soon</div>
            </div>
          </div>
        </div>
        <div className="card-face back" data-aos="fade-up">
          <div className="overlay-content">
            <p style={{fontSize: '15px', padding: '20px'}}>{d.event_description}</p>
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
