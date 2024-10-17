import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import "./Navbar.scss";
import Logo from "../../assets/images/zairzest_logo.webp";

const Navbar = ({ userDetails }) => {
  const [showNav, setShowNav] = useState(true);
  const [animate, setAnimate] = useState(0);
  const navigate = useNavigate();
  const authToken = sessionStorage.getItem("Auth Token");

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
                  <h4 className="navbar__text">About US</h4>
                </Link>
                {authToken ? (
                  ""
                ) : (
                  <Link to="/register">
                    <h4 className="navbar__text">Register</h4>
                  </Link>
                )}
                {!authToken && (
                  <Link to="/login">
                    <h4 className="navbar__text">Sign In</h4>
                  </Link>
                )}
                {authToken && (
                  <h4 className="navbar__text" onClick={handleLogout}>
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
                  <div className="nav-button-content">About US</div>
                </Link>
                {authToken ? (
                  ""
                ) : (
                  <Link to="/register" className="aboutUs-link" onClick={close}>
                    <div className="nav-button-content">Register</div>
                  </Link>
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
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
