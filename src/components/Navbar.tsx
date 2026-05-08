import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import FloatingLanguageToggle from './FloatingLanguageToggle';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    if (!mobileMenuOpen) return;
    setIsClosing(true);
    setTimeout(() => {
      setMobileMenuOpen(false);
      setIsClosing(false);
    }, 400);
  };

  // Close menu gracefully on route change
  useEffect(() => {
    if (mobileMenuOpen && !isClosing) {
      closeMenu();
    }
  }, [location]);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={`header ${scrolled || !isHomePage || mobileMenuOpen ? 'scrolled' : ''}`}>
      <div className={`header-inner ${mobileMenuOpen ? 'menu-active' : ''}`}>
        <Link to="/" className="logo-link">
          <img src="/resilientlogo.png" alt="Resilient Studios" className="logo-img" />
        </Link>
        <nav className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''} ${isClosing ? 'mobile-closing' : ''}`}>
          <NavLink to="/open-space" className="nav-link" onClick={closeMenu}>{t('nav.open_space')}</NavLink>
          <NavLink to="/offices" className="nav-link" onClick={closeMenu}>{t('nav.private_offices')}</NavLink>
          <NavLink to="/meeting-rooms" className="nav-link" onClick={closeMenu}>{t('nav.meeting_rooms')}</NavLink>
          <NavLink to="/location" className="nav-link" onClick={closeMenu}>{t('nav.location')}</NavLink>
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>{t('nav.about_us')}</NavLink>
          

          {/* Mobile Language Toggle */}
          <button 
            onClick={() => i18n.changeLanguage(i18n.language === 'en' ? 'de' : 'en')}
            className="mobile-flex-link"
            style={{ 
              alignItems: 'center', 
              justifyContent: 'center',
              background: 'none', 
              border: 'none',
              cursor: 'pointer',
              marginTop: '1rem',
              padding: '0.5rem'
            }}
          >
            {i18n.language === 'en' ? (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="32">
                <rect width="5" height="3" y="0" fill="#000"/>
                <rect width="5" height="2" y="1" fill="#D00"/>
                <rect width="5" height="1" y="2" fill="#FFCE00"/>
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="32">
                <clipPath id="s-mobile">
                  <path d="M0,0 v30 h60 v-30 z"/>
                </clipPath>
                <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
                <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s-mobile)"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
                <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
              </svg>
            )}
          </button>

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
            onClick={closeMenu}
          >
            {t('nav.contact_us')}
          </Link>
        </nav>
        
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          <Link to="/contact" className="btn btn-primary btn-sm desktop-only-btn" style={{ textDecoration: 'none' }}>
            {t('nav.contact_us')}
          </Link>
          <div className="desktop-only-toggle">
            <FloatingLanguageToggle />
          </div>
          <button 
            className="mobile-menu-btn" 
            onClick={() => mobileMenuOpen ? closeMenu() : setMobileMenuOpen(true)}
            style={{ position: 'relative', zIndex: 100 }}
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>
    </header>
  );
}
