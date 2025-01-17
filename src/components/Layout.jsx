import React from 'react'

import BG from "../assets/Bg.svg"

import { useLocation } from 'react-router-dom'


export default function Layout({className, children}) {
  const {pathname} = useLocation(); 
  // console.log(pathname);
  
  return (

    <div style={{
      backgroundImage: `url(${BG})`,
      backgroundSize: 'cover', // Keep the original size
      backgroundPosition: '',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed', // Ensure it doesn't move on scroll
      minHeight: '100svh' // Ensure it covers the remaining height
  }}
  className={`p-4 grow font-nunito ${className}`} // Add font-nunito class
  >
  {children}
  </div>

    // <div className='grid grid-cols-[24rem_1fr]'>
       
        // <div  className='flex flex-col min-h-screen '>
        //    {/* <TopSearchBar/> */}
        
         

//           {/* {(pathname.includes("recommendation") || pathname=="/viewReport/lifestyle") &&  <div className=' flex justify-end p-6 bg-white w-full'>
// <button className='bg-primary text-white px-12 py-3 rounded-xl text-lg flex items-center gap-2'>Print <IoCloudDownloadOutline /></button>
//         </div>} */}
    
        // </div>
    // </div>
  )
}
