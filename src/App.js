import React, { useState, useEffect } from "react";
import Register from "./pages/auth/register/Register";
import Login from "./pages/auth/Login/Login";
import { Routes, Route, useLocation } from "react-router-dom";
import Profile from "./pages/profile/Profile";
import StaticEvents from "./pages/static_events/StaticEvents";
import Main from "./pages/Main/Main";
import About_us from "./pages/About_Us/About_us";
import { Blocks } from "react-loader-spinner";
import Player from "./component/MusicPlayer/Player"

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
    return () => {};
  }, [location]);

  const excludePlayerPaths = ["/register", "/login"];

  return (
    <div>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100%",
            backgroundColor: "#000",
            position: "relative",
            zIndex: "100000",
          }}
        >
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
          <Routes>
            <Route
              path="/register"
              element={
                <>
                  <Register />
                  <Player />
                </>
              }
            />
            <Route
              path="/login"
              element={
                <>
                  <Login />
                  <Player />
                </>
              }
            />
            <Route path="/" element={<Main />} />
            <Route path="/profile" element={<Profile />} />
            <Route
              path="/home-tech-events"
              element={<StaticEvents type="Tech Events" />}
            />
            <Route
              path="/home-fun-events"
              element={<StaticEvents type="Fun Events" />}
            />
            <Route
              path="/tech-events"
              element={<StaticEvents type="Tech Events" />}
            />
            <Route
              path="/fun-events"
              element={<StaticEvents type="Fun Events" />}
            />
            <Route path="/about-us" element={<About_us />} />
          </Routes>
        </>
      )}
    </div>
  );
};

export default App;
