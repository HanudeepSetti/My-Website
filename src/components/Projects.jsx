function Projects() {
  return (
    <section id="projects" style={{ padding: "60px" }}>
      <h2>Projects</h2>

      <div className="project">
        <h3>Live Emotion Capture</h3>
        <p>Tools: Deep Learning, CNN, OpenCV, Tensorflow</p>
        <p>Real-time detection and analysis of human emotions using facial expressions, voice, or behavioral cues.</p>
      </div>

      <div className="project">
        <h3>Netflix Stock Price Prediction</h3>
        <p>Tools: Python, Machine Learning</p>
        <p>Predicted stock movement using regression models.</p>
      </div>

      <div className="project">
        <h3>Transaction Fraud Detection</h3>
        <p>Tools: Python, Machine Learning</p>
        <p>Predicted stock movement using Classification models.</p>
      </div>

      <div className="project">
        <h3>IKEA SALES Performance Dashboard</h3>
        <p>Tools: SQL, Power BI, Excel</p>
        <p>Built interactive dashboards to track KPIs and trends.</p>
      </div>

      
    </section>
  );
}

export default Projects;
