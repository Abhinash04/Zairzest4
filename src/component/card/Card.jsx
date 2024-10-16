import './card.scss';
import axios from 'axios';
import {toast} from 'react-toastify'
import 'boxicons/css/boxicons.min.css';

const Card = ({d}) => {
  const handleClick = async () => {
    const authToken = sessionStorage.getItem('Auth Token')
    try {
      const response = await axios.patch('https://web-backend-3bsv.onrender.com/enroll/event',{ id : d._id}, {
        headers : {
          'Content-Type' : 'application/json',
          'Authorization' : `Bearer ${authToken}`
        }
      })
      if(response.data.user){
        toast.success('Enroll Successful')
        setTimeout(() => {
          window.location.reload()
        },2000)
      }
    } catch (error) {
      console.log(error);
      toast.error('Could not Enroll')
    }
  }
  return (
    <>
      <div className="card-container">
        <div className="imgsec">
            <img src={require(`../../assets/images/${d.event_name.split(" ")[0]}.webp`)} alt="event" />
        </div>
        <div className="nameenroll">
            <div className="ename">{d.event_name}</div>
            <button className="enroll" disabled={d.isEnrolled} onClick={handleClick}>{d.isEnrolled?"Enrolled":"Enroll Now"}</button>
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
