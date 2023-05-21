import Input from "../../Common/Input";
import { SubmitHandler, useForm } from "react-hook-form";
interface Inputs {
  title: string;
  amount: number;
  date: string;
}
function ExpenseForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (_data) => {
    console.log(errors);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex flex-wrap text-left justify-between">
        <div className="flex flex-col justify-between h-20 ">
          <Input
            labelStyles="font-bold"
            type="text"
            labelHTMLFor="Title"
            labelText="Title"
            name="title"
            register={register}
            className={errors.title && "border-red-500 border-2"}
            isFieldRequired
          />
        </div>
        <div className="flex flex-col justify-between h-20">
          <Input<Inputs>
            isFieldRequired
            labelStyles="font-bold"
            type="number"
            min={0.01}
            step={0.01}
            labelHTMLFor="Amount"
            labelText="Amount"
            name="amount"
            className={errors.amount && "border-red-500 border-2"}
            register={register}
          />
        </div>
        <div className="flex flex-col justify-between h-20">
          <Input
            isFieldRequired
            labelStyles="font-bold"
            type="date"
            min={"2019-01-01"}
            max={"2025-12-31"}
            labelHTMLFor="date"
            labelText="Date"
            name="date"
            className={errors.date && "border-red-500 border-2"}
            register={register}
          />
        </div>
        <div className="flex items-end">
          <button
            type="submit"
            className="cursor-pointer border border-primaryDarkPurple bg-primaryDarkPurple text-white rounded-xl ml-4 px-8 h-14  hover:bg-hoverPurple"
          >
            Submit
          </button>
        </div>
      </div>
    </form>
  );
}

export default ExpenseForm;
