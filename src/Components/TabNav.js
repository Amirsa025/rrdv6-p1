import React from 'react'
import { Link,useLocation } from 'react-router-dom'

const TabNav = () => {
  const location = useLocation()
  return (
    <div className="tab-Nav">
      <Link to="/tabs/tab1" className={location.pathname==='/tabs/tab1'?'tab_Active':''}>Tab1</Link>
      <Link to="/tabs/tab2" className={location.pathname==='/tabs/tab2'?'tab_Active':''}>Tab2</Link>
      <Link to="/tabs/tab3" className={location.pathname==='/tabs/tab3'?'tab_Active':''}>Tab3</Link>
    </div>
  )
}

export default TabNav