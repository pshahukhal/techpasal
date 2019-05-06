import React from "react";
import Products from '../Products';
import {Link} from 'react-router-dom'
import Title from '../Title';
import {ProductConsumer} from '../../context/context';
export default function Featured(){
  return (
    <section className="py-">
    <div className="container">
    <Title title="Our featured products" center="center" />
    <div className="row my-5" >
    <ProductConsumer>
     {
       value => {
         const {featuredProducts} = value;
         return (featuredProducts.map(product => (
            <Products key={product.id} product={product} />
          )));

       }
     }
    </ProductConsumer>
    </div>
    <div className="row my-5">
      <div className="col text-center">
        <Link to="/productlist" className="main-link" >Our products</Link>
      </div>
    </div>
    </div>
    </section>
  )
}
