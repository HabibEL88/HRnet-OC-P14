import React from "react";
import { Controller } from "react-hook-form";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../style/form.css";
import FormErrorMessage from "./FormErrorMessage";

/**
 * Composant de champ de sélection de date, utilisant react-datepicker et react-hook-form.
 *
 * @param {string} name - Le nom du champ.
 * @param {string} label - Le texte du label associé au champ.
 * @param {object} control - L'objet de contrôle de react-hook-form.
 * @param {object} rules - Les règles de validation de react-hook-form.
 * @param {object} errors - Les erreurs de validation de react-hook-form.
 * @param {object} restProps - Les autres propriétés passées au champ.
 * @returns {JSX.Element} - Le composant de champ de sélection de date.
 */

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
