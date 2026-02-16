function ProjectCard({ title, tools, description }) {
  return (
    <div className="project-card-modern">
      
      <div className="project-preview">
        <span>Project Preview</span>
      </div>

      <div className="project-content">
        <h3>{title}</h3>

        <div className="tech-tags">
          {tools.split(",").map((tool, i) => (
            <span key={i}>{tool.trim()}</span>
          ))}
        </div>

        <p>{description}</p>
      </div>

    </div>
  );
}

export default ProjectCard;
