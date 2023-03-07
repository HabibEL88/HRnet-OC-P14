import React from "react";
import FormErrorMessage from "./FormErrorMessage";

const Input = ({
  name,
  label,
  containerClass,
  labelClass,
  spanClass,
  inputClass,
  inputType,
  autoComplete,
  register,
  errors,
  pattern = /^(?!\s+$)[a-zA-Z]{2,}$/,
  required = true,
}) => {
  if (inputType != "text") pattern = undefined;
  return (
    <div className={containerClass}>
      <label htmlFor={name} className={labelClass}>
        <span className={spanClass}>{label}</span>
      </label>
      <FormErrorMessage errors={errors} name={name} />

      <input
        className={inputClass}
        type={inputType}
        id={name}
        name={name}
        autoComplete={autoComplete}
        {...register(name, {
          required: required && `Please enter your ${label}`,
          pattern: {
            value: pattern,
            message: `Please enter a valid ${label}`,
          },
        })}
      />
    </div>
  );
};

export default Input;
