import React, { useState } from "react";
import DataTable from "react-data-table-component";
import { BASE_DATA } from "../services/employees";

const columns = [
  {
    name: "Name",
    selector: "name",
    sortable: true,
  },
  {
    name: "Birth Year",
    selector: "birthYear",
    sortable: true,
    right: true,
  },
  {
    name: "Birth Place",
    selector: "birthCity",
    sortable: true,
    right: true,
  },
];
