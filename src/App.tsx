import React from 'react';
import {Route, Routes} from "react-router-dom";
import { MainContainer } from './component';
import {Home, News} from "./page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainContainer/>}>
        <Route index element={<Home/>}/>
        <Route path="news" element={<News/>}/>
        <Route path="*" element={<Home/>}/>
      </Route>
    </Routes>
  );
}

export default App;
