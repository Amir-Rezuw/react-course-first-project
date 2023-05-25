import { Fragment, useState } from "react";
import "./App.css";

import { IExpenses } from "./Interfaces/Expenses";
import Expenses from "./Components/Expenses/Expenses";
import NewExpense from "./Components/Expenses/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState<IExpenses[]>([]);

  const addExpense = (data: IExpenses) => {
    setExpenses((pervExpense) => [data, ...pervExpense]);
  };
  return (
    <Fragment>
      <NewExpense addExpense={addExpense} />
      <Expenses expenses={expenses} />
    </Fragment>
  );
}

export default App;
