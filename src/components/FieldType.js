import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useDispatch } from "react-redux";
import { pushData } from "../utils/fieldsData";

const FieldType = ({ catSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [typeOfField, setTypeOfFeild] = useState("Select Field Type");

  const dispatch = useDispatch();
  const [fieldName, setFieldName] = useState("");
  const [fieldDataType, setFieldDataType] = useState("");
  const [fieldMaxLength, setFieldMaxLength] = useState("");
  const [mandatory, setMandatory] = useState("");
  const [fieldData, setFieldData] = useState("");
  const [error, setError] = useState(false);
  const handleSubmit = () => {
    if (catSelect == "Select") {
      setError(true);
      return;
    }
    if (
      typeOfField == "" ||
      fieldName == "" ||
      fieldData == "" ||
      fieldDataType == "" ||
      fieldMaxLength == "" ||
      mandatory == ""
    ) {
      setError(true);
      return;
    }

    const newData = {
      FieldName: fieldName,
      FieldType: typeOfField,
      FieldDataType: fieldDataType,
      FieldValidations: fieldMaxLength,
      isMandatory: mandatory,
      FieldData: fieldData,
      UserType: catSelect,
    };
    dispatch(pushData(newData));
    setFieldName("");
    setFieldDataType("");
    setFieldMaxLength("");
    setMandatory("");
    setFieldData("");
    setTypeOfFeild("Select Field Type");
    setIsOpen(false);
  };

  const handleInputChange = (fieldName, value) => {
    switch (fieldName) {
      case "fieldName":
        setFieldName(value);
        break;
      case "fieldDataType":
        setFieldDataType(value);
        break;
      case "fieldMaxLength":
        setFieldMaxLength(value);
        break;
      case "mandatory":
        setMandatory(value);
        break;
      case "fieldData":
        setFieldData(value);
        break;
      default:
        break;
    }
  };

  const type = ["Text Box", "DropDown", "Date Picker"];
  if (typeOfField == "Select Field Type") {
    return (
      <>
        <div className="px-32">
          <button
            className="border-2 border-black rounded-md p-4 font-bold  hover:bg-gray-300"
            onClick={handleSubmit}
          >
            Add Field{" "}
          </button>
        </div>
        <div className="px-32  py-4  ">
          <div className=" border-2 border-black rounded-md p-2">
            <div className="w-[195px] relative">
              <button
                className="py-4 bg-gray-400 text-white font-bold px-4 rounded-md flex"
                onClick={() => setIsOpen(!isOpen)}
              >
                {typeOfField}
                {!isOpen ? (
                  <IoMdArrowDropdown className="h-7 w-7" />
                ) : (
                  <IoMdArrowDropup className="h-7 w-7" />
                )}
              </button>
              {isOpen && (
                <div className="absolute top-20 shadow-lg w-full ">
                  {type.map((items, i) => (
                    <div
                      className="p-2 hover:bg-gray-300 cursor-pointer"
                      onClick={() => {
                        setTypeOfFeild(items);
                        setIsOpen(!isOpen);
                      }}
                    >
                      <h1 className="font-bold">{items}</h1>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div className="px-32">
          <button
            className="border-2 border-black rounded-md p-4 font-bold  hover:bg-gray-300"
            onClick={handleSubmit}
          >
            Add Field{" "}
          </button>
        </div>
        <div className="px-32  py-4  flex  ">
          {error && (
            <div>
              <h1 className="text-red-500 text-sm p-2">Missing Details</h1>
            </div>
          )}
          <div className="w-[150px] relative">
            <button
              className="py-4 bg-gray-400 text-white font-bold px-4 rounded-md flex"
              onClick={() => setIsOpen(!isOpen)}
            >
              {typeOfField}
              {!isOpen ? (
                <IoMdArrowDropdown className="h-7 w-7" />
              ) : (
                <IoMdArrowDropup className="h-7 w-7" />
              )}
            </button>
            {isOpen && (
              <div className="absolute top-20 shadow-lg w-full ">
                {type.map((items, i) => (
                  <div
                    className="p-2 hover:bg-gray-300 cursor-pointer"
                    onClick={() => {
                      setTypeOfFeild(items);
                      setIsOpen(!isOpen);
                    }}
                  >
                    <h1 className="font-bold">{items}</h1>
                  </div>
                ))}
              </div>
            )}
          </div>
          <div className="px-2 ">
            <h1 className="py-2 ">Field Display Name </h1>
            <input
              type="text"
              className="border-2 border-black px-2 "
              value={fieldName}
              onChange={(e) => handleInputChange("fieldName", e.target.value)}
            ></input>
          </div>
          <div className="px-2">
            <h1 className="py-2">Field Data Type </h1>
  
            <select
            value={fieldDataType}
            onChange={(e) => handleInputChange("fieldDataType", e.target.value)}
            className="border-2 border-black px-2"
          >
            <option value="">Select Field Data Type</option>
            <option value="String">String</option>
            <option value="Integer">Integer</option>
            <option value="Integer">Date</option>
      
          </select>
          </div>
          <div className="px-2">
            <h1 className="py-2">Field Max Length Allowed </h1>
            <input
              type="text"
              className="border-2 border-black px-2"
              value={fieldMaxLength}
              onChange={(e) =>
                handleInputChange("fieldMaxLength", e.target.value)
              }
            ></input>
          </div>
          <div className="px-2">
            <h1 className="py-2">Mandatory </h1>
  
            <select
            value={mandatory}
            onChange={(e) => handleInputChange("mandatory", e.target.value)}
            className="border-2 border-black px-2"
          >
            <option value="">Select Mandatory</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          </div>
          <div className="px-2">
            <h1 className="py-2">Field Data </h1>
            <input
              type="text"
              className="border-2 border-black px-2"
              value={fieldData}
              onChange={(e) => handleInputChange("fieldData", e.target.value)}
            ></input>
          </div>
          <div className="flex content-center pt-8 py-3 ">
            <button
              onClick={handleSubmit}
              className="border-2 border-black  rounded-md px-4 hover:bg-gray-300"
            >
              Confirm{" "}
            </button>
          </div>
        </div>
      </>
    );
  }
};

export default FieldType;
