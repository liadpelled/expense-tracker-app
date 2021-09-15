import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "l1",
    title: "Great Western Trail",
    amount: 200,
    date: new Date(2021, 9, 14),
  },
  {
    id: "l2",
    title: "Space Base",
    amount: 100,
    date: new Date(2021, 8, 23),
  },
  {
    id: "l3",
    title: "Lisboa",
    amount: 500,
    date: new Date(2021, 2, 11),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    setExpenses((expenses) => {
      return [expense, ...expenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
