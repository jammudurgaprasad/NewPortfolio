import React, { useEffect, useState } from "react";
import emailjs from "emailjs-com";
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import "../css/Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_durgaprasadjammu", // your EmailJS service ID
        "template_km4zv37", // your EmailJS template ID
        formData,
        "SiZcqRj6qdm_Q3u9Y" // your EmailJS public key
      )
      .then(() => {
        setStatus("Message sent successfully!");
        setFormData({ name: "", email: "", subject: "", message: "" });
      })
      .catch(() => {
        setStatus("Failed to send message. Try again.");
      });
  };

  useEffect(() => {
    const observerOptions = { threshold: 0.1 };

    const elements = document.querySelectorAll(".fade-on-scroll, .contact-heading");

    const observer = new IntersectionObserver((entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          obs.unobserve(entry.target);
        }
      });
    }, observerOptions);

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);

  return (
    <div className="container" id="contact">
      <main className="contact-heading">
        <h1>Contact</h1>
        <p>Feel free to reach out for any inquiries or collaborations.</p>
      </main>

      <div className="contact-content">
        {/* Contact Info */}
        <div className="contact-info fade-on-scroll">
          <div className="info-box">
            <FaMapMarkerAlt className="icon" />
            <div>
              <h4>Address</h4>
              <p>RVR & JC NES MEN&apos;S Hostel, Chowdavaram, Guntur, Andhra Pradesh 522019</p>
            </div>
          </div>

          <div className="info-box">
            <FaPhoneAlt className="icon" />
            <div>
              <h4>Call Us</h4>
              <p>+91 630 243 7147</p>
            </div>
          </div>

          <div className="info-box">
            <FaEnvelope className="icon" />
            <div>
              <h4>Email Us</h4>
              <p>jammudurgaprasad04@gmail.com</p>
            </div>
          </div>

          {/* Google Map */}
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3930.2797323707865!2d80.3232371!3d16.252169!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a76e36c936bb3%3A0x4cb41f876914915!2sRVR%20%26%20JC%20Boys%20Hostel!5e0!3m2!1sen!2sin!4v1613776074989!5m2!1sen!2sin"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            className="fade-on-scroll"
          ></iframe>
        </div>

        {/* Contact Form */}
        <div className="contact-form fade-on-scroll">
          <form onSubmit={handleSubmit} noValidate>
            <div className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <input
              className="subject"
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="cbutton" type="submit">
              Send Message
            </button>

            {status && <p className="status-message">{status}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
