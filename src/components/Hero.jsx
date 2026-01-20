import GridDistortion from "./GridDistortion";

function Hero() {
  return (
    <section
      id="home"
      className="hero-section"
    >
      {/* Background */}
      <div className="hero-bg">
        <GridDistortion
          imageSrc="https://picsum.photos/1920/1080?grayscale"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
        />
      </div>

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
