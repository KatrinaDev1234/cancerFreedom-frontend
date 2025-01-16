import React, { useEffect, useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { useReactToPrint } from 'react-to-print';
import LOGO from "../../assets/cancerFreedom.png";
import Report from './Report';

export default function PrintBtn() {
    const nav= useNavigate();
    const {pathname} = useLocation();
  return (
   <div className="flex w-[52rem] left-1/2 -translate-x-1/2  mx-auto items-center justify-center mt-4 gap-4 bg-white p-4 rounded-xl absolute bottom-4">
        <button  onClick={()=> nav("/newReport/Result")} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize">Generate new report</button>
        <button  onClick={() => PrintFn("ASDF", <Report/>)} className="border border-primary basis-1/2 py-2 rounded-lg bg-primary text-white">Print</button>
{/* <PrintFn heading="Root Cause Assessment" component={<Report/>}/> */}
      </div> 
  )
}

const PrintFn= (heading, component)=> {
    console.log(heading, component);
    
    const contentRef = useRef(null);
const reactToPrintFn = useReactToPrint({ contentRef });
useEffect(()=> {
    console.log("PRINT");
    
    reactToPrintFn();
},[])
    return (
        <div ref={contentRef} className='p-6 '>
            <div className='flex items-center justify-between'>
<div>
    <img src={LOGO} alt="logo" className='w-32 '/>
</div>
<div>
{heading}
</div>
<div className='flex flex-col gap-2'>
    <p>Marcella Points</p>
    <p>8892 Wolf Run - 25336</p>
    <p>Santee</p>
    <p>United States</p>



</div>
            </div>
            <div className=''>

{component}
            </div>
        </div>
    )
}
