import ExpenseForm from "./ExpenseForm";
function NewExpense() {
  return (
    <div className=" bg-primaryLightPurple p-4 my-8 mx-auto w-50 max-w-95 rounded-xl text-center shadow-primary">
      <ExpenseForm />
    </div>
  );
}

export default NewExpense;
