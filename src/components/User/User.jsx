import React, { useEffect, useState } from "react";
import "./User.css";
import { useDispatch, useSelector } from "react-redux";
import { useEditUserNameMutation } from "../../redux/service/apiData";
import { updateUsername } from "../../redux/features/userSlice";

export const User = () => {
  const [display, setDisplay] = useState(true);
  const [userName, setUserName] = useState("");
  const [editUserName, { data, isSuccess, isError }] =
    useEditUserNameMutation();
  const userData = useSelector((state) => state.user.userData);
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();

  //! Form submit
  const handleFormSubmit = async (e) => {
    e.preventDefault();
    await editUserName({ token: token, userName: userName });
  };

  useEffect(() => {
    if (isSuccess) {
      const userNameData = data.body.userName;
      console.log(userNameData);
      dispatch(updateUsername(userNameData));
      setDisplay(!display);
    } else if (isError) {
      console.log("Error updating user name:", isError);
    }
  }, [isSuccess]);

  return (
    <div className="userSection">
      {display ? (
        <div className="userSection_userInfo">
          <h2>
            Welcome back
            <br />
            {userData.firstName} {userData.lastName}
          </h2>
          <button onClick={() => setDisplay(!display)} className="edit-button">
            Edit Name
          </button>
        </div>
      ) : (
        <div className="userSection_edit">
          <h2>Edit User Info</h2>
          <form>
            <div className="userInfo-edit">
              <label htmlFor="userName">User Name :</label>
              <input
                type="text"
                defaultValue={userData.userName}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="userInfo-edit">
              <label htmlFor="userName">First Name :</label>
              <input
                type="text"
                defaultValue={userData.firstName}
                disabled={true}
              />
            </div>
            <div className="userInfo-edit">
              <label htmlFor="userName">Last Name :</label>
              <input
                type="text"
                defaultValue={userData.lastName}
                disabled={true}
              />
            </div>
            <div className="buttons">
              <button
                type="submit"
                onClick={handleFormSubmit}
                className="edit-button"
              >
                Save
              </button>
              <button
                onClick={() => setDisplay(!display)}
                className="edit-button"
              >
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
