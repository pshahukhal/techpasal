import React from 'react';
import {ProductConsumer} from '../../context/context';

export default  function CartTotals() {
  return (
    <div className="container">
    <div className="row">
    <ProductConsumer>
    {
      value => {
        const{clearCart,cartSubTotal,cartTax,cartTotal} = value;
      return <div className="col text-title text-center my-4">
       <button className="btn btn-outline-danger text-capitalize mb-4" onClick={clearCart}> Clear cart</button>
       <h5> subtotal: ${cartSubTotal} </h5>
      <h5> tax: ${cartTax} </h5>
      <h5> Total: ${cartTotal} </h5>
       </div>
      }
    }
    </ProductConsumer>
    </div>
    </div>
  )
}
