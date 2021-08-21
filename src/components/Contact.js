import React from 'react';
import emailjs from 'emailjs-com';
import Header from './Header';
import Footer from './Footer';

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('service_p1l9e27', 'template_q6xlpow', e.target, 'user_CeoJnMZ5lkLFIuD7oaTYP')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  }

  return (
      <div className="contact-wrapper">
        <Header/>
      <form className="contact-form" onSubmit={sendEmail}>
          <input type="hidden" name="contact_number"></input>
          <h1 className="conhead">I would love to hear from you !!</h1>
        <label>To</label>
        <input type="text" name="to_name"></input>
        <label>From</label>
        <input type="text" name="user_name"></input>
        <label>Email</label>
        <input type="email" name="user_email"></input>
        <label>Message</label>
        <textarea name="message"></textarea>
        <input type="submit" value="Send"></input>
      </form>
        <Footer/>
      </div>
  );
}

