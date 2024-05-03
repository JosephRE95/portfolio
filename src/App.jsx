import React from "react";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Navbar from "./components/navBar";

function App() {
  return (
    <>
    <Navbar />
    <div>
      <video width="100%" height="240" autoPlay loop muted>
        <source src="/src/joseph/HeaderBlob.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

    </div>
    </>
  );
}

export default App;
