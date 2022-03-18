import React from "react";
import "../styles/style.css";
import profileImage from "../images/my_pic.jpg";

function Header() {
  return (
    <header>
      <img
        src={profileImage}
        height="50%"
        width="100%"
        alt="He or She smiling"
      />
      <h2 className="personName">Ismail Musharaf</h2>
      <h4 className="title">Software Engineer</h4>
      <h6
        className="websiteLink"
        onClick={() => (window.location.href = "https://ismailmushraf.com")}
      >
        ismailmushraf.com
      </h6>
      <div
        className="socialProfile"
        id="email"
        onClick={() =>
          (window.location.href = "mailto:ismailmushraf@gmail.com")
        }
      >
        <i className="fa fa-envelope" aria-hidden="true"></i>
        <span>Email</span>
      </div>
      <div
        className="socialProfile"
        id="linkedIn"
        onClick={() =>
          (window.location.href = "https://linkedin.com/in/ismailmushraf")
        }
      >
        <i className="fa fa-linkedin-square" aria-hidden="true"></i>
        <span>LinkedIn</span>
      </div>
    </header>
  );
}

export default Header;
