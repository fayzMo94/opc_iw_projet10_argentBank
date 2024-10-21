import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <nav className="main-nav">
      <NavLink className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={require("../../assets/argentBank_Logo.webp")}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      <div>
        {/* <a className="main-nav-item" href="">
          <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
          <p>Sign In</p>
        </a> */}
        <NavLink className="main-nav-item" to="/login">
          <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
          <p>Sign In</p>
        </NavLink>
      </div>
    </nav>
  );
};
