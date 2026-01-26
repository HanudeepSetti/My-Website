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

      <div className="hero-content">
        <h1>Hi, I’m Hanudeep S 👋</h1>
        <h3>Data Analyst | Aspiring Data Scientist</h3>
        <p>Deep Learning • SQL • Power BI • Machine Learning</p>
      </div>
    </section>
  );
}

export default Hero;
