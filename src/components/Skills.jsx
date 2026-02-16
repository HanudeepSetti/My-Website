const skills = [
  "Python", "SQL", "Power BI", "Excel",
  "Machine Learning", "Deep Learning",
  "Data Visualization", "Pandas", "NumPy"
];

const Skills = () => (
  <section id="skills" className="skills-section">
    <h2>Skills</h2>

    <div className="skills-grid">
      {skills.map((skill, i) => (
        <div key={i} className="skill-pill">{skill}</div>
      ))}
    </div>
  </section>
);

export default Skills;
