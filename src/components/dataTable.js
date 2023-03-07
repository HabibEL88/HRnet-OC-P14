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
  const [searchText, setSearchText] = useState("");
  const filteredData = data.filter((row) =>
    `${row.name} ${row.lastName} ${row.startDate}${row.Department}${row.birthDate}${row.Street}${row.City}${row.State}${row.Zip}`
      .toLowerCase()
      .includes(searchText.toLowerCase())
  );

  const paginationComponentOptions = {
    selectAllRowsItem: true,
    selectAllRowsItemText: "ALL",
  };

  return (
    <div className="dataTableContainer">
      <input
        type="text"
        placeholder="Search"
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
      />
      <DataTable
        columns={columns}
        data={filteredData}
        striped={true}
        highlightOnHover={true}
        pagination
        paginationComponentOptions={paginationComponentOptions}
        noHeader={true}
      />
    </div>
  );
};
export default DataTableComponent;
