import React from "react";
import "./User.css";
import { useSelector } from "react-redux";

export const User = () => {
  const userData = useSelector((state) => state.user.userData);
  console.log(userData)

  return (
    <div className="userSection">
      <h1>
        Welcome back
        <br />
        {userData.firstName} {userData.lastName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
};
