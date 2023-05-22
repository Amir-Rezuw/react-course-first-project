import ExpenseForm from "./ExpenseForm";
import { v4 as gidV4 } from "uuid";
import { IExpenses } from "../../../Interfaces/Expenses";
function NewExpense({ addExpense }: { addExpense: (data: IExpenses) => void }) {
  const saveExpenseData = (data: IExpenses) => {
    const expenseData = {
      ...data,
      id: gidV4(),
    };
    addExpense(expenseData);
  };

  return (
    <div className=" bg-primaryLightPurple p-4 my-8 mx-auto w-50 max-w-95 rounded-xl text-center shadow-primary">
      <ExpenseForm onSaveNewExpense={saveExpenseData} />
    </div>
  );
}

export default NewExpense;
