import React from 'react'
import { IoIosSearch } from "react-icons/io";
export default function TopSearchBar() {
  return (
    <div className='flex items-center gap-2 px-4 border-b border-gray-700'>
<IoIosSearch color={"#374151"} size={"26px"}/>
<input placeholder='Search for something...' type="text" className='w-full p-4 px-2 placeholder:text-gray-700 '/>
    </div>
  )
}
