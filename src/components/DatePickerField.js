import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/form.css";
import FormErrorMessage from "./FormErrorMessage";

const DatePickerField = ({
  name,
  label,
  control,
  rules,
  errors,
  ...restProps
}) => (
  <div className="datePicker">
    <label htmlFor={name} className="label-wrapper">
      <span className="label-text">{label}</span>
    </label>
    <FormErrorMessage errors={errors} name={name} />
    <div className="input-wrapper">
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <DatePicker
            placeholderText="Select date"
            selected={value}
            onChange={onChange}
            {...restProps}
          />
        )}
      />
    </div>
  </div>
);

export default DatePickerField;
