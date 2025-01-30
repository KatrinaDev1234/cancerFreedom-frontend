// Example React component with Tailwind CSS
import React from 'react';
import { useReportContext } from '../../components/ReportContext';
import MainHeading from '../../components/MainHeading';
import { ReportCardData } from '../../utils/ReportCardData';


const Lifestyle = () => {
  const { report } = useReportContext();
   // Move the hook call inside the component
  //  console.log(report.lifestyle);

  return (
    <div className="max-w-5xl mx-auto  ">
      {/* <table className="table-auto w-full border border-gray-300 bg-white">
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
      </table> */}
         <MainHeading className={"font-bold  text-gray-800 screen-only inline "}>Adjuctive Therapies</MainHeading>
         <div className='space-y-4 mt-8'>

{
  report?.lifestyle?.length &&  report.lifestyle.map((item, index) => (
    <Card heading={item["Root Cause"]} tableData={item["Recommendation"]}/>
  ))
}
  </div>
     
    </div>
  );
};

const Card = ({ heading, tableData }) => {
  // console.log(heading, tableData);
  return (
    <div className='p-4 bg-white rounded-xl'>
      <div className='flex items-center gap-2'>
        <img src={ReportCardData.filter(v=> v.heading.toLowerCase().includes(heading.toLowerCase()))?.[0]?.icon} className='w-16' />
      <h2 className=' text-2xl font-bold  capitalize'>{heading}</h2>

      </div>
      {/* <p className='my-4 text-gray-700'>
        {ReportCardData.filter(v=> v.heading.toLowerCase().includes(heading.toLowerCase()))?.[0]?.description}
      </p> */}
      <table className="table-auto w-full border border-gray-300 bg-white mt-4">
        <thead>
          <tr className="bg-primary text-white">
            <th className="border border-gray-300 px-4 py-2">Therapy</th>
            <th className="border border-gray-300 px-4 py-2">Name</th>
            <th className="border border-gray-300 px-4 py-2">Dosing</th>
            <th className="border border-gray-300 px-4 py-2">Additional Notes</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.length && tableData.map((item, index) => (
            <tr key={index}>
              <td className="border border-gray-300 px-4 py-2">{item.therapy}</td>
              <td className="border border-gray-300 px-4 py-2">{item.name}</td>
              <td className="border border-gray-300 px-4 py-2">{item.dosing}</td>
              <td className="border border-gray-300 px-4 py-2">{item["additional notes"]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Lifestyle;
