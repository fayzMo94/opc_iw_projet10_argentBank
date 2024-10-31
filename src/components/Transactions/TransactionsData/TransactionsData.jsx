import React, { useState } from "react";
import "./TransactionsData.css";
import { MdOutlineArrowBackIosNew } from "react-icons/md";
import TransactionDetails from "./TransactionDetails/TransactionDetails";

const TransactionsData = ({ trans }) => {
  const [collapse, setCollapse] = useState(false);

  return (
    <>
      <tr className="transactionData_tr">
        <td width="20%">{trans.date}</td>
        <td width="20%">{trans.description}</td>
        <td width="15%" align="center">
          ${trans.amount.toFixed(2)}
        </td>
        <td width="15%" align="center">
          ${trans.balance.toFixed(2)}
        </td>
        <MdOutlineArrowBackIosNew
          className={`collapse_arrow ${
            collapse ? "collapse_arrow-dwn" : "collapse_arrow-up"
          }`}
          onClick={() => setCollapse(!collapse)}
        />
      </tr>

      <tr>
        <td colSpan={5}>
          <TransactionDetails collapse={collapse} trans={trans}/>
        </td>
      </tr>
    </>
  );
};

export default TransactionsData;
