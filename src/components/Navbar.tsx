import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`header ${scrolled || !isHomePage ? 'scrolled' : ''}`}>
      <div className="header-inner">
        <Link to="/" className="logo-link">
          <img src="/resilientlogo.png" alt="Resilient Studios" className="logo-img" />
        </Link>
        <nav className="nav-links">
          <Link to="/#coworking" className="nav-link">Coworking</Link>
          <Link to="/offices" className="nav-link">Private Offices</Link>
          <Link to="/#event" className="nav-link">Event Location</Link>
          <Link to="/#contact" className="nav-link">Contact</Link>
        </nav>
        <button className="btn btn-primary btn-sm">
          Book a Tour
        </button>
      </div>
    </header>
  );
}
