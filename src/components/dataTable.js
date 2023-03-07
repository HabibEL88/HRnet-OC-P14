import React, { useState } from "react";
import DataTable from "react-data-table-component";
import "../style/datatable.css";

const columns = [
  {
    name: "First Name",
    selector: (row) => row.name,
    sortable: true,
  },
  {
    name: "Last Name",
    selector: (row) => row.lastName,
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
  return (
    <div className="dataTableContainer">
      <DataTable
        columns={columns}
        data={data}
        striped={true}
        highlightOnHover={true}
        pagination={true}
        paginationPerPage={10}
        paginationRowsPerPageOptions={[10, 20, 50]}
        noHeader={true}
      />
    </div>
  );
};
export default DataTableComponent;
