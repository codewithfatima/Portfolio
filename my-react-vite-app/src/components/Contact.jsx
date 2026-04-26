import React, { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import { FaLinkedin, FaSnapchat, FaCheckCircle } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_2x67516', 'template_c5wrfek', form.current, {
        publicKey: 'eIkIMFNk-Ki6tojBb',
      })
      .then(
        () => {
          setMessageSent(true);
          setErrorMessage("");
        },
        (error) => {
          setMessageSent(false);
          setErrorMessage("Failed to send message, please try again.");
          console.log('FAILED...', error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-20 px-6  text-white text-center">
      <h1 className="text-3xl md:text-5xl font-bold text-emerald-400 mb-4">Contact Me</h1>
      <p className="text-gray-300 text-lg">Let’s build something great together</p>
      <span className="block h-1 w-16 bg-emerald-400 mx-auto mt-4 rounded-lg mb-16"></span>

      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 text-left">
        {/* Contact Options */}
   
   <div className=" flex flex-col gap-10 items-center">
  <article className="bg-[#1e293b] border border-emerald-500 px-20 py-5 rounded-lg flex flex-col items-center gap-2 transition-transform hover:scale-105">
    <MdOutlineEmail className="text-4xl text-emerald-400" />
    <h4 className="text-lg font-semibold">Email</h4>
    <h5 className="text-sm text-gray-400">fatima68.05.07@gmail.com</h5>
    <a
      href="mailto:fatima68.05.07@gmail.com"
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 text-sm hover:underline"
    >
      Send a message
    </a>
  </article>

  <article className="bg-[#1e293b] border border-emerald-500 px-28 py-8 rounded-lg flex flex-col items-center gap-2 transition-transform hover:scale-105">
    <FaSnapchat className="text-4xl text-yellow-400" />
    <h4 className="text-lg font-semibold">Snapchat</h4>
    <a
      href="https://www.snapchat.com/add/fatoomm26"
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 text-sm hover:underline"
    >
      Send a message
    </a>
  </article>

  <article className="bg-[#1e293b] border border-emerald-500 px-28 py-8 rounded-lg  flex flex-col items-center gap-2 transition-transform hover:scale-105">
    <FaLinkedin className="text-4xl text-blue-500" />
    <h4 className="text-lg font-semibold">LinkedIn</h4>
    <a
      href="https://www.linkedin.com/in/fatimanaeem32/"
      target="_blank"
      rel="noopener noreferrer"
      className="text-emerald-400 text-sm hover:underline"
    >
      Send a message
    </a>
  </article>
</div>


        {/* Contact Form */}
        <div>
          {messageSent && (
            <div className="bg-green-600 text-white p-4 rounded mb-4 flex items-center gap-2">
              <FaCheckCircle className="text-xl" />
              <p>Message sent successfully!</p>
            </div>
          )}
          {errorMessage && (
            <div className="bg-red-600 text-white p-4 rounded mb-4">
              <p>{errorMessage}</p>
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="Your Message"
              required
              className="w-full p-3 rounded bg-[#1e293b] text-white placeholder-gray-400 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-emerald-400"
            ></textarea>
            <button
              type="submit"
              className="bg-emerald-500 hover:bg-emerald-600 transition text-white px-6 py-2 rounded font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>

      

    </section>
  );
};

export default Contact;
