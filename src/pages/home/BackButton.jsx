import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

export default function BackButton() {
    const nav= useNavigate();
  return (
    <p onClick={()=>nav(-1)} className='flex items-center gap-2 text-primary text-lg cursor-pointer'><span className='rotate-180'><FaArrowRight/></span> BACK</p>

  )
}
