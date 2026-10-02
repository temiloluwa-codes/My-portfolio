import "./App.css";
function App(){
  return(
    <main className="portfolio">
      <nav className="navbar">
        <div className="logo">OT</div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero">
        <p className="hero-small">CREATIVE DEVELOPER</p>

        <h1>
          Olakunle
          <br/>

          <span>Temiloluwa</span>
        </h1>

        <p className="hero-description">

          I build digital experiences that look good,feel smooth, and actually work.
        </p>

        <div className="hero-buttons">
          <button>View my Work</button>
          <button className="outline-btn">Let's Talk </button>
        </div>




      </section>

      <section className="about" id="about">
        <div className="about-label">
          <span>01</span>
          <p>ABOUT ME</p>

          <div className="about-content">
            <h2>
              I dont just build websites.
              <span>I create Experiences</span>
            </h2>

            <p>
              I'm Olakunle Temiloluwa,a creative developer focused on building mordern , interactive and user-friendly digital experiences.I enjoy turning ideas into clean and functional websites.
            </p>

            <p>
              Currently exploring the world of REACT and modern web development, I'm constantly learning, experimenting and building.
            </p>

            <div className="about-stats">

            </div>
            <strong>01+</strong>
            <span>Years Learning</span>
          </div>

          <div>
            <strong>05+</strong>
            <span>Projects</span>
          </div>

          <div>
            <strong>∞</strong>
            <span>Ideas</span>
          </div>
        </div>


      </section>

      <section className="skills" id="skills">
        <div className="skills-heading">
          <div className="section-number">02</div>

          <h2>What I <span>work with.</span></h2>
        </div>

        <div className="skills-list">

          <div className="skill-item">

            <span>01</span>
            <h3>01</h3>
            <h3>HTML</h3>
            <p>Structure & Semantic Web </p>
            <span className="skill-arrow">↗</span>
          </div>

          <div className="skill-item">
            <span>02</span>
            <h3>CSS</h3>
            <p>Responsive & Interactive Design</p>
            <span className="skill-arrow">↗</span>
          </div>

          <div className="skill-item">
            <span>03</span>
            <h3>Javascript</h3>
            <p>Logic & Web Interactions</p>
            <span className="skill-arrow">↗</span>
            
            </div>

            <div className="skill-items">
              <span>04</span>
              <h3>React</h3>
              <p>Mordern Component-Based UI</p>
              <span className="skill-arrow">↗</span>
            </div>
        </div>
      </section>


      <section className="projects" id="projects">
  <div className="projects-header">
    <div className="section-number">03</div>

    <h2>
      Selected <span>Projects.</span>
    </h2>

    <p>
      A collection of things I've built while learning,
      experimenting and turning ideas into interfaces.
    </p>
  </div>

  <div className="project-list">

    <article className="project">
      <div className="project-number">01</div>

      <div className="project-info">
        <h3>Restaurant Ordering System</h3>

        <p>
          A modern restaurant interface designed to make
          browsing meals and placing orders simple and smooth.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="project-action">
        View Project <span>↗</span>
      </div>
    </article>

    <article className="project">
      <div className="project-number">02</div>

      <div className="project-info">
        <h3>Job Application Form</h3>

        <p>
          A clean and responsive application form built with
          React and designed for a simple user experience.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
        </div>
      </div>

      <div className="project-action">
        View Project <span>↗</span>
      </div>
    </article>

    <article className="project">
      <div className="project-number">03</div>

      <div className="project-info">
        <h3>Personal Portfolio</h3>

        <p>
          This website — an evolving digital space showcasing
          my work, skills and journey as a developer.
        </p>

        <div className="project-tech">
          <span>React</span>
          <span>CSS</span>
          <span>JavaScript</span>
        </div>
      </div>

      <div className="project-action">
        You're Here <span>↗</span>
      </div>
    </article>

  </div>
</section>

<section className="contact" id="contact">
  <div className="section-number">04</div>

  <p className="contact-label">HAVE A PROJECT IN MIND?</p>

  <h2>
    Let's make
    <br />
    something <span>great.</span>
  </h2>

  <a href="mailto:your-email@gmail.com" className="contact-button">
    Get In Touch ↗
  </a>

  <div className="contact-bottom">
    <p>© 2026 Olakunle Temiloluwa</p>

    <div>
      <a href="#">GitHub</a>
      <a href="#">LinkedIn</a>
      <a href="#">Instagram</a>
    </div>
  </div>
</section>
    </main>


    
  )
}

export default App;;