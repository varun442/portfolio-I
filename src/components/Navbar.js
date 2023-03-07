import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import ReorderIcon from "@mui/icons-material/Reorder";
import "../styles/Navbar.css";
const Navbar = () => {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  const handleDownload = () => {
    window.location.href =
      "https://drive.google.com/file/d/1FQ98IjhEQWHCHlE3Hls2aXXW_OxP2FeS/view"; // replace with the URL of your file
  };
  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReorderIcon />
        </button>
      </div>

      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/experience">Experience</Link>
        <Link to="/blogs">Blogs</Link>
        <button onClick={handleDownload} className="resume">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Navbar;
