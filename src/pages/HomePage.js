import React,{Component} from 'react'
import Banner from '../components/Banner';
import {Link} from 'react-router-dom'
import Services from '../components/Home/Services';
import Featured from '../components/Home/Featured'
class HomePage extends Component{
  render(){
    return(
      <>
      <Banner  title="techpasal gadgets" max="true">
      <Link to="/productlist" className="main-link" style={{margin:'2rem'}}>Our products</Link>
      </Banner>
      <Services />
      <Featured />
      </>
    )
  }
}

export default HomePage
