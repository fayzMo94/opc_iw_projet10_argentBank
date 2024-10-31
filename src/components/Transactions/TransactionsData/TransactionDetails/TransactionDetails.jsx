import React, { useState } from "react";
import { RiPencilLine } from "react-icons/ri";
import "./TransactionDetail.css";

const TransactionDetails = ({ collapse, trans }) => {
  const [editCat, setEditCat] = useState(false);
  const [editNote, setEditNote] = useState(false);

  const handleCatSubmit = (e) => {
    e.preventDefault();
    setEditCat(false);
  };

  return (
    <div
      className={`transactionDetails_container ${
        collapse ? "tdc--show" : "tdc--hide"
      }`}
    >
      <table width={"100%"}>
        <tr>
          <th width="20%" scope="row">
            Transaction type
          </th>
          <td>{trans.transactionType}</td>
        </tr>
        <tr>
          <th scope="row">Category</th>
          <td className="icon-text-container">
            {trans.category}{" "}
            <RiPencilLine
              onClick={() => setEditCat(!editCat)}
              className="edit-icon"
            />
            {/* {editCat && (
              <form className="selectCat_form">
                <label htmlFor="category">Select a category</label>
                <select id="category" name="category">
                  <option value="food">Food</option>
                  <option value="utilities">Utilities</option>
                  <option value="rent">Rent</option>
                  <option value="other">Other</option>
                </select>
                <div className="buttons">
                  <button onClick={handleCatSubmit}>save</button>
                  <button
                    onClick={() => {
                      setEditCat(false);
                    }}
                  >
                    cancel
                  </button>
                </div>
              </form>
            )} */}
          </td>
        </tr>
        <tr>
          <th scope="row">Note</th>
          <td className="icon-text-container">
            {trans.note}{" "}
            <RiPencilLine
              onClick={() => setEditNote(true)}
              className="edit-icon"
            />
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TransactionDetails;
