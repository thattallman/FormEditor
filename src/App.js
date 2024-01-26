import "./App.css";
import Dropdown from "./components/Dropdown";
import FieldList from "./components/FieldList";
import FieldType from "./components/FieldType";
import { Provider } from "react-redux";
import store from "./utils/store";
import { useState } from "react";
import Form from "./components/Form";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  const [catSelect, setcatSelect] = useState("Select");
  const [flag, setFlag] = useState(false);

  return (
    <Router>
      <div className="flex justify-center">
        <Dropdown catSelect={catSelect} setcatSelect={setcatSelect} />
      </div>

      <Provider store={store}>
        <Routes>
          <Route path="/" element={<><FieldType catSelect={catSelect} />, <FieldList flag={flag} setFlag={setFlag} /> </>} />
          <Route path="/form" element={<Form />} />
        </Routes>
     
      </Provider>
    </Router>
  );
}

export default App;
