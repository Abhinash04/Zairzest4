import React, { useEffect } from 'react';
import './About_us.scss';
import Navbar from '../../component/Navbar/Navbar';
import Footer from '../../component/Footer/Footer';
import Player from '../../component/MusicPlayer/Player';
import frame_1 from '../../assets/images/frame-1.png';
import frame_2 from '../../assets/images/frame-2.png';
import frame_3 from '../../assets/images/frame-3.png';
import frame_4 from '../../assets/images/frame-4.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

const About_us = () => {

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className='background'>
      <Navbar />
      
      <div className='About-us'>
        <div className='About-us-content' data-aos="fade-up">
          <h1 className='About-us-header' data-aos="fade-right">Zairza: Igniting Innovation</h1>
          <p data-aos="fade-up">Zairza, more than just a club, is a vibrant community of tech enthusiasts at Odisha University of Technology and Research. Rooted in our motto, "Wonder, Think, Create," we've been pushing the boundaries of innovation in Robotics, Software, and Design since 2005. Officially recognized as a central club in 2007, Zairza has consistently achieved excellence, earning numerous accolades.</p>
          <p data-aos="fade-up">Our mission is to empower students with the skills and knowledge needed to excel in their careers. Regular workshops and sessions provide a strong foundation, while industry internships offer invaluable real-world experience. Strategically located in the SAC area, we're easily accessible to all students.</p>
          <p data-aos="fade-up">Beyond academic pursuits, Zairza organizes the annual Zairzest technical fest. This three-day extravaganza features exciting competitions, workshops, and hackathons. Zairzest 3.0 was a resounding success, attracting hundreds of participants and showcasing the incredible talent of our members.</p>
          <p data-aos="fade-up">Join Zairza and be part of a legacy of innovation. Together, we'll shape the future of technology.</p>
          <div className='About-us-frame' data-aos="zoom-in">
            <img src={frame_1} alt="" />
            <img src={frame_2} alt="" />
            <img src={frame_3} alt="" />
            <img src={frame_4} alt="" />
          </div>
          <div className="music" data-aos="fade-left">
            <Player />
          </div>
        </div>
      </div>
      <Footer /> 
    </div>
  );
}

export default About_us;
