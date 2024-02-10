import React, { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [error, setError] = useState({
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));

    if (name === 'email') {
      setError(prevState => ({
        ...prevState,
        email: ''
      }));
    }
  };

  const validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
    return re.test(String(email).toLowerCase());
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError({ email: 'Please enter a valid email address.' });
      return;
    }

    console.log(formData);
    alert("Message submitted!");

    setFormData({
      name: '',
      email: '',
      message: ''
    });
    setError({
      email: ''
    });
  };

  // Basic styling
  const styles = {
    form: {
      display: 'flex',
      flexDirection: 'column',
      width: '300px',
      margin: 'auto',
    },
    input: {
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    textarea: {
      minHeight: '100px',
      marginBottom: '10px',
      padding: '8px',
      borderRadius: '4px',
      border: '1px solid #ccc',
    },
    button: {
      padding: '10px',
      backgroundColor: '#007bff',
      color: '#fff',
      border: 'none',
      borderRadius: '4px',
      cursor: 'pointer',
    },
    label: {
      marginBottom: '5px',
      fontWeight: 'bold',
    },
    error: {
      color: 'red',
      marginBottom: '10px',
    }
  };

  return (
    <>
      <h1>Contact Page</h1>
      <form onSubmit={handleSubmit} style={styles.form} noValidate>
        <label htmlFor="name" style={styles.label}>Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          onBlur={(e) => !e.target.value && alert('Name is required')}
          style={styles.input}
        />
        <label htmlFor="email" style={styles.label}>Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          onBlur={(e) => !e.target.value && alert('Email is required')}
          style={styles.input}
        />
        {error.email && <div style={styles.error}>{error.email}</div>}
        <label htmlFor="message" style={styles.label}>Message:</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          onBlur={(e) => !e.target.value && alert('Message is required')}
          style={styles.textarea}
        />
        <button type="submit" style={styles.button}>Submit</button>
      </form>
    </>
  );
}
