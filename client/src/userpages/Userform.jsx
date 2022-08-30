import React from "react";
import { Form } from "./Form";

export const Userform = ({ values, setValues, submitForm }) => {
  return <Form values={values} setValues={setValues} submitForm={submitForm} />;
};
