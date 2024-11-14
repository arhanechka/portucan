import React, { useState } from 'react';
import '../css/Contacts.css';  
import aboutImage from '../assets/about-image.jpg';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.message.trim()) newErrors.message = 'Message is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Form Data:', formData);
      setFormData({ name: '', email: '', message: '' }); // Clear form on success
      setIsSubmitted(true);
      setErrors({}); // Clear errors
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <div className="about-container">
        <div className="about-image">
          <img src={aboutImage} alt="About Anna" />
        </div>
        <div className="about-info">
          <h2>About Me</h2>
          <p>
            Hello, my guest. My name is Anna Arkhipchuk, a Ukrainian and Canadian musician and programmer who sincerely loves Portugal and dreams of moving there. I lived in Portugal for six months in 2022, after which I began learning the language, studying the history and culture of the country, as well as exploring opportunities for Canadians to move to Portugal and the steps to make it happen. I hope my resource will be useful to you both in terms of information and helpful contacts. Boa sorte!
          </p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-container">
        <h2>Send a Message</h2>
        <form className="contact-form" onSubmit={handleSubmit} noValidate>
          <label htmlFor="name">Name</label>
          <input 
            type="text" 
            id="name" 
            name="name" 
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className={errors.name ? 'error' : ''}
          />
          {errors.name && <p className="error-message">{errors.name}</p>}
          
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email" 
            name="email" 
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className={errors.email ? 'error' : ''}
          />
          {errors.email && <p className="error-message">{errors.email}</p>}
          
          <label htmlFor="message">Message</label>
          <textarea 
            id="message" 
            name="message" 
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            className={errors.message ? 'error' : ''}
          ></textarea>
          {errors.message && <p className="error-message">{errors.message}</p>}
          
          <button type="submit">Send Message</button>
        </form>
      </div>

      <div className="phone-block">
        <h3>Contacts</h3>
        <p>Email: <strong><a href="mailto:amelie.waze@gmail.com">amelie.waze@gmail.com</a></strong></p>
      </div>
    </div>
  );
};

export default Contacts;
