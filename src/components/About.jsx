function About() {
  return (
    <section id="about" className="about-section">
        <div className="about-inner">

            {/* LEFT: IMAGE */}
            <div className="about-image">
            <img src="/Profile.png" alt="Hanudeep" />
            </div>

            {/* RIGHT: TEXT */}
            <div className="about-text">
            <h2>About Me</h2>

            <p>
                I’m a Data Analyst with a strong interest in Machine Learning and Data Science.
                I enjoy working with data to uncover insights, build predictive models,
                and create dashboards that support better decision-making.
            </p>

            <p>
                My background combines analytical thinking, technical skills, and
                real-world problem solving across Python, SQL, Power BI, and ML workflows.
            </p>
            </div>

        </div>
    </section>

  );
}

export default About;
