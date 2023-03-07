import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import "../style/form.css";

const FormErrorMessage = ({ errors, name }) => {
  return (
    <ErrorMessage
      errors={errors}
      name={name}
      render={({ message }) => <p className="errorMessage">{message}</p>}
    />
  );
};

export default FormErrorMessage;
