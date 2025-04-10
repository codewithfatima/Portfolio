import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin } from "react-icons/fa";
import { FaSnapchat } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa"; // Check icon for success
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false); // Track message sent status
  const [errorMessage, setErrorMessage] = useState(""); // Track error messages if any

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2x67516', 'template_c5wrfek', form.current, {
        publicKey: 'eIkIMFNk-Ki6tojBb',
      })
      .then(
        () => {
          setMessageSent(true); // Set message sent status to true
          setErrorMessage(""); // Clear error message if success
        },
        (error) => {
          setMessageSent(false); // Set message sent status to false
          setErrorMessage("Failed to send message, please try again."); // Set error message
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2 className="logo">Contact</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4 style={{ fontSize: '2px' }}>Email</h4>
            <h5 className="log">fatima68.05.07@gmail.com</h5>
            <a href="mailto:fatima68.05.07@gmail.com">Send a message</a>
          </article>
          <article className="contact__option">
            <FaSnapchat className="contact__option-icon" />
            <h4>Snapchat</h4>
            {/* <h5 className='log'>fatoomm26</h5> */}
            <a href="https://www.snapchat.com/add/yourusername">Send a message</a>
          </article>
          <article className="contact__option">
            <FaLinkedin className="contact__option-icon" />
            <h5>Linkedin</h5>
            {/* <h5 className='log'></h5> */}
            <a href="https://www.linkedin.com/in/fatimanaeem32/" target="_blank" rel="noopener noreferrer">
              Send me a message
            </a>
          </article>
        </div>

        {messageSent && (
          <div className="message-success">
            <FaCheckCircle className="check-icon" />
            <p>Message Sent Successfully!</p>
          </div>
        )}

        {errorMessage && (
          <div className="message-error">
            <p>{errorMessage}</p>
          </div>
        )}

        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Enter Your name" required />
          <input type="email" name="email" placeholder="Enter Your Email" required />
          <textarea name="message" rows="11" placeholder="Your Message" required></textarea>
          <button className="btn">Send message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
