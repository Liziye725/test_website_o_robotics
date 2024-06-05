// src/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!name || !email || !message) {
      setError("Please fill out all fields");
      return;
    }
    // Send the form data to Formspree API
    fetch(`https://formspree.io/${your - form - id}`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    })
      .then((response) => {
        if (!response.ok) {
          setError("Error submitting form");
        } else {
          setError(null);
        }
      })
      .catch((error) => {
        setError("Error submitting form");
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />
      </label>
      <br />
      <label>
        Email:
        <input
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Message:
        <textarea
          value={message}
          onChange={(event) => setMessage(event.target.value)}
        />
      </label>
      <br />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
