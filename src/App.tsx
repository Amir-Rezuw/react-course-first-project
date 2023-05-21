import { Fragment } from "react";
import "./App.css";

import { IExpenses } from "./Interfaces/Expenses";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
  const expenses: IExpenses[] = [
    {
      id: "e1",
      title: "title1",
      amount: 129.21,
      date: new Date(),
    },
    {
      id: "e2",
      title: "title2",
      amount: 92.11,
      date: new Date(),
    },
    {
      id: "e3",
      title: "title3",
      amount: 132.55,
      date: new Date(),
    },
    {
      id: "e4",
      title: "title4",
      amount: 312.98,
      date: new Date(),
    },
  ];
  return (
    <Fragment>
      <NewExpense />
      <Expenses expenses={expenses} />
    </Fragment>
  );
}

export default App;
