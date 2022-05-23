import React from "react";
import SideBar from "./Components/SideBar";

import MainRoutes from "./Routes";

const App = () => {  
  return (
    <div className="app"> 
      <SideBar/>
      <MainRoutes/>
    </div>
  );
};

export default App;
