import { ChangeEvent } from "react";

function FilterExpenseByYear({
  className: externalStyles,
  onChange,
  value,
}: {
  className?: string;
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
  value?: string;
}) {
  return (
    <div>
      <select
        name="filterExpense"
        id="filterExpense"
        className={` ${externalStyles}`}
        onChange={onChange}
        value={value}
      >
        <option value={`-1`}>All</option>
        <option value={`2019`}>2019</option>
        <option value={`2020`}>2020</option>
        <option value={`2021`}>2021</option>
        <option value={`2022`}>2022</option>
        <option value={`2023`}>2023</option>
      </select>
    </div>
  );
}

export default FilterExpenseByYear;
