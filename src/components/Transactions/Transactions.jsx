import React from "react";
import "./Transactions.css";
import dummyTransaction from "../../data/dummyTransaction.json";
import TransactionsData from "./TransactionsData/TransactionsData";

const Transactions = () => {
  return (
    <table className="transactions_container">
      <thead>
        <tr>
            <th width="20%" scope="col">
              Date
            </th>
            <th width="20%" scope="col">
              Description
            </th>
            <th width="15%" align="center" scope="col">
              Amount
            </th>
            <th width="15%" align="center" scope="col">
              Balance
            </th>
            <th></th>
        </tr>
      </thead>
      <tbody>
        {dummyTransaction.map((trans) => (
          <TransactionsData key={trans.id} trans={trans} />
        ))}
      </tbody>
    </table>
  );
};

export default Transactions;
