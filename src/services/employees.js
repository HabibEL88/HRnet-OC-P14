import React from "react";

// Path: src/services/employees.js
export const BASE_DATA = [
  {
    id: 1,
    name: "Tiger",
    lastName: "Nixon",
    startDate: "18/03/2000",
    Department: "Marketing",
    birthDate: "02/02/1968",
    Street: "allee adolphe pegoud",
    City: "New-York",
    State: "AL",
    Zip: "10001",
  },
  {
    id: 2,
    name: "Garrett",
    lastName: "Winters",
    startDate: "18/03/2002",
    Department: "Marketing",
    birthDate: "02/02/1955",
    Street: "allee streetworkout",
    City: "New-York",
    State: "AL",
    Zip: "10002",
  },
  {
    id: 3,
    name: "Ashton",
    lastName: "Cox",
    startDate: "18/03/1998",
    Department: "Marketing",
    birthDate: "02/02/1970",
    Street: "allee adolphe pegoud",
    City: "washington",
    State: "AL",
    Zip: "10003",
  },
];

export const EmployeeContext = React.createContext({
  employees: BASE_DATA,
  setEmployees: () => {},
});
