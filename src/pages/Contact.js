 import '../Styles/Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Me</h2>
      {/* Contact Form */}
      <form className="contact-form"   action="https://formspree.io/f/xkgryqvj"
        method="POST">
        <input type="text" name="name" placeholder="Your Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <textarea name="message" placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
}

export default Contact;
