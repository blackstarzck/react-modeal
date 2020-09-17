import React from 'react';
import './App.css';
import { BrowserRouter, Router, Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import Menu from './components/Menu';
import Home from './pages/Home';
import Promotion from './pages/Promotion';
import Magazine from './pages/Magazine';
import Estimate from './pages/Estimate';
import Services from './pages/Services';
import Profile from './pages/Profile';
import GoTop from './components/GoTop'


function App() {
  return (
    <div className="container">
      <BrowserRouter>
        <Header/>
        <Menu/>
        <Switch>
          <Route path="/" exact={true} component={Home}/>
          <Route path="/promotion" component={Promotion}/>
          <Route path="/magazine" component={Magazine}/>
          <Route path="/estimate" component={Estimate}/>
          <Route path="/services" component={Services}/>
          <Route path="/profile" component={Profile}/>
          </Switch>
      </BrowserRouter>
      <GoTop/>
    </div>
  );
}

export default App;