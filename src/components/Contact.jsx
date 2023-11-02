import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [formErrors, setFormErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Perform validation
    let valid = true;
    const newErrors = {
      name: '',
      email: '',
      message: '',
    };

    if (formData.name === '') {
      valid = false;
      newErrors.name = 'Name is required';
    }

    if (!isValidEmail(formData.email)) {
      valid = false;
      newErrors.email = 'Invalid email address';
    }

    if (formData.message === '') {
      valid = false;
      newErrors.message = 'Message is required';
    }

    if (valid) {
      // Handle successful form submission, e.g., send data to a server
      console.log('Form submitted successfully:', formData);
    } else {
      // Update form error messages
      setFormErrors(newErrors);
    }
  };

  const isValidEmail = (email) => {
    // Implemented validation here 
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleFormSubmit}>
        <div className="form-group mb-3">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="form-control" // Apply Bootstrap class
          />
          <span className="error">{formErrors.name}</span>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="form-control" // Apply Bootstrap class
          />
          <span className="error">{formErrors.email}</span>
        </div>
        <div className="form-group mb-3">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="form-control" // Apply Bootstrap class
          ></textarea>
          <span className="error">{formErrors.message}</span>
        </div>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

export default Contact;