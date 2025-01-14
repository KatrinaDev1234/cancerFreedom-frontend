import React from 'react'
import Layout from '../../components/Layout'
import { Outlet, useLocation, useNavigate } from 'react-router-dom'
import BackButton from '../home/BackButton';

export default function ViewReport() {
    const {pathname} = useLocation()
    const nav= useNavigate();
  return (
    <Layout >
      {/* <div> */}
        <BackButton/>
      {/* </div> */}
        <div className='max-w-4xl bg-white p-4 flex items-center justify-center gap-6 mx-auto mt-2 rounded-xl mb-10'>
            {
            ["report", "recommendation", "lifestyle"].map((v,idx)=> (
                <button key={idx} onClick={()=> nav(`/viewReport/${v}`)} className={`text-center  gap-2 ${pathname.includes(v) ? "bg-primary text-white" : "bg-white text-gray-600"}  p-3 basis-1/3 rounded-lg text-nowrap capitalize`}> {v}
                </button>
            ))
            
        }
        </div>
        <div className='max-w-4xl mx-auto p-4'>


        <Outlet/>
        </div>
       
    </Layout>
  )
}
