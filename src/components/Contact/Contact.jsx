import React, { useContext, useRef, useState } from 'react';
import './Contact.css';
import emailjs from '@emailjs/browser';
import { themeContext } from '../../Context';

const Contact = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  const form = useRef();
  const [done, setDone] = useState(false);
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_uupua9s',
        'template_4y9i07r',
        form.current,
        'UFva_L3MMN844yszt'
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className="contact-form" id="contact">
      {/* left side copy and paste from work section */}
      <div className="w-left">
        <div className="c-text">
          {/* darkMode */}
          <span>Get in Touch</span>
          <span style={{ color: darkMode ? '#93a397' : '' }}>
            Welcome to email me if you have anything want to share or discuss
            with me, whether it is about jobs, technology trend, development
            tips. I am open to any opportunity.
          </span>
        </div>
      </div>
      {/* right side form */}
      <div className="c-right">
        <form ref={form} onSubmit={sendEmail}>
          <input
            type="text"
            name="user_name"
            className="user"
            placeholder="Name"
            required
          />
          <input
            type="email"
            name="user_email"
            className="user"
            placeholder="Email"
            required
          />
          <input
            type="text"
            name="user_subject"
            className="user"
            placeholder="Subject"
            required
          />
          <textarea
            name="message"
            className="user"
            placeholder="Message"
            required
          />
          <input
            type="submit"
            value="Send"
            className={darkMode ? 'btn-submit-dark' : 'btn-submit'}
          />
          <span>{done && 'Thanks for Contacting me'}</span>
          <div
            className="c-blur"
            style={{
              background: 'rgba(245, 120, 47, 0.521)',
              top: '5rem',
              width: '24rem',
              height: '16rem',
              left: '9rem',
              visibility: darkMode ? 'hidden' : 'visible',
            }}></div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
