import { useEffect, useRef, useState } from 'react'
import './App.css'

function App() {
  const observerRef = useRef(null)
  const [pivPhase, setPivPhase] = useState(0) // 0=Plan, 1=Implement, 2=Validate

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )

    document.querySelectorAll('.animate-on-scroll, .stagger-children').forEach((el) => {
      observerRef.current.observe(el)
    })

    return () => observerRef.current?.disconnect()
  }, [])

  // PIV animation cycle
  useEffect(() => {
    const interval = setInterval(() => {
      setPivPhase((prev) => (prev + 1) % 3)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="app">
      {/* Animated Background */}
      <div className="background-effects">
        <div className="aurora" />
        <div className="grid-overlay" />
        <div className="particles">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="particle" />
          ))}
        </div>
      </div>

      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <div className="hero-label">
              <span className="hero-label-dot" />
              A Solo Dev's AI Frontend Journey
            </div>
            <h1>
              I Cured My <span className="highlight">Purple Gradient PTSD</span>
            </h1>
            <p className="hero-subtitle">
              You know that feeling when you ask Claude to "make it pop" and it gives you
              another gradient that looks like every other AI site? Yeah, me too. Here's
              how I broke the cycle.
            </p>

            {/* PIV Loop Diagram */}
            <div className="piv-container">
              <div className="piv-diagram">
                <svg viewBox="0 0 300 300" className="piv-circle">
                  {/* Outer glow ring */}
                  <circle
                    cx="150"
                    cy="150"
                    r="120"
                    className="piv-ring-glow"
                  />
                  {/* Main ring */}
                  <circle
                    cx="150"
                    cy="150"
                    r="120"
                    className="piv-ring"
                  />
                  {/* Animated progress arc */}
                  <circle
                    cx="150"
                    cy="150"
                    r="120"
                    className="piv-progress"
                    style={{
                      strokeDashoffset: 753.98 - (753.98 / 3) * (pivPhase + 1),
                      stroke: pivPhase === 0 ? '#d4a843' : pivPhase === 1 ? '#4285f4' : '#4dd0e1'
                    }}
                  />
                </svg>

                {/* Phase nodes */}
                <div className={`piv-node piv-plan ${pivPhase === 0 ? 'active' : ''}`}>
                  <span className="piv-letter">P</span>
                  <span className="piv-label">Plan</span>
                </div>
                <div className={`piv-node piv-implement ${pivPhase === 1 ? 'active' : ''}`}>
                  <span className="piv-letter">I</span>
                  <span className="piv-label">Implement</span>
                </div>
                <div className={`piv-node piv-validate ${pivPhase === 2 ? 'active' : ''}`}>
                  <span className="piv-letter">V</span>
                  <span className="piv-label">Validate</span>
                </div>

                {/* Center text */}
                <div className="piv-center">
                  <span className="piv-center-text">
                    {pivPhase === 0 && 'Define Intent'}
                    {pivPhase === 1 && 'Generate Code'}
                    {pivPhase === 2 && 'Trust Your Gut'}
                  </span>
                </div>

                {/* Connecting lines */}
                <svg viewBox="0 0 300 300" className="piv-lines">
                  <path d="M 150 30 L 260 195" className="piv-line" />
                  <path d="M 260 195 L 40 195" className="piv-line" />
                  <path d="M 40 195 L 150 30" className="piv-line" />
                </svg>
              </div>
            </div>

            <div className="hero-cta">
              <a href="#process" className="btn btn-primary">
                See How It Works
              </a>
              <a href="#stack" className="btn btn-secondary">
                The Tools I Use
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Before/After Mockup Section */}
      <section className="before-section">
        <div className="container">
          <div className="before-mockup-wrapper animate-on-scroll">
            <div className="before-label">What I was getting...</div>
            <div className="before-mockup">
              <div className="mockup-browser">
                <div className="mockup-dots">
                  <span></span><span></span><span></span>
                </div>
                <div className="mockup-url">generic-ai-output.vercel.app</div>
              </div>
              <div className="mockup-content">
                <div className="mockup-header">
                  <div className="mockup-logo"></div>
                  <div className="mockup-nav">
                    <span></span><span></span><span></span>
                  </div>
                </div>
                <div className="mockup-hero-fake">
                  <div className="mockup-title"></div>
                  <div className="mockup-subtitle"></div>
                  <div className="mockup-btn"></div>
                </div>
                <div className="mockup-cards">
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                  <div className="mockup-card"></div>
                </div>
              </div>
              <div className="mockup-badge">
                <span>Inter font</span>
                <span>Purple gradient</span>
                <span>"AI-Powered"</span>
              </div>
            </div>
            <p className="before-caption">
              Every. Single. Time. The same purple-to-pink gradient. The same "revolutionize your workflow" copy.
              The same cards with rounded corners floating in the void.
            </p>
          </div>
        </div>
      </section>

      {/* Stack Section */}
      <section id="stack" className="stack-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">My Stack</span>
            <h2 className="section-title">The Arsenal That Actually Works</h2>
            <p className="section-subtitle">
              After months of "make it pop" disasters, I assembled these four tools.
              They talk to each other. They get context. They don't give me purple gradients.
            </p>
          </div>

          <div className="stack-grid stagger-children">
            <div className="stack-card">
              <div className="stack-icon">
                {/* Cursor icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4l7.07 17 2.51-7.39L21 11.07 4 4z" />
                  <path d="M13.5 13.5L19 19" />
                </svg>
              </div>
              <h3>Cursor + Claude</h3>
              <p>
                IDE-integrated AI that actually reads my whole codebase. When I say
                "match the style of the hero section," it knows what I mean.
              </p>
            </div>

            <div className="stack-card">
              <div className="stack-icon">
                {/* Terminal icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="M6 9l4 3-4 3" />
                  <path d="M12 17h6" />
                </svg>
              </div>
              <h3>Claude Code CLI</h3>
              <p>
                Terminal-based agent that runs autonomously. I give it a plan,
                go grab coffee, come back to working code. Usually.
              </p>
            </div>

            <div className="stack-card">
              <div className="stack-icon">
                {/* Book/Documentation icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                  <path d="M8 7h8" />
                  <path d="M8 11h6" />
                </svg>
              </div>
              <h3>Context7</h3>
              <p>
                MCP server with fresh docs. No more "as of my knowledge cutoff"
                excuses. It knows the latest APIs. It knows React 19.
              </p>
            </div>

            <div className="stack-card">
              <div className="stack-icon">
                {/* Microphone/Waveform icon */}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="9" y="2" width="6" height="11" rx="3" />
                  <path d="M5 10a7 7 0 0 0 14 0" />
                  <path d="M12 18v4" />
                  <path d="M8 22h8" />
                </svg>
              </div>
              <h3>Wispr Flow</h3>
              <p>
                Voice-to-text on steroids. I ramble about what I want for 30 seconds,
                it transcribes perfectly. More context, less typing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section id="process" className="process-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">The Process</span>
            <h2 className="section-title">Plan, Implement, Validate, Repeat</h2>
            <p className="section-subtitle">
              The secret isn't better prompts. It's a better loop. Three phases,
              infinite iterations, zero purple gradients.
            </p>
          </div>

          <div className="process-container">
            <div className="process-line" />

            <div className="process-step animate-on-scroll">
              <div className="process-number">P</div>
              <div className="process-content">
                <h3>Plan</h3>
                <p>
                  Here's where most people mess up. They jump straight to "build me a landing page."
                  No. Stop. First, I find 5 screenshots of sites I actually like. Real sites, not
                  AI-generated templates. I describe the vibe in detail. "Glassmorphism, but make it
                  warm. Golden glows, not neon. Editorial, not SaaS." The AI can't read my mind,
                  so I have to paint the picture.
                </p>
                <div className="process-tags">
                  <span className="tag">reference images</span>
                  <span className="tag">color extraction</span>
                  <span className="tag">vibe description</span>
                </div>
              </div>
            </div>

            <div className="process-step animate-on-scroll">
              <div className="process-number">I</div>
              <div className="process-content">
                <h3>Implement</h3>
                <p>
                  Now I let Claude cook. But I'm specific. Not "add animations" but "add a
                  cubic-bezier(0.4, 0, 0.2, 1) ease on hover with a 4px lift and golden shadow."
                  I describe feelings, not features. "Make the cards feel like they're floating
                  on glass" gets better results than "add hover effects." Trust the agent to
                  handle the boilerplate while you steer the creative.
                </p>
                <div className="process-tags">
                  <span className="tag">specific prompts</span>
                  <span className="tag">feeling over function</span>
                  <span className="tag">guided iteration</span>
                </div>
              </div>
            </div>

            <div className="process-step animate-on-scroll">
              <div className="process-number">V</div>
              <div className="process-content">
                <h3>Validate</h3>
                <p>
                  Refresh. Squint at the screen. Does it make me feel something? If something's
                  off by 4 pixels, I fix it myself instead of writing a 200-word prompt. The key
                  is knowing when to iterate with AI and when to just tweak the CSS by hand.
                  Rapid feedback loops beat perfect prompts every time.
                </p>
                <div className="process-tags">
                  <span className="tag">browser preview</span>
                  <span className="tag">gut check</span>
                  <span className="tag">manual tweaks</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secrets Section */}
      <section id="secrets" className="secrets-section">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <span className="section-label">The Real Talk</span>
            <h2 className="section-title">What I Wish Someone Told Me</h2>
            <p className="section-subtitle">
              Three months of trial, error, and way too many purple gradients later
            </p>
          </div>

          <div className="secrets-grid stagger-children">
            <div className="secret-card quote-card">
              <div className="quote-mark">"</div>
              <h3>Vague Gets You Generic</h3>
              <p>
                "Make it look professional" is how you get templates. "Dark glassmorphism
                with warm golden accents and subtle backdrop blur on cards" is how you
                get this page.
              </p>
              <div className="quote-example">
                <span className="quote-label">Instead of</span>
                "Add some nice hover effects"
                <span className="quote-label">Try</span>
                "Add a radial gradient glow behind the button that intensifies on
                hover, transitioning from amber to transparent over 0.3s"
              </div>
            </div>

            <div className="secret-card quote-card">
              <div className="quote-mark">"</div>
              <h3>Screenshots Beat Descriptions</h3>
              <p>
                One screenshot communicates more than a thousand words of prompting.
                I keep a folder of designs I love. When starting a project, I share
                5 of them and say "extract the design system."
              </p>
              <div className="quote-example">
                <span className="quote-label">For this page</span>
                I shared 5 screenshots from Google's Language Explorer, had Claude
                extract colors, typography, and spacing into a design system markdown
                file. Then I referenced that file for everything.
              </div>
            </div>

            <div className="secret-card quote-card">
              <div className="quote-mark">"</div>
              <h3>Sometimes, Just Fix It Yourself</h3>
              <p>
                AI is great at generating code. It's not always great at understanding
                "the shadow is a tiny bit too strong." Learn to recognize when a
                2-second CSS tweak beats a 30-second prompt explanation.
              </p>
              <div className="quote-example">
                <span className="quote-label">The rule</span>
                If I can describe the fix in under 5 words ("opacity 0.3 to 0.4"),
                I just do it myself. If it needs context ("refactor this component
                to match the card pattern"), I prompt it.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-avatar">
              <div className="avatar-circle">
                <span>A</span>
              </div>
            </div>
            <div className="footer-meta animate-on-scroll">
              <p className="footer-story">
                <strong>Plot twist:</strong> You're looking at the proof. This entire page
                was built using exactly what I just described. Started with screenshots,
                extracted a design system, ran through maybe 15 PIV loops, and here we are.
                No purple gradients. No "revolutionize your workflow." Just a curious dev
                who got tired of AI slop and decided to fix it.
              </p>
              <p className="footer-signature">
                - Ans
              </p>
            </div>
            <div className="footer-links">
              <span className="footer-tools">
                Built with Claude Code + Cursor + Context7 + Wispr Flow
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
