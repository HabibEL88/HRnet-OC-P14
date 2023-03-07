import React, { useContext, useState } from "react";
import { Modal } from "modal-projet-14-oc";
import { useNavigate } from "react-router-dom";
import "../style/form.css";

import { EmployeeContext } from "../services/employees";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";

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
      <div className="field">
        <label htmlFor="name" className="label-wrapper">
          <span className="label-text">First Name</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p className="errorMessage">{message}</p>}
        />
        <input
          className="input-form"
          type="text"
          name="name"
          autoComplete="off"
          {...register("name", {
            required: "Please enter yout First Name",
            pattern: /^(?!\s+$)[a-zA-Z]{2,}$/,
          })}
        />
      </div>
      <div className="field">
        <label htmlFor="lastName" className="label-wrapper">
          <span className="label-text">Last Name</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => <p className="errorMessage">{message}</p>}
        />
        <input
          className="input-form"
          type="text"
          name="lastName"
          autoComplete="off"
          {...register("lastName", {
            required: "Please enter your Last Name",
            pattern: /^(?!\s+$)[a-zA-Z]{2,}$/,
          })}
        />
      </div>
      <div className="datePicker">
        <label htmlFor="birthDate" className="label-wrapper">
          <span className="label-text">Birth Date</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="birthDate"
          render={({ message }) => <p className="errorMessage">{message}</p>}
        />
        <Controller
          control={control}
          name="birthDate"
          rules={{ required: "Please choose your Birthdate" }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </div>
      <div className="datePicker">
        <label htmlFor="startDate" className="label-wrapper">
          <span className="label-text">Start Date</span>
        </label>
        <ErrorMessage
          errors={errors}
          name="startDate"
          render={({ message }) => <p className="errorMessage">{message}</p>}
        />
        <Controller
          control={control}
          name="startDate"
          rules={{ required: "Please choose a Start Date" }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
      </div>
      <fieldset className="address">
        <legend>Address</legend>

        <div className="field">
          <label htmlFor="Street" className="label-wrapper">
            <span className="label-text">Street</span>
          </label>
          <ErrorMessage
            errors={errors}
            name="Street"
            render={({ message }) => <p className="errorMessage">{message}</p>}
          />
          <input
            className="input-form"
            type="text"
            id="street"
            autoComplete="off"
            {...register("Street", {
              required: "Please enter a valid street",
              pattern: /^(?!\s+$)[a-zA-Z]{2,}$/,
            })}
          />
        </div>

        <div className="field">
          <label htmlFor="City" className="label-wrapper">
            <span className="label-text">City</span>
          </label>
          <ErrorMessage
            errors={errors}
            name="City"
            render={({ message }) => <p className="errorMessage">{message}</p>}
          />
          <input
            className="input-form"
            type="text"
            id="City"
            autoComplete="off"
            {...register("City", {
              required: "Please enter a valid City",
              pattern: /^(?!\s+$)[a-zA-Z]{2,}$/,
            })}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="State">State</label>
          <ErrorMessage
            errors={errors}
            name="State"
            render={({ message }) => <p className="errorMessage">{message}</p>}
          />
          <Controller
            control={control}
            name="State"
            rules={{ required: "Please choose a State" }}
            render={({ field, labelKey = "name" }) => (
              <Select
                options={states}
                dropdownHandleRenderer={({ state }) => (
                  // if dropdown is open show "–" else show "+"
                  <span>{state.dropdown ? "–" : "+"}</span>
                )}
                onChange={(val) => {
                  field.onChange(val[0].name);
                }}
                labelField={labelKey}
                valueField={labelKey}
              />
            )}
          />
        </div>

        <div className="fieldBottom">
          <label htmlFor="Zip">Zip Code</label>
          <ErrorMessage
            errors={errors}
            name="Zip"
            render={({ message }) => <p className="errorMessage">{message}</p>}
          />
          <input
            className="input-form"
            id="Zip"
            type="number"
            {...register("Zip", { required: "Please choose a Zip Code" })}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="Department">Department</label>
          <ErrorMessage
            errors={errors}
            name="Department"
            render={({ message }) => <p className="errorMessage">{message}</p>}
          />
          <Controller
            control={control}
            name="Department"
            rules={{ required: "Please choose a Departement" }}
            render={({ field, labelKey = "department" }) => (
              <Select
                options={departments}
                dropdownHandleRenderer={({ state }) => (
                  // if dropdown is open show "–" else show "+"
                  <span>{state.dropdown ? "–" : "+"}</span>
                )}
                onChange={(val) => {
                  field.onChange(val[0].department);
                }}
                labelField={labelKey}
                valueField={labelKey}
              />
            )}
          />
        </div>
      </fieldset>
      <button className="submitForm">Save</button>
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
