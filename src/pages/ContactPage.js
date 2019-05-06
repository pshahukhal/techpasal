import React from 'react'
import Banner from '../components/Banner';
import contactBcg from '../images/contactBcg.jpeg';
const  ContactPage = (props) => {
  return (
    <>
    <Banner img={contactBcg} title="contact us" />
    <section className="py-5">
      <div className="row">
        <div className="col10 mx-auto col-md-6 my3">
        <form className="mt-5" action=" https://formspree.io/pshahukhal@gmail.com" method="post">
          <div className="form-group" >
            <input type="text" className="form-control" name="firstName" required placeholder="Peter "/>
          </div>
          <div className="form-group" >
            <input type="email" className="form-control" name="email" required placeholder="email@email.com "/>
          </div>
          <div className="form-group" >
            <input type="text" className="form-control" name="subject" placeholder="Subject "/>
          </div>
          <div className="form-group" >
            <textarea className="form-control" name="query" required placeholder="your query.. "/>
          </div>
          <button type="submit" className="btn-primary"> Contact us </button>
        </form>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactPage
