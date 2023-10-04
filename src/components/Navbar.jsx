import React from 'react';
import "./Navbar.css";
import logo from "./images/111111.png"
import logo1 from "./images/logo.png"


const Navbar = () => {
  return (
    <div>
      <nav >
        <div>
        <a href="https://google-developers-student-clubs-dmce.github.io/linktree/" >
        <img className="logo1" src={logo1} alt="logo" />
        </a>
        </div>
        <div className="social-icon" >
            <a target='_blank' href="https://www.linkedin.com/company/gdsc-dmce/"><i className="fa-brands fa-linkedin  linkedin" id="linkedin"></i></a>
            <a target='_blank' href="https://github.com/Google-Developer-Students-Club-DMCE"><i className="fa-brands fa-github  linkedin" id="github"></i></a>
            <a target='_blank' href="https://www.instagram.com/gdsc.dmce"><i className="fa-brands fa-instagram  linkedin" id="instagram"></i></a>
            <a target='_blank' href="https://www.youtube.com/@gdsc_dmce"><i className="fa-brands fa-youtube linkedin" id='youtube'></i></a>
            <a target='_blank' href="https://twitter.com/DmceGdsc"><i className="fa-brands fa-twitter linkedin" id='twitter'></i></a>
        </div>
      </nav>
      
    </div>
  );
}

export default Navbar;