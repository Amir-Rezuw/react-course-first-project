import { ChangeEvent, Fragment, useState } from "react";
import ExpenseItem from "./ExpenseItem";
import { IExpenses } from "../../Interfaces/Expenses";
import Card from "../Common/Card";
import FilterExpenseByYear from "./Filter/FilterExpense";

function Expenses({ expenses }: { expenses: IExpenses[] }) {
  const [selectedYear, setSelectedYear] = useState(
    new Date().getFullYear().toString()
  );
  const filteredExpense = expenses.filter((expense) => {
    if (selectedYear !== "-1") {
      return expense.date.getFullYear().toString() === selectedYear.toString();
    } else {
      return expense;
    }
  });
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card className="p-4 bg-cardBg w-50 max-w-95 h-full">
        <div className="flex justify-end">
          <FilterExpenseByYear
            className="w-44 h-10 rounded-xl p-1"
            onChange={(e: ChangeEvent<HTMLSelectElement>) => {
              setSelectedYear((e.target as HTMLSelectElement).value);
            }}
            value={selectedYear}
          />
        </div>
        {filteredExpense.map((expense: IExpenses) => {
          return (
            <Fragment key={expense.id}>
              <ExpenseItem {...expense} />
            </Fragment>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
