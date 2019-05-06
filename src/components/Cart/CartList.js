import React from 'react'
import {ProductConsumer} from '../../context/context';
import CartItem from './CartItem';

export default  function CartList() {
  return (
   <div className="container-fluid">
   <div className="row">
   <div className="col" >
   <ProductConsumer>
   {
     value => {
       const {cart,incrementCart,decrementCart,removeItem} = value;
       if(cart.length===0){
         return <h3 className="text-title text-center my-4">
         You dont have any cartItems</h3>
       }
       return(
         <>
         {cart.map(item =>(
           <CartItem key={item.id} cartItem={item} increment={incrementCart} decrement={decrementCart} removeItem={removeItem} />
         ))}
         </>
       )
     }
   }
   </ProductConsumer>
   </div>
   </div>
   </div>

  )
}
