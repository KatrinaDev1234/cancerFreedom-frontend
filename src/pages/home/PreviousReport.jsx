import React, {useState, useEffect} from 'react'
import Layout from '../../components/Layout'
import BackButton from './BackButton'
import { FaArrowRight } from 'react-icons/fa'
import { IoDownloadSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { API_BASEURL } from '../../utils/constants';
import { useReportContext } from '../../components/ReportContext';
import axios from 'axios';

export default function PreviousReport() {
    const nav= useNavigate();
    const {setReport} = useReportContext();
    const [reports, setReports] = useState([]);
    const [loading, setLoading] = useState(false);
    
    useEffect(() => {
      async function getUser() {
        try {
          setLoading(true);
          const {data: {data}}= await axios.get(`${API_BASEURL}/user`, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },  
          });          
          setReports(data.reports);
        } catch (error) {
          alert("NETWORK ERROR", error.message);
          console.log(error.message);
          
        }
        finally{
          setLoading(false);
        }
       }
        getUser();
    } , []);
  return (
    <Layout className={" flex items-center justify-center"}>
           <div className='flex flex-col gap-4 justify-center min-w-96'>
   
   <BackButton/>
         {loading ? (
          <div className='flex justify-center items-center'>
            <div className="loader border-t-4 border-primary rounded-full w-16 h-16 animate-spin"></div>
          </div>
        ) : (
          reports?.length === 0 ? (
            <div className='text-center text-gray-800 bg-white p-4 rounded-xl border-[1px] border-gray-400'>No reports available</div>
          ) : (
            reports?.map((report, index) => (
                    <div key={index} className='bg-white p-4 rounded-xl space-y-4 border-[1px] border-gray-400'>
                        <h1 className='text-xl font-bold'>Report Date: {new Date(report.createdAt).toLocaleDateString()}</h1>
                        {report.status === "pending" ? (
                            <button 
                                onClick={() => nav("/previousReport/Result", { state: { report: report.report } })} 
                                className='text-center flex items-center justify-center gap-2 bg-[#DFDA39] p-1.5 text-white font-bold w-full rounded-xl'>
                                Continue the draft
                                <FaArrowRight/>
                            </button>
                        ) : (
                            <>
                                <button
                                    onClick={() => {
                                      setReport(report?.report)
                                      nav("/viewReport/report")
                                    }} 
                                    className='text-center flex items-center justify-center gap-2 p-1.5 text-black border font-bold w-full rounded-xl'>
                                    View Report
                                    <IoDownloadSharp/>
                                </button>
                                {/* <button 
                                    onClick={() => nav("/viewReport/report")} 
                                    className='text-center flex items-center justify-center gap-2 p-1.5 text-black border font-bold w-full rounded-xl'>
                                    Download Report
                                    <IoDownloadSharp/>
                                </button>
                                <button 
                                    className='text-center flex items-center justify-center gap-2 p-1.5 text-white bg-primary border font-bold w-full rounded-xl'>
                                    Download Recommendations
                                    <IoDownloadSharp/>
                                </button> */}
                            </>
                        )}
                    </div>
                 ))
          )
        )}
           </div>
       </Layout>
  )
}
