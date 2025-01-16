import React, { createContext, useContext, useState } from 'react'

const RepContext = createContext(); // Fix the context creation

export const useReportContext = () => useContext(RepContext); // Fix the context usage


export default function ReportContextProvider({children}) {
  const [report, setReport] = useState({});
  return (
    <RepContext.Provider value={{report, setReport}}>
      {children}
    </RepContext.Provider>
  )
}

