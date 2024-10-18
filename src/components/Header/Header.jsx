import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";

export const Header = () => {
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="">
        <img
          className="main-nav-logo-image"
          src={require("../../assets/argentBank_Logo.webp")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className="main-nav-item" href="">
          <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
          <p>Sign In</p>
        </a>
      </div>
    </nav>
  );
};
