import './card.scss';
import { Link } from 'react-router-dom';
import 'boxicons/css/boxicons.min.css';

const Card = ({d}) => {
  return (
    <>
      <div className="card-container">
        <div className="imgsec">
            <img src={require(`../../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
        </div>
        <div className="nameenroll">
            <div className="ename">{d.event_name}</div>
            <i className='bx bx-info-circle' style={{color: "#38ccff", fontSize: "23px", cursor: 'pointer'}}  ></i>
        </div>
        <div className="dtp">
            <div className="edate">
                <div className="etitle">Date & Time</div>
                <div className="dtime">Coming Soon</div>
            </div>
            
        </div>
      </div>
    </>
  )
}

export default Card
