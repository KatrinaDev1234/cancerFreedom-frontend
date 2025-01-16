import React from 'react'
import MainHeading from '../../components/MainHeading'
import ReportCard from './ReportCard'
import { ReportCardData } from '../../utils/ReportCardData'
import { useNavigate } from 'react-router-dom'
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import { useReportContext } from '../../components/ReportContext'
import { toArrayOfObjects } from '../../utils/helpers'


export default function Report() {
    const nav= useNavigate();
//     const contentRef = useRef(null);
// const reactToPrintFn = useReactToPrint({ contentRef });
const {report } = useReportContext();
// console.log("REPORT", report);


// console.log(toArrayOfObjects(report));

// const ReportData= toArrayOfObjects(report);




  return (
    <>
   <div  className='space-y-6 p-4'>
    <MainHeading className={"font-bold mb-6 text-gray-800 screen-only"}>Root Cause Assessment</MainHeading>
    <h2 className='text-2xl text-gray-800'>Functional lab interpretation for :</h2>
    <div className=' flex items-center gap-4'>
    <h2 className='text-2xl text-gray-800 font-bold'>Key :</h2>
<span className='flex items-center'>
    <div className='p-2 bg-red-700 text-white shadow-lg border border-gray-700/50 rounded-sm'>Below Range</div>
    <div className='p-2 bg-orange-500 text-white shadow-lg border border-gray-700/50 rounded-sm'>Above Range</div>
    <div className='p-2 bg-yellow-300 text-white shadow-lg border border-gray-700/50 rounded-sm'>Present</div>

</span>
    </div>

<div className='space-y-6'>
{report?.length>0 && report.map((data, index) => (
<ReportCard key={index} data={data} />
))}
</div>

 

   </div>
   {/* <div className="flex items-center justify-center mt-4 gap-4 bg-white p-4 rounded-xl">
        <button  onClick={()=> nav("/newReport/Result")} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">Generate new report</button>
        <button  onClick={() => reactToPrintFn()} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary text-white">Print</button>

      </div> */}
   </>
  )
}
