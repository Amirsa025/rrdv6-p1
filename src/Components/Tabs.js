import React from 'react'
import { Outlet } from 'react-router-dom'
import TabNav from './TabNav'

const Tabs = () => {
  return (
    <div>
     <TabNav/>
      <Outlet/>
    </div>
  )
}

export default Tabs