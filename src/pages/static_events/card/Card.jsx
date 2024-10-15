import './card.scss';
import { Link } from 'react-router-dom';

const Card = ({d}) => {
  return (
    <>
      <div className="card-container">
        <div className="imgsec">
            <img src={require(`../../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
        </div>
        <div className="nameenroll">
            <div className="ename">{d.event_name}</div>
            <Link to="/register"><button className="enroll">Register Now</button></Link>
        </div>
        <div className="dtp">
            <div className="edate">
                <div className="etitle">Date & Time</div>
                <div className="dtime">{d.event_date}</div>
            </div>
            <div className="even">
                <div className="eventi">Venue</div>
                <div className="ven">{d.event_venue}</div>
            </div>
        </div>
      </div>
    </>
  )
}

export default Card
