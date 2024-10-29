import React, { useEffect } from "react";
import "./UserProfile.css";
import { User } from "../../components/User/User";
import { AccountCard } from "../../components/Account/AccountCard";
import accountCardData from "../../data/accountCardData.json";
import { useDispatch, useSelector } from "react-redux";
import { useGetUserDataQuery } from "../../redux/service/apiData";
import { setUser } from "../../redux/features/userSlice";

export const UserProfile = () => {
  const token = useSelector((state) => state.auth.token);
  const { data, isError, isSuccess, isLoading, error } =
    useGetUserDataQuery(token);

  const dispatch = useDispatch();

  useEffect(() => {
    if (isSuccess) {
      const userData = data.body;
      dispatch(setUser(userData));
    }
    if (isError) {
      console.log("Error fetching user data:", error);
    }
  }, [token, data, isError, isSuccess, isLoading]);

  return (
    <main className="main bg-dark">
      <User />
      <h2 className="sr-only">Accounts</h2>
      {accountCardData.map((data) => {
        return <AccountCard key={data.id} data={data} />;
      })}
    </main>
  );
};
