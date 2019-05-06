import React,{Component} from 'react';
import {ProductConsumer} from '../context/context';
import styled from 'styled-components';
import {Link} from 'react-router-dom'

class Sidecart extends Component{
  render(){
    return (
      <ProductConsumer>
      {value =>
       {
         const {cartOpen,closeCart,cart,cartItems,cartTotal} = value;
         return(
           <CartWrapper show={cartOpen} onClick={closeCart}>
            <ul>
             {cart.map(item =>{
               return <li key="item.id" className="cart-item mb-4">
               <img width="35" src={`../${item.image}`} alt="cartitem" />
               <div className="mt-3">
               <h6 className="text-uppercase">{item.title}</h6>
               <h6 className="text-title text-capitalize">Quantity:{item.count}</h6>
               </div>
               </li>
             })}
            </ul>
            <h5 className="text-capitalize text-main" style={{color:'var(--primaryColor)'}}>
            Total: ${cartTotal}
          </h5>
            <div className="text-center my-5">
            <Link to="/cart" className="main-link" > to cart </Link>
            </div>
           </CartWrapper>
         )
       }
      }
    </ProductConsumer>
    )
  }
}

const CartWrapper = styled.div`
position:fixed;
top:75px;
right:0;
width:100%;
height:100%;
background: var(--mainGrey);
z-index: 1;
border-left: 4px solid var(--primaryColor);
transition: var(--mainTransition);
 transform: ${props => props.show?'translateX(0)':'translateX(100%)'};
@media (min-width:576px){
  width: 15rem;
}
overflow: scroll;
padding: 2rem;
ul{
  padding:0 !important;
}
.cart-item{
  list-style-type:none;
}
`;
export default Sidecart
