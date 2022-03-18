import "../styles/style.css";
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="footer-icons">
        <i
          className="fa fa-twitter-square footer-icon"
          onClick={() =>
            (window.location.href = "https://twitter.com/ismailmushraf")
          }
        ></i>
        <i
          className="fa fa-facebook-square footer-icon"
          onClick={() =>
            (window.location.href = "https://facebook.com/ismailmushraf")
          }
        ></i>
        <i
          className="fa fa-instagram footer-icon"
          onClick={() =>
            (window.location.href = "https://instagram.com/ismailmushraf")
          }
        ></i>
        <i
          className="fa fa-github-square footer-icon"
          onClick={() =>
            (window.location.href = "https://github.com/ismailmushraf")
          }
        ></i>
      </div>
    </footer>
  );
}

export default Footer;
