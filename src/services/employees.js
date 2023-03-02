import React from "react";

export const BASE_DATA = [{ name: "Habib" }, { name: "Aurélien" }];

export const EmployeeContext = React.createContext({
  employees: BASE_DATA,
  setEmployees: () => {},
});
