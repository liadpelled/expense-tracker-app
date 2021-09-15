import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // <--- MULTI STATE APPROACH --->
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  // <--- SINGLE STATE APPROACH --->
  //   const [enteredDetails, setEnteredDetails] = useState({
  //     enteredTitle: "",
  //     enteredAmount: "",
  //     enteredDate: "",
  //   });

  //   const detailsChangeHandler = (event) => {
  //     switch (event.target.className) {
  //       case "new-Expense__title":
  //         setEnteredDetails((enteredDetails) => {
  //           return {
  //             ...enteredDetails,
  //             enteredTitle: event.target.value,
  //           };
  //         });
  //         break;
  //       case "new-Expense__price":
  //         setEnteredDetails((enteredDetails) => {
  //           return {
  //             ...enteredDetails,
  //             enteredPrice: event.target.value,
  //           };
  //         });
  //         break;
  //       case "new-Expense__date":
  //         setEnteredDetails((enteredDetails) => {
  //           return {
  //             ...enteredDetails,
  //             enteredDate: event.target.value,
  //           };
  //         });
  //         break;
  //       default:
  //         break;
  //     }
  //   };

  const submitHandler = (event) => {
    event.preventDefault(); // Avoid sending an HTTP request upon submitting form

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate)
    };

    props.onSaveExpenseData(expenseData);
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');

    props.onAddExpense();
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            className="new-expense__title"
            type="text"
            onChange={titleChangeHandler}
            value={enteredTitle}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            className="new-expense__amount"
            type="text"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            className="new-expense__date"
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
