import React, {Component} from 'react';

import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"

// importing components of the page
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Sidecart from './components/Sidecart';
import Footer from './components/Footer' ;

// routing for the pages
import AboutPage from './pages/AboutPage';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import Default from './pages/Default';
import HomePage from './pages/HomePage';
import ProductDetail from './pages/ProductDetail';
import ProductList from './pages/ProductList';

import {Route,Switch} from 'react-router-dom' ;
class App extends Component{
  render(){
    return (
      <>
      <Navbar />
      <Sidebar />
      <Sidecart />
      <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/about"  component={AboutPage} />
      <Route path="/contact"  component={ContactPage} />
      <Route path="/cart"  component={CartPage} />
      <Route path="/productlist"  component={ProductList} />
      <Route path="/productdetail/:id" exact component={ProductDetail} />
      <Route  component={Default} />


      </Switch>
      <Footer />
      </>
    )
  }
}

export default App;
