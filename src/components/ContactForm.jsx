import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import toast from "react-hot-toast";
import { IoIosSend } from "react-icons/io";

function ContactForm() {
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hm0bf2k",
        "template_lmr6p3c",
        form.current,
        "S4pkOfr-QBm-7nr_j"
      )
      .then(
        (result) => {
          toast.success("Thank you for reaching out to me!");
        },
        (error) => {
          toast.error("Oops! Something get wrong");
        }
      );
  };

  return (
    <div className="main">
      <div className="contactForm">
        <h1 className="title">Contact</h1>
        <div className="contact-grid">
          <h2 className="title-three  contact-subTitle">Let's connect!</h2>
          <form ref={form} onSubmit={handleSubmit} className="contact-form">
            <input
              type="text"
              name="from_name"
              placeholder="Full name"
              required
            />
            <input
              type="email"
              name="from_email"
              placeholder="Email address"
              required
            />
            <textarea
              className="msg"
              name="message"
              placeholder="Your message here"
              required
            />
            <button> <IoIosSend className="send-icon" />Send Message</button>
          </form>
       
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
