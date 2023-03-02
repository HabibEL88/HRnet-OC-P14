import React from "react";
import "../style/form.css";

const Form = () => {
  return (
    <div className="container">
      <h2>Create Employee</h2>
      <div className="field">
        <input type="text" name="first-name" autoComplete="off" required />
        <label htmlFor="first-name" className="label-wrapper">
          <span className="label-text">First Name</span>
        </label>
      </div>
      <div className="field">
        <input type="text" name="last-name" autoComplete="off" required />
        <label htmlFor="last-name" className="label-wrapper">
          <span className="label-text">Last Name</span>
        </label>
      </div>
      <div className="field">
        <input type="text" name="date-of-birth" autoComplete="off" required />
        <label htmlFor="date-of-birth" className="label-wrapper">
          <span className="label-text">Date of Birth</span>
        </label>
      </div>
      <div className="field">
        <input type="text" name="start-date" autoComplete="off" required />
        <label htmlFor="start-date" className="label-wrapper">
          <span className="label-text">Start Date</span>
        </label>
      </div>
      {/* <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" />
      </div>

      <div>
        <label htmlFor="date-of-birth">Date of Birth</label>
        <input id="date-of-birth" type="text" />
      </div>
      <div>
        <label htmlFor="start-date">Start Date</label>
        <input id="start-date" type="text" />
      </div> */}

      <fieldset className="address">
        <legend>Address</legend>

        <div className="field">
          <input type="text" id="street" autoComplete="off" required />
          <label htmlFor="street" className="label-wrapper">
            <span className="label-text">Street</span>
          </label>
        </div>

        <div className="field">
          <input type="text" id="city" autoComplete="off" required />
          <label htmlFor="city" className="label-wrapper">
            <span className="label-text">City</span>
          </label>
        </div>

        <div className="fieldBottom">
          <label htmlFor="state">State</label>
          <select name="state" id="state"></select>
        </div>

        <div className="fieldBottom">
          <label htmlFor="zip-code">Zip Code</label>
          <input id="zip-code" type="number" />
        </div>

        <div className="fieldBottom">
          <label htmlFor="department">Department</label>
          <select name="department" id="department">
            <option>Sales</option>
            <option>Marketing</option>
            <option>Engineering</option>
            <option>Human Resources</option>
            <option>Legal</option>
          </select>
        </div>
      </fieldset>
      <button>Save</button>
    </div>
  );
};

export default Form;
