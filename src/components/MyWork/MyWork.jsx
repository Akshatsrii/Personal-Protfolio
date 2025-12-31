import "./MyWork.css";
import mywork_data from "../../assets/mywork_data";

const MyWork = () => {
  return (
    <section className="mywork" id="portfolio">
      <div className="mywork-title">
        <h1>My Work</h1>
        <p>Projects showcasing my Full-stack and Frontend And Backend skills</p>
      </div>

      <div className="mywork-container">
        {mywork_data.map((work, index) => (
          <div key={index} className="mywork-card">
            {/* PROJECT IMAGE */}
            <div
              className="mywork-logo"
              style={{ backgroundImage: `url(${work.w_img})` }}
            ></div>

            {/* PROJECT CONTENT */}
            <div className="mywork-content">
              <h3>{work.w_title}</h3>
              <p>{work.w_desc}</p>

              {/* TECH STACK */}
              <div className="mywork-tech">
                {work.w_tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              {/* LINKS */}
              <div className="mywork-links">
                {work.w_github && (
                  <a
                    href={work.w_github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default MyWork;
