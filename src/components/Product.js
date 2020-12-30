import React from 'react';
import { Link } from 'react-router-dom';
import shoesarry from '../shoes';

function Product() {
   
  return (
    <div className="products">
     <h1>Wel come to Product</h1>

     {shoesarry.map((item,id) =>{
         return <div key={id}>
             <h1>
                 {item.name}
                 </h1>
                  <h1>
                 {item.price}
                 </h1>
            
             <img className="img" src={item.Path} />

             <Link to={`/About/${item.id}`}>
                 <button>Open</button>
             </Link>
                    </div>
     })}
    </div>
  );
}

export default  Product;
    
