import React, { useState } from "react";
import "./AccountCard.css";
import Transactions from "../Transactions/Transactions";

export const AccountCard = ({ data }) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="accountCard">
      <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{data.title}</h3>
          <p className="account-amount">{data.amount}</p>
          <p className="account-amount-description">{data.description}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="transaction-button"
          >
            View transactions
          </button>
        </div>
      </section>
      {collapsed ? <Transactions /> : null}
    </div>
  );
};
