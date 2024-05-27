import React from "react";
import { useState } from "react";

import "./App.css";

import ContactForm from "./components/contact-info/ContactForm";

function App() {
  return (
    <>
      <div>
        {/* Style it later */}
        <h1>Contact Us</h1>
        <ContactForm />
      </div>
    </>
  );
}

export default App;
