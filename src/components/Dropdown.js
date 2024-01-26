import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { BsPersonCircle } from "react-icons/bs";
const Dropdown = ({catSelect,setcatSelect}) => {
  const [isOpen, setIsOpen] = useState(false);
  const catogary = ["Student", "Salaried","Business"];
 


  return (
    <div className=" relative flex flex-col w-[250px] h-[100px] rounded py-3">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-950 text-white p-1  flex items-center justify-between  font-bold text-lg rounded-md border-4 border-transparent active:border-white duration-300 active:text-white"
      >
        <div className="flex ">
        <BsPersonCircle className="h-8 w-8"/>

       <h1 className="px-3">  {catSelect}</h1>
        </div>
        {!isOpen ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
      </button>
      {isOpen && (
         <div className=" absolute top-16 rounded-lg p-2 w-full  shadow-xl "> 
         {catogary.map((items,i)=>(
            <div key={i} className="flex p-2  hover:bg-gray-300 cursor-pointer"
            onClick= {()=>{
                setcatSelect(items);
                setIsOpen(!isOpen);

            }}
            >
                <BsPersonCircle className="h-8 w-8" />
                <h3 className="py-1 px-3">{items}</h3>
               
            </div>
         ))}
         
         
         </div>
        
      )}
    
    </div>
  );
};

export default Dropdown;
