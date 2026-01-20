import GridDistortion from "./GridDistortion";

function Hero() {
  return (
    <section
      id="home"
      style={{
        position: "relative",
        height: "600px",
        overflow: "hidden",
      }}
    >
      {/* BACKGROUND EFFECT */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          zIndex: 0,
        }}
      >
        <GridDistortion
          imageSrc="https://picsum.photos/1920/1080?grayscale"
          grid={10}
          mouse={0.1}
          strength={0.15}
          relaxation={0.9}
        />
      </div>

      {/* FOREGROUND CONTENT */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
        }}
      >
        <h1>Hi, I’m Hanudeep S 👋</h1>
        <h3>Data Analyst | Aspiring Data Scientist</h3>
        <p>Deep Learning • SQL • Power BI • Machine Learning</p>
      </div>
    </section>
  );
}

export default Hero;
