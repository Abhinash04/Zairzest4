import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.scss";
import Right from "../../assets/images/top-img.webp";
import zen from "../../assets/images/zen.webp";
import workshops from "../../assets/images/workshops.webp";
import techEvents from "../../assets/images/tech-events.webp";
import funEvents from "../../assets/images/fun-events.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from '../../component/Navbar/Navbar';

const Main = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  const navigate = useNavigate()

  const handleScroll = (type) => {
    if(authToken){
      navigate(`/${type}`)
    }
    else{
      window.scrollTo(0, 0);
      navigate(`/home-${type}`)
    }
  }

  return (
    <>
    <Navbar/>
    <div className="main-page">
      <div className="top-part">
        <div className="left-part">
          <div className="content-left">
            <h1 className="left-head">Enter into Digital</h1>
            <h1 className="left-head left-head2" style={{ marginTop: "-5px" }}>
            Playground with 
            </h1>
            <h1 className="zairza-head">Zairza</h1>
            <p className="para-left">
              Release all your stress with the exciting Tech and Fun events in
            </p>
            <p className="para-left para-left2">
              the most awaited fest . Zairzest 3.0 presented by Zairza.
            </p>
            {!authToken && <Link to='/register'><button className="btn-rn" >Register Now</button></Link>}
            {authToken && <Link to='/profile'><button className="btn-rn" >Go to Profile</button></Link>}
          </div>
        </div>
        <div className="right-part">
          <img className="right-img" src={Right} alt="" height={750} />
        </div>
      </div>


      <div className="mid-part">
        <div className="left-mid-part">
          <img className="zen-image" src={zen} alt="" height={500} />
        </div>
        <div className="right-mid-part">
          <h1 style={{marginBottom: '10px'}}><span className="zen-mid">Zen 3.0</span> will guide you !</h1>
          <h3 style={{ color: "rgba(232, 46, 138, 1)", fontWeight: "600", marginBottom: '10px' }}>
            Zest. For. Tech.
          </h3>
          <p>
            ‘The best way to live the future is to create it.’ Moving on from
            the safari around the tech forest, we now bring you the city of
            tech. Experience the new future with us. We shall lead you to
            explore through the suburb of the cybercity, to drive into various
            tech stacks, dev branches, recursion, trees and languages like
            firefox and python. The Best is yet to come. Stay tuned for
            something awesome!.
          </p>
        </div>
      </div>

      <div className="bottom-part">
        <div>
          <h1 className="event-head" style={{marginBottom: '15px'}}>Events for you</h1>
          <p className="para-bottom" >
            Everything has been made simple for you to scroll around and get the
            most{" "}
          </p>
          <p  className="para-bottom para-bottom2">out of the options available.</p>
          <div className="images-bottom">
            <img className="bottom-img bottom-img-fix1" onClick={() => {handleScroll('tech-events')}} src={techEvents} alt="" height={200} />
            <img className="bottom-img bottom-img-fix2" onClick={() => {handleScroll('fun-events')}} src={funEvents} alt="" height={200} />
            <img className="bottom-img bottom-img-fix1" onClick={() => {handleScroll('workshops')}} src={workshops} alt="" height={200} />
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Main;
