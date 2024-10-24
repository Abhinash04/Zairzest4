import React, { useState, useEffect } from 'react';
import Register from './pages/auth/register/Register';
import Login from './pages/auth/Login/Login';
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from './pages/profile/Profile';
import Event from './pages/event/Event';
import StaticEvents from './pages/static_events/StaticEvents';
import Main from './pages/Main/Main';
import About_us from './pages/About_Us/About_us';
import { Blocks } from 'react-loader-spinner';
import Player from './component/MusicPlayer/Player'; // Import Player component.

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
      }, 1500);
    };

    unlisten();
    return () => { };
  }, [location]);

  // Exclude the Player component on register, login, and loader pages
  const excludePlayerPaths = ['/register', '/login'];

  return (
    <div>
      {loading && (
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '100vh',
          width: '100%',
          backgroundColor: '#000',
          position:'relative',
          zIndex: '100000',
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
        <>
          {/* Conditionally render Player if not on login or register pages */}
          {/* {!excludePlayerPaths.includes(location.pathname) && } */}

          <Routes>
            <Route path="/register" element={<><Register /><Player /></>} />
            <Route path="/login" element={<><Login /><Player /></>} />
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
        </>
      )}


    </div>
  );
};

export default App;
