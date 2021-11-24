import React from "react";
import { Field } from "redux-form";

const NumberInput = (props) => {
  const { name } = props;
  return (
    <Field
      name={name}
      component="input"
      type="number"
      placeholder="Input a number"
    />
  );
};

export default NumberInput;
