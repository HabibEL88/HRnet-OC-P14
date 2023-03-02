import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import reportWebVitals from "./reportWebVitals";
import { EmployeeContext, BASE_DATA } from "./services/employees";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/Employees",
    element: <Employees />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

const App = () => {
  const [employees, setEmployees] = useState(BASE_DATA);
  return (
    <EmployeeContext.Provider value={{ employees, setEmployees }}>
      <RouterProvider router={router} />
    </EmployeeContext.Provider>
  );
};

root.render(<App />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
