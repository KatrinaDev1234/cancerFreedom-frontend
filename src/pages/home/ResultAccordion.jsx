import React, { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";


import { useNavigate } from "react-router-dom";

export default function ResultAccordion({ data }) {
  const nav = useNavigate();
  const [results, setResults] = useState({});

  function handleInputChange(heading, question ,answer){
    setResults({...results, [heading]:{...results[heading], [question]:answer}})
  }


  // useEffect(()=> {
  //   console.log("--------",results)
  // },[results])
  return (
    <div className="bg-white p-4 rounded-xl ">
      {/* <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}> */}
      <div className="space-y-4">
        {data.map((item, idx) => (
          <AccordionCard results={results} handleInputChange={handleInputChange} key={idx} item={item} />
        ))}
        </div>
      {/* </Accordion> */}
      <div className="flex items-center justify-center mt-4 gap-4">
        <button className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">Generate new report</button>
        <button onClick={()=> nav("/viewReport/report")} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary text-white">Generate Report</button>

      </div>
    </div>
  );
}

const AccordionCard = ({ item, handleInputChange, results }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border border-gray-300   rounded-xl">
      <div onClick={() => setIsOpen(!isOpen)} className="flex p-4 justify-between items-center cursor-pointer">
        <span className="uppercase text-lg">{item.heading}</span>
        <span className={`transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}><IoIosArrowDown /></span>
      </div>
      <div className={`transition-max-height duration-500 ease-in-out   overflow-hidden  ${isOpen ? "max-h-screen " : "max-h-0"}`}>
        {isOpen && (
          <div className="space-y-2 my-4 mx-4">
            {item.options.map((val, idx) => (
              <SingleOption results={results} handleInputChange={handleInputChange} key={idx} item={val} heading={item.heading} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SingleOption = ({ item , heading, handleInputChange, results}) => (
  <div className="flex gap-10 justify-between items-center  w-full relative">
    <p>{item.question}</p>
    {item.answer.type == "radio" && (
      // <RadioOption options={item.answer.options} />
      <div className="flex gap-4  ">
      {item.answer.options.map((v, idx) => (
        <RadioButton  handleInputChange={handleInputChange} question={item.question} heading={heading} isSelected={results?.[heading]?.[item.question]==v? true : false} key={idx} label={v} value={v} />
      ))}
      </div>
    )}
     {item.answer.type == "input" && (
      // <RadioOption options={item.answer.options} />
     
      <InputButton results={results} handleInputChange={handleInputChange} question={item.question} heading={heading} unit={item.answer.unit}/>
    )}
  </div>
);

const RadioButton = ({ label, value ,isSelected, heading, question, handleInputChange, results}) => (
  <label onClick={()=> handleInputChange(heading, question,value)} className="gap-1 flex items-center">
          {/* <input type="radio"   value={value} className="hidden" /> */}
          <div  className={`border ${isSelected ? "border-lime-400" : "border-black"} w-5 h-5 rounded-full flex items-center justify-center`}>
{isSelected && <div className="w-3 h-3 bg-lime-400 rounded-full"></div>}
          </div>
          {label}
          {/* <label htmlFor={label}>{label}</label> */}
        </label>
)

const InputButton= ({unit, handleInputChange,question, heading, results })=> {
  return (
<div className="flex justify-between  min-w-44 items-center gap-2 text-nowrap ">
<input value={results?.[heading]?.[question]} onChange={(e)=> handleInputChange(heading, question, e.target.value)} type="text" className="border border-gray-300 p-2 rounded-md w-24 basis-1/2 " />
<div className="basis-1/2">

{unit}
</div>
</div>
  )
}