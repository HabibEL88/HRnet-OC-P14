import React, { useContext, useState } from "react";
import { Modal } from "modal-projet-14-oc";
import { useNavigate } from "react-router-dom";
import "../style/form.css";

import { EmployeeContext } from "../services/employees";
import { useForm } from "react-hook-form";
import "react-datepicker/dist/react-datepicker.css";
import Input from "./Input";
import DatePickerField from "./DatePickerField";
import DropDownField from "./DropDown";

import { states, departments } from "../services/data";

const Form = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    console.debug("saving new employee...");

    data.birthDate = data.birthDate.toLocaleDateString();
    data.startDate = data.startDate.toLocaleDateString();
    data.id = employees.slice(-1)[0].id + 1;

    // TODO: récupérer tous les inputs
    // TODO: je transforme mes inputs en un nouveau employee
    setEmployees([...employees, data]);
    setShow(true);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="container">
      <h2>Create Employee</h2>
      <Input
        name="name"
        label="First Name"
        inputClass="input-form"
        inputType="text"
        labelClass="label-wrapper"
        spanClass="label-text"
        containerClass="field"
        autoComplete="off"
        register={register}
        errors={errors}
      />
      <Input
        name="lastName"
        label="Last Name"
        inputClass="input-form"
        inputType="text"
        labelClass="label-wrapper"
        spanClass="label-text"
        containerClass="field"
        autoComplete="off"
        register={register}
        errors={errors}
      />
      <DatePickerField
        name="birthDate"
        label="Birth Date"
        control={control}
        rules={{ required: "Please choose your Birthdate" }}
        errors={errors}
      />
      <DatePickerField
        name="startDate"
        label="Start Date"
        control={control}
        rules={{ required: "Please choose a Start Date" }}
        errors={errors}
      />

      <fieldset className="address">
        <legend>Address</legend>
        <Input
          name="Street"
          label="Street"
          inputClass="input-form"
          inputType="text"
          labelClass="label-wrapper"
          spanClass="label-text"
          containerClass="field"
          autoComplete="off"
          register={register}
          errors={errors}
        />
        <Input
          name="City"
          label="City"
          inputClass="input-form"
          inputType="text"
          labelClass="label-wrapper"
          spanClass="label-text"
          containerClass="field"
          autoComplete="off"
          register={register}
          errors={errors}
        />
        <DropDownField
          name={"State"}
          label={"State"}
          control={control}
          rules={{ required: "Please choose a State" }}
          errors={errors}
          data={states}
          labelKey="name"
        />

        <Input
          name="Zip"
          label="Zip Code"
          inputClass="input-form"
          inputType="number"
          labelClass="label-wrapper"
          spanClass="label-text"
          containerClass="fieldBottom"
          autoComplete="off"
          register={register}
          errors={errors}
        />

        <DropDownField
          name={"Department"}
          label={"Department"}
          control={control}
          rules={{ required: "Please choose a Departement" }}
          errors={errors}
          data={departments}
          labelKey="department"
        />
      </fieldset>
      <button className="submitForm" aria-label="Save the form data">
        Save
      </button>
      <Modal
        onClose={() => {
          setShow(false);
          navigate("/Employees");
        }}
        show={show}
      >
        <p>Employee Created !</p>
      </Modal>
    </form>
  );
};

export default Form;
