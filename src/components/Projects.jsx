import ProjectCard from "./ProjectCard";

function Projects() {
  return (
    <section id="projects" className="projects-wrapper">
      <div className="section">
        <h2>Projects</h2>
      </div>

      <div className="bento-section liquid-ether-container">
        <div className="card-grid">
          <ProjectCard
            title="Live Emotion Capture"
            tools="Deep Learning, CNN, OpenCV, TensorFlow"
            description="Real-time detection and analysis of human emotions using facial expressions, voice, or behavioral cues."
          />

          <ProjectCard
            title="Netflix Stock Price Prediction"
            tools="Python, Machine Learning"
            description="Predicted stock movement using regression models."
          />

          <ProjectCard
            title="IKEA Sales Performance Dashboard"
            tools="SQL, Power BI, Excel"
            description="Built interactive dashboards to track KPIs and trends."
          />

          <ProjectCard
            title="Transaction Fraud Detection"
            tools="Python, Machine Learning"
            description="Detected fraudulent transactions using classification models."
          />
        </div>
      </div>
    </section>
  );
}

export default Projects;
