function ProjectCard({ title, tools, description }) {
  return (
    <div className="magic-bento-card">
      <h3>{title}</h3>
      <p><strong>Tools:</strong> {tools}</p>
      <p>{description}</p>
    </div>
  );
}

export default ProjectCard;
