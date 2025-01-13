import React from 'react'

export default function Recommendations() {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4">
    <h2 className="text-2xl font-semibold mb-4">Recommendations</h2>
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 text-sm text-left">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-200 p-2  ">PRODUCT</th>
            <th className="border border-gray-200 p-2">BRAND</th>
            <th className="border border-gray-200 p-2">DESCRIPTION</th>
            <th className="border border-gray-200 p-2">Upon rising 1 to 3</th>
            <th className="border border-gray-200 p-2">With b/fast</th>
            <th className="border border-gray-200 p-2">Mid morn</th>
            <th className="border border-gray-200 p-2">With lunch</th>
            <th className="border border-gray-200 p-2">Mid after noon</th>
            <th className="border border-gray-200 p-2">With dinner</th>
            <th className="border border-gray-200 p-2">After dinner</th>
            <th className="border border-gray-200 p-2">Before Bed</th>
            <th className="border border-gray-200 p-2">Additional Instructions</th>
          </tr>
        </thead>
        <tbody>
          <tr className="">
            <td className="border border-gray-200 p-2">Gentle Senna</td>
            <td className="border border-gray-200 p-2">HC</td>
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
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  )
}
