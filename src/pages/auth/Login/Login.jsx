import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import { ToastContainer } from "react-toastify";
import "../authCSS/auth.scss";
import Loginleft from "../../../component/loginLeft/Loginleft";
import { AiOutlineEye } from 'react-icons/ai';
import {AiOutlineEyeInvisible} from 'react-icons/ai';

const Login = () => {
  const [loading, setLoading] = useState(0);
  const [eye,setEye]=useState(true);
  const [type,setType]=useState("password");
  const handleEyeClick=()=>{
    if(eye===false){
      setType("text");
      setEye(!eye);
    }
    else{
      setType("Password");
      setEye(!eye);
    }
  }
  const nav = useNavigate();
  const [loginData, setloginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(1);
    try {
      console.log("login");
      const luser = "https://web-backend-3bsv.onrender.com/login/user";
      const res = await axios.post(luser, loginData);
      console.log("login out");
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
  return (
  
     <div className="auth-container">
      <Loginleft className="left-container"/>
      <div className="auth-box-container">
      <div className="auth-box">
        <h1 className="auth-heading">Enter details to get your code</h1>
        <p className="auth-head-bottom">This code is unique for every use</p>
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
              type="password"
              required
              name="password"
              value={loginData.password}
              onChange={handleLoginChange}
              placeholder="Password"
            />
            <span  className="eye-icon">{
              eye==true ? 
              <AiOutlineEyeInvisible onClick={()=>{handleEyeClick()}}/>
               
              :
              <AiOutlineEye onClick={()=>{handleEyeClick()}}/>
            }
            </span>
          </div>
          <button type="submit" className="auth-sbutton">{loading===0?"Login":"Please Wait"}</button>
        </form>
        <div className="auth-bottom-text">
          Not registered ? <Link to="/register">Register</Link>
        </div>
      </div>
    </div>
    <ToastContainer theme="colored" />
   </div>
  );
};

export default Login;
