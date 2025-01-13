import React from 'react'
import Layout from '../../components/Layout'
import { FaArrowRight } from "react-icons/fa";
import BackButton from './BackButton';
import { useNavigate } from 'react-router-dom';

export default function SelectReport() {
    const nav =useNavigate();
  return (
    <Layout className={" flex items-center justify-center"}>
        <div className='flex flex-col gap-4 justify-center min-w-96'>

<BackButton/>
        <button onClick={()=> nav("/previousReport")} className='bg-white flex items-center gap-2 border-primary border-[1px] p-6 rounded-xl text-lg font-bold px-8'>View Previous Report <FaArrowRight/> </button>
        <button onClick={()=> nav("/newReport/result")}  className='bg-primary flex items-center gap-2 border-primary text-white font-bold px-8 border-[1px] p-6 rounded-xl text-lg'>Generate New Report <FaArrowRight/></button>
    
        </div>
    </Layout>
  )
}
