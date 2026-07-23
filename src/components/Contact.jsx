import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MdOutlineEmail, MdLocationOn } from "react-icons/md";
import { FaLinkedin, FaCheckCircle } from "react-icons/fa";

import emailjs from "@emailjs/browser";


const contacts = [
  {
    icon: <MdOutlineEmail />,
    title: "Email",
    text: "fatima68.05.07@gmail.com",
    link: "mailto:fatima68.05.07@gmail.com",
  },
  {
    icon: <FaLinkedin />,
    title: "LinkedIn",
    text: "Fatima Naeem",
    link: "https://linkedin.com/in/fatimanaeem32/",
  },
  {
    icon: <MdLocationOn />,
    title: "Location",
    text: "Kuwait",
  },
];

const fadeUp = {
  hidden: {
    opacity: 0,
    y: 60,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};


const fadeLeft = {
  hidden: {
    opacity: 0,
    x: -60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};


const fadeRight = {
  hidden: {
    opacity: 0,
    x: 60,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.7,
    },
  },
};

const inputStyle =
  "w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-emerald-400 outline-none";



const ContactCard = ({ item }) => {

  return (

    <a
      href={item.link}
      target="_blank"
      rel="noreferrer"
      className="
            flex items-center gap-5
            bg-slate-900/80
            border border-white/10
            p-5
            rounded-2xl
            hover:border-emerald-400
            hover:-translate-y-2
            transition duration-300
            "
    >

      <div className="text-3xl text-emerald-400">
        {item.icon}
      </div>


      <div>

        <h3 className="font-semibold text-lg">
          {item.title}
        </h3>

        <p className="text-gray-400 text-sm">
          {item.text}
        </p>

      </div>

    </a>

  );
};



const Contact = () => {

  const form = useRef();

  const [messageSent, setMessageSent] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");



  const sendEmail = (e) => {

    e.preventDefault();


    emailjs
      .sendForm(
        "service_2x67516",
        "template_c5wrfek",
        form.current,
        {
          publicKey: "eIkIMFNk-Ki6tojBb",
        }
      )
      .then(() => {

        setMessageSent(true);
        setErrorMessage("");
        form.current.reset();

      })
      .catch(() => {

        setErrorMessage("Failed to send message");

      });

  };



  return (
    <motion.section
      id="contact"
      className="py-24 px-6 relative overflow-hidden text-white"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.2 }}
      variants={fadeUp}
    >

      <div className="absolute top-20 left-0 w-96 h-96 bg-emerald-500/20 blur-[120px] rounded-full" />

      <div className="max-w-6xl mx-auto">

        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
        >

          <h1 className="text-4xl md:text-6xl font-bold">
            Contact <span className="text-emerald-400">Me</span>
          </h1>

          <p className="text-gray-400 mt-5 text-lg">
            Have a project in mind? Let's work together.
          </p>

          <div className="w-20 h-1 bg-emerald-400 mx-auto mt-5 rounded-full" />

        </motion.div>


        <div className="grid md:grid-cols-2 gap-12 items-center">


          <motion.div
            variants={fadeLeft}
          >

            <h2 className="text-3xl font-bold mb-6">
              Let's Talk 🚀
            </h2>

            <p className="text-gray-400 leading-8 mb-10">
              I'm open to discussing new projects, creative ideas, and opportunities.
              Feel free to reach out.
            </p>


            <div className="space-y-5">

              {contacts.map((item, index) => (

                <motion.a
key={index}
variants={fadeUp}
whileHover={{
  y:-10,
  scale:1.03
}} href={item.link} target="_blank" rel="noreferrer"
                  className="flex items-center gap-5 bg-slate-900/80 border border-white/10 p-5 rounded-2xl hover:border-emerald-400 hover:-translate-y-2 transition">

                  <div className="text-3xl text-emerald-400">
                    {item.icon}
                  </div>

                  <div>
                    <h3 className="font-semibold text-lg">{item.title}</h3>
                    <p className="text-gray-400 text-sm">{item.text}</p>
                  </div>

                </motion.a>

              ))}

            </div>

        </motion.div>



        {/* Contact Form */}
    <motion.div
variants={fadeRight}
whileHover={{
  scale:1.02
}}
className="bg-slate-900/70 backdrop-blur-xl border border-white/10 rounded-3xl p-8 shadow-xl"
>

          <form ref={form} onSubmit={sendEmail} className="space-y-5">

            <input name="name" placeholder="Your Name" required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-emerald-400 outline-none" />


            <input name="email" type="email" placeholder="Your Email" required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-emerald-400 outline-none" />


            <textarea name="message" rows="6" placeholder="Your Message" required
              className="w-full bg-slate-800 border border-slate-700 rounded-xl p-4 focus:border-emerald-400 outline-none" />


            <button className="w-full bg-emerald-500 hover:bg-emerald-600 py-4 rounded-xl font-bold transition hover:scale-105">
              Send Message →
            </button>

          </form>

        </motion.div>


      </div>

    </div>

  </motion.section >
  );
};


export default Contact;