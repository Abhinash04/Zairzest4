import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";
import Loginleft from "../../../component/loginLeft/Loginleft";
import { AiOutlineEye } from "react-icons/ai";
import { AiOutlineEyeInvisible } from "react-icons/ai";
import g_logo from "../../../assets/images/g_logo.png";
import payment1 from "../../../assets/images/payment-Vaishnav.jpeg";
import '../register/Register.scss'

const Register = () => {
  const [loading, setLoading] = useState(0);
  const [eye, setEye] = useState(true);
  const [type, setType] = useState("password");
  const navigate = useNavigate();
  const [registerData, setRegisteredData] = useState({
    name: "",
    regdno: "",
    email: "",
    password: "",
  });

  const handleEyeClick = () => {
    setType(eye ? "text" : "password"); // Toggle between text and password
    setEye(!eye); // Toggle the eye state
  };

  const handleRegisterChange = (e) => {
      setRegisteredData({ ...registerData, [e.target.name]: e.target.value });
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);
    try {
      if (registerData.regdno.length < 8) {
        toast.error("Registration Number must be above 8 digits");
        return;
      }

      const rturl = "https://web-backend-3bsv.onrender.com/create/user";
      const res = await axios.post(rturl, registerData, {
        headers: {
          "Content-Type": `application/json`,
        },
      });
      console.log(res);
      toast.success("Registration Successful");
      navigate('/login');
    } catch (error) {
      if (error.response.status === 500 || error.response.status === 400) {
        toast.error("Registration Failed");
      } else {
        console.log(error);
      }
    }
  };

  return (
    <div className="auth-container">
      <Loginleft className="left-container" />
      <div className="auth-box-container">
        <div className="auth-box">
          <h1 className="auth-heading">Become the Beast of the Cyber Forest</h1>
          <p className="auth-head-bottom">Sign up to get into Zairzest</p>
          <form className="auth-box-form" onSubmit={handleRegisterSubmit}>
            <div>
              <input
                className="auth-input"
                type="text"
                required
                name="name"
                value={registerData.name}
                onChange={handleRegisterChange}
                placeholder="Name"
              />
            </div>
            <div>
              <input
                className="auth-input"
                type="number"
                required
                name="regdno"
                value={registerData.regdno}
                onChange={handleRegisterChange}
                placeholder="Registration Number"
              />
            </div>
            <div>
              <input
                className="auth-input"
                type="email"
                required
                name="email"
                value={registerData.email}
                onChange={handleRegisterChange}
                placeholder="Email here"
              />
            </div>
            <div className="input-div">
              <input
                className="auth-input"
                type={`${type}`}
                required
                name="password"
                value={registerData.password}
                onChange={handleRegisterChange}
                placeholder="Create Your Own Password"
              />
              <span className="eye-icon">
                {eye ? (
                  <AiOutlineEyeInvisible onClick={handleEyeClick} />
                ) : (
                  <AiOutlineEye onClick={handleEyeClick} />
                )}
              </span>
            </div>
            <div className="payment-part">
              <img className="payment-image" src={payment1} alt="" />
              <div className="info-container">
                <input type="checkbox" id="info-toggle" className="info-toggle" />
                <label htmlFor="info-toggle" className="info-button">i</label>
  
                <div className="info-content">
                  <ul>
                    <li>Scan the QR to register</li>
                    <li>Take the screenshot and show it in Zairza inorder to get the Zen card</li>
                    <li>For offline payment, come to Zairza, complete the payment and get the Zen card</li>
                  </ul>
                </div>
              </div>
              {/* <div className="payment-upload">
                <ul>
                  <li>Scan the QR to register</li>
                  <li>Take the screenshot and show it in Zairza inorder to get the Zen card</li>
                  <li>For offline payment, come to Zairza, complete the payment and get the Zen card</li>
                </ul>
              </div> */}
            </div>
            <div className="auth-buttons">
            <button type="submit" className="auth-sbutton">
              {" "}
              {loading===0?"Sign Up":"Please Wait"}
            </button>
            </div>
          </form>
          <div className="auth-bottom-text">
            Already registered ? <Link to="/login">Login</Link>
          </div>
        </div>
        <ToastContainer theme="colored" />
      </div>
    </div>
  );
};

export default Register;
