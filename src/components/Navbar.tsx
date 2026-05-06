import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
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
    <header className={`header ${scrolled || !isHomePage || mobileMenuOpen ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img src="/resilientlogo.png" alt="Resilient Studios" className="logo-img" />
        </Link>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
          <NavLink to="/open-space" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Open Space</NavLink>
          <NavLink to="/offices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Private Offices</NavLink>
          <NavLink to="/meeting-rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Meeting Rooms</NavLink>
          <NavLink to="/location" className="nav-link" onClick={() => setMobileMenuOpen(false)}>Location</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>About Us</NavLink>
          {/* Classy Mobile Book Tour Link - Only visible in mobile menu */}
          <Link 
            to="/contact" 
            className="nav-link mobile-only-link"
            style={{ 
              color: 'var(--color-accent-terra)',
              marginTop: '1rem',
              fontSize: '1.5rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.1em'
            }} 
            onClick={() => setMobileMenuOpen(false)}
          >
            Book a Tour
          </Link>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm desktop-only-btn" style={{ textDecoration: 'none' }}>
            Book a Tour
          </Link>
          <button 
            className="mobile-menu-btn" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{ position: 'relative', zIndex: 100 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
