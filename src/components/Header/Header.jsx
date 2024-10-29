import React from "react";
import "./Header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { removeUser } from "../../redux/features/userSlice";
import { logout } from "../../redux/features/authSlice";
import { useNavigate } from "react-router-dom";

export const Header = () => {
  const userData = useSelector((state) => state.user.userData);
  const isConnected = useSelector((state) => state.auth.isConnected);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // ! Function to handle logout
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    localStorage.removeItem("token");
    dispatch(removeUser());
    dispatch(logout());
    navigate("/");
  };

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
      {isConnected ? (
        <div className="main-nav_user">
          <NavLink className="main-nav-item" to="/user">
            <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
            <p>{userData.userName}</p>
          </NavLink>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <NavLink className="main-nav-item" to="/login">
            <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
            <p>Sign In</p>
          </NavLink>
        </div>
      )}
    </nav>
  );
};
