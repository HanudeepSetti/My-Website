import heroBg from "../assets/desk-bg.jpg";

function Hero() {
  return (
    <section
      className="hero-section"
      style={{
        backgroundImage: `url(${heroBg})`,
      }}
    >
      <div className="hero-overlay"></div>

      <div className="hero-content hero-left hero-glass">
        <h1>
          <span>Hanudeep S</span>
        </h1>

        <h3>Data Analyst & Aspiring Data Scientist</h3>
        <p>Deep Learning · SQL · Power BI · Machine Learning</p>

        <div className="hero-buttons">
          <a href="/resume.pdf" className="btn btn-primary">Resume</a>
          <a href="#projects" className="btn btn-outline">Portfolio</a>
        </div>
      </div>


    </section>
  );
}

export default Hero;
