import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios from 'axios';
import styles from './Contact.module.css';

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  // State to track the submission status
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // Set submitting state to true to disable the button
    setIsSubmitting(true);

    try {
      const response = await axios.post('https://localhost:7190/api/Contact/send-email', formData, {
        headers: { 'Content-Type': 'application/json' }
      });

      if (response.status === 200) {
        alert('Message sent successfully!');
      } else {
        alert(`There was an error: ${response.data.error || 'Unknown error'}`);
      }

      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('There was an error. Please try again.');
    } finally {
      // Set submitting state back to false
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className={styles.contactSection}>
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <div>Have a question or want to work together? Leave your details and I'll get back to you as soon as possible</div>
        
        <div className={styles.formGroup}>
          <label htmlFor="name">Your Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="email">Your Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        <div className={styles.formGroup}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
          ></textarea>
        </div>

        <button type="submit" className={styles.submitButton} disabled={isSubmitting}>
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </section>
  );
};

export default Contact;
