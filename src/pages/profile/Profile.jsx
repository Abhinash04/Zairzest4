import React, { useState, useEffect } from "react";
import axios from 'axios'
import Footer from '../../component/Footer/Footer'
import Navbar from '../../component/Navbar/Navbar'
import './Profile.scss'

const images = [
  require('../../assets/images/Robo.webp'),
  require('../../assets/images/CP.webp'),
  require('../../assets/images/PVP.webp'),
  require('../../assets/images/Twister.webp')
];

const Profile = () => {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState();
  const [profileImage, setProfileImage] = useState();

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
    fetchData();
    const randomImage = images[Math.floor(Math.random() * images.length)];
    setProfileImage(randomImage);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="profile_container">
        <div className="profile-box">
          <div className="profilesubitem1" style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}></div>
          <div className="profilesubitem2">
            <h1>Abhinash Pritiraj</h1>
            <span>ZEN-2211100553</span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Profile;
