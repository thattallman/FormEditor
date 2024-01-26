import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import store from "../utils/store";
import { resetData } from "../utils/fieldsData";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";



const FieldList = ({flag,setFlag}) => {

  const dispatch = useDispatch();
  

  const handleReset = () => {
    dispatch(resetData());
  };
 

  const fieldData = useSelector((store) => store.field.data);

  useEffect(() => {
  
    const isReduxDataNotEmpty = fieldData && fieldData.length > 0;
    setFlag(isReduxDataNotEmpty);
  }, [fieldData, setFlag]);


  if (!flag ){
    return;
  } else {
    return (
      
    <>
      <div className="flex justify-center py-16">
        <table>
          <thead>
            <tr>
              <th className="p-4">No</th>
              <th className="p-4">Field Name</th>
              <th className="p-4">Field Type</th>
              <th className="p-4">Field Data Type</th>
              <th className="p-4">Field Validations</th>
              <th className="p-4">Field Data</th>
              <th className="p-4">is Mandatory</th>
            </tr>
          </thead>
          <tbody>
            {fieldData.map((item, i) => (
              <tr key={i}>
                <td className="px-4">{i + 1}</td>

                <td className="px-4">{item.FieldName}</td>
                <td className="px-4">{item.FieldType}</td>
                <td className="px-4">{item.FieldDataType}</td>
                <td className="px-4">{item.FieldValidations}</td>
                <td className="px-4">{item.FieldData}</td>
                <td className="px-4">{item.isMandatory}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex justify-center">
        <Link to="/form">
  <button
          className="p-3 mr-6  border-2 border-black rounded-md font-bold  hover:bg-gray-300 "
          
        >
          Confirm
        </button>
        </Link>
       
        <button
          className="p-3  border-2 border-black rounded-md  font-bold  hover:bg-gray-300"
          onClick={handleReset}
        >
          Reset
        </button>
      </div>
    </>
  );}
};


export default FieldList;
