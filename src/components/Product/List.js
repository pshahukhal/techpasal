import React from "react";
import {ProductConsumer} from '../../context/context';
import Products from '../Products'
import Title from '../Title';
export default function List(){
  return <ProductConsumer>
  {value =>{
    const {filteredProducts} = value;
    return(
      <section className="py-5">
      <div className="container" >
      <Title center title="our products"  />
      <div className="row py-5">
      {filteredProducts.map(product =>{
        return <Products key={product.id} product={product} />
      })}
      </div>
      </div>
      </section>
    )
  }}
  </ProductConsumer>
}
