import "./App.css";

function App() {
  return (
    <div className="container">

      <div className="hero">

        <h1>Santhoshi S</h1>

        <h2>AI Enthusiast & Full Stack Developer</h2>

        <p className="intro">
          Computer Science Engineering student passionate about
          Artificial Intelligence, Full Stack Development,
          and modern web technologies.
        </p>

        <div className="buttons">

          <a
            href="https://www.linkedin.com/in/santhoshi-s"
            target="_blank"
          >
            <button>LinkedIn</button>
          </a>

          <a
            href="https://github.com/Santhoshi17-bjs"
            target="_blank"
          >
            <button>GitHub</button>
          </a>

        </div>

      </div>

      <div className="section">

        <h3>About Me</h3>

        <div className="card">
          <p>
            Motivated Computer Science student with strong
            foundations in Python, React JS, Node JS,
            Web Development, and AI applications.
          </p>
        </div>

      </div>

      <div className="section">

        <h3>Skills</h3>

        <div className="skills">
          <span>Python</span>
          <span>React JS</span>
          <span>Node JS</span>
          <span>JavaScript</span>
          <span>HTML</span>
          <span>CSS</span>
          <span>MongoDB</span>
          <span>GitHub</span>
        </div>

      </div>

      <div className="section">

        <h3>Projects</h3>

        <div className="card">
          <h4>Budget Tracker</h4>

          <p>
            Expense tracking application with budget alerts
            and spending insights.
          </p>
        </div>

        <div className="card">
          <h4>ResolveIt Hazard System</h4>

          <p>
            Platform for reporting neighborhood hazards
            and civic issues.
          </p>
        </div>

      </div>

      <div className="section">

        <h3>Contact</h3>

        <div className="card">
          <p>Email: santhoshibjs1710@gmail.com</p>

          <p>Phone: 6369501401</p>

          <p>Location: Trichy, Tamil Nadu</p>
        </div>

      </div>

    </div>
  );
}

export default App;