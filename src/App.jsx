import { useEffect, useState } from 'react'
import { BrowserRouter, Link, NavLink, Route, Routes, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'
import {
  contactLinks,
  certifications,
  languages,
  profile,
  projects,
  skills,
  strengths,
} from './data'

const navItems = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Skills', path: '/skills' },
  { label: 'Projects', path: '/projects' },
  { label: 'Certifications', path: '/certifications' },
  { label: 'Contact', path: '/contact' },
]

const reveal = {
  initial: { opacity: 0, y: 22 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.18 },
  transition: { duration: 0.55, ease: 'easeOut' },
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname])

  return null
}

function SectionHeader({ eyebrow, title, description }) {
  return (
    <div className="section-header">
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="section-title">{title}</h2>
      {description ? <p className="section-copy">{description}</p> : null}
    </div>
  )
}

function Hero3D() {
  return (
    <div className="hero-visual">
      <div className="hero-glow" />
      <div className="hero-image-container">
        <div className="image-frame">
          <img 
            src="/profile.jpg" 
            alt="Kanimozhi - AI & Data Science Student" 
            className="hero-profile-image"
            onError={(e) => {
              e.currentTarget.remove()
            }}
          />
        </div>
      </div>
    </div>
  )
}

function AnimatedName() {
  return (
    <span className="animated-name" aria-label="Kanimozhi">
      {Array.from('Kanimozhi').map((letter, index) => (
        <span key={`${letter}-${index}`} aria-hidden="true" style={{ '--letter-index': index }}>
          {letter}
        </span>
      ))}
    </span>
  )
}

function HomePage() {
  const metricCards = [
    { label: 'Focus', value: 'AI & ML' },
    { label: 'Languages', value: 'Python · Java · C' },
    { label: 'Stack', value: 'React · Node · SQL' },
    { label: 'Experience', value: 'AI Intern' },
  ]

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      className="page-stack"
    >
      <section className="hero-layout">
        <div className="hero-copy">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.08 }}
            className="eyebrow accent"
          >
            {profile.tagline}
          </motion.p>

          <h1 className="hero-title">
            I’m <AnimatedName />, building AI systems that turn data into decisions.
          </h1>

          <p className="hero-text">{profile.summary}</p>

          <div className="cta-row">
            <a href="/KANIMOZHI_RESUME.pdf" download className="button primary">
              Download Resume
            </a>
            <Link to="/projects" className="button secondary">
              View Projects
            </Link>
          </div>

          <div className="social-row">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <span>{profile.email}</span>
            <span>{profile.phone}</span>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.12 }}
          className="hero-visual-wrap"
        >
          <Hero3D />
        </motion.div>
      </section>

      <motion.section {...reveal} className="stats-grid">
        {metricCards.map((item) => (
          <div key={item.label} className="panel-card stat-card">
            <p className="mini-label">{item.label}</p>
            <p className="stat-body">{item.value}</p>
          </div>
        ))}
      </motion.section>

      <motion.section {...reveal} className="split-grid">
        <div className="panel-card panel-expanded">
          <SectionHeader
            eyebrow="Who I am"
            title="AI-focused student with hands-on product thinking"
            description="I combine machine learning fundamentals, Python development, and full-stack workflow execution to build user-facing, data-driven solutions."
          />
        </div>

        <div className="panel-card panel-expanded">
          <SectionHeader
            eyebrow="What I do"
            title="Data, ML, and product execution"
            description="From model development and backend integration to responsive interfaces, I enjoy building complete AI experiences that feel useful and practical."
          />
        </div>
      </motion.section>

      <motion.section {...reveal} className="skill-showcase">
        {skills.slice(0, 4).map((group) => (
          <div key={group.category} className="panel-card skill-card">
            <p className="mini-label">{group.category}</p>
            <div className="chip-row">
              {group.items.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </div>
        ))}
      </motion.section>
    </motion.div>
  )
}

function AboutPage() {
  return (
    <motion.div {...reveal} className="page-stack">
      <SectionHeader
        eyebrow="About"
        title="Professional profile"
        description="B.Tech Artificial Intelligence and Data Science student with a practical interest in machine learning, data-driven decision making, and product-focused software development."
      />

      <div className="split-grid">
        <article className="panel-card panel-expanded">
          <p className="lead-copy">{profile.objective}</p>
        </article>

        <aside className="panel-card panel-expanded">
          <p className="mini-label">Career focus</p>
          <ul className="bullet-list">
            {strengths.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </aside>
      </div>
    </motion.div>
  )
}

function SkillsPage() {
  return (
    <motion.div {...reveal} className="page-stack">
      <SectionHeader
        eyebrow="Skills"
        title="Core technical strengths"
        description="My skill set spans programming, machine learning, web technologies, databases, and practical tools used in AI product workflows."
      />

      <div className="skill-grid">
        {skills.map((group) => (
          <article key={group.category} className="panel-card skill-card-large">
            <h3>{group.category}</h3>
            <div className="chip-row large">
              {group.items.map((tech) => (
                <span key={tech}>{tech}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

function ProjectsPage() {
  return (
    <motion.div {...reveal} className="page-stack">
      <SectionHeader
        eyebrow="Projects"
        title="Selected work"
        description="These project entries reflect the technologies and scope described in the resume and are presented in a recruiter-friendly format."
      />

      <div className="project-stack">
        {projects.map((project) => (
          <article key={project.title} className="panel-card project-card">
            <div className="project-header">
              <div>
                <p className="mini-label">Project</p>
                <h3>{project.title}</h3>
              </div>
              <div className="chip-row">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
            </div>

            <div className="project-body">
              <div>
                <p className="mini-label">Problem</p>
                <p className="project-copy">{project.problem}</p>
              </div>
              <div>
                <p className="mini-label">Solution</p>
                <p className="project-copy">{project.solution}</p>
              </div>
            </div>

            <div className="feature-box">
              <p className="mini-label">Key features</p>
              <ul className="bullet-list">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="project-actions">
              <a href={project.github} target="_blank" rel="noreferrer" className="button secondary small">
                GitHub
              </a>
            </div>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

function CertificationsPage() {
  return (
    <motion.div {...reveal} className="page-stack">
      <SectionHeader
        eyebrow="Certifications"
        title="Continuous technical learning"
        description="Certifications that support my foundation in programming and software development."
      />

      <div className="cert-grid">
        {certifications.map((certification) => (
          <article key={certification} className="panel-card cert-card">
            <span className="cert-badge">Certification</span>
            <p>{certification}</p>
          </article>
        ))}
      </div>
    </motion.div>
  )
}

function ContactPage() {
  const handleSubmit = (event) => {
    event.preventDefault()
    const name = event.currentTarget.elements.name.value
    const email = event.currentTarget.elements.email.value
    const message = event.currentTarget.elements.message.value
    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`)
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)
    window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`
  }

  return (
    <motion.div {...reveal} className="page-stack">
      <SectionHeader
        eyebrow="Contact"
        title="Let’s connect"
        description="Open to internships, collaboration, and opportunities in AI, data science, and product engineering."
      />

      <div className="split-grid contact-grid">
        <div className="panel-card contact-panel">
          <p className="mini-label">Direct contact</p>
          <div className="contact-links">
            {contactLinks.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith('http') ? '_blank' : undefined} rel={item.href.startsWith('http') ? 'noreferrer' : undefined}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
              </a>
            ))}
          </div>

          <div className="language-box">
            <p className="mini-label">Languages</p>
            <div className="chip-row">
              {languages.map((language) => (
                <span key={language}>{language}</span>
              ))}
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="panel-card form-card">
          <div className="field-grid">
            <label>
              Name
              <input name="name" type="text" required />
            </label>
            <label>
              Email
              <input name="email" type="email" required />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows="6" required />
          </label>

          <button type="submit" className="button primary">
            Send Message
          </button>
        </form>
      </div>
    </motion.div>
  )
}

function AppShell() {
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  return (
    <div className="app-shell">
      <header className="site-header">
        <div className="topbar-inner">
          <Link to="/" className="brand-mark" aria-label="Kanimozhi home">
            <img src="/profile.jpg" alt="" className="brand-photo" />
            <strong>Kanimozhi</strong>
          </Link>

          <nav className="desktop-nav" aria-label="Primary navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>

          <div className="topbar-actions">
            <a href="mailto:kanimozhi1818logeshwari@gmail.com" className="button primary small mobile-hidden">
              Contact Me
            </a>
            <button
              type="button"
              className="menu-button"
              aria-label="Toggle navigation"
              onClick={() => setMenuOpen((open) => !open)}
            >
              ☰
            </button>
          </div>
        </div>

        {menuOpen ? (
          <nav className="mobile-nav" aria-label="Mobile navigation">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        ) : null}
      </header>

      <main className="page-shell">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <div>
            <p className="footer-brand">Kanimozhi</p>
            <p>AI & Data Science Student</p>
          </div>
          <div className="footer-links">
            <a href={profile.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="mailto:kanimozhi1818logeshwari@gmail.com">Email</a>
          </div>
        </div>
      </footer>

      <ScrollToTop />
    </div>
  )
}

function App() {
  return (
    <BrowserRouter>
      <AppShell />
    </BrowserRouter>
  )
}

export default App
