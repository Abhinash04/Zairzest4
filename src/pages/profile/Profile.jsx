import React, { useState, useEffect } from "react";
import axios from 'axios';
import './Profile.scss';

const LazyFooter = React.lazy(() => import('../../component/Footer/Footer'));
const LazyNavbar = React.lazy(() => import('../../component/Navbar/Navbar'));

const Profile = () => {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState({ username: '', zen_id: '' });
  const [profileImage, setProfileImage] = useState(null);

  const fetchData = async () => {
    const authToken = sessionStorage.getItem('Auth Token');
    try {
      const response = await axios.get(process.env.REACT_APP_API_LUSER, {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${authToken}`
        }
      });
      setData(response.data.events);
      setUserDetails({ 
        username: response.data.username, 
        zen_id: response.data.zen_id 
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
    const loadImage = async () => {
      const randomImage = await import(`../../assets/images/avatar${userDetails.zen_id % 10}.jpg`);
      setProfileImage(randomImage.default);
    };
    loadImage();
  }, [userDetails.zen_id]);

  return (
    <div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyNavbar />
      </React.Suspense>
      <div className="profile_container">
        <div className="profile-box">
          {profileImage && (
            <div className="profilesubitem1" 
                 style={{ backgroundImage: `url(${profileImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            </div>
          )}
          <div className="profilesubitem2">
            <h1>{userDetails.username}</h1>
            <span>ZEN-{userDetails.zen_id}</span>
          </div>
        </div>
      </div>
      <React.Suspense fallback={<div>Loading...</div>}>
        <LazyFooter />
      </React.Suspense>
    </div>
  );
};

export default Profile;
