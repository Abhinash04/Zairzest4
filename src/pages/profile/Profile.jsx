import React, { useState, useEffect } from "react";
import axios from 'axios'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import CardSection from "../../component/cardsec/CardSection";
import './Profile.scss'

const Profile = () => {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState()

  const fetchData = async () => {
    const authToken = sessionStorage.getItem('Auth Token')
    try {
      const response = await Promise.all([
        axios.get('https://web-backend-3bsv.onrender.com/getall/event', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        }),
        axios.get('https://web-backend-3bsv.onrender.com/get/user', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        })
      ])
      const res = response?.map((result, index) => {
        if(index === 0)
        return result.data.events
        else
        return result.data
      })
      setData(res[0])
      setUserDetails(res[1])
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div>
      <Navbar />
      <div className="profile_container">
        <div className="profile_head">
          <div className="profile_details">
            <h2>{userDetails?.name}</h2>
            <p className="profile_para">Regd no : {userDetails?.regdno}</p>
          </div>
          <div className="profile_zencode">
            <div className="zencode_details">
              Zen code : {userDetails?.zencode}
            </div>
          </div>
        </div>
      </div>
      <CardSection name="Your registered events" data={data} userEvents={userDetails?.events} />
      <CardSection name="Explore more events" data={data} userEvents={userDetails?.events} />
      <Footer />
    </div>
  );
};

export default Profile;
