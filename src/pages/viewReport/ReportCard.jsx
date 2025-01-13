import React from 'react'

export default function ReportCard({data}) {
  return (
    <div className="p-6  mx-auto bg-white rounded-xl shadow-md overflow-hidden">
    <h1 className="text-2xl font-bold mb-4">{data.heading}</h1>
    <p className="mb-4 text-gray-700">
     {data.description}
    </p>

    <div className="overflow-x-auto space-y-6">
{data.tables.map((table, index) => (
<div className=''>
{table.tableHeading && <h2 className="text-gray-600 mb-3 text-lg">{table.tableHeading}</h2>}
<Table data={table.tableData} />
    </div>
))}

   

    </div>

    <div className="mt-4 p-3 border border-gray-300 rounded-lg">
      <h2 className="text-gray-600">Note</h2>
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
   <td className="py-2 px-4 border border-gray-300">{v.range.min}</td>
   <td className="py-2 px-4 border border-gray-300">{v.range.max}</td>
   <td className="py-2 px-4 border border-gray-300">{v.enter}</td>
   <td className="py-2 px-4 border border-gray-300 text-red-600 font-bold">
     {v.status}
   </td>
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
