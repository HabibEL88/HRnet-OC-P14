import React from "react";
import Form from "../components/Form";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useContext } from "react";
import { EmployeeContext } from "../services/employees";

const Employees = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <div>
      {employees.map((e) => (
        <div>{e.name}</div>
      ))}
      {/* <div className="header">
            <Logo />
            <Link to="/" className="view-home-link">
              <button>Home</button>
            </Link>
          </div>
          <Table /> */}
    </div>
  );
};

export default Employees;
