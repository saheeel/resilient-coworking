import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  return (
    <header className={`header ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img src="/resilientlogo.png" alt="Resilient Studios" className="logo-img" />
        </Link>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <Link to="/offices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Private Offices</Link>
          <Link to="/services" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/location" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Location</Link>
          {/* Mobile only Book Tour link */}
          <Link to="/contact" className="nav-link" style={{ display: mobileMenuOpen ? 'block' : 'none', color: 'var(--color-accent-terra)' }} onClick={() => setMobileMenuOpen(false)}>Book a Tour</Link>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm" style={{ textDecoration: 'none' }}>
            Book a Tour
          </Link>
          <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
