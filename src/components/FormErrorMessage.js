import React from "react";
import { ErrorMessage } from "@hookform/error-message";
import "../style/form.css";
/*
Composant de message d'erreur de formulaire, utilisant react-hook-form.

errors : Les erreurs de validation fournies par React Hook Form.
name : Le nom du champ de formulaire dont on veut afficher le message d'erreur.
render : Une fonction de rendu qui renvoie l'élément qui affiche le message d'erreur.
*/

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
