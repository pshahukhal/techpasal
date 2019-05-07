import React,{Component} from 'react';
import {FaFacebook,FaTwitter,FaLinkedin} from 'react-icons/fa';
import styled from 'styled-components';

const socialData = [
  {
    "id":1,
    "icon":<FaFacebook className="icon" />,
    "url": "https://www.facebook.com"
   },
   {
     "id":2,
     "icon":<FaTwitter className="icon" />,
   "url": "https://www.twiter.com"
   },
   {
     "id":3,
     "icon":<FaLinkedin className="icon" />,
   "url": "https://www.linkedin.com"
   }
]

class Footer extends Component{
  state={
    data : socialData
  }
  render(){
    return (
      <FooterWrapper>
        <div className="container py-3" >
        <div className="row">
        <div className="col-md-6">
        <p className="text-capitalize">
          copyright &copy; Tech pasal {" "}
          {new Date().getFullYear()}
        </p></div>
      <div className="col-md-6 d-flex justify-content-around">
        {this.state.data.map(item => <a href={item.url} key={item.id} >{item.icon}</a>)}
        </div>
        </div>
        </div>
      </FooterWrapper>
    )
  }
}

const FooterWrapper = styled.footer`
background: var(--darkGrey);
color: var(--mainWhite);
.icon{
  font-size: 1.5rem;
  color: var(--mainWhite);
  transition: var(--mainTransition);
}
.icon:hover{
  color: var(--primaryColor);
  cursor: pointer;
}
`
export default Footer
