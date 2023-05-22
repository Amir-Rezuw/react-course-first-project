import { Fragment, HTMLInputTypeAttribute } from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

const Input = <T extends FieldValues>({
  type,
  max,
  min,
  step,
  className: styles,
  labelText,
  labelHTMLFor,
  labelStyles,
  name,
  register,
  isFieldRequired = false,
}: {
  type: HTMLInputTypeAttribute;
  min?: string | number;
  max?: string | number;
  step?: string | number;
  className?: string;
  labelText?: string;
  labelHTMLFor?: string;
  labelStyles?: string;
  name: Path<T>;
  register: UseFormRegister<T>;
  isFieldRequired: boolean;
}) => {
  return (
    <Fragment>
      {labelText && (
        <label
          className={labelStyles}
          htmlFor={labelHTMLFor}
        >
          {labelText}
        </label>
      )}
      <input
        className={`p-2 rounded-md border border-primaryLightGray w-80 max-w-full ${styles}`}
        type={type}
        max={max}
        min={min}
        step={step}
        id={labelHTMLFor}
        {...register(name, {
          required: isFieldRequired,
        })}
      />
    </Fragment>
  );
};

export default Input;
