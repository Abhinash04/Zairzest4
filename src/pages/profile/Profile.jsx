import React, { useState, useEffect } from "react";
import axios from "axios";
import "./Profile.scss";
import payment from "../../assets/images/Payment69.png"
import whatsapp from "../../assets/images/whatsapp.png"

const LazyFooter = React.lazy(() => import("../../component/Footer/Footer"));
const LazyNavbar = React.lazy(() => import("../../component/Navbar/Navbar"));

const Profile = () => {
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState({ username: "", zen_id: "" });
  const [profileImage, setProfileImage] = useState(null);

  const fetchData = async () => {
    const authToken = sessionStorage.getItem("Auth Token");
    try {
      const response = await axios.get(process.env.REACT_APP_API_GUSER, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${authToken}`,
        },
      });
      setData(response.data.events);
      setUserDetails({
        username: response.data.name,
        zen_id: response.data.zencode,
      });
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const loadImage = async () => {
      if (userDetails.zen_id) {
        const zenid = userDetails.zen_id.substring(1);
        const zen_id = zenid % 10;
        const randomImage = await import(
          `../../assets/images/avatar${zen_id}.jpg`
        );
        setProfileImage(randomImage.default);
      }
    };
    loadImage();
  }, [userDetails.zen_id]);

  return (
    <div> 
  <React.Suspense fallback={<div>Loading...</div>}>
    <LazyNavbar />
  </React.Suspense>
  
  <div className="profile_container">
    {/* Left QR Code for WhatsApp Group */}
    <div className="profile-box qr-code-box left">
      <div className="qr-code-image">
        <img src={payment} alt="WhatsApp Group QR Code" />
      </div>
      <p>PAYMENT</p>
    </div>

    {/* Profile Card */}
    <div className="profile-box">
      {profileImage && (
        <div
          className="profilesubitem1"
          style={{
            backgroundImage: `url(${profileImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        ></div>
      )}
      <div className="profilesubitem2">
        <h1>{userDetails.username}</h1>
        <span>ZenID-{userDetails.zen_id}</span>
      </div>
    </div>

    {/* Right QR Code for Payment */}
    <div className="profile-box qr-code-box right">
      <div className="qr-code-image">
        <img src={whatsapp} alt="Payment QR Code" />
      </div>
      <p>ZAIRZEST 4.0 INFO</p>
    </div>
  </div>
  
  <React.Suspense fallback={<div>Loading...</div>}>
    <LazyFooter />
  </React.Suspense>
</div>


  );
};

export default Profile;
