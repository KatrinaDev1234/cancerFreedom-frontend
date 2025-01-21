import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import ReportContextProvider from "./components/ReportContext";

function App() {
  // console.log("APP");
  return (
    <ReportContextProvider>
      <AppRoutes />
    </ReportContextProvider>
  );
}

export default App;
