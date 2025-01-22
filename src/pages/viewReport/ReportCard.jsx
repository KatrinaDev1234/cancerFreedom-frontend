import React, { useState } from 'react'
import { ReportCardData } from '../../utils/ReportCardData';
import { FaArrowDownLong, FaArrowUpLong } from 'react-icons/fa6';
import { BsDash } from 'react-icons/bs';

export default function ReportCard({data}) {
  // console.log("DATA", data);
  const [note,setNote] = useState({

  })
  
  return (
    <div className="p-5  mx-auto bg-white rounded-xl  overflow-hidden">
      <div className='flex gap-2 items-center mb-4 '>
<img src={ReportCardData.filter(v=> v.heading.toLowerCase()==data?.heading.toLowerCase())?.[0]?.icon} className='w-16' />
    <h1 className="text-2xl font-bold  capitalize">{data?.heading}</h1>
      </div>
    <p className="mb-4 text-gray-700">
     {ReportCardData.filter(v=> v.heading.toLowerCase()==data?.heading.toLowerCase())?.[0]?.description}
    </p>

   {data.heading.toLowerCase() !="genetics & epigenetics" ? <div className="overflow-x-auto space-y-6">
{data?.tables.map((table, index) => (
<div className=''>
{table.tableHeading && <h2 className="text-gray-600 mb-3 text-lg">{table.tableHeading}</h2>}
<Table data={table.tableData} />
    </div>
))}

   

    </div>: (
      <div className="overflow-x-auto space-y-6">
      {data?.tables.map((table, index) => (
      <div className=''>
      {table.tableHeading && <h2 className="text-gray-600 mb-3 text-lg">{table.tableHeading}</h2>}
      <GeneticTable data={table.tableData} />
          </div>
      ))}
      
         
      
          </div>
    )}

    <div className={`mt-4 p-3 border border-gray-300 rounded-lg flex gap-4 items-center ${note?.[data?.heading]=="" || note?.[data?.heading]==undefined ? "screen-only" : ""}`}>
      <h2 className="text-gray-600">Note</h2>
      <textarea onChange={(e)=> setNote({...note, [data?.heading]: e.target.value })} rows={1} className='w-full outline-none  p-1 rounded-lg'/>
    </div>
  </div>
  )
}

const Table= ({data})=> (
    <table className="w-full  border-collapse border border-gray-200 text-center text-primary">
    <thead>
      <tr className="bg-primary text-white">
        <th className="py-2 px-4 border border-gray-300">Lab</th>
        <th colSpan="2" className="py-2 px-4 border border-gray-300 text-center">
          Range
        </th>
        <th colSpan="2" className="py-2 px-4 border border-gray-300 text-center">
          Enter
        </th>
      </tr>
      {/* <tr className="bg-primary text-white">
        <th className="hidden"></th>
        <th className="py-2 px-4 border border-gray-300 text-center">Min</th>
        <th className="py-2 px-4 border border-gray-300 text-center">Max</th>
        <th className="py-2 px-4 border border-gray-300 text-center">Value</th>
        <th className="py-2 px-4 border border-gray-300 text-center">Status</th>
      </tr> */}
    </thead>
    <tbody>
        {data.map((v,idx)=> (
   <tr>
   <td className="py-2 px-4 border border-gray-300">{v.lab}</td>
   <td className="py-2 px-4 border border-gray-300">{v.range?.min}</td>
   <td className="py-2 px-4 border border-gray-300">{v.range?.max}</td>
   <td className="py-2 px-4 border border-gray-300">{v.enter}</td>
 
   {v.status== "above range" &&  <td className={`py-2 px-4 border border-gray-300 bg-red-700 font-bold `}>
  <span className='mx-auto w-full  flex items-center justify-center text-white'>   <FaArrowUpLong/></span>
   </td>}
   {v.status== "below range" &&  <td className={`py-2 px-4 border border-gray-300 bg-yellow-300 font-bold `}>
  <span className='mx-auto w-full  flex items-center justify-center text-white'> <FaArrowDownLong/></span>

     
   </td>}
   {v.status== "present" &&  <td className={`py-2 px-4 border border-gray-300 bg-orange-500 font-bold `}>
  <span className='mx-auto w-full  flex items-center justify-center text-white'> <BsDash/> </span>
   </td>}
 </tr>
        ))}
   
      {/* <tr className="">
        <td className="py-2 px-4 border border-gray-300">LDH/LD</td>
        <td className="py-2 px-4 border border-gray-300">140</td>
        <td className="py-2 px-4 border border-gray-300">200</td>
        <td className="py-2 px-4 border border-gray-300">180</td>
        <td className="py-2 px-4 border border-gray-300 text-green-600 font-bold">
          -
        </td>
      </tr>
      <tr>
        <td className="py-2 px-4 border border-gray-300">SED Rate/ESR</td>
        <td className="py-2 px-4 border border-gray-300">0.0</td>
        <td className="py-2 px-4 border border-gray-300">10.0</td>
        <td className="py-2 px-4 border border-gray-300">10</td>
        <td className="py-2 px-4 border border-gray-300 text-green-600 font-bold">
          -
        </td>
      </tr> */}
    </tbody>
  </table>
)


const GeneticTable = ({ data }) => (
  <table className="w-full border-collapse border border-gray-200  text-primary">
    <thead>
      <tr className="bg-primary text-white">
        <th className="py-2 px-4 border border-gray-300">Lab</th>
        <th className="py-2 px-4 border border-gray-300">Recommendation</th>
      </tr>
    </thead>
    <tbody>
      {data.map((row, idx) => (
        <tr key={idx}>
          <td className="py-2 px-4 border border-gray-300 text-center">{row.lab}</td>
          <td className="py-2 px-4 border border-gray-300">{row.recommendation}</td>
        </tr>
      ))}
    </tbody>
  </table>
);
