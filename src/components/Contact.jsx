import React from 'react';
import '../styling/Contact.css';
import MyForm from '../components/MyForm';

export default function Contact() {
  return (
    <div id="contact-me" className="contact-form">
      <h3>Let's work together!</h3>
      <h6>Fill out the form below to get started</h6>

      <MyForm />
    </div>
  );
}
