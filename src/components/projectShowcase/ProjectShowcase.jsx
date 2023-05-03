import "./ProjectShowcase.css";

const ProjectShowcase = ({ item }) => {
  return (
    <div className="projectShowcase">
      <div className="projectShowcase-container">
        <div className="projectShowcase-imageContainer">
          <div className="projectShowcase-ButtonContainer">
            <a
              href={item.codeLink}
              className="btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              Code
            </a>
            <a
              href={item.liveLink}
              className="btn secondary"
              target="_blank"
              rel="noreferrer"
            >
              Live Project
            </a>
          </div>
          <img
            height={"100%"}
            src={require(`../../assets/${item.image}.png`)}
            alt={item.image}
          />
        </div>
        <div className="projectShowcase-content">
          <div className="projectShowcase-content" style={{ width: "100%" }}>
            <h4>About Project</h4>
            <p>{item.about}</p>
          </div>
          <div className="projectShowcase-content" style={{ width: "100%" }}>
            <h4>Tech Used</h4>
            <p>{item.techUsed}</p>
          </div>
          <div className="projectShowcase-content" style={{ width: "100%" }}>
            <h4>What i learned</h4>
            <p>{item.learning}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectShowcase;
