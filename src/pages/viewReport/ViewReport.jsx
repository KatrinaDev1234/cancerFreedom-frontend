import React, { useRef } from "react";
import Layout from "../../components/Layout";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import BackButton from "../home/BackButton";
import { useReactToPrint } from "react-to-print";
import LOGO from "../../assets/cancerFreedom.png";

export default function ViewReport() {
  const { pathname } = useLocation();
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({contentRef, pageStyle: pathname === "/viewReport/recommendation" ? "@page { size: landscape;  }" : undefined, documentTitle: "Cancer Freedom Report" });
  // console.log("VIEW REPORT", report);

  const nav = useNavigate();
  return (
    <Layout className={"relative"}>
      {/* <div> */}
      <BackButton />
      {/* </div> */}
      <div className="max-w-5xl bg-white p-4 flex items-center justify-center gap-6 mx-auto mt-2 rounded-xl mb-10">
        {["report", "recommendation", "lifestyle"].map((v, idx) => (
          <button
            key={idx}
            onClick={() => nav(`/viewReport/${v}`)}
            className={`text-center  gap-2 ${
              pathname.includes(v)
                ? "bg-primary text-white"
                : "bg-white text-gray-600"
            }  p-3 basis-1/3 rounded-lg text-nowrap capitalize`}
          >
            {" "}
            {v}
          </button>
        ))}
      </div>
      <div className="mb-20">
      <div ref={contentRef} className="max-w-5xl mx-auto p-2 ">
        <div className="print-only flex items-center justify-between  w-full mb-4">
          {/* <div> */}
            <img src={LOGO} />
          {/* </div> */}
          <span className="uppercase text-xl font-bold ">
            {[["report","Root Cause Assessment"], ["recommendation","Recommendation"], ["lifestyle", "Lifestyle"]].filter(v=> pathname.includes(v[0]))?.[0][1]  
            }
          </span>
          <div>
            <p>{localStorage.getItem("user")}</p>
            <p>{localStorage.getItem("dob")}</p>
           

          </div>
        </div>

        <Outlet />
      </div></div>
      <div className="flex w-[62rem] left-1/2 -translate-x-1/2  mx-auto items-center justify-center mt-4 gap-4 bg-white p-4 rounded-xl absolute bottom-4">
        <button
          onClick={() => nav("/newReport/Result")}
          className="border border-primary basis-1/2 py-2 rounded-lg bg-primary/20 text-primary capitalize"
        >
          Generate new report
        </button>
        <button
          onClick={() => reactToPrintFn()}
          className="border border-primary basis-1/2 py-2 rounded-lg bg-primary text-white"
        >
          Print
        </button>
      </div>
    </Layout>
  );
}
