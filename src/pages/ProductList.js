import React from 'react'
import Banner from '../components/Banner';
import List from '../components/Product/List';
import productBcg from '../images/productsBcg.jpeg';
const  ProductList = (props) => {
  return (
    <>
    <Banner img={productBcg} />
    <List />
    </>
  )
}

export default ProductList
