import { ChangeEvent, Fragment, HTMLInputTypeAttribute } from "react";
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
  value,
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
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  value?: any;
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
        className={`${styles} p-2 rounded-md border border-primaryLightGray w-80 max-w-full`}
        type={type}
        max={max}
        min={min}
        step={step}
        id={labelHTMLFor}
        value={value}
        {...register(name, {
          required: isFieldRequired,
        })}
      />
    </Fragment>
  );
};

export default Input;
