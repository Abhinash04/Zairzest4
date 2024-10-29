import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";
import Loginleft from "../../../component/loginLeft/Loginleft";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import g_logo from "../../../assets/images/g_logo.png";
import { Button } from "react-scroll";
import "react-toastify/dist/ReactToastify.css";

const Login = () => {
  const [loading, setLoading] = useState(0);
  const [eye, setEye] = useState(true);
  const [type, setType] = useState("password");

  const handleEyeClick = () => {
    setType(eye ? "text" : "password");
    setEye(!eye);
  };

  const nav = useNavigate();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);
    try {
      const luser = process.env.REACT_APP_API_LUSER;
      const res = await axios.post(luser, loginData);
      const token = res.data?.token;
      sessionStorage.setItem("Auth Token", token);
      toast.success("Login Successful");
      setTimeout(() => {
        nav("/");
      }, 3000);
    } catch (error) {
      const err = error.response;
      if (err.data?.msg === "Mail Id is not Registered") {
        toast.error("Mail Id is not Registered");
      }
      if (err.data?.message === "Wrong Password") {
        toast.error("Wrong Password");
      } else {
        toast.error(error.response);
      }
    }
  };

  const handleLoginChange = (e) => {
    setloginData({ ...loginData, [e.target.name]: e.target.value });
  };
  const handleResetPasswordClick = () => {
    toast.info("Visit Zairza!", {
      theme: "dark",
    });
  };

  return (
    <div style={{ zIndex: 1000 }} className="auth-container">
      <Loginleft className="left-container" />
      <div className="auth-box-container">
        <div className="auth-box">
          <h1 className="auth-heading">Become the Beast of the Cyber Forest</h1>
          <p className="auth-head-bottom">Sign In to get into Zairzest</p>
          <form className="auth-box-form" onSubmit={handleLoginSubmit}>
            <div>
              <input
                className="auth-input"
                type="email"
                required
                name="email"
                value={loginData.email}
                onChange={handleLoginChange}
                placeholder="Email here"
              />
            </div>
            <div className="input-div">
              <input
                className="auth-input"
                type={type}
                required
                name="password"
                value={loginData.password}
                onChange={handleLoginChange}
                placeholder="Password"
              />
              <span className="eye-icon">
                {eye ? (
                  <AiOutlineEyeInvisible onClick={handleEyeClick} />
                ) : (
                  <AiOutlineEye onClick={handleEyeClick} />
                )}
              </span>
            </div>
            <div className="auth-bottom-text">
              Don't remember Password?{" "}
              <Button
                className="forget-pass"
                onClick={handleResetPasswordClick}
              >
                Reset Password
              </Button>
            </div>
            <div className="auth-bottom-text-2">
              Not a Member yet? <Link to="/register">Sign Up</Link>
            </div>
            <div className="auth-buttons">
              <button type="submit" className="auth-sbutton">
                {" "}
                {loading === 0 ? "Sign In" : "Please Wait"}
              </button>
            </div>
          </form>
        </div>
      </div>
      <ToastContainer theme="colored" />
    </div>
  );
};

export default Login;
