import React from 'react'
import "./Contact.css"
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context'
import { useContext } from 'react'

const Contact = () => {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_zavll4s', 'template_s53zgli', form.current, '66F6lRuRmZD9u3JPL')
      .then((result) => {
          console.log(result.text);
          alert("Message sent to shakifk1@gmail.com...thanks for Contacting us.");
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="contact-form" id='Contact'>
        <div className="w-left">
            <div className="awesome">
                <span style={{color: darkMode?"white":""}}>Get in Touch </span>
                <span>Contact me</span>
            </div>
            <div className="blur s-blur1" style={{background:"ABF1FF94"}}></div>
        </div>
        <div className="c-right">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="user_name" className="user" placeholder='Name' />
                <input type="email" name="user_email" className="user" placeholder='Email' />
                <textarea name="message" className="user" placeholder='Message' />
                <input type="submit" value="send" className="button" />
                <div className="blur c-blur1" style={{background:"var(--purple)"}}></div>
            </form>
        </div>
    </div>
  )
}

export default Contact