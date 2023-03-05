import React from "react";
import Form from "../components/Form";
import { useContext } from "react";
import { EmployeeContext } from "../services/employees";
import DataTableComponent from "../components/dataTable";

const Employees = () => {
  const { employees } = useContext(EmployeeContext);
  console.log(employees);

  return (
    <div>
      <DataTableComponent data={employees} />
    </div>
  );
};

export default Employees;
