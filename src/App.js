import React, { useState, useEffect } from 'react';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/Login/Login';
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './pages/profile/Profile';
import Event from './pages/event/Event';
import StaticEvents from './pages/static_events/StaticEvents';
import "react-toastify/dist/ReactToastify.css";
import Main from './pages/Main/Main';
import About_us from './pages/About_Us/About_us';
import { Blocks } from 'react-loader-spinner';

const App = () => {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleRouteChangeStart = () => {
      setLoading(true);
    };

    const handleRouteChangeEnd = () => {
      setLoading(false);
    };

    const unlisten = () => {
      handleRouteChangeStart();
      setTimeout(() => {
        handleRouteChangeEnd();
      }, 1700);
    };

    unlisten();
    return () => {};
  }, [location]);

  return (
    <div>
      {loading && (
          <div style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
          }}>
            <Blocks
            height="80"
            width="80"
            color="#4fa94d"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            visible={true}
            position="absolute"
            left="50%"
            top="50%"
          />
          </div>
      )}

      {!loading && (
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Main />} />
          <Route path="/profile" element={<Profile />} />
          <Route path='/home-tech-events' element={<StaticEvents type="Tech Events" />} />
          <Route path='/home-fun-events' element={<StaticEvents type="Fun Events" />} />
          <Route path='/home-workshops' element={<StaticEvents type="Workshops" />} />
          <Route path='/tech-events' element={<Event type="Tech Events" />} />
          <Route path='/fun-events' element={<Event type="Fun Events" />} />
          <Route path='/workshops' element={<Event type="Workshops" />} />
          <Route path='/about-us' element={<About_us />} />
        </Routes>
      )}
    </div>
  );
};

export default App;
