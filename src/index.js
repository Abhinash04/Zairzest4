import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import Player from "./component/MusicPlayer/Player";
import { PlayerProvider } from "./component/MusicPlayer/PlayerContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <PlayerProvider>
    <BrowserRouter>
      <App />
      {/* <Player /> */}
    </BrowserRouter>,
  {/* </PlayerProvider> */}
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
