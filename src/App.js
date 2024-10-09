import { Routes, Route} from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.css";
import "./styles.css";
import { useState } from "react";

function App() {
  const [name] = useState("");
  return (
    <Routes>
      <Route path="/" element={<Layout name={name} />}>
        <Route path="" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
