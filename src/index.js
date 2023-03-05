import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Employees from "./pages/Employees";
import reportWebVitals from "./reportWebVitals";
import { EmployeeContext, BASE_DATA } from "./services/employees";
import Header from "./components/Header";
import Footer from "./components/Footer";

const Layout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
);

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/Employees",
        element: <Employees />,
      },
    ],
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
