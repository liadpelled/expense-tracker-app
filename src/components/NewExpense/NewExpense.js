import React, { useState } from "react";

import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [addNewMenu, setAddNewMenu] = useState(false);

  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    props.onAddExpense(expenseData);
  };

  const addNewExpenseHandler = () => {
    setAddNewMenu(true);
  };

  const addExpenseHandler = () => {
    setAddNewMenu(false);
  };

  return (
    <div className="new-expense">
      {addNewMenu ? (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDataHandler}
          onAddExpense={addExpenseHandler}
        />
      ) : (
        <button onClick={addNewExpenseHandler}>Add New Expense</button>
      )}
    </div>
  );
};

export default NewExpense;
