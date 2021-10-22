import React, { useState } from "react";
import "./App.css";
import Form from "./components/form/Form";
import Instructions from "./components/instructions/Instructions";

const intialData = {
  ghname: "<github username>",
  repo: "<github repo name>",
  manager: "yarn",
};

function App(props) {
  const [formData, setFormData] = useState(intialData);

  const update = (event) => {
    let newFormData = { ...formData };
    newFormData[event.target.name] =
      event.target.value.trim().length > 0
        ? event.target.value
        : intialData[event.target.name];
    setFormData(newFormData);
  };

  const selectManager = (event) => {};

  return (
    <div className="App">
      <h1>Make a GitHub Page for Create-React-App</h1>
      <Form update={update} />
      <Instructions {...formData} />
    </div>
  );
}

export default App;
