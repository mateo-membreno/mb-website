import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-container">
          <div className="nav-logo">
            <div className="logo-placeholder">
              <img src="/mb-logo.png" alt="Michigan Blockchain logo" />
            </div>
            <span>Michigan Blockchain</span>
          </div>
          <div className="nav-links">
            <a href="#about">About</a>
            <a href="#education">Education</a>
            <a href="#consulting">Consulting</a>
            <a href="#governance">Governance</a>
            <a href="#investment">Investment</a>
            <a href="#leadership">Leadership</a>
            <a href="#alumni">Alumni</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logo">
            <div className="logo-placeholder-large">
              <img src="/mb-logo.png" alt="Michigan Blockchain logo" />
            </div>
          </div>
          <h1>Building the Future of Blockchain</h1>
          <p>Michigan Blockchain is the premier student organization advancing blockchain technology, DeFi innovation, and digital asset education at the University of Michigan. We're shaping the next generation of leaders in crypto.</p>
          <button className="cta-button">Join Us!</button>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* About Section */}
      <section id="about" className="section">
        <div className="container">
          <h2>About Us</h2>
          <div className="about-content">
            <div className="about-text">
              <p>Our mission is to prepare students to excel in the Blockchain space by providing professional development opportunities alongside industry partners, building educational resources with multidisciplinary facets, and aiding students in meaningful research and project development.</p>
              <p>We focus on helping students through four main avenues: Education, Consulting, Governance, and Investments. By providing opportunities for hands-on projects we're creating the next generation of blockchain professionals who will transform how the world thinks about money, value, and trust.</p>
            </div>
            <div className="about-stats">
              <div className="stat">
                <h3>50+</h3>
                <p>Active Members</p>
              </div>
              <div className="stat">
                <h3>6+</h3>
                <p>Years Since Inception</p>
              </div>
              <div className="stat">
                <h3>20+</h3>
                <p>Industry Partners</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="section">
        <div className="container">
          <h2>Master the Future of Finance</h2>
          <div className="education-content">
            <div className="education-text">
              <p>As a part of a massive community of learners, we recognize that blockchain technology takes not only coders, but entrepreneurs, economists, lawyers, and anyone else with a passion for emerging tech.</p>
              
              <p>Our curriculum is years in the making, and has been optimized to bring maximum value.</p>
              
              <p>New members are required to go through a weekly education cohort in order to prepare them to take advantage of future opportunities in Web3.</p>
              
              <p>Our education cohort not only learns valuable developer skills, but also the necessary business context to understand where to apply blockchain solutions.</p>
              
              <p>The education cohort culminates in a final project showcase that all cohort members participate in to graduate from the cohort and be eligible for consulting and governance opportunities.</p>
            </div>
            
            <div className="education-highlight">
              <h3>Focus on Fundamentals</h3>
              <p>We emphasize understanding what blockchain truly is at its core, enabling you to identify and seize the opportunities we offer in consulting, governance, and beyond.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Consulting Section */}
      <section id="consulting" className="section">
        <div className="container">
          <h2>Enterprise Blockchain Solutions</h2>
          <div className="consulting-content">
            <div className="consulting-text">
              <p>We partner with forward-thinking organizations to implement blockchain solutions that drive innovation, bring customers, and create new business models.</p>
            </div>
            <div className="consulting-services">
              <div className="service-item">
                <img src="/PayPal.png" alt="Company 1" />
              </div>
              <div className="service-item">
                <img src="/Microsoft.png" alt="Company 2" />
              </div>
              <div className="service-item">
                <img src="/Immutable.jpg" alt="Company 3" />
              </div>
              <div className="service-item">
                <img src="/Solana.jpg" alt="Company 4" />
              </div>
              <div className="service-item">
                <img src="/Arbitrum.png" alt="Company 5" />
              </div>
              <div className="service-item">
                <img src="/Avalanche.svg" alt="Company 6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Governance Section */}
      <section id="governance" className="section">
        <div className="container">
          <h2> Governance </h2>
          <div className="governance-content">
            <div className="governance-text">
              <p>Michigan Blockchain is a delegate for Uniswap, Arbtirum, Compound, and Origin Protocol. We are actively involved in protocol governance via proposal voting, creation, and decision making–all with the purpose of making the blockchain ecosystem cohesive and effective.</p>
            </div>
            <div className="governance-areas">
              <div className="governance-area">
                <img src="/Uniswap.png" alt="Protocol 1" />
              </div>
              <div className="governance-area">
                <img src="/ArbitrumIcon.png" alt="Protocol 2" />
              </div>
              <div className="governance-area">
                <img src="/CompoundIcon.png" alt="Protocol 3" />
              </div>
              <div className="governance-area">
                <img src="/OriginProtocol.png" alt="Protocol 4" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Section */}
      <section id="investment" className="section">
        <div className="container">
          <h2>Strategic Investment Research</h2>
          <div className="investment-content">
            <div className="investment-text">
              <p>Our investment research team analyzes emerging trends in the blockchain ecosystem, providing insights on DeFi protocols, NFT markets, and Web3 infrastructure opportunities.</p>
            </div>
            <div className="investment-focus">
              <div className="focus-item">
                <h4>DeFi Protocols</h4>
                <p>Comprehensive analysis of decentralized finance protocols and yield optimization strategies</p>
              </div>
              <div className="focus-item">
                <h4>NFT Markets</h4>
                <p>Research on digital art, collectibles, and the evolving landscape of non-fungible tokens</p>
              </div>
              <div className="focus-item">
                <h4>Layer 2 Solutions</h4>
                <p>Evaluation of scaling solutions and infrastructure investments in the blockchain ecosystem</p>
              </div>
              <div className="focus-item">
                <h4>Web3 Startups</h4>
                <p>Due diligence and analysis of early-stage blockchain companies and investment opportunities</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team Section */}
      <section id="leadership" className="section">
        <div className="container">
          <h2>Meet Our Leadership</h2>
          <div className="leadership-grid">
            <div className="leader-card">
              <div className="leader-avatar">👨‍💼</div>
              <h3>Lucas Hodgson</h3>
              <p>President</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💻</div>
              <h3>Niket Kamat</h3>
              <p></p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">
                <img src="/mateo-membreno.jpeg" alt="Mateo Membreno" />
              </div>
              <h3>Mateo Membreno</h3>
              <p>Governance Lead</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💼</div>
              <h3>Brian Marsan</h3>
              <p>Investments Lead</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👨‍💼</div>
              <h3>Jason Arendt</h3>
              <p>Consulting Lead</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💻</div>
              <h3>Ryan Kaelle</h3>
              <p>izational excellence</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💻</div>
              <h3>Simon </h3>
              <p>Education Lead</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💻</div>
              <h3>Kelsie Backus</h3>
              <p>Marketing Co-Lead</p>
            </div>
            <div className="leader-card">
              <div className="leader-avatar">👩‍💻</div>
              <h3>Payton Maloney </h3>
              <p>Marketing Co-Lead</p>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Section */}
      <section id="alumni" className="section">
        <div className="container">
          <h2>Where Our Alumni Are Building the Future</h2>
          <div className="alumni-content">
            <p>Our graduates are now working at the world's most innovative companies at the intersection of finance and technology.</p>
            <div className="company-grid">
              <div className="company-logo">
                <img src="/Coinbase.png" alt="Coinbase" />
              </div>
              <div className="company-logo">
                <img src="/Galaxy.png" alt="Galaxy" />
              </div>
              <div className="company-logo">
                <img src="/Gemini.svg" alt="Gemini" />
              </div>
              <div className="company-logo">
                <img src="/EigenLayer.png" alt="EigenLayer" />
              </div>
              <div className="company-logo">
                <img src="/GoldmanSachs.png" alt="Goldman Sachs" />
              </div>
              <div className="company-logo">
                <img src="/Palantir.png" alt="Palantir" />
              </div>
              <div className="company-logo">
                <img src="/Parcl.png" alt="Parcl" />
              </div>
              <div className="company-logo">
                <img src="/PortalVentures.png" alt="Portal Ventures" />
              </div>
              <div className="company-logo">
                <img src="/Bain.png" alt="Bain" />
              </div>
              <div className="company-logo">
                <img src="/ChainwayLabs.png" alt="Chainway Labs" />
              </div>
              <div className="company-logo">
                <img src="/AranaDigital.png" alt="Arana Digital" />
              </div>
              <div className="company-logo">
                <img src="/MorganStanley.png" alt="Morgan Stanley" />
              </div>
              <div className="company-logo">
                <img src="/1RoundTablePartners.png" alt="1RoundTable Partners" />
              </div>
              <div className="company-logo">
                <img src="/Amazon.png" alt="Amazon" />
              </div>
              <div className="company-logo">
                <img src="/Deloitte.png" alt="Deloitte" />
              </div>
              <div className="company-logo">
                <img src="/CharlesSchwab.png" alt="Charles Schwab" />
              </div>
              <div className="company-logo">
                <img src="/Guggenheim.png" alt="Guggenheim" />
              </div>
              <div className="company-logo">
                <img src="/EY.png" alt="EY" />
              </div>
              <div className="company-logo">
                <img src="/LinkedIn.png" alt="LinkedIn" />
              </div>
              <div className="company-logo">
                <img src="/Meta.png" alt="Meta" />
              </div>
              <div className="company-logo">
                <img src="/CapitalOne.png" alt="Capital One" />
              </div>
              <div className="company-logo">
                <img src="/Stripe.png" alt="Stripe" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>Michigan Blockchain</h3>
              <p>Advancing blockchain technology through education, innovation, and collaboration. Building the future of finance, one block at a time.</p>
            </div>
            <div className="footer-section">
              <h4>Get in Touch</h4>
              <p>Email: michiganblockchain@umich.edu</p>
              <p>Location: University of Michigan, Ann Arbor</p>
              <p>Join our community of blockchain innovators</p>
            </div>
            <div className="footer-section">
              <h4>Connect With Us</h4>
              <div className="social-links">
                <a href="#" className="social-link">LinkedIn</a>
                <a href="#" className="social-link">Twitter</a>
                <a href="#" className="social-link">Discord</a>
                <a href="#" className="social-link">GitHub</a>
              </div>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 Michigan Blockchain. All rights reserved. | Building the future of decentralized finance.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
