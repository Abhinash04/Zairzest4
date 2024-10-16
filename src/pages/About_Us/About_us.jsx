import React from 'react'
import './About_us.scss'
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import { Link, useNavigate } from "react-router-dom";
import { Player } from "../../component/MusicPlayer/Player";
// import about from '../../../assets/about-us.jpg'
// import g_logo from "../../../assets/images/g_logo.png";
import About from '../../assets/images/images';

const About_us = () => {
  return (
    <div className='background'>
        <Navbar />
        <div className="music">
              <Player />
        </div>
        <div className='About-us-content'>
            <h1 className='About-us-header'>Zairza: Igniting Innovation</h1>

            <p>Zairza, more than just a club, is a vibrant community of tech enthusiasts at Odisha University of Technology and Research. Rooted in our motto, "Wonder, Think, Create," we've been pushing the boundaries of innovation in Robotics, Software, and Design since 2005. Officially recognized as a central club in 2007, Zairza has consistently achieved excellence, earning numerous accolades.</p>

            <p>Our mission is to empower students with the skills and knowledge needed to excel in their careers. Regular workshops and sessions provide a strong foundation, while industry internships offer invaluable real-world experience. Strategically located in the SAC area, we're easily accessible to all students.</p>

            <p>Beyond academic pursuits, Zairza organizes the annual Zairzest technical fest. This three-day extravaganza features exciting competitions, workshops, and hackathons. Zairzest 3.0 was a resounding success, attracting hundreds of participants and showcasing the incredible talent of our members.</p>

            <p>Join Zairza and be part of a legacy of innovation. Together, we'll shape the future of technology.</p>
            <div className='About-us-frame'>
                <img src={About} alt="" />
            </div>
            
        </div>
        
        <Footer />
        
    </div>
  )
}

export default About_us
