import React from 'react';
import './App.css';
import Top from './components/Top'
import MainBanner from './components/MainBanner';
import Cumulative from './components/Cumulative';
import Brands from './components/Brands';
import Price from './components/Price';
import SubBanner from './components/SubBanner';
import HotIssue from './components/HotIssue';

function App() {
  return (
    <div className="container">
      <Top/>
      <MainBanner/>
      <Cumulative/>
      <Brands/>
      <Price/>
      <SubBanner/>
      <HotIssue/>
    </div>
  );
}

export default App;