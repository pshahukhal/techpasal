import React,{Component} from 'react';
import {linkData } from './linkData';
import {items} from './productData';
const ProductContext = React.createContext();

class ProductProvider extends Component{
  state={
    sidebarOpen: false,
    cartOpen:false,
    cartItems: 0,
    links:linkData,
    cart:[],
    cartSubTotal:0,
    cartTax:0,
    cartTotal:0,
    storeProducts:[],
    filteredProducts:[],
    featuredProducts:[],
    singleProduct:{},
    loading: true
  };

  componentDidMount(){
    this.setProducts(items);
  }

  setProducts = products =>{
    let storeProducts= products.map(item => {
      const {id} = item.sys;
      const image = item.fields.image.fields.file.url
      const product ={id,...item.fields,image}
      return product;}
    );
    let featuredProducts= storeProducts.filter(
      item => item.featured === true
    );
    this.setState({
      storeProducts,
      filteredProducts:storeProducts,
      featuredProducts,
      cart:this.getStorageCart(),
      singleProduct:this.getStorageProduct(),
      loading:false
    },
  () => {
    this.addTotals();
  });
  }

  getStorageCart = () => {
    let cart;
    if(localStorage.getItem('cart'))
    {
      cart = JSON.parse(localStorage.getItem('cart'));
    }
    else {
      cart = []
    }
    return cart;
  }
  getStorageProduct = () => {
    return localStorage.getItem('singleProduct')?JSON.parse(localStorage.getItem('singleProduct')):{};
  }

  getTotals =()=> {

    let subTotal = 0;
    let cartItems = 0;
    this.state.cart.forEach(
      item => {
        subTotal += item.total
        cartItems += item.count
      }
    )
    subTotal = parseFloat(subTotal.toFixed(2));
    let tax = subTotal * 0.13;
    tax = parseFloat(tax.toFixed(2));
    let total = subTotal + tax;
    total = parseFloat(total.toFixed(2));
    return {
      cartItems,
      subTotal,
      tax,
      total
    }
  };

  addTotals = () => {
    const totals = this.getTotals()
    this.setState({
      cartItems: totals.cartItems,
      cartSubTotal: totals.subTotal,
      cartTax: totals.tax,
      cartTotal: totals.total
    })
  };

  syncStorage = () => {
    localStorage.setItem('cart',JSON.stringify(this.state.cart));
  };

  addToCart = (id) => {
    let tempCart = [...this.state.cart];
    let tempProducts = [...this.state.storeProducts];
    let tempItem = tempCart.find(item => item.id === id)
    if (!tempItem){
      tempItem = tempProducts.find(item => item.id === id)
      let total = tempItem.price;
      let cartItem = {...tempItem,count:1,total}
      tempCart = [...tempCart,cartItem]
      }
      else{
        tempItem.count++;
        tempItem.total = tempItem.price * tempItem.count;
        tempItem.total = parseFloat(tempItem.total.toFixed(2))
      }
      this.setState (
        () => {return {cart:tempCart}
      },
      () =>{
        this.addTotals();
        this.syncStorage();
        this.openCart();
        }
     )

  };

  setSingleProduct = (id) => {
  let product = this.state.storeProducts.find(item => item.id === id);
  localStorage.setItem('singleProduct',JSON.stringify(product));
  this.setState({
    singleProduct:{...product},
    loading:false
  })
  };

  handleSidebar  = () =>{
    this.setState(
      {
        sidebarOpen : !this.state.sidebarOpen
      }
    )
  }

  handleCart = () =>{
    this.setState(
      {
        cartOpen : !this.state.cartOpen
      }
    )
  }

  openCart = () =>{
    this.setState(
      {
        cartOpen : true
      }
    )
  }

  closeCart = () =>{
    this.setState(
      {
        cartOpen : false
      }
    )
  }

  incrementCart = id =>{
    let tempCart = [...this.state.cart];
    const cartItem = tempCart.find(item => item.id === id);
    cartItem.count++;
    cartItem.total = cartItem.count * cartItem.price;
    cartItem.total = parseFloat(cartItem.total.toFixed(2));
    this.setState(() =>
  {
    return{
      cart: [...tempCart]
    }
  },()=>{
    this.addTotals();
    this.syncStorage();
  })
  }

  decrementCart = id =>{

  }

  removeItem = id =>{
    let tempCart = [...this.state.cart];
    tempCart = tempCart.filter(item => item.id !== id);
    this.setState({
      cart : [...tempCart]
    },
    () => {
      this.addTotals();
      this.syncStorage();
    })


  }

  clearCart = () =>{
    this.setState({
      cart:[]
    },()=>{
      this.addTotals();
      this.syncStorage();
    });
    this.syncStorage();


  }

  render(){
    return(
    <ProductContext.Provider value={{...this.state,
                                     handleCart: this.handleCart,
                                     handleSidebar: this.handleSidebar,
                                     openCart: this.openCart,
                                     closeCart: this.closeCart,
                                     addToCart: this.addToCart,
                                     setSingleProduct: this.setSingleProduct,
                                     incrementCart: this.incrementCart,
                                     decrementCart: this.decrementCart,
                                     removeItem: this.removeItem,
                                     clearCart: this.clearCart
                                     }}>
    {this.props.children}
    </ProductContext.Provider >
  )
  }
}

const ProductConsumer= ProductContext.Consumer;

export {ProductProvider,ProductConsumer}