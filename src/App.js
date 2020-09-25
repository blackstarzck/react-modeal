import React from 'react';
import './App.css';
import { BrowserRouter, Router, Route, Routes, useRoutes } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Magazine from './pages/Magazine';
import Estimate from './pages/Estimate';
import Services from './pages/Services';
import Profile from './pages/Profile';
import GoTop from './components/GoTop'
import Process from './components/sub_pg_estimate/Process';
import ListsFst from './components/sub_pg_estimate/ListsFst.js';
import ListsSec from './components/sub_pg_estimate/ListsSec';
import ListsTrd from './components/sub_pg_estimate/ListsTrd';
import Brand from './components/sub_pg_estimate/Brand';


// const routes = [
//   { path: "/", element: <Home/> },
//   { path: "/promotion", element: <Promotion/> },
//   { path: "/magazine", element: <Magazine/> },
//   { path: "/estimate", element: <Estimate/> },
//   { path: "/services", element: <Services/> },
//   { path: "/profile", element: <Profile/> },
// ]
// console.log(routes)

export default function App() {
  // const element = useRoutes(routes);

  return (
    <div className="container">
        {/* { element } */}
      <BrowserRouter>
        <Header/>
        <Menu/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/promotion" element={<Promotion/>}/>
          <Route path="/magazine" element={<Magazine/>}/>

          <Route path="/estimate" element={<Estimate/>}>
            <Route path="/" element={<Brand/>}/>
            <Route path="/price" element={<h1>가격대</h1>}/>
          </Route>

          <Route path="/estimate/process" element={<Process/>}>
            <Route path=":C_CODE" element={<ListsFst/>} />
            <Route path=":C_CODE/:M_CODE" element={<ListsSec/>} />
            <Route path=":C_CODE/:M_CODE/:L_CODE" element={<ListsTrd/>} />
          </Route>

          <Route path="/services" element={<Services/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>
      </BrowserRouter>
      <GoTop/>
    </div>
  );
}