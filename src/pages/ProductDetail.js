import React from "react";
import {Link} from "react-router-dom";
import Banner from '../components/Banner';
import productImg from '../images/singleProductBcg.jpeg';
import {ProductConsumer} from '../context/context';

export default function ProductDetail(){
  return (
    <>
    <Banner img={productImg} title="" />
    <ProductConsumer>
    {
      value => {
        const {singleProduct,addToCart,loading} = value;
        if(loading){
          return <h1> Product is loading ...</h1>
        }
        const {company,description,id,price,title,image} = singleProduct;
        return<section className="py-5">
        <div className="container">
         <div className="row">
         <div className="col-10 mx-auto col-sm-8 col-md-6 my-3" >
         <img src={`../${image}`} alt="productd detail" className="img-fluid" />
         </div>
         <div className="col-10 mx-auto col-sm-8 col-md-6 my-3" >
         <h5 className="text-title mb-4">Model : {title}</h5>
         <h5 className="text-capitalize text-muted mb-4"> Company: {company} </h5>
         <h5 className="text-main text-capitalize mb-4" > Price: ${price}</h5>
         <p className="text-capitalize text-title mt-3"> Info: </p>
         <p>{description}</p>
         <button type="button" className="main-link" style={{margin:"0.75rem"}} onClick={() => addToCart(id)}>
         Add to cart
         </button>
         <Link to='/productlist' className="main-link" style={{margin:"0.75rem"}}>to products</Link>
         </div>
         </div>
        </div>
        </section>
      }
    }
    </ProductConsumer>
    </>
  )
}
