import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import axios from "axios";
import "./Navbar.scss";
import Logo from "../../assets/images/zairza.webp";

const Navbar = () => {
  const [showNav, setShowNav] = useState(true);
  const [animate, setAnimate] = useState(0);
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");
  const [data, setData] = useState();
  const [userDetails, setUserDetails] = useState({ username: "", zen_id: "" });

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

  const handleLogout = async () => {
    sessionStorage.removeItem("Auth Token");
    navigate("/");
    window.location.reload();
  };

  const close = () => {
    setAnimate(1);
    setTimeout(() => setShowNav(true), 300);
  };

  return (
    <>
      {showNav === true ? (
        <div className="main_navbar">
          <div className="sub_nav">
            <div className="navbar">
              <div className="navbar__left">
                <Link to="/" onClick={close}>
                  <span className="zairzest-beyno-text">ZAIRZEST </span>
                  <span className="fourO-text">4.0</span>
                </Link>
              </div>
              <div className="navbar__right">
                <Link to="/about-us">
                  <h4 className="navbar__text">About Us</h4>
                </Link>
                {!authToken && (
                  <Link to="/register">
                    <h4 className="navbar__text">Register</h4>
                  </Link>
                )}
                {authToken && userDetails && (
                  <Link to="/profile">
                    <h4 className="navbar__text" style={{ color:"#38ccff"}}>
                      Hi, {userDetails.username}
                    </h4>
                  </Link>
                )}
                {!authToken && (
                  <Link to="/login">
                    <h4 className="navbar__text">Sign In</h4>
                  </Link>
                )}
                {authToken && (
                  <h4 onClick={handleLogout} className="navbar__text">
                  Logout
                </h4>
                )}
                <AiOutlineMenu
                  className="navbar__menu"
                  onClick={() => {
                    setShowNav(false);
                    setAnimate(0);
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="main_navbar">
          <div className="sub_nav">
            <div className="navbar">
              <div className="navbar__left">
                {/* <Link to="/" onClick={close}><img src={Logo} alt="" className="logo" style={{width:"100px"}}/></Link> */}
              </div>
            </div>
            <div
              className={
                animate === 0 ? "navbar_content" : "navbar_content_close"
              }
            >
              <div className="close_icon">
                <RxCross1 className="navbar__menu" onClick={close} />
              </div>
              <div className="nav-content-container">
                <Link to="/about-us" className="aboutUs-link">
                  <div className="nav-button-content">About Us</div>
                </Link>
                {!authToken && (
                  <Link to="/register" className="aboutUs-link" onClick={close}>
                    <div className="nav-button-content">Register</div>
                  </Link>
                )}
                {authToken && userDetails && (
                  <div className="nav-button-content">
                    Hi, {userDetails.username}
                  </div>
                )}
                {!authToken && (
                  <Link className="aboutUs-link" to="/login">
                    <div className="nav-button-content" onClick={close}>
                      Sign In
                    </div>
                  </Link>
                )}
                {authToken && (
                  <div
                    className="nav-button-content"
                    onClick={() => {
                      handleLogout();
                      close();
                    }}
                  >
                    Logout
                  </div>
                )}
                <img src={Logo} alt="" className="zairza" />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
