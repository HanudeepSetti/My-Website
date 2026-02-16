const skills = [
  "Python",
  "SQL",
  "Power BI",
  "Excel",
  "Machine Learning",
  "Deep Learning",
  "Data Visualization",
  "Pandas",
  "NumPy"
];

function Skills() {
  return (
    <section id="skills" className="skills-section">
      <h2>Skills</h2>

      <ul className="skills-summary">
        <li>Python, SQL, Advanced Excel</li>
        <li>Power BI, DAX, Data Visualization</li>
        <li>Machine Learning, Predictive Modeling</li>
      </ul>

      <div className="skills-grid">
        {skills.map((skill, i) => (
          <div key={i} className="skill-pill">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;