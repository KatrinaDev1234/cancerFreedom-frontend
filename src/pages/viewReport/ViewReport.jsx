import React, { useRef, useState } from "react";
import Layout from "../../components/Layout";
import { useLocation, useNavigate } from "react-router-dom";
import BackButton from "../home/BackButton";
import { useReactToPrint } from "react-to-print";

import LOGO from "../../assets/cancerFreedom.png";
import Report from "./Report";
import Lifestyle from "./Lifestyle";
import Recommendations from "./Recommendations";

import { IoDocumentOutline, IoPrintOutline } from "react-icons/io5";

export default function ViewReport() {
  const { pathname } = useLocation();
  const contentRef = useRef(null);
  const reactToPrintFn = useReactToPrint({contentRef, pageStyle: pathname === "/viewReport/recommendation" ? "@page { size: landscape;  }" : undefined, documentTitle: "Cancer Freedom Report" });
  const [view, setView] = useState("report");

  const nav = useNavigate();
  return (
    <Layout className={"relative"}>
      <BackButton />
      <div className="max-w-5xl bg-white p-4 flex items-center justify-center gap-6 mx-auto mt-2 rounded-xl mb-6">
        {["report", "recommendation", "lifestyle"].map((v, idx) => (
          <button
            key={idx}
            onClick={() => setView(v)}
            className={`text-center gap-2 ${
              view === v ? "bg-primary text-white" : "bg-white text-gray-600"
            } p-3 basis-1/3 rounded-lg text-nowrap capitalize`}
          >
            {v}
          </button>
        ))}
      </div>
    
      <div ref={contentRef} className="max-w-5xl mx-auto p-2 relative">
        <div className="print-only flex items-center justify-between w-full mb-4">
          <img src={LOGO} />
          <span className="uppercase text-xl font-bold">
            {view === "report" && "Root Cause Assessment"}
            {view === "recommendation" && "Recommendation"}
            {view === "lifestyle" && "Lifestyle"}
          </span>
          <div>
            <p>{localStorage.getItem("user")}</p>
            <p>{localStorage.getItem("dob")}</p>
          </div>
        </div>
        <div className={`flex justify-end mb-4 screen-only z-[1000] ${view=="report" && "absolute right-2 "}`}>
          <button
            onClick={() => reactToPrintFn()}
            className="border border-primary w-40 py-2 rounded-lg bg-primary text-white flex items-center justify-center gap-2 transition duration-300 ease-in-out hover:bg-primaryDark "
          >
            Print <span className="text-xl"><IoPrintOutline/></span>
          </button>
        </div>
        {view === "report" && <Report />}
        {view === "recommendation" && <Recommendations />}
        {view === "lifestyle" && <Lifestyle />}
      </div>
    </Layout>
  );
}
