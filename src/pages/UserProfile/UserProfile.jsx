import React from "react";
import "./UserProfile.css";
import { User } from "../../components/User/User";
import { AccountCard } from "../../components/Account/AccountCard";
import accountCardData from "../../data/accountCardData.json";

export const UserProfile = () => {
  return (
    <main className="main bg-dark">
      <User />
      <h2 className="sr-only">Accounts</h2>
      {accountCardData.map((data)=>{
        return <AccountCard key={data.id} data={data} />
      })}
    </main>
  );
};
