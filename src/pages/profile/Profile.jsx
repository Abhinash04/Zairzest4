import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Profile.scss';

const LazyFooter = React.lazy(() => import('../../component/Footer/Footer'));
const LazyNavbar = React.lazy(() => import('../../component/Navbar/Navbar'));

const Profile = ({ username = "Abhinash Pritiraj", zen_id = "2211100553" }) => {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState();
  const [profileImage, setProfileImage] = useState(null);

  const fetchData = async () => {
    const authToken = sessionStorage.getItem('Auth Token');
    try {
      const response = await Promise.all([
        axios.get(process.env.REACT_APP_API_LUSER, {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${authToken}`
          }
        })
      ]);

      const res = response?.map((result, index) => {
        if (index === 0) return result.data.events;
        else return result.data;
      });
      setData(res[0]);
      setUserDetails(res[1]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    const loadImage = async () => {
      try {
        const randomImage = await import(`../../assets/images/avatar${zen_id % 10}.jpg`);
        setProfileImage(randomImage.default);
      } catch (err) {
        console.log("Error loading profile image: ", err);
      }
    };
    loadImage();
  }, [zen_id]);

  return (
    <div>
      <React.Suspense fallback={<div>Loading Navbar...</div>}>
        <LazyNavbar />
      </React.Suspense>
      <div className="profile_container">
        <div className="profile-box">
          {profileImage && (
            <div
              className="profilesubitem1"
              style={{ 
                backgroundImage: `url(${profileImage})`, 
                backgroundSize: 'cover', 
                backgroundPosition: 'center' 
              }}
            ></div>
          )}
          <div className="profilesubitem2">
            <h1>{username}</h1>
            <span>ZEN-{zen_id}</span>
          </div>
        </div>
      </div>
      <React.Suspense fallback={<div>Loading Footer...</div>}>
        <LazyFooter />
      </React.Suspense>
    </div>
  );
};

export default Profile;
