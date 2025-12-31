import "./Hero.css";
import heroImg from "../../assets/unnamed.jpg";
import resumePdf from "../../assets/resume.pdf";

const Hero = () => {
  return (
    <section className="hero">
      <img src={heroImg} alt="Akshat Srivastava" className="hero-img" />

      <h1>
        Hi, I'm <span>Akshat Srivastava</span>
        <br />
        Full-Stack Developer (MERN)
      </h1>

      <p>
        Full-Stack Web Developer with hands-on experience in building responsive,
        scalable, and user-focused applications using the MERN stack. Strong in
        React.js, Node.js, and REST APIs, with a solid foundation in Data
        Structures and Algorithms. Currently pursuing B.Tech in Information
        Technology at Rajasthan Technical University, Kota, while gaining
        real-world experience through internships, hackathons, and impactful
        projects.
      </p>

      <div className="hero-action">
        {/* ✅ LinkedIn Connect */}
        <a
          href="https://www.linkedin.com/in/akshat-srivastava-6105102a7/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className="hero-connect">Connect with me</button>
        </a>

        {/* ✅ Direct Resume Download */}
        <a href={resumePdf} download="Akshat_Srivastava_Resume.pdf">
          <button className="hero-resume">Download Resume</button>
        </a>
      </div>
    </section>
  );
};

export default Hero;
