import './cardsection.scss';
import Card from '../card/Card'
import { useEffect, useState} from 'react';
import { ToastContainer } from 'react-toastify';

const CardSection = ({ name, data, userEvents }) => {
  const [dispData, setDispData] = useState([])

  const getFilteredData = () => {
    if(name === 'Tech Events' || name === 'Explore more events' || name==='Fun Events' || name==='Workshops'){
      if(name !== 'Explore more events' && name!== 'Your registered events'){
        const filteredData = data?.filter((event) => {
          return event.event_type===name
        })
        filteredData?.forEach((event) => {
          const index = userEvents?.findIndex((userevent) => {
            return event._id === userevent._id
          })
          if (index !== -1 && name !== 'Explore more events') {
            setDispData((prev) => [...prev,{...event, isEnrolled : 1}])
          }
          else if(index === -1) {
            setDispData((prev) => [...prev,{...event, isEnrolled : 0}])
          }
          else{
            
          }
        })
      }
      else{
        data?.forEach((event) => {
          const index = userEvents?.findIndex((userevent) => {
            return event._id === userevent._id
          })
          if (index !== -1 && name !== 'Explore more events') {
            setDispData((prev) => [...prev,{...event, isEnrolled : 1}])
          }
          else if(index === -1) {
            setDispData((prev) => [...prev,{...event, isEnrolled : 0}])
          }
          else{
            
          }
        })
      }
    }
    else if(name === 'Your registered events'){
      userEvents?.forEach((event) => {
        setDispData((prev) => [...prev,{...event, isEnrolled : 1}])
      })
    }
    setDispData((prev) => [...(prev.sort((a,b) => {
        return a.isEnrolled - b.isEnrolled
    }))])
  }

  useEffect(() => {
    getFilteredData()
  }, [data])

  return (
    <>
      <div className="event-container">
        <div className="mname">{name}</div>
        <br /><br />
        <div className="card-contain">
          {dispData?.map((d, index) => (
            <Card d={d} key={index} />
          ))}
        </div>
        {dispData.length===0 && <p className='null_text'>No events to display here</p>}
      </div>
      <ToastContainer theme='colored'/>
    </>
  )
}

export default CardSection
