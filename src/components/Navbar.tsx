import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t } = useTranslation();

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
          <NavLink to="/open-space" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.open_space')}</NavLink>
          <NavLink to="/offices" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.private_offices')}</NavLink>
          <NavLink to="/meeting-rooms" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.meeting_rooms')}</NavLink>
          <NavLink to="/location" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.location')}</NavLink>
          <NavLink to="/about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>{t('nav.about_us')}</NavLink>
          


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
            {t('nav.contact_us')}
          </Link>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm desktop-only-btn" style={{ textDecoration: 'none' }}>
            {t('nav.contact_us')}
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
