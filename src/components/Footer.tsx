import { MapPin, Mail, Phone } from 'lucide-react';

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <img src="/reslinent.svg" alt="Resilient Mark" className="footer-mark" />
            <h3 style={{ marginTop: '1rem' }}>Resilient Studios</h3>
            <p>Just 2 minutes from the Lake Zurich promenade and 5 minutes from Stadelhofen station.</p>
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
  );
}
