import React, { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    // console.log(`Name: ${name}, Email: ${email}, Message: ${message}`);
    const contactName = "Contact Form Submission from ${name}";
    const body = "Name: ${name}%0D%0AEmail: ${email}%0D%0AMessage: ${message}";
    window.location.href =
      "mailto:recipient@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}";
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
      <div>Habababa ciastko kawa</div>
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
      <button type="submit">Send</button>
    </form>
  );
}

export default ContactForm;
