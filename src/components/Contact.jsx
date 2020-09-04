import React from 'react';
import '../styling/Contact.css';
import MyForm from '../components/MyForm';

export default function Contact() {
  return (
    <div id="contact-me" className="contact-container">
      <h3 className="form-header">Let's work together!</h3>
      <h6>Fill out the form below to get started</h6>
      <MyForm />
    </div>
  );
}
