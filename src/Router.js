import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
  import Home from './components/Home';
  import About from './components/About';
  import Contact from './components/Contact';
  import Product from './components/Product';
  import Navbar from './components/Navbar';

function Routerconfig() {
  return (
   <Router>
      <Navbar />
       <Switch>
           <Route exact path="/" component={Home}></Route>
           <Route exact path="/About/:id" component={About}></Route>
           <Route exact path="/Contact" component={Contact}></Route>
           <Route exact path="/Product" component={Product}></Route>

           <Route exact path="*" component={()=><h2>404 Not Found</h2>}></Route>

       </Switch>
   </Router>
  );
}

export default Routerconfig;
