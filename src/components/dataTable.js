import React, { useState } from "react";
import DataTable from "react-data-table-component";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.LastName,
    sortable: true,
  },
  {
    name: "Start Date",
    selector: (row) => row.startDate,
    sortable: true,
  },
  {
    name: "Department",
    selector: (row) => row.Department,
    sortable: true,
  },
  {
    name: "Date of Birth",
    selector: (row) => row.birthDate,
    sortable: true,
  },
  {
    name: "Street",
    selector: (row) => row.Street,
    sortable: true,
  },
  {
    name: "City",
    selector: (row) => row.City,
    sortable: true,
  },
  {
    name: "State",
    selector: (row) => row.State,
    sortable: true,
  },
  {
    name: "Zip Code",
    selector: (row) => row.Zip,
    sortable: true,
  },
];

const DataTableComponent = ({ data }) => {
  console.log(data);
  return <DataTable columns={columns} data={data} />;
};

export default DataTableComponent;
