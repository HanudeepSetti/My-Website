import LiquidChrome from "./LiquidChrome";

function Hero() {
  return (
    <section className="hero-section">
      {/* 🔮 LiquidChrome Background */}
      <div className="hero-bg">
        <LiquidChrome
          baseColor={[0.15, 0.08, 0.3]}
          speed={0.25}
          amplitude={0.35}
          frequencyX={3}
          frequencyY={3}
        />
      </div>

      {/* 🌑 Dark overlay for readability */}
      <div className="hero-overlay"></div>

      {/* 🧠 Content */}
      <div className="hero-content">
        <h1>Hi, I’m Hanudeep S 👋</h1>
        <h3>Data Analyst | Aspiring Data Scientist</h3>
        <p>Deep Learning • SQL • Power BI • Machine Learning</p>
      </div>
    </section>
  );
}

export default Hero;
