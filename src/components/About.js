import React, { useState } from 'react';
import shoesarry from '../shoes';

function About({match}) {

  let item=shoesarry.filter((itm)=>{
    if(itm.id===match.params.id){
      // setdata(itm)
      return itm
    }
  })
   console.log(item)
   
  return (
    <div className="products">
     <h1>Wel come to Product</h1>

     {item.map((item) =>{
         return <div>
             <h1>
                 {item.name}
                 </h1>
                  <h1>
                 {item.price}
                 </h1>
            
             <img className="img" src={item.Path} />

                    </div>
     })}
    </div>
  );
}

export default  About;
    
