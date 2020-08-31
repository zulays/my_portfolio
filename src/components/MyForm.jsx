import React from 'react';
import '../styling/Contact.css';

export default class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: '',
    };
  }

  render() {
    const { status } = this.state;
    return (
      // contact form guidance from formspree.io
      <form
        className="contact-form"
        onSubmit={this.submitForm}
        action="https://formspree.io/maypgevj"
        method="POST"
      >
        <div className="form-group">
          {/* <label className="label">First Name:</label> */}
          <input type="text" name="first-name" placeholder="First Name" />
        </div>
        <div className="form-group">
          {/* <label className="label">Last Name:</label> */}
          <input type="text" name="last-name" placeholder="Last Name" />
        </div>
        <div className="form-group">
          {/* <label className="label">Email:</label> */}
          <input type="email" name="email" placeholder="Email Address" />
        </div>
        <div>
          {/* <label className="label">Message:</label> */}
          <textarea
            className="form-group-message"
            type="text"
            name="message"
            placeholder="Message"
          ></textarea>
        </div>

        {status === 'SUCCESS' ? (
          <p>Thanks!</p>
        ) : (
          <button className="send-button">Send</button>
        )}
        {status === 'ERROR' && <p>Whoops! There was an error.</p>}
      </form>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader('Accept', 'application/json');
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: 'SUCCESS' });
      } else {
        this.setState({ status: 'ERROR' });
      }
    };
    xhr.send(data);
  }
}
