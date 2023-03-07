import React from "react";
import { Controller } from "react-hook-form";
import Select from "react-dropdown-select";
import FormErrorMessage from "./FormErrorMessage";

/**
  * Composant de champ de sélection déroulant, utilisant react-dropdown-select et react-hook-form

 * @param {string} name - Le nom du champ de formulaire associé au champ de sélection déroulant.
 * @param {string} label - Le texte à afficher comme libellé pour le champ de sélection déroulant
 * @param {object} control - L'objet de contrôle fourni par React Hook Form.
 * @param {object} rules - Les règles de validation à appliquer au champ de formulaire associé.
 * @param {object} errors - Les erreurs de validation fournies par React Hook Form.
  * @param {object} data - Les options à afficher dans le champ de sélection déroulant.
  * @param {string} labelKey - La clé pour les options qui représentent l'étiquette à afficher pour chaque option.  
 * @param {object} restProps - Les autres propriétés passées au champ.
 */

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
