import React, { useState } from "react";
import '../css/Contact.css'
const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent!");
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <input type="text" name="name" placeholder="Your Name" onChange={handleChange} required className="input-field" />
        <input type="email" name="email" placeholder="Your Email" onChange={handleChange} required className="input-field"/>
        <textarea name="message" placeholder="Your Message" onChange={handleChange} required  className="textarea-field"></textarea>
        <button type="submit" className="submit-button">Send</button>
      </form>
    </div>
  );
};

export default Contact;
