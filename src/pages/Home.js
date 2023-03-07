import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import "../styles/Home.css";

function Home() {
  const handleEmailClick = () => {
    window.location.href = "mailto:varun.savai23@gmail.com";
  };
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Varun Savai</h2>
        <div className="prompt">
          <p>A software developer with a passion for learning and creating.</p>
          <a
            href="https://www.linkedin.com/in/varunsavai/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </a>
          <button onClick={handleEmailClick} style={{border:'none', padding:'0', background:'none'}}>
            <EmailIcon />
          </button>
          <a
            href="https://github.com/varun442"
            target="_blank"
            rel="noopener noreferrer"
          >
            <GitHubIcon />
          </a>
        </div>
      </div>
      <div className="skills">
        <h1> Skills</h1>
        <ol className="list">
          <li className="item">
            <h2> Front-End</h2>
            <span>
              ReactJS, Redux, Redux ToolKit, HTML, CSS, SASS, BootStrap,
              MaterialUI
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJS, Java Spring, MySQL, MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, Java, Python, C, C++</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Home;
