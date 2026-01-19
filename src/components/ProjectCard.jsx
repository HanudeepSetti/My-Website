function ProjectCard({ title, tools, description }) {
  return (
    <div className="magic-bento-card magic-bento-card--border-glow magic-bento-card--text-autohide">
      <div className="magic-bento-card__header">
        <span className="magic-bento-card__label">Project</span>
      </div>

      <div className="magic-bento-card__content">
        <h3 className="magic-bento-card__title">{title}</h3>
        <p className="magic-bento-card__description">
          <strong>Tools:</strong> {tools}
        </p>
        <p className="magic-bento-card__description">{description}</p>
      </div>
    </div>
  );
}

export default ProjectCard;
