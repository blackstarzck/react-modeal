import React from 'react';
import './Top.css';
import Header from './Header';
import Menu from './Menu';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import Home from '../pages/Home';
// import Promotion from '../pages/Promotion';
// import Magazine from '../pages/Magazine';
// import Quotation from '../pages/Quotation';
// import Services from '../pages/Services';
// import Profile from '../pages/Profile';


function Top() {
    return (
        <Router>
            <Header/>
            <Menu/>
            {/* <Switch>
                <Route path='/' component={Home}></Route>
                <Route path='/' component={Promotion}></Route>
                <Route path='/' component={Magazine}></Route>
                <Route path='/' component={Quotation}></Route>
                <Route path='/' component={Services}></Route>
                <Route path='/' component={Profile}></Route>
            </Switch> */}
        </Router>
    )
}
export default Top;