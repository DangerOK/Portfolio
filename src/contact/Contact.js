import React from 'react';
import './Contact.css';

const Contact = () => (
  <div className='contact-container'>
    <h3>Contact Me</h3>
    <p>Send me an e-mail through this form</p>
    <form  method="POST" action="https://formspree.io/adamgg2@gmail.com">
      <input className='form-control' type="email" name="email" placeholder="Your email" />
      <input className='form-control' type="name" name="name" placeholder="Your Name" />
      <textarea className='form-control' name="message" placeholder="Message"></textarea>
      <button id='submit-button' type="submit">Send</button>
    </form>
  </div>
)
 
export default Contact;
