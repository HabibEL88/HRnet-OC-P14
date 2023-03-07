import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-dropdown-select";
import FormErrorMessage from "./FormErrorMessage";

const DropDownField = ({
  name,
  label,
  control,
  rules,
  errors,
  data,
  labelKey,
  ...restProps
}) => {
  console.log(data);
  return (
    <div className="dropdown">
      <label htmlFor={name}>{label}</label>
      <FormErrorMessage errors={errors} name={name} />
      <Controller
        control={control}
        name={name}
        rules={rules}
        render={({ field }) => (
          <Select
            className="dropDownSelect"
            options={data}
            dropdownHandleRenderer={({ state }) => (
              // if dropdown is open show "–" else show "+"
              <span>{state.dropdown ? "–" : "+"}</span>
            )}
            onChange={(val) => {
              console.log(val);
              field.onChange(val[0][labelKey]);
            }}
            labelField={labelKey}
            valueField={labelKey}
            {...restProps}
          />
        )}
      />
    </div>
  );
};

export default DropDownField;
