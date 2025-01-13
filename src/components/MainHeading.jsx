import React from 'react'

export default function MainHeading({children, className}) {
  return (
   <h1 className={` text-5xl ${className}`}>{children}</h1>
  )
}
