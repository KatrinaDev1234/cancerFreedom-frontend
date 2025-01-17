import React from 'react'
import { useReportContext } from '../../components/ReportContext';

export default function Recommendations() {
  const {report} = useReportContext();
  const heading = [
    "PRODUCT",
    "BRAND",
    "DESCRIPTION",
    "Upon rising",
    "With breakfast",
    "Mid morning",
    "With lunch",
    "Mid afternoon",
    "With dinner",
    "After dinner",
    "Before Bed",
    "ADDITIONAL INSTRUCTIONS",
  ];
  // console.log(report?.recommendations);
  
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 text-sm text-left">
        <thead>
          <tr className="bg-primary text-white">
            {heading.map((val, idx) => (
            <th className="border border-gray-200 p-2  ">{val}</th>

            ))}
           
          </tr>
        </thead>
        <tbody>
        {report?.recommendations?.length &&  report?.recommendations.map((val, idx) => (
// console.log(val, val?.[heading?.[idx]]);
<tr className="">
 {heading.map((heading)=> (
  <td className="border border-gray-200 p-2">{val?.[heading]}</td>
   ))}
</tr>
          
        
          
))}
         

            {/* <td className="border border-gray-200 p-2">HC</td>
            <td className="border border-gray-200 p-2">Constipation</td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2"></td>
            <td className="border border-gray-200 p-2">
              Only take if you have constipation as a short term solution
            </td> */}
        </tbody>
      </table>
    </div>
  </div>
  )
}
