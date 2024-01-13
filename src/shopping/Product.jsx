import React, { useState } from 'react'
import Cart from "./Cart"
const Product = () => {
  let [ product,setProduct]=useState({
        pname:"Karbonn",
        pprice:1375,
        pdesc:[ "1.3 MP Camera","1800mah battery"]})
let [pname, pprice, pdesc]=product;
let [pqty,setPqty]=useState(0);
let handleIncrement=()=>{
    setPqty(pqty+1)
}
let handleDecrement=()=>{
    setPqty(pqty-1)
}
  return (
    <div className='container'>
        <div  className='productblock'>
            <h1>PRODUCT PAGE</h1>
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCLLIjGDBki9q5hrpFWl6XJ-FvxZik-7So_Q&usqp=CAU" alt="mobile" />
           <span>ProductName:{pname}</span> <br />
           <span>ProductPrice:{pprice}</span> <br />
           <span>ProductDescription:{pdesc.map((x)=>{
                return <li>{x}</li>               
           })}
           </span>
<span>Product Details:
    <button onClick={handleDecrement}>-</button>
    <span>{pqty}</span>
    <button onClick={handleIncrement}>+</button>
</span>
        </div>
        
        <div className='cartblock'>
           <Cart pqty={pqty} pname={pname} pdesc={pdesc} pprice={pprice}/> 
        </div>
    </div>
  )
}

export default Product
