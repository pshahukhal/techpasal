import React, {Component } from 'react';
import styled from 'styled-components';
import {FaDolly, FaRedo,FaDollarSign} from 'react-icons/fa';

export default class Services extends Component{
  state ={
    services:[
      {id:3,
       icon: <FaDolly />,
       title: "Free shipping",
       text: "Free shipping inside the valley"
     },
     {id:2,
      icon: <FaRedo />,
      title: "10 days return policy",
      text: "Items can be returned <=10 days"
    },
    {id:1,
     icon: <FaDollarSign />,
     title: "Secured payment",
     text: "Make secure payments through our website"
     }
    ]
  }
  render()
  {
    return <ServiceWrapper className="py-5">
    <div className="container">
    <div className="row" >
    {this.state.services.map(item =>{
      return(
        <div className="col-10 mx-autp col-sm-6 col-md-4 text-center my-3" key={item.id}>
         <div className="service-icon">
          {item.icon}
         </div>
         <div className="mt-3 capitalize">{item.title}</div>
         <div className="mt-3">{item.text}</div>
        </div>
      )
    })}
    </div>
    </div>
    </ServiceWrapper>;
  }
}

const ServiceWrapper = styled.section`
 background: rgba(95,183,234,0.5);
 .service-icon{
   font-size:2rem;
   color: var(--primaryColor);
 }
`
