import React, { useEffect, useState } from "react";
import "./LoginForm.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHandPointLeft,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";
import { useLoginUserMutation } from "../../redux/service/apiData";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login } from "../../redux/features/authSlice";

export const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);

  const [errMsge, setErrMsge] = useState("");

  const [loginUser, { data, isSuccess, isError }] = useLoginUserMutation();

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //! Function to validate email
  const isValidEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  //! Function to validate password
  const isValidPassword = (password) => {
    // at least 5 characters, at least one letter and one number
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,}$/;
    return regex.test(password);
  };

  //! Form Submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrMsge("");

    if (!isValidEmail(email)) {
      setErrMsge("L'adresse email n'est pas valide");
      return;
    }

    if (!isValidPassword(password)) {
      setErrMsge(
        "Le mot de passe doit contenir au moins 5 caractères, une lettre et un chiffre"
      );
      return;
    }

    const credentials = { email: email, password: password };
    await loginUser(credentials);
  };

  useEffect(() => {
    if (isSuccess) {
      const token = data.body.token;
      dispatch(login(token));
      sessionStorage.setItem("token", token);
      if (rememberMe) {
        localStorage.setItem("token", token);
      }
      navigate("/user");
    } else if (isError) {
      setErrMsge("Email ou mot de passe incorrect");
    }
  }, [isSuccess, isError]);

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faUserCircle} className="userIcon" />
      <h1>Sign In</h1>
      <form id="loginForm" onSubmit={handleSubmit}>
        <div className="input-wrapper">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-remember">
          <input
            type="checkbox"
            id="remember-me"
            onChange={() => setRememberMe(!rememberMe)}
          />
          <label htmlFor="remember-me">Remember me</label>
        </div>
        <button type="submit" className="sign-in-button">
          Sign In
        </button>
        {errMsge && <p className="error-msg">{errMsge}</p>}
      </form>
    </section>
  );
};
