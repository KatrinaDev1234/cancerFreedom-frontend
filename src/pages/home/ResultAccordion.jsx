import axios from "axios";
import React, { useEffect, useState } from "react";

import { IoIosArrowDown } from "react-icons/io";

import { useNavigate, useLocation } from "react-router-dom";
import { API_BASEURL, tempBody } from "../../utils/constants";
import { useReportContext } from "../../components/ReportContext";


export default function ResultAccordion({ data }) {
  const nav = useNavigate();
  const location = useLocation();
  const initialResults = location.state?.report || {};  
  const [results, setResults] = useState(initialResults);
  // console.log(location.state?.id);
  
  const {setReport} = useReportContext();
  const [loading,setLoading] = useState(false);

  function handleInputChange(heading, question, answer) {
    if (results?.[heading]?.[question] === answer) {
      const newResults = { ...results };
      delete newResults[heading][question];
      setResults(newResults);
    } else
      setResults({
        ...results,
        [heading]: { ...results[heading], [question]: answer },
      });
  }
 async function handleSaveDraft() {
  try {
    setLoading(true);
    const {data: {data}}= await axios.post(`${API_BASEURL}/report/save-draft`, results, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },  
      params: {
        report_id: location.state?.id
      }
    });
    setReport(data);
    nav(-1)
  } catch (error) {
    alert("NETWORK ERROR", error.message);
    console.log(error.message);
    
  }
  finally{
    setLoading(false);
  }
 }
 async function handleGenerateReport() {
  try {
    setLoading(true);
    const {data: {data}}= await axios.post(`${API_BASEURL}/report`, results, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },  
      params: {
        report_id: location.state?.id
      }
    });
    // console.log(data)
    setReport(data);
    nav("/viewReport/report")
  } catch (error) {
    alert("NETWORK ERROR", error.message);
    console.log(error.message);
    
  }
  finally{
    setLoading(false);
  }
 }
  // useEffect(()=> {
  //   console.log("--------",results)
  // },[results])
  return (
    <div className="bg-white p-4 rounded-xl font-nunito"> {/* Add font-nunito class */}
      {/* <Accordion allowMultipleExpanded={true} allowZeroExpanded={true}> */}
      <div className="space-y-4">
        {data.map((item, idx) => (
          <AccordionCard
            results={results}
            handleInputChange={handleInputChange}
            key={idx}
            item={item}
          />
        ))}
      </div>
      {/* </Accordion> */}
      <div className="flex items-center justify-center mt-4 gap-4">
        {/* <button onClick={()=> setResults({})} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">
          Generate new report
        </button> */}
        <button onClick={handleSaveDraft} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">
          Save draft
        </button>
        <button onClick={()=> setResults({...tempBody})} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">
          Fake Fill
        </button>
        <button
          onClick={!loading && handleGenerateReport}
          className="border border-primary basis-1/2 py-2 rounded-lg bg-primary text-white"
        >
        {  loading? " LOADING..." : "Generate Report"}
        </button>
      </div>
    </div>
  );
}

const AccordionCard = ({ item, handleInputChange, results }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const lengthOfSelectedOptions = results[item.heading]
    ? Object.keys(results[item.heading]).length
    : 0;

  return (
    <div className="border border-gray-300   rounded-xl">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="flex p-4 justify-between items-center cursor-pointer"
      >
        <span className="uppercase text-lg">{item.heading}</span>
        <div className="flex items-center gap-4">
          <div
            className={`${
              lengthOfSelectedOptions != item.options.length
                ? "bg-yellow-400"
                : "bg-green-400"
            } text-center p-1 text-lg text-white w-16 rounded-full `}
          >
            {lengthOfSelectedOptions}/{item.options.length}
          </div>
          <span
            className={`transition-transform duration-300 ${
              isOpen ? "rotate-180" : ""
            }`}
          >
            <IoIosArrowDown />
          </span>
        </div>
      </div>
      <div
        className={`transition-max-height duration-500 ease-in-out overflow-hidden ${
          isOpen ? "max-h-[10000px]" : "max-h-0"
        }`}
      >
        {isOpen && (
          <div className="space-y-2 my-4 mx-4">
            {item.options.map((val, idx) => (
              <SingleOption
                results={results}
                handleInputChange={handleInputChange}
                key={idx}
                item={val}
                heading={item.heading}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const SingleOption = ({ item, heading, handleInputChange, results }) => (
  <div className="flex gap-10 justify-between items-center  w-full relative">
    <p>{item.question}</p>
    {item.answer.type == "radio" && (
      // <RadioOption options={item.answer.options} />
      <div className="flex gap-4  ">
        {item.answer.options.map((v, idx) => (
          <RadioButton
            handleInputChange={handleInputChange}
            question={item.question}
            heading={heading}
            isSelected={results?.[heading]?.[item.question] == v ? true : false}
            key={idx}
            label={v}
            value={v}
          />
        ))}
      </div>
    )}
    {item.answer.type == "input" && (
      // <RadioOption options={item.answer.options} />

      <InputButton
        results={results}
        handleInputChange={handleInputChange}
        question={item.question}
        heading={heading}
        unit={item.answer.unit}
      />
    )}
  </div>
);

const RadioButton = ({
  label,
  value,
  isSelected,
  heading,
  question,
  handleInputChange,
  results,
}) => (
  <label
    onClick={() => handleInputChange(heading, question, value)}
    className="gap-1 flex items-center"
  >
    {/* <input type="radio"   value={value} className="hidden" /> */}
    <div
      className={`border ${
        isSelected ? "border-lime-400" : "border-black"
      } w-5 h-5 rounded-full flex items-center justify-center`}
    >
      {isSelected && <div className="w-3 h-3 bg-lime-400 rounded-full"></div>}
    </div>
    {label}
    {/* <label htmlFor={label}>{label}</label> */}
  </label>
);

const InputButton = ({
  unit,
  handleInputChange,
  question,
  heading,
  results,
}) => {
  return (
    <div className="flex justify-end  min-w-44 items-center gap-2 text-nowrap ">
      <input
        value={results?.[heading]?.[question]}
        onChange={(e) => handleInputChange(heading, question, e.target.value)}
        type="text"
        className="border border-gray-300 p-2 rounded-md w-24 basis-1/2 "
      />
     {unit &&  <div className="basis-1/2">{unit}</div>}
    </div>
  );
};
