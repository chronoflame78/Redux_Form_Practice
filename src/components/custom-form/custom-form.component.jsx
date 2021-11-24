import React from "react";
import { connect } from "react-redux";
import { Field, reduxForm, formValueSelector } from "redux-form";
import { loadData } from "../../redux/form/form.actions";
import NumberInput from "../number-input/number-input.component";
import './custom-form.style.scss';

let CustomForm = (props) => {
  const { handleSubmit, outputValue } = props;
  return (
    <form className="custom-form" onSubmit={handleSubmit}>
      <h2>FORM EXAMPLE</h2>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="valueA">Value A</label>
        <NumberInput name="valueA"/>
        {/* <Field name="valueA" component="input" type="number" /> */}
      </div>
      <div>
        <label htmlFor="valueB">Value B</label>
        <NumberInput name="valueB"/>
        {/* <Field name="valueB" component="input" type="number" /> */}
      </div>
      <div>
        <label htmlFor="outputValue">Output</label>
        {/* <Field name="outputValue" value={outputValue} component="input" type="number" /> */}
        <div>{outputValue}</div>
      </div>
      <div>
        <button type="submit">Submit</button>
      </div>
    </form>
  );
};

CustomForm = reduxForm({
  // a unique name for the form
  form: "custom",
})(CustomForm);

const selector = formValueSelector('custom');

CustomForm = connect(
  state => {
  const valueA = selector(state, 'valueA');
  const valueB = selector(state, 'valueB');
  return {
    initialValues: state.customFormReducer.data, // pull initial values from account reducer
    outputValue: valueA*valueB
  }
    },
  { load: loadData }, // bind account loading action creator
)(CustomForm);

export default CustomForm;
