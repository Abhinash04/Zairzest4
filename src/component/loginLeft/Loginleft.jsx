import React from 'react'
import "./Loginleft.scss";
import Logo from '../../assets/images/zairzest_logo.webp'
import { Link } from 'react-router-dom';

const Loginleft = () => {
  return (
   <div className="login-left-container">
     <div className='loginleft'>
        <div>
        <Link to='/'><img src={Logo} alt="" className="logo" style={{width:"180px", marginRight: '13px', marginBottom : '10rem'}}/></Link>
        </div>
        <div className="loginleft-text">
            <h1>Experience the Future Tech with zairza</h1>
        </div>
        <br></br>
        <br></br>
        <div className="loginleft-para">
            <p>Release all your stress with the exciting Tech and Fun events in the most awaited fest . Zairzest 2.0 presented by Zairza.</p>
        </div>
        <br></br>
        <br></br>
        <div className="login-left-colors">
            <div className='login-left-color-1'></div>
            <div className='login-left-color-2'></div>
            <div className='login-left-color-3'></div>
        </div>
    </div>
   </div>
  )
}

export default Loginleft