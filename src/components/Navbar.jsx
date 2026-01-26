function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <span className="logo">Hanudeep</span>
      </div>

      <ul className="navbar-right">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#resume">Resume</a></li>
        <li><a href="#projects">Portfolio</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
