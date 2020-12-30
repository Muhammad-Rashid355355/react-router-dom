import React from 'react';
import {Link} from 'react-router-dom';
import shoesarry from '../shoes';


function Navbar() {
  return (
    <div className="navbar">
    <Link to='/' className="link1">Home</Link>
    <Link to='/About' className="link2">About</Link>
    <Link to='/Contact' className="link3">Contact</Link> 
    <Link to='/Product' className="link4">Product</Link> 

    </div>

  );
}

export default  Navbar;
    
