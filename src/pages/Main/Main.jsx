import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Main.scss";

import zen from "../../assets/images/zen.webp";

import techEvents from "../../assets/images/tech-events.webp";
import funEvents from "../../assets/images/fun-events.webp";
import Footer from "../../component/Footer/Footer";
import Navbar from "../../component/Navbar/Navbar";
import { Link as ScrollLink } from "react-scroll";
import { Player } from "../../component/MusicPlayer/Player";

const Main = () => {
  const authToken = sessionStorage.getItem("Auth Token");
  const navigate = useNavigate();

  const handleScroll = (type) => {
    if (authToken) {
      navigate(`/${type}`);
    } else {
      window.scrollTo(0, 0);
      navigate(`/home-${type}`);
    }
  };

  return (
    <div className="home">
      <Navbar />
      <div className="main-page">
        <div className="top-part">
          <div className="left-part">
            <div className="content-left">
              <h1 className="left-head">Hunt the Future in the </h1>
              <h1
                className="left-head left-head2"
                style={{ marginTop: "-5px" }}
              >
                Cyber Forest
              </h1>

              <ScrollLink
                className="a"
                to="events"
                smooth={true}
                duration={500}
              >
                <button className="btn-rn main-btn1">Explore Events</button>
              </ScrollLink>
              {!authToken && (
                <Link className="a" to="/register">
                  <button className="btn-rn main-btn2">Register Now</button>
                </Link>
              )}
              {authToken && (
                <Link className="a" to="/profile">
                  <button className="btn-rn">Go to Profile</button>
                </Link>
              )}
            </div>
          </div>
          <div className="right-part">
            <div className="music">
              <Player />
            </div>
          </div>
        </div>

        <div className="mid-part">
          <div className="left-mid-part">
            <img className="zen-image" src={zen} alt="" height={450} />
          </div>
          <div className="right-mid-part">
            <h1
              style={{
                marginBottom: "10px",

                fontSize: "2.9rem",
              }}
            >
              <span className="zen-mid">Zen 4.0 :</span>Your Guide in The Cyber
              Wild!
            </h1>

            <p>
              ‘To forge the future, we must first innovate it.’ As we move
              beyond our journey through the tech wilderness, we welcome you to
              the dynamic metropolis of technology. Embark with us as we
              traverse the cutting-edge neighborhoods of Cybercity, exploring
              diverse tech ecosystems, development pathways, recursion, data
              structures, and languages such as Python and Firefox. The most
              exciting revelations are still to come. Stay tuned for
              groundbreaking experiences ahead!
            </p>
          </div>
        </div>

        <div className="bottom-part" id="events">
          <div>
            <h1 className="event-head" style={{ marginBottom: "15px" }}>
              Events for you
            </h1>
            <p className="para-bottom">
              Everything has been made simple for you to scroll around and get
              the most
            </p>
            <p className="para-bottom para-bottom2">
              out of the options available.
            </p>
            <div className="images-bottom">
              <img
                className="bottom-img bottom-img-fix1"
                onClick={() => {
                  handleScroll("tech-events");
                }}
                src={techEvents}
                alt=""
                height={200}
              />
              <img
                className="bottom-img bottom-img-fix2"
                onClick={() => {
                  handleScroll("fun-events");
                }}
                src={funEvents}
                alt=""
                height={200}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="foot">
        <Footer />
      </div>
    </div>
  );
};

export default Main;
