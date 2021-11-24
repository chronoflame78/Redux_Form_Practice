import logo from "./logo.svg";
import "./App.css";
import React from "react";
import CustomForm from "./components/custom-form/custom-form.component";

class App extends React.Component {
  submit = values => {
    // print the form values
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
  }


  render() {
    return (
      <div className="App">
        <CustomForm onSubmit={this.submit} />
      </div>
    );
  }
}

export default App;
