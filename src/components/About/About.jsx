import "./About.css";
import profile_img from "../../assets/unnamed.jpg";

const About = () => {
  return (
    <section className="about" id="about">
      {/* TITLE */}
      <div className="about-title">
        <h1>About Me</h1>
        <span className="about-line"></span>
      </div>

      {/* ABOUT CONTENT */}
      <div className="about-content">
        {/* LEFT IMAGE */}
        <div className="about-left">
          <img src={profile_img} alt="Akshat Srivastava" />
        </div>

        {/* RIGHT TEXT */}
        <div className="about-right">
          <p>
            I am <strong>Akshat Srivastava</strong>, a Pre-Final year{" "}
            <strong>Information Technology</strong> undergraduate at{" "}
            <strong>Rajasthan Technical University, Kota</strong>, and a
            passionate <strong>Full-Stack Web Developer</strong> specializing in
            the MERN stack.
          </p>

          <p>
            I have hands-on experience building responsive, scalable, and
            user-centric web applications using{" "}
            <strong>React.js, Node.js, Express.js, and MongoDB</strong>. Through
            internships and real-world projects, I’ve worked on front-end UI
            development, backend APIs, authentication, and database integration.
          </p>

          <p>
            Alongside development, I actively strengthen my{" "}
            <strong>Data Structures & Algorithms</strong> skills to improve
            problem-solving and write efficient, optimized code. I enjoy
            learning new technologies, collaborating with teams, and building
            solutions that solve real-world problems.
          </p>

          {/* SKILLS */}
          <div className="about-skills">
            <div className="about-skill">
              <p>React.js</p>
              <div className="skill-bar">
                <span style={{ width: "85%" }}></span>
              </div>
            </div>

            <div className="about-skill">
              <p>Node.js & Express.js</p>
              <div className="skill-bar">
                <span style={{ width: "80%" }}></span>
              </div>
            </div>

            <div className="about-skill">
              <p>MongoDB & MySQL</p>
              <div className="skill-bar">
                <span style={{ width: "75%" }}></span>
              </div>
            </div>

            <div className="about-skill">
              <p>Data Structures & Algorithms</p>
              <div className="skill-bar">
                <span style={{ width: "70%" }}></span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* EXPERIENCE SECTION */}
      <div className="experience">
        <h2>Experience</h2>

        <div className="experience-item">
          <h3>Web Developer Intern</h3>
          <span>Curious Team Learning Pvt. Ltd. | Jun 2025 – Present</span>
          <p>
            Working on building responsive and interactive web applications with
            a focus on modern UI/UX. Developing reusable components, improving
            performance, and collaborating with teams in a full-stack
            development environment.
          </p>
        </div>

        <div className="experience-item">
          <h3>Web Developer Intern</h3>
          <span>Market Things | Jun 2025 – Present</span>
          <p>
            Contributed to building and maintaining user-friendly websites.
            Improved styling, layout, and functionality using JavaScript and
            CSS, while enhancing overall website usability and performance.
          </p>
        </div>

        <div className="experience-item">
          <h3>Core Member</h3>
          <span>React Club – RTU Kota | Feb 2024 – Present</span>
          <p>
            Actively involved in organizing technical and cyber security-related
            events, collaborating with peers to promote learning and technical
            growth within the student community.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
