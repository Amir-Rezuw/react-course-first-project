import { Fragment } from "react";
import ExpenseItem from "./ExpenseItem";
import { IExpenses } from "../../Interfaces/Expenses";
import Card from "../Common/Card";

function Expenses({ expenses }: { expenses: IExpenses[] }) {
  return (
    <div className="flex flex-col items-center justify-center ">
      <Card className="p-4 bg-cardBg w-50 max-w-95 h-full">
        {expenses.map((expense: IExpenses) => {
          return (
            <Fragment key={expense.id}>
              <ExpenseItem {...expense} />;
            </Fragment>
          );
        })}
      </Card>
    </div>
  );
}

export default Expenses;
