import '../Styles/Contact.css';

function Contact() {
  return (
    <section className="section contact" id="contact">
      <h2>Contact Me</h2>
      <p>If you'd like to get in touch, feel free to reach out!</p>
      <p><strong>Github:</strong> <a href="https://github.com/sampathkumar210304" target="_blank" rel="noreferrer">https://github.com/sampathkumar210304</a></p>
      <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/sampath-dheekonda-3a215b262/" target="_blank" rel="noreferrer">linkedin.com/in/sampath-dheekonda-3a215b262</a></p>

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
