import React from 'react'

const Cart = (props) => {
  console.log(props);
  let {pname,pprice,pdesc}=props;
  return (
    <>
    
      <h1>CartPage</h1>
      <span>
        ProductName:{pname}</span> <br />
        <span>ProductPrice:{pprice}</span> <br />
        <h3>TOTAL CART RS:{props.pqty*props.pprice}</h3>
    </>
  )
}

export default Cart
