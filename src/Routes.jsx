import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import InnerContent from "./Components/InnerContent";
import Setting from "./Components/Setting";
import Tab1 from "./Components/Tab1";
import Tab2 from "./Components/tab2";
import Tab3 from "./Components/tab3";
import Tabs from "./Components/Tabs";
import Login from "./Components/Login";
import PublicRoute from "./Components/publicRoute";
import PrivteRoute from "./Components/PrivteRoute";
import PermisionsDeind from "./Components/permisionsDeind";
const MainRoutes = () => {
  return (
    <Routes>
       
        <Route path="/" element={<InnerContent />}>
        {/* Redirect to dashboard*/}
        <Route path="/" element={<Navigate to="dashboard" replace />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="Setting" element={<Setting />} />
        <Route path="tabs" element={<Tabs />}>
          <Route path="/tabs" element={<Navigate to="tab1" replace />} />
          <Route path="tab1" element={<Tab1 />} />
          <Route path="tab2" element={<PrivteRoute isRequired="ADMIN" />}>
						<Route path="/tabs/tab2" element={<Tab2 />} />
          <Route path="tab3" element={<Tab3 />} />
        </Route>
      </Route>
        </Route>
      <Route path="settings" element={<Setting/>}/>  

      {/** Wrap all Route under PublicRoutes element */}
      <Route path="login" exact="true" element={<PublicRoute/>}>
          <Route path="/login" element={<Login/>}/>
        </Route>        
        {/** Permission denied route */}
        <Route path="/denied" element={<PermisionsDeind />} />
    </Routes>
  );
};

export default MainRoutes;
