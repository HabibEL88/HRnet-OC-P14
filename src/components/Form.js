import React, { useContext, useState } from "react";
import { Modal } from "modal-projet-14-oc";
import { useNavigate } from "react-router-dom";
import "../style/form.css";

import { EmployeeContext } from "../services/employees";
import { Controller, useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";
import Dropdown from "./dropdownSelect";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Select from "react-dropdown-select";

import { states, departments } from "../services/data";

const Form = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const {
    control,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitForm = (data) => {
    data.birthDate = data.birthDate.toLocaleDateString();
    data.startDate = data.startDate.toLocaleDateString();
    data.id = employees.slice(-1)[0].id + 1;
    console.log(data);
    console.debug("saving new employee...");
    console.log(employees.slice(-1));
    // TODO: récupérer tous les inputs
    // TODO: je transforme mes inputs en un nouveau employee
    setEmployees([...employees, data]);
    console.log(employees);
    setShow(true);
  };

  return (
    <form onSubmit={handleSubmit(submitForm)} className="container">
      <h2>Create Employee</h2>
      <div className="field">
        <input
          className="input-form"
          type="text"
          name="name"
          autoComplete="off"
          onChange={(e) => setFirstName(e.target.value)}
          {...register("name", {
            required: "This is required.",
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <ErrorMessage
          errors={errors}
          name="name"
          render={({ message }) => <p>{message}</p>}
        />
        <label htmlFor="name" className="label-wrapper">
          <span className="label-text">First Name</span>
        </label>
      </div>
      <div className="field">
        <input
          className="input-form"
          type="text"
          name="LastName"
          autoComplete="off"
          {...register("lastName", {
            required: "This is required.",
            pattern: /^[A-Za-z]+$/i,
          })}
        />
        <ErrorMessage
          errors={errors}
          name="lastName"
          render={({ message }) => <p>{message}</p>}
        />
        <label htmlFor="lastName" className="label-wrapper">
          <span className="label-text">Last Name</span>
        </label>
      </div>
      <div className="datePicker">
        <label htmlFor="birthDate" className="label-wrapper">
          <span className="label-text">Birth Date</span>
        </label>
        <Controller
          control={control}
          name="birthDate"
          rules={{ required: "This is required." }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="birthDate"
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <div className="datePicker">
        <label htmlFor="startDate" className="label-wrapper">
          <span className="label-text">Start Date</span>
        </label>
        <Controller
          control={control}
          name="startDate"
          rules={{ required: "This is required." }}
          render={({ field }) => (
            <DatePicker
              placeholderText="Select date"
              selected={field.value}
              onChange={(date) => field.onChange(date)}
            />
          )}
        />
        <ErrorMessage
          errors={errors}
          name="startDate"
          render={({ message }) => <p>{message}</p>}
        />
      </div>
      <fieldset className="address">
        <legend>Address</legend>

        <div className="field">
          <input
            className="input-form"
            type="text"
            id="street"
            autoComplete="off"
            {...register("Street", {
              required: "This is required.",
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="Street"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="Street" className="label-wrapper">
            <span className="label-text">Street</span>
          </label>
        </div>

        <div className="field">
          <input
            className="input-form"
            type="text"
            id="City"
            autoComplete="off"
            {...register("City", {
              required: "This is required.",
              pattern: /^[A-Za-z]+$/i,
            })}
          />
          <ErrorMessage
            errors={errors}
            name="City"
            render={({ message }) => <p>{message}</p>}
          />
          <label htmlFor="City" className="label-wrapper">
            <span className="label-text">City</span>
          </label>
        </div>

        <div className="dropdown">
          <label htmlFor="State">State</label>
          <Controller
            control={control}
            name="State"
            rules={{ required: "This is required." }}
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
          <ErrorMessage
            errors={errors}
            name="State"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className="fieldBottom">
          <label htmlFor="Zip">Zip Code</label>
          <input
            className="input-form"
            id="Zip"
            type="number"
            {...register("Zip", { required: "This is required." })}
          />
          <ErrorMessage
            errors={errors}
            name="Zip"
            render={({ message }) => <p>{message}</p>}
          />
        </div>

        <div className="dropdown">
          <label htmlFor="Department">Department</label>
          <Controller
            control={control}
            name="Department"
            rules={{ required: "This is required." }}
            render={({ field, labelKey = "department" }) => (
              <Select
                options={departments}
                dropdownHandleRenderer={({ state }) => (
                  // if dropdown is open show "–" else show "+"
                  <span>{state.dropdown ? "–" : "+"}</span>
                )}
                onChange={(val) => {
                  console.log(val);
                  field.onChange(val[0].department);
                }}
                labelField={labelKey}
                valueField={labelKey}
              />
            )}
          />
          <ErrorMessage
            errors={errors}
            name="Department"
            render={({ message }) => <p>{message}</p>}
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
