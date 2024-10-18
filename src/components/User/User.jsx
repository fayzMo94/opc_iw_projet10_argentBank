import React from 'react'
import './User.css'

export const User = () => {
  return (
    <div className="userSection">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  );
}
