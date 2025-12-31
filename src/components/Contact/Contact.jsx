import { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    formData.append("access_key", "fc21808f-9972-47f8-9d3c-36601afe9914");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Message sent successfully!");
      e.target.reset();
      setTimeout(() => setResult(""), 4000);
    } else {
      setResult("Something went wrong. Please try again!");
    }
  };

  return (
    <section className="contact" id="contact">
      {/* TITLE */}
      <div className="contact-title">
        <h1>Get in Touch</h1>
      </div>

      <div className="contact-section">
        {/* LEFT */}
        <div className="contact-left">
          <h2>Let's Talk</h2>
          <p>
            I am currently available for full-stack development opportunities,
            internships, and collaborative projects. Feel free to reach out if
            you’d like to connect or discuss potential work.
          </p>

          <div className="contact-details">
            {/* EMAIL */}
            <a
              href="mailto:chickusrivastava535@gmail.com"
              className="contact-detail"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
                alt="email"
              />
              <p>chickusrivastava535@gmail.com</p>
            </a>

            {/* PHONE */}
            <a href="tel:+919024085451" className="contact-detail">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
                alt="phone"
              />
              <p>+91 9024085451</p>
            </a>

            {/* LOCATION */}
            <div className="contact-detail">
              <img
                src="https://img.icons8.com/ios-filled/50/ffffff/marker.png"
                alt="location"
              />
              <p>India</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="contact-right">
          <form onSubmit={onSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button type="submit">Send Message</button>

            {/* RESULT MESSAGE */}
            {result && <p className="form-result">{result}</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
