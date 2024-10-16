import React from 'react'
import Register from './pages/auth/register/Register';
import Login from './pages/auth/Login/Login';
import {Routes,Route} from "react-router-dom";
import Profile from './pages/profile/Profile';
import Event from './pages/event/Event';
import StaticEvents from './pages/static_events/StaticEvents'
import "react-toastify/dist/ReactToastify.css";
import Main from './pages/Main/Main';
import About_us from './pages/About_Us/About_us';

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/register" element={<Register/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/" element={<Main />}></Route>
        <Route path="/profile" element={<Profile />}></Route>
        <Route path='/home-tech-events' element={<StaticEvents type="Tech Events"/>} />
        <Route path='/home-fun-events' element={<StaticEvents type="Fun Events"/>} />
        <Route path='/home-workshops' element={<StaticEvents type="Workshops"/>} />
        <Route path='/tech-events' element={<Event type="Tech Events"/>} />
        <Route path='/fun-events' element={<Event type="Fun Events"/>} />
        <Route path='/workshops' element={<Event type="Workshops"/>} />
        <Route path='/about-us' element={<About_us/>} />
      </Routes>
    
    </div>
  )
}

export default App