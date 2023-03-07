import React from "react";
import { useContext } from "react";
import { EmployeeContext } from "../services/employees";
import DataTableComponent from "../components/dataTable";

const Employees = () => {
  const { employees } = useContext(EmployeeContext);
  return (
    <div>
      <DataTableComponent data={employees} />
    </div>
  );
};

export default Employees;
