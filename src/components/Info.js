import React from "react" ;
import Title from './Title';
import aboutBcg from '../images/aboutBcg.jpeg';
export default function Info(){
  return(
    <section className="py-5">
    <div className="container">
    <div className="row">
    <div className="col-10 mx-auto col-md-6 my-3">
    <img src={aboutBcg} className="img-fluid img-thumbnail" alt="about us" style={{background:"var(--darkGrey)"}} />
    </div>
    <div className="col-10 mx-auto col-md-6 my-3">
    <Title title="About Us" />
    <p className="text-lead text-muted my-3">
     Techpasal is an online webstore where you can find all the latest technical gadgets with their recent prices.
     Your orders are delivered within a week within/outside the valley
    </p>
    <button type="button" className="main-link">More info</button>
    </div>
    </div>
    </div>

    </section>
  )
}
