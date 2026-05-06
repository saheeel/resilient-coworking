import { MapPin, Mail, Phone } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer id="contact" className="footer" style={{ backgroundColor: '#1a1a1a', color: 'white', padding: '6rem 0 3rem' }}>
      <div className="container">
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '4rem', marginBottom: '4rem' }}>
          
          <div className="footer-brand">
            <img 
              src="/resilientlogo.png" 
              alt="Resilient Studios" 
              style={{ height: '50px', width: 'auto', marginBottom: '1.5rem', filter: 'brightness(0) invert(1)' }} 
            />
            <p style={{ color: 'rgba(255,255,255,0.6)', lineHeight: 1.6, maxWidth: '300px' }}>
              A boutique coworking destination in the heart of Zurich, where heritage meets modern business elegance.
            </p>
            <div style={{ display: 'flex', gap: '1.25rem', marginTop: '2rem' }}>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" style={{ color: 'white', opacity: 0.6, textDecoration: 'none', fontSize: '0.85rem', fontWeight: 600, letterSpacing: '0.05em' }} className="hover-opacity-1">
                LINKEDIN
              </a>
            </div>
          </div>
          
          <div className="footer-links">
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', color: 'var(--color-accent-terra)' }}>Quick Navigation</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <li><Link to="/open-space" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Open Space</Link></li>
              <li><Link to="/offices" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Private Offices</Link></li>
              <li><Link to="/meeting-rooms" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Meeting Rooms</Link></li>
              <li><Link to="/about" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Our Story</Link></li>
              <li><Link to="/contact" style={{ color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>Book a Tour</Link></li>
            </ul>
          </div>

          <div className="footer-links">
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', color: 'var(--color-accent-terra)' }}>Opening Hours</h4>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
              <li><span style={{ fontWeight: 600, color: 'white' }}>Members:</span> 24/7 Access</li>
              <li><span style={{ fontWeight: 600, color: 'white' }}>Reception:</span> Mon—Fri, 9am—5pm</li>
              <li><span style={{ fontWeight: 600, color: 'white' }}>Events:</span> By arrangement</li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h4 style={{ fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: '2rem', color: 'var(--color-accent-terra)' }}>Connect</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', color: 'rgba(255,255,255,0.7)' }}>
                <MapPin size={20} style={{ marginTop: '3px', color: 'var(--color-accent-terra)' }} />
                <span>Kreuzstrasse 24<br />8008 Zurich, Switzerland</span>
              </div>
              <a href="mailto:info@resilient-studios.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                <Mail size={20} style={{ color: 'var(--color-accent-terra)' }} />
                <span>info@resilient-studios.com</span>
              </a>
              <a href="tel:+41445452233" style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'rgba(255,255,255,0.7)', textDecoration: 'none' }}>
                <Phone size={20} style={{ color: 'var(--color-accent-terra)' }} />
                <span>+41 44 545 22 33</span>
              </a>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2.5rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.4)' }}>
          <div>&copy; {new Date().getFullYear()} Resilient Studios. All Rights Reserved.</div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            <Link to="/impressum" style={{ color: 'inherit', textDecoration: 'none' }}>Impressum</Link>
            <Link to="/privacy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

