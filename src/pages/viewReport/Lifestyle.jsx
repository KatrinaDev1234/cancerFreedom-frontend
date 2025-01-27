// Example React component with Tailwind CSS
import React from 'react';
import { useReportContext } from '../../components/ReportContext';


const Lifestyle = () => {
  const { report } = useReportContext(); // Move the hook call inside the component

  return (
    <div className="max-w-5xl mx-auto  ">
      <table className="table-auto w-full border border-gray-300 bg-white">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 px-4 py-2">Category</th>
            <th className="border border-gray-300 px-4 py-2">Recommendations</th>
          </tr>
        </thead>
        <tbody>
          {report?.lifestyle?.length &&  report.lifestyle.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2 font-semibold">
                {item["Root Cause"]}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                <ul className="list-disc pl-5">
                  {item["Recommendation"]?.length &&  item["Recommendation"].map((rec, recIndex) => (
                    <li key={recIndex} className={`${rec?.includes("(essential)") && "text-primary"}`}>{rec}</li>
                  ))}
                </ul>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Lifestyle;
