
import React from 'react';
import { useSelector } from 'react-redux';

const Form = () => {
  
  const formFields = useSelector((state) => state.field.data);

  const renderFormField = (field) => {
    
    switch (field.FieldType) {
      case 'Text Box':
        return (
          <div key={field.FieldName} className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              {field.FieldName}
            </label>
            <input
              type={field.FieldDataType.toLowerCase()} 
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder={`Enter ${field.FieldName}`}
            />
          </div>
        );
        case 'Date Picker':
            return (
              <div key={field.FieldName} className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-2">
                  {field.FieldName}
                </label>
                <input
                  type={field.FieldDataType.toLowerCase()} 
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder={`Enter ${field.FieldName}`}
                />
              </div>
            );
            case 'DropDown':
                return (
                  <div key={field.FieldName} className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2">
                      {field.FieldName}
                    </label>
                    <input
                      type={field.FieldDataType.toLowerCase()} 
                      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      placeholder={`Enter ${field.FieldName}`}
                    />
                  </div>
                );
   

        
      
      default:
        return null;
    }
  };

  return (
    <div className="container mx-auto mt-8">
      <form>
        {formFields.map((field) => renderFormField(field))}
        <button
          type="submit"
          className="bg-blue-950 text-white  font-bold py-2 px-4 rounded"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
