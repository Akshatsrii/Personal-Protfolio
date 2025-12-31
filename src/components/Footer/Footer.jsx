import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      {/* TOP */}
      <div className="footer-top">
        {/* LEFT */}
        <div className="footer-top-left">
          <h2>Akshat Srivastava</h2>
          <p>
            Full-Stack Developer (MERN)<br />
            B.Tech Information Technology<br />
            Rajasthan Technical University, Kota
          </p>
        </div>

        {/* RIGHT */}
        <div className="footer-top-right">
          {/* EMAIL */}
          <a
            href="mailto:chickusrivastava535@gmail.com"
            className="footer-contact"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/new-post.png"
              alt="email"
            />
            <span>chickusrivastava535@gmail.com</span>
          </a>

          {/* PHONE */}
          <a href="tel:+919024085451" className="footer-contact">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/phone.png"
              alt="phone"
            />
            <span>+91 9024085451</span>
          </a>
        </div>
      </div>

      <hr />

      {/* BOTTOM */}
      <div className="footer-bottom">
        <p>
          © {new Date().getFullYear()} Akshat Srivastava · All Rights Reserved
        </p>

        <div className="footer-links">
          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/in/akshat-srivastava-6105102a7/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/linkedin.png"
              alt="LinkedIn"
            />
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/Akshatsrii"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/github.png"
              alt="GitHub"
            />
          </a>

          {/* LeetCode */}
          <a
            href="https://leetcode.com/u/Akshatsrivastava007/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://img.icons8.com/external-tal-revivo-filled-tal-revivo/48/ffffff/external-level-up-your-coding-skills-and-quickly-land-a-job-logo-filled-tal-revivo.png"
              alt="LeetCode"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
