import React from 'react';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function App() {
  return (
    <div>
      <header style={headerStyle}>
        <nav>
          <a href="#aboutme" style={linkStyle}>About Me</a>
          <a href="https://www.linkedin.com/in/your_username/" style={iconStyle}>
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://github.com/your_username" style={iconStyle}>
            <FontAwesomeIcon icon={faGithub} />
          </a>
        </nav>
      </header>
      <video width="100%" height="240" autoPlay loop muted>
  <source src="/src/joseph/HeaderBlob.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>

      <h1>I am a Full Stack Developer</h1>
    </div>
  );
}

export default App;