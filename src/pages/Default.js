import React from 'react';
import Banner from '../components/Banner';
import defaultBcg from '../images/defaultBcg.jpeg';
import {Link} from 'react-router-dom'

const  Default = (props) => {
  return (
          <Banner img={defaultBcg}  title="404" max="true" >
          <h2> Page not found</h2>
          <Link to="/" className="main-link" style={{margin:"2rem"}} >
           Return to home
          </Link>
        </Banner>
          )
}

export default Default
