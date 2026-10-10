import { useMemo, useState } from 'react'
import './App.css'

const creators = [
  {
    id: 1,
    name: 'Aarav Sharma',
    initials: 'AS',
    role: 'Brand & Visual Designer',
    specialization: 'Design',
    tools: ['Midjourney', 'Figma'],
    skills: ['Branding', 'UI/UX', 'Visual Design'],
    bio: 'I turn bold ideas into memorable visual identities and digital experiences.',
    projects: [
      { title: 'Nova Brand Identity', type: 'Branding', description: 'A complete visual identity concept for a modern technology brand.' },
      { title: 'FinFlow Mobile UI', type: 'UI/UX', description: 'A clean dashboard concept for a personal finance application.' },
    ],
    color: 'lavender',
    available: true,
  },
  {
    id: 2,
    name: 'Priya Reddy',
    initials: 'PR',
    role: 'Content Creator & Copywriter',
    specialization: 'Content',
    tools: ['ChatGPT', 'Canva'],
    skills: ['Copywriting', 'Social Media', 'Storytelling'],
    bio: 'I create human-centered stories and content that help brands connect with people.',
    projects: [
      { title: 'Everyday Stories', type: 'Social Media', description: 'A sample social content campaign built around everyday moments.' },
      { title: 'Brand Voice Guide', type: 'Copywriting', description: 'A sample tone-of-voice guide for a lifestyle brand.' },
    ],
    color: 'peach',
    available: true,
  },
  {
    id: 3,
    name: 'Kabir Mehta',
    initials: 'KM',
    role: 'Video Editor & Motion Artist',
    specialization: 'Video',
    tools: ['Runway', 'Adobe Premiere'],
    skills: ['Video Editing', 'Motion Graphics', 'Reels'],
    bio: 'I bring ideas to life through punchy edits, motion design, and short-form video.',
    projects: [
      { title: 'Motion in Minutes', type: 'Motion Design', description: 'A sample motion graphics concept for a digital product.' },
      { title: 'Launch Reel Concept', type: 'Video', description: 'A short-form promotional video concept for a product launch.' },
    ],
    color: 'mint',
    available: false,
  },
  {
    id: 4,
    name: 'Ananya Iyer',
    initials: 'AI',
    role: 'AI Illustrator',
    specialization: 'Design',
    tools: ['Midjourney', 'Adobe Firefly'],
    skills: ['Illustration', 'Art Direction', 'Concept Art'],
    bio: 'I explore visual worlds through illustration, art direction, and AI-assisted concepts.',
    projects: [
      { title: 'Dreamscapes', type: 'Illustration', description: 'A sample collection of imaginative environment concepts.' },
      { title: 'Future Botanicals', type: 'Concept Art', description: 'An experimental visual series inspired by nature and technology.' },
    ],
    color: 'pink',
    available: true,
  },
  {
    id: 5,
    name: 'Dev Patel',
    initials: 'DP',
    role: 'Growth & Marketing Strategist',
    specialization: 'Marketing',
    tools: ['ChatGPT', 'Notion AI'],
    skills: ['Growth Strategy', 'SEO', 'Campaigns'],
    bio: 'I help teams turn audience insights into clear marketing experiments and campaigns.',
    projects: [
      { title: 'Launch Playbook', type: 'Strategy', description: 'A sample launch checklist and channel strategy.' },
      { title: 'Search Growth Plan', type: 'SEO', description: 'A sample content and keyword opportunity plan.' },
    ],
    color: 'blue',
    available: true,
  },
  {
    id: 6,
    name: 'Meera Nair',
    initials: 'MN',
    role: 'Product & UX Designer',
    specialization: 'Design',
    tools: ['Figma', 'ChatGPT'],
    skills: ['Product Design', 'Prototyping', 'Research'],
    bio: 'I design intuitive product experiences by combining research, systems thinking, and craft.',
    projects: [
      { title: 'CareConnect', type: 'Product Design', description: 'A sample patient experience concept focused on clarity and access.' },
      { title: 'Travel Planner', type: 'Prototyping', description: 'A sample trip-planning flow designed around simple decisions.' },
    ],
    color: 'yellow',
    available: false,
  },
]

const specializations = ['All specializations', 'Design', 'Content', 'Video', 'Marketing']
const aiTools = ['All AI tools', 'ChatGPT', 'Midjourney', 'Canva', 'Figma', 'Runway', 'Adobe Firefly', 'Notion AI', 'Adobe Premiere']

function CreatorCard({ creator, onOpen }) {
  return (
    <article className="creator-card">
      <div className={`creator-art ${creator.color}`}>
        <span className="art-orbit orbit-one" />
        <span className="art-orbit orbit-two" />
        <div className="creator-avatar">{creator.initials}</div>
        <span className={`availability ${creator.available ? 'is-available' : ''}`}>
          {creator.available ? 'Available' : 'Busy'}
        </span>
      </div>

      <div className="creator-card-body">
        <div className="creator-title-row">
          <div>
            <h3>{creator.name}</h3>
            <p className="creator-role">{creator.role}</p>
          </div>
          <span className="specialty-dot" title={creator.specialization}>✳</span>
        </div>

        <p className="creator-bio">{creator.bio}</p>

        <div className="tag-list">
          {creator.skills.slice(0, 3).map((skill) => (
            <span className="skill-tag" key={skill}>{skill}</span>
          ))}
        </div>

        <div className="tool-line">
          <span className="tool-label">AI toolkit</span>
          <span>{creator.tools.join(' · ')}</span>
        </div>

        <button className="outline-button card-action" onClick={() => onOpen(creator)}>
          View portfolio <span aria-hidden="true">↗</span>
        </button>
      </div>
    </article>
  )
}

function CreatorProfile({ creator, onBack }) {
  return (
    <section className="profile-page">
      <button className="back-button" onClick={onBack}>← Back to creators</button>

      <div className="profile-hero">
        <div className={`profile-avatar creator-art ${creator.color}`}>
          <span className="profile-initials">{creator.initials}</span>
        </div>
        <div className="profile-intro">
          <span className="eyebrow">{creator.specialization} creator</span>
          <h1>{creator.name}</h1>
          <p className="profile-role">{creator.role}</p>
          <p className="profile-bio">{creator.bio}</p>
          <div className="tag-list">
            {creator.skills.map((skill) => <span className="skill-tag" key={skill}>{skill}</span>)}
          </div>
          <p className="profile-availability">
            <span className={`status-dot ${creator.available ? 'active' : ''}`} />
            {creator.available ? 'Available for projects' : 'Currently busy'}
          </p>
        </div>
      </div>

      <div className="profile-section-heading">
        <div>
          <span className="eyebrow">Selected work</span>
          <h2>Portfolio projects</h2>
        </div>
        <span className="project-count">{creator.projects.length} projects</span>
      </div>

      <div className="project-grid">
        {creator.projects.map((project, index) => (
          <article className="project-card" key={project.title}>
            <div className={`project-visual ${creator.color} project-visual-${index + 1}`}>
              <span className="project-number">0{index + 1}</span>
              <span className="project-shape">{index === 0 ? '✳' : '◈'}</span>
              <span className="project-visual-label">{project.type}</span>
            </div>
            <div className="project-copy">
              <span className="eyebrow">{project.type}</span>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
            </div>
          </article>
        ))}
      </div>

      <section className="toolkit-panel">
        <div>
          <span className="eyebrow">Creative workflow</span>
          <h2>Tools in their toolkit</h2>
        </div>
        <div className="tag-list">
          {creator.tools.map((tool) => <span className="tool-pill" key={tool}>{tool}</span>)}
        </div>
      </section>
      <p className="demo-note">Demo portfolio · Example projects and creator profiles are sample content.</p>
    </section>
  )
}

function App() {
  const [search, setSearch] = useState('')
  const [specialization, setSpecialization] = useState('All specializations')
  const [tool, setTool] = useState('All AI tools')
  const [availableOnly, setAvailableOnly] = useState(false)
  const [selectedCreator, setSelectedCreator] = useState(null)

  const filteredCreators = useMemo(() => {
    const query = search.trim().toLowerCase()

    return creators.filter((creator) => {
      const matchesSearch = !query || [
        creator.name,
        creator.role,
        creator.specialization,
        creator.bio,
        ...creator.skills,
        ...creator.tools,
      ].some((value) => value.toLowerCase().includes(query))

      const matchesSpecialization =
        specialization === 'All specializations' || creator.specialization === specialization

      const matchesTool = tool === 'All AI tools' || creator.tools.includes(tool)
      const matchesAvailability = !availableOnly || creator.available

      return matchesSearch && matchesSpecialization && matchesTool && matchesAvailability
    })
  }, [search, specialization, tool, availableOnly])

  function resetFilters() {
    setSearch('')
    setSpecialization('All specializations')
    setTool('All AI tools')
    setAvailableOnly(false)
  }

  return (
    <div className="app-shell">
      <header className="site-header">
        <a className="brand" href="#" onClick={(event) => { event.preventDefault(); setSelectedCreator(null) }}>
          <span className="brand-mark">c<span>.</span></span>
          <span>creatora<span className="brand-ai"> AI</span></span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a className={!selectedCreator ? 'nav-link active' : 'nav-link'} href="#discover" onClick={(event) => { event.preventDefault(); setSelectedCreator(null) }}>Discover</a>
          <a className="nav-link" href="#how-it-works" onClick={(event) => { event.preventDefault(); document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' }) }}>How it works</a>
        </nav>
        <a className="header-cta" href="#discover" onClick={(event) => { event.preventDefault(); setSelectedCreator(null); document.getElementById('creator-search')?.focus() }}>
          Find a creator <span aria-hidden="true">↗</span>
        </a>
      </header>

      {selectedCreator ? (
        <main className="main-content">
          <CreatorProfile creator={selectedCreator} onBack={() => setSelectedCreator(null)} />
        </main>
      ) : (
        <main>
          <section className="hero-section">
            <div className="hero-copy">
              <div className="hero-kicker"><span className="sparkle">✳</span> THE CREATOR MARKETPLACE</div>
              <h1>Great ideas deserve<br /> <span>great creators.</span></h1>
              <p className="hero-description">
                Meet the people turning imagination into impact. Discover creative talent, explore real skills, and find your next collaborator.
              </p>
              <a className="primary-button" href="#discover">Explore creators <span aria-hidden="true">↓</span></a>
              <div className="hero-proof">
                <div className="proof-avatars"><span>AS</span><span>PR</span><span>KM</span></div>
                <p><strong>Made for creative collaboration</strong><br />Find the right skills for your next big idea.</p>
              </div>
            </div>
            <div className="hero-art" aria-label="Abstract creative artwork">
              <div className="hero-art-ring ring-one" />
              <div className="hero-art-ring ring-two" />
              <div className="hero-art-orb orb-purple" />
              <div className="hero-art-orb orb-orange" />
              <div className="hero-art-spark">✳</div>
              <div className="hero-art-caption"><span>CREATIVITY, AMPLIFIED</span><span>01 — 06</span></div>
            </div>
          </section>

          <section className="discovery-section" id="discover">
            <div className="section-heading">
              <div>
                <span className="eyebrow">THE TALENT DIRECTORY</span>
                <h2>Find your creative people<span>.</span></h2>
                <p>Explore independent talent across design, content, video, and more.</p>
              </div>
              <div className="result-count"><strong>{filteredCreators.length.toString().padStart(2, '0')}</strong><span> creators found</span></div>
            </div>

            <div className="filter-panel">
              <label className="search-field" htmlFor="creator-search">
                <span className="search-icon" aria-hidden="true">⌕</span>
                <input
                  id="creator-search"
                  type="search"
                  placeholder="Search names, skills, or AI tools..."
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                />
                <span className="search-shortcut">SEARCH</span>
              </label>

              <div className="filter-row">
                <label className="filter-select">
                  <span>Specialization</span>
                  <select value={specialization} onChange={(event) => setSpecialization(event.target.value)}>
                    {specializations.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label className="filter-select">
                  <span>AI tools</span>
                  <select value={tool} onChange={(event) => setTool(event.target.value)}>
                    {aiTools.map((item) => <option key={item}>{item}</option>)}
                  </select>
                </label>
                <label className="availability-toggle">
                  <input type="checkbox" checked={availableOnly} onChange={(event) => setAvailableOnly(event.target.checked)} />
                  <span className="custom-checkbox" />
                  Available now
                </label>
                <button className="reset-button" onClick={resetFilters}>Reset filters ↺</button>
              </div>
            </div>

            {filteredCreators.length > 0 ? (
              <div className="creator-grid">
                {filteredCreators.map((creator) => (
                  <CreatorCard key={creator.id} creator={creator} onOpen={setSelectedCreator} />
                ))}
              </div>
            ) : (
              <div className="empty-state">
                <span className="empty-icon">⌕</span>
                <h3>No creators found just yet.</h3>
                <p>Try another search or clear a filter to see more creative talent.</p>
                <button className="primary-button" onClick={resetFilters}>Clear all filters ↺</button>
              </div>
            )}
            <p className="demo-note">Showing example creator profiles for the demo. These are not verified marketplace listings.</p>
          </section>

          <section className="how-section" id="how-it-works">
            <div className="how-heading">
              <span className="eyebrow">A BETTER WAY TO COLLABORATE</span>
              <h2>Your next great collaboration<br />starts <span>right here.</span></h2>
            </div>
            <div className="how-steps">
              <article><span className="step-number">01</span><h3>Explore talent</h3><p>Search by skills, creative focus, and the tools people use.</p></article>
              <article><span className="step-number">02</span><h3>See the work</h3><p>Explore creator profiles and example projects in one place.</p></article>
              <article><span className="step-number">03</span><h3>Find your fit</h3><p>Shortlist the people whose strengths match your idea.</p></article>
            </div>
          </section>
        </main>
      )}

      <footer className="site-footer">
        <a className="brand footer-brand" href="#" onClick={(event) => { event.preventDefault(); setSelectedCreator(null) }}>
          <span className="brand-mark">c<span>.</span></span><span>creatora<span className="brand-ai"> AI</span></span>
        </a>
        <p>Ideas are better when we make them together.</p>
        <span className="footer-note">CREATED FOR HACKXLERATE · DEMO BUILD</span>
      </footer>
    </div>
  )
}

export default App