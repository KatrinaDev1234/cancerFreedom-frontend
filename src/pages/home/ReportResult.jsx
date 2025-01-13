import React from 'react'
import Layout from '../../components/Layout'
import BackButton from './BackButton'
import MainHeading from '../../components/MainHeading'
import ResultAccordion from './ResultAccordion'
import { prevReportResult } from '../../utils/Content'

export default function ReportResult() {
  return (
   <Layout className="">
    <BackButton/>
    <div className='max-w-4xl mx-auto mt-10'>
<MainHeading className={"font-bold mb-6"}>Type Lab Results:</MainHeading>
<ResultAccordion data={prevReportResult}/>
    </div>
   </Layout>
  )
}
