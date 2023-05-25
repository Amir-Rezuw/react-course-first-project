import { convertNumericMounthToText } from "../../Services/Common/Functions";
function ExpenseDate({ date }: { date: Date }) {
  return (
    <div
      className="flex flex-col items-center justify-between border px-6 py-2 rounded-2xl bg-primaryDark text-white"
      data-cypress-date-test
    >
      <b
        data-cypress-month-test
        className="text-lg"
      >
        {convertNumericMounthToText(date.getMonth())}
      </b>
      <i
        data-cypress-year-test
        className="text-xs"
      >
        {date.getFullYear()}
      </i>
      <b
        data-cypress-day-test
        className="text-xl"
      >
        {date.getDate()}
      </b>
    </div>
  );
}

export default ExpenseDate;
