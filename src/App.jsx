import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* NAVBAR */}
      <nav className="navbar">
        <div className="logo">Patrick<span>.</span></div>

        <div className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#experience">Experience</a>
          <a href="#contact">Contact</a>
        </div>

        <a
          className="github-btn"
          href="https://github.com/Rotichpatrick792"
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-content">
          <p className="eyebrow">AI • SOFTWARE • DATA • CYBERSECURITY</p>

          <h1>
            Building intelligent
            <span> digital solutions.</span>
          </h1>

          <p className="hero-text">
            I'm Patrick Kiprop Rotich, a Computer Science graduate focused on
            building intelligent, data-driven and secure software solutions
            across AI, Machine Learning, Python, data engineering,
            cybersecurity and IoT.
          </p>
          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              Explore My Work ↓
            </a>

            <a
              href="/Patrick_Rotich_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="secondary-btn"
            >
              View My CV ↗
            </a>
          </div>

          <div className="quick-stats">
            <div>
              <strong>AI / ML</strong>
              <span>Intelligent Systems</span>
            </div>

            <div>
              <strong>Python</strong>
              <span>Backend & Data</span>
            </div>

            <div>
              <strong>IoT</strong>
              <span>Connected Systems</span>
            </div>
          </div>
        </div>

        <div className="hero-visual">
          <div className="code-card">
            <div className="code-header">
              <span></span>
              <span></span>
              <span></span>
            </div>

            <pre>
              {`class Patrick:
    focus = [
        "AI & ML",
        "Data",
        "Software",
        "Cybersecurity",
        "IoT"
    ]

    def build(self):
        return "Real solutions"`}</pre>

            <div className="status">
              <span className="status-dot"></span>
              Available for opportunities
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="section about">
        <div className="section-label">01 — ABOUT</div>

        <div className="about-grid">
          <div>
            <h2>
              Technology should
              <span> solve problems.</span>
            </h2>
          </div>

          <div className="about-text">
            <p>
              I am a Computer Science graduate from the University of Embu
              with hands-on experience building software, IoT systems,
              networking solutions and cybersecurity tools.
            </p>

            <p>
              My current focus is expanding into Artificial Intelligence,
              Machine Learning, data management, web scraping and automation
              while continuing to build practical software systems.
            </p>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section id="skills" className="section skills">
        <div className="section-label">02 — SKILLS</div>

        <h2>My technical toolkit</h2>

        <div className="skills-grid">
          <div className="skill-card">
            <div className="skill-number">01</div>
            <h3>AI & Machine Learning</h3>
            <p>
              Machine Learning, data preprocessing, intelligent systems and
              model-driven applications.
            </p>
            <div className="tags">
              <span>Python</span>
              <span>ML</span>
              <span>Pandas</span>
              <span>NumPy</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">02</div>
            <h3>Data & Web Scraping</h3>
            <p>
              Data collection, processing, databases, automation and
              web-based data extraction.
            </p>
            <div className="tags">
              <span>SQL</span>
              <span>BeautifulSoup</span>
              <span>Selenium</span>
              <span>APIs</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">03</div>
            <h3>Software Development</h3>
            <p>
              Backend systems, REST APIs, full-stack applications and
              database-driven software.
            </p>
            <div className="tags">
              <span>FastAPI</span>
              <span>Flask</span>
              <span>React</span>
              <span>SQLite</span>
            </div>
          </div>

          <div className="skill-card">
            <div className="skill-number">04</div>
            <h3>Cybersecurity & IoT</h3>
            <p>
              Network security, intrusion detection, embedded systems and
              connected IoT platforms.
            </p>
            <div className="tags">
              <span>Linux</span>
              <span>Scapy</span>
              <span>MQTT</span>
              <span>ESP8266</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      {/* PROJECTS */}
      <section id="projects" className="section projects">
        <div className="section-label">03 — PROJECTS</div>

        <div className="projects-heading">
          <div>
            <h2>Things I've built.</h2>
          </div>

          <p>
            Practical systems combining AI, software engineering, data,
            cybersecurity and connected technologies.
          </p>
        </div>

        <div className="project-grid">

          {/* PROJECT 1 */}
          <article className="project-card featured">
            <div className="project-top">
              <span>01</span>
              <span>AI / DATA</span>
            </div>

            <div className="project-icon">AI</div>

            <h3>Job Connector AI</h3>

            <p>
              A job-matching platform designed to connect job seekers with
              relevant opportunities using intelligent, data-driven matching.
            </p>

            <div className="project-tags">
              <span>AI / ML</span>
              <span>Python</span>
              <span>Data</span>
              <span>Web</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Rotichpatrick792/job-connector"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">
                Case Study →
              </a>
            </div>
          </article>

          {/* PROJECT 2 */}
          <article className="project-card">
            <div className="project-top">
              <span>02</span>
              <span>IoT / ML</span>
            </div>

            <div className="project-icon">☀</div>

            <h3>SolarGuard</h3>

            <p>
              An IoT-based solar monitoring and fault detection system
              collecting sensor data and identifying abnormal system behaviour.
            </p>

            <div className="project-tags">
              <span>IoT</span>
              <span>Python</span>
              <span>Flask</span>
              <span>React</span>
              <span>ML</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Rotichpatrick792/finalyearproject"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">
                Case Study →
              </a>
            </div>
          </article>

          {/* PROJECT 3 */}
          <article className="project-card">
            <div className="project-top">
              <span>03</span>
              <span>BACKEND / IoT</span>
            </div>

            <div className="project-icon">IoT</div>

            <h3>IoT Device Platform</h3>

            <p>
              A backend platform for managing IoT devices using REST APIs,
              JWT authentication, MQTT communication and persistent storage.
            </p>

            <div className="project-tags">
              <span>FastAPI</span>
              <span>JWT</span>
              <span>MQTT</span>
              <span>SQLite</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Rotichpatrick792/iot-platform-backend"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">
                Case Study →
              </a>
            </div>
          </article>

          {/* PROJECT 4 */}
          <article className="project-card">
            <div className="project-top">
              <span>04</span>
              <span>CYBERSECURITY</span>
            </div>

            <div className="project-icon">SEC</div>

            <h3>Cross-Platform Firewall</h3>

            <p>
              A Python-based network security project exploring traffic
              filtering and firewall protection across different platforms.
            </p>

            <div className="project-tags">
              <span>Python</span>
              <span>Networking</span>
              <span>Security</span>
              <span>Linux</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Rotichpatrick792/cross-platform-firewall"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">
                Case Study →
              </a>
            </div>
          </article>

          {/* PROJECT 5 */}
          <article className="project-card">
            <div className="project-top">
              <span>05</span>
              <span>IoT / MQTT</span>
            </div>

            <div className="project-icon">MQ</div>

            <h3>MQTT Sensor Network</h3>

            <p>
              A real MQTT sensor network using an ESP8266 and DHT11 sensor
              to publish environmental data to a Python subscriber.
            </p>

            <div className="project-tags">
              <span>ESP8266</span>
              <span>MQTT</span>
              <span>C++</span>
              <span>Python</span>
            </div>

            <div className="project-links">
              <a
                href="https://github.com/Rotichpatrick792/mqtt-sensor-network"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>

              <a href="#contact">
                Case Study →
              </a>
            </div>
          </article>

        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="section experience">
        <div className="section-label">04 — EXPERIENCE</div>

        <div className="experience-card">
          <div>
            <p className="experience-date">2025 — 2026</p>
            <h2>ICT Intern</h2>
            <h3>Kenya Revenue Authority — ICT Department</h3>
          </div>

          <div className="experience-details">
            <p>
              Provided ICT support, system deployment, hardware and software
              troubleshooting, network support, desktop configuration and
              technical documentation.
            </p>

            <div className="tags">
              <span>ICT Support</span>
              <span>Networking</span>
              <span>Linux</span>
              <span>Windows</span>
              <span>Technical Support</span>
            </div>
          </div>
        </div>
      </section>
      {/* EDUCATION */}
      <section id="education" className="section experience">
        <div className="section-label">05 — EDUCATION</div>

        <div className="experience-card">
          <div>
            <p className="experience-date">2022 — 2026</p>
            <h2>BSc Computer Science</h2>
            <h3>University of Embu</h3>
          </div>

          <div className="experience-details">
            <p>
              Completed a Bachelor of Science in Computer Science with coursework
              in Machine Learning, Computer Networks, Distributed Systems,
              Information Systems, and ICT Project Management.
            </p>

            <div className="tags">
              <span>Machine Learning</span>
              <span>Networking</span>
              <span>Distributed Systems</span>
              <span>Software Development</span>
            </div>
          </div>
        </div>
      </section>


      {/* CONTACT */}
      <section id="contact" className="section contact">
        <div className="section-label">05 — CONTACT</div>

        <div className="contact-content">
          <h2>
            Let's build something
            <span> meaningful.</span>
          </h2>

          <p>
            I'm open to opportunities in AI, Machine Learning, software
            development, data, cybersecurity and technology.
          </p>

          <a
            href="mailto:rotichpatrick792@gmail.com"
            className="email-link"
          >
            rotichpatrick792@gmail.com ↗
          </a>

          <div className="social-links">
            <a
              href="https://github.com/Rotichpatrick792"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

            <a href="#" target="_blank" rel="noreferrer">
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>© 2026 Patrick Kiprop Rotich</p>
        <p>Built with React + Vite</p>
      </footer>
    </div>
  );
}

export default App;