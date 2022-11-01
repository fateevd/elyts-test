import React, {FC} from 'react';
import {Outlet} from "react-router-dom";
import {Footer, Header} from "./index";

const MainContainer:FC = () => {
  return (
    <div className="wrapper">
      <Header/>
      <div className="main">
        <Outlet/>
      </div>
      <Footer/>
    </div>
  );
};

export default MainContainer;