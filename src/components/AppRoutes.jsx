import React from 'react'

import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/home'
import SelectReport from '../pages/home/SelectReport'
import PreviousReport from '../pages/home/PreviousReport'

import ViewReport from '../pages/viewReport/ViewReport'
import Report from '../pages/viewReport/Report'
import Lifestyle from '../pages/viewReport/Lifestyle'
import Recommendations from '../pages/viewReport/Recommendations'
import ReportResult from '../pages/home/ReportResult'

const AppRoutes = () => {
  return (
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/selectReport" element={<SelectReport />} />
    <Route path="/previousReport" element={<PreviousReport />} />
    {/* <Route path="/newReport" element={<NewReport />} /> */}

    <Route path="/previousReport/Result" element={<ReportResult />} />
    <Route path="/newReport/Result" element={<ReportResult />} />
    <Route path='/viewReport' element={<ViewReport/>}>
<Route path='report' element={<Report/>}/>
<Route path='recommendation' element={<Recommendations/>}/>
<Route path='lifestyle' element={<Lifestyle/>}/>

    </Route>






   </Routes>
   </BrowserRouter>
  )
}

export default AppRoutes