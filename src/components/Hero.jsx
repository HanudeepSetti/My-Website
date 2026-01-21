import GridDistortion from "./GridDistortion";
import LiquidChrome from "./LiquidChrome";


function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* Background */}
      <div className="hero-bg">
        <LiquidChrome />
      </div>

      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>Hi, I’m Hanudeep S 👋</h1>
        <h3>Data Analyst | Aspiring Data Scientist</h3>
        <p>Deep Learning • SQL • Power BI • Machine Learning</p>
      </div>
    </section>
  );
}

export default Hero;
