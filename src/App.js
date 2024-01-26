import "./App.css";
import Dropdown from "./components/Dropdown";
import FieldList from "./components/FieldList";
import FieldType from "./components/FieldType";
import { Provider } from "react-redux";
import store from "./utils/store";
import { useState } from "react";
import Form from "./components/Form";


function App() {
  const [catSelect, setcatSelect] = useState("Select");
  const [typeOfField, setTypeOfFeild] = useState("Select Field Type");

  return (
    <>
      <div className=" flex justify-center">
        <Dropdown catSelect={catSelect} setcatSelect={setcatSelect} />
      </div>

      <Provider store={store}>
        <FieldType
          catSelect={catSelect}
          typeOfField={typeOfField}
          setTypeOfFeild={setTypeOfFeild}
        />
        <FieldList typeOfField={typeOfField} setTypeOfFeild={setTypeOfFeild} />
        <Form />
      </Provider>
    </>
  );
}

export default App;
