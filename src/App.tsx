import { Fragment } from "react";
import "./App.css";

import { IExpenses } from "./Interfaces/Expenses";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
  const expenses: IExpenses[] = [];
  const addExpense = (data: IExpenses) => {
    expenses.push(data);
    console.log(expenses);
  };
  return (
    <Fragment>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </Fragment>
  );
}

export default App;
