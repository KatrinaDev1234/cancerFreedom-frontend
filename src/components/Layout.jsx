import React from 'react'
import Sidebar from './Sidebar'
import TopSearchBar from './TopSearchBar'
import BG from "../assets/Bg.png"
import { FaDownload } from 'react-icons/fa'
import { IoCloudDownloadOutline } from 'react-icons/io5'
import { useLocation } from 'react-router-dom'

export default function Layout({className, children}) {
  const {pathname} = useLocation(); 
  console.log(pathname);
  
  return (
    // <div className='grid grid-cols-[24rem_1fr]'>
       
        <div  className='flex flex-col min-h-screen '>
            <TopSearchBar/>
            <div style={{
                backgroundImage: `url(${BG})`,
                backgroundSize: 'auto', // Keep the original size
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
                backgroundAttachment: 'fixed', // Ensure it doesn't move on scroll
                minHeight: 'calc(100vh - 3.7rem)' // Ensure it covers the remaining height
            }}
            className={`bg-yellow-100 p-4 grow  ${className}`}
            >
            {children}
            </div>
           {(pathname.includes("recommendation") || pathname=="/viewReport/lifestyle") &&  <div className=' flex justify-end p-6 bg-white w-full'>
<button className='bg-primary text-white px-12 py-3 rounded-xl text-lg flex items-center gap-2'>Print <IoCloudDownloadOutline /></button>
        </div>}
        </div>
    // </div>
  )
}
