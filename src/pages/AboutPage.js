import React from 'react'
import Banner from '../components/Banner'
import aboutBcg from '../images/aboutBcg.jpeg';
import {Link} from 'react-router-dom';
import Info from '../components/Info';
const  AboutPage = () => {
  return (
  <>
  <Banner img={aboutBcg} title="About TechPasal" max="false">
  <Link to="/" className="main-link" style={{margintop:"2rem"}} >Navigate our products</Link>

  </Banner>
  <Info />
  </>
  )
}

export default AboutPage
