import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className='contact-container'>
    <div className='contact-wrapper'>
      <div className='contact-header'>
        <h3>Contact Me</h3>
        <p>Send me an e-mail through this form</p>
      </div>
      <div className='form-container'>
        <form  method="POST" action="https://formspree.io/gawishadam@gmail.com">
          <input className='form-control' type="email" name="email" placeholder="  Your email" />
          <input className='form-control' type="name" name="name" placeholder="  Your Name" />
          <textarea className='form-control' name="message" placeholder=" Message"></textarea>
          <div className='btnDiv'><button id='submit-button' type="submit">Send</button></div>
        </form>
      </div>
    </div>
  </div>
)

export default Contact;
