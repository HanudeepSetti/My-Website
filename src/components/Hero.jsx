import GridDistortion from "./GridDistortion";
import LiquidChrome from "./LiquidChrome";


function Hero() {
  return (
    <section id="home" className="hero-section">
      {/* Background */}
      <div className="hero-bg">
        <LiquidChrome interactive={true} />
      </div>

      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content hero-left">
        <h1 className="hero-name">
          HANUDEEP S <span>S</span>
        </h1>

        <h2 className="hero-role">
          Data Analyst
        </h2>

        <p className="hero-tagline">
          Data Scientist · Machine Learning · Deep Learning · SQL · Power BI
        </p>

        <div className="hero-actions">
          <a href="/resume.pdf" className="btn btn-primary">Resume</a>
          <a href="#projects" className="btn btn-secondary">Portfolio</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
