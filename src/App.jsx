import { useState } from "react";
import AppRoutes from "./components/AppRoutes";
import ReportContextProvider from "./components/ReportContext";

function App() {
  return (
    <ReportContextProvider>
      <AppRoutes />
    </ReportContextProvider>
  );
}

export default App;
