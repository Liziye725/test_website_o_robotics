const ContactForm = () => {
  return (
    <form action="https://formspree.io/f/xwkggeke" method="POST">
      <label>
        Your email:
        <input type="email" name="email" />
      </label>
      <label>
        Your message:
        <textarea name="message"></textarea>
      </label>

      <button type="submit">Send</button>
    </form>
  );
};

export default ContactForm;
