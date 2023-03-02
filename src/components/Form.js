import React, { useContext, useState } from "react";
import { Modal } from "modal-projet-14-oc";
import { useNavigate } from "react-router-dom";
import "../style/form.css";

import { EmployeeContext } from "../services/employees";
import Datepicker from "./datepicker";
import Dropdown from "./dropdownSelect";

import { states, departments } from "../services/data";

const Form = () => {
  const { employees, setEmployees } = useContext(EmployeeContext);
  const [firstName, setFirstName] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const save = () => {
    console.debug("saving new employee...");
    // TODO: récupérer tous les inputs
    // TODO: je transforme mes inputs en un nouveau employee
    const employee = { name: firstName };
    setEmployees([...employees, employee]);
    setShow(true);
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        save();
      }}
      className="container"
    >
      <h2>Create Employee</h2>
      <div className="field">
        <input
          className="input-form"
          type="text"
          name="first-name"
          autoComplete="off"
          required
          onChange={(e) => setFirstName(e.target.value)}
        />
        <label htmlFor="first-name" className="label-wrapper">
          <span className="label-text">First Name</span>
        </label>
      </div>
      <div className="field">
        <input
          className="input-form"
          type="text"
          name="last-name"
          autoComplete="off"
          required
        />
        <label htmlFor="last-name" className="label-wrapper">
          <span className="label-text">Last Name</span>
        </label>
      </div>
      <div className="datePicker">
        <label htmlFor="start-date" className="label-wrapper">
          <span className="label-text">Birth Date</span>
        </label>
        <Datepicker />
      </div>
      <div className="datePicker">
        <label htmlFor="start-date" className="label-wrapper">
          <span className="label-text">Start Date</span>
        </label>
        <Datepicker />
      </div>
      <fieldset className="address">
        <legend>Address</legend>

        <div className="field">
          <input
            className="input-form"
            type="text"
            id="street"
            autoComplete="off"
            required
          />
          <label htmlFor="street" className="label-wrapper">
            <span className="label-text">Street</span>
          </label>
        </div>

        <div className="field">
          <input
            className="input-form"
            type="text"
            id="city"
            autoComplete="off"
            required
          />
          <label htmlFor="city" className="label-wrapper">
            <span className="label-text">City</span>
          </label>
        </div>

        <div className="dropdown">
          <label htmlFor="state">State</label>
          <Dropdown options={states} labelKey={"name"} />
        </div>

        <div className="fieldBottom">
          <label htmlFor="zip-code">Zip Code</label>
          <input className="input-form" id="zip-code" type="number" />
        </div>

        <div className="dropdown">
          <label htmlFor="department">Department</label>
          <Dropdown options={departments} labelKey={"department"} />
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
