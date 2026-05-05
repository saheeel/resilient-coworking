import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, MapPin, Mail, Phone } from 'lucide-react';
import './App.css';

function App() {
  const [scrolled, setScrolled] = useState(false);
  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="app-container">
      {/* Navigation */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="header-inner">
          <a href="#" className="logo-link">
            <img src="/resilientlogo.png" alt="Resilient Studios" className="logo-img" />
          </a>
          <nav className="nav-links">
            <a href="#coworking" className="nav-link">Coworking</a>
            <a href="#meeting" className="nav-link">Meeting Rooms</a>
            <a href="#event" className="nav-link">Event Location</a>
            <a href="#contact" className="nav-link">Contact</a>
          </nav>
          <button className="btn btn-primary btn-sm">
            Book a Tour
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            Work where culture thrives.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            Resilient Studios offers premium coworking workspaces, private offices, and vibrant community in the heart of Zurich. Perfect for startups, SMEs, and investors.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
          >
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-bg-beige)', color: 'var(--color-bg-sage)' }}>Explore Spaces</button>
            <button className="btn btn-outline" style={{ borderColor: 'var(--color-bg-beige)', color: 'var(--color-bg-beige)' }}>Join Community</button>
          </motion.div>
        </div>
        <div className="hero-image-wrapper">
          <motion.img 
            style={{ y: heroImageY, scale: 1.1 }}
            src="/assets/hero.png" 
            alt="Premium Coworking Space" 
            className="hero-image"
          />
        </div>
      </section>

      {/* Spaces Section */}
      <section id="coworking" className="spaces-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Spaces designed for focus.</h2>
              <p>With 225 workstations spread across five floors, we provide an ideal environment for your best work.</p>
            </div>
          </div>

          <div className="spaces-grid">
            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/hero.png" alt="Open Space" className="space-card-image" />
              <div className="space-card-content">
                <h3>Open Space</h3>
                <p>Dynamic desks for freelancers and creatives.</p>
              </div>
            </motion.div>

            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src="/assets/meeting.png" alt="Meeting Rooms" className="space-card-image" />
              <div className="space-card-content">
                <h3>Meeting Rooms</h3>
                <p>Fully equipped rooms for your team collaborations.</p>
              </div>
            </motion.div>

            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/assets/hero.png" alt="Private Offices" className="space-card-image" style={{ objectPosition: 'left' }} />
              <div className="space-card-content">
                <h3>Private Offices</h3>
                <p>Enclosed suites for teams of 2 to 10 people.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Event Location Section */}
      <section id="event" className="event-teaser">
        <div className="container event-teaser-inner">
          <motion.div 
            className="event-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Resident Eventlocation</h2>
            <p style={{ marginBottom: '2rem', marginTop: '1rem' }}>
              Beyond coworking, our stylish Resident Eventlocation situated centrally in Zurich Seefeld adapts effortlessly to any requirement. Whether you are hosting corporate conferences, creative workshops, or private evening events, our space provides the ultimate sophisticated backdrop.
            </p>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-terra)' }}>
              Discover Events <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </motion.div>
          <motion.div 
            className="event-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/event.png" alt="Event Space in Zurich" className="event-image" />
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img src="/reslinent.svg" alt="Resilient Mark" className="footer-mark" />
              <h3 style={{ marginTop: '1rem' }}>Resilient Studios</h3>
              <p>Uniting business and culture in Zurich.</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginTop: '2rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                  <MapPin size={18} /> Kreuzstrasse 24, 8008 Zurich
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                  <Mail size={18} /> info@resilient-studios.com
                </span>
                <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'rgba(255,255,255,0.7)' }}>
                  <Phone size={18} /> 044 545 22 33
                </span>
              </div>
            </div>
            
            <div className="footer-links">
              <h4>Spaces</h4>
              <ul>
                <li><a href="#">Coworking</a></li>
                <li><a href="#">Meeting Rooms</a></li>
                <li><a href="#">Seminar Center</a></li>
              </ul>
            </div>
            
            <div className="footer-links">
              <h4>Company</h4>
              <ul>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Resident Events</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
          </div>
          
          <div className="footer-bottom">
            <div>&copy; {new Date().getFullYear()} Resilient Studios. All Rights Reserved.</div>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <a href="#">Impressum</a>
              <a href="#">Privacy Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
