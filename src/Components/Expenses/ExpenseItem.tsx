import { IExpenses } from "../../Interfaces/Expenses";
import Card from "../Common/Card";

import ExpenseDate from "./ExpenseDate";

function ExpenseItem({ date, amount, title }: IExpenses) {
  return (
    <Card className="bg-primaryBg my-4 p-2 flex items-center justify-between">
      <ExpenseDate date={date} />
      <div className="flex justify-between items-center w-full font-bold max-[580px]::flex-row max-[580px]::items-center max-[580px]::justify-start">
        <h2 className="text-white text-base mx-4 my-0 max-[580px]::text-xl">
          {title}
        </h2>
        <div className="rounded-xl p-2 border border-white bg-primaryDarkPurple text-white font-bold text-base max-[580px]::text-xl px-2 py-6">
          ${amount}
        </div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
