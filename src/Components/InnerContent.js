import React from 'react'
import { Outlet } from 'react-router-dom'

const InnerContent = () => {
  return (
    <div className="innerContent">
    <Outlet/>  
    </div>
    
  )
}

export default InnerContent