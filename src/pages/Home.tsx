import { useEffect, useState } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [
    '/assets/heroimage.webp',
    '/assets/heroimage2.jpg',
    '/assets/heroimage3.jpg'
  ];

  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 200]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  return (
    <main>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            The Leading Boutique Coworking Space in Zurich.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            3,000m² area, 250 workstations, 10 meeting rooms, and 3 event spaces for up to 250 guests. Isn't that much too big for a personal, individual boutique concept? Welcome to Resilient Coworking.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem', justifyContent: 'center' }}
          >
            <button 
              onClick={() => {
                document.getElementById('memberships')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="btn btn-primary" 
              style={{ 
                backgroundColor: 'var(--color-bg-beige)', 
                color: 'var(--color-bg-sage)', 
                textDecoration: 'none', 
                display: 'inline-flex', 
                alignItems: 'center',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Explore Spaces
            </button>
          </motion.div>
        </div>
        <div className="hero-image-wrapper">
          <AnimatePresence>
            <motion.img 
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              style={{ y: heroImageY }}
              src={heroImages[currentImageIndex]} 
              alt="Premium Coworking Space" 
              className="hero-image"
            />
          </AnimatePresence>
        </div>
      </section>

      {/* Office Types Preview Section */}
      <section id="memberships" className="offices-preview" style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--color-text-dark)' }}>Our Memberships & Workspaces.</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>Flexible options designed for individuals and teams.</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <Link to="/open-space" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'rgba(241, 236, 225, 0.5)', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontFamily: 'var(--font-serif)' }}>Open Space</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  Perfect for creative professionals. Choose from Daypasses, flexible hot desks, or your own dedicated permanent desk.
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent-terra)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  Explore Open Space <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>

            <Link to="/offices" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'var(--color-bg-sage)', padding: '4rem 3rem', borderRadius: '24px', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-bg-white)', fontFamily: 'var(--font-serif)' }}>Private Offices</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  Your own private sanctuary in the heart of Zurich. Fully furnished spaces for teams with access to all community perks.
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-bg-white)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  Explore Private Offices <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>

            <Link to="/meeting-rooms" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'var(--color-bg-white)', padding: '4rem 3rem', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontFamily: 'var(--font-serif)' }}>Meeting Rooms</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  From intimate boardrooms to grand event spaces. Professional stages for your success, fully equipped and serviced.
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent-terra)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  Explore Meeting Rooms <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Community Story Section */}
      <section style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-sage)', color: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--color-bg-white)' }}>
                A workspace where everyone knows your name.
              </h2>
              
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                In our true boutique environment, you aren't an anonymous face. Despite flexible short-term options, the vast majority of our members stay mid- to long-term—a true testament to the loyal community we've built.
              </p>

              <blockquote style={{ 
                borderLeft: '4px solid var(--color-accent-terra)', 
                paddingLeft: '1.5rem', 
                margin: '1.5rem 0',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--color-bg-white)'
              }}>
                "When highly qualified experts are looking for a job, they choose my company because of this very culture."
              </blockquote>

              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                We provide the foundation—the prime location, beautiful design, and flawless services—so you can offer a highly attractive workplace that draws and retains top talent.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)' }}>
                <img src="/assets/meeting.png" alt="Community Working" style={{ width: '100%', height: '500px', objectFit: 'cover' }} />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* Event Location Section - Portal Banner */}
      <section style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-beige)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{ 
              position: 'relative', 
              borderRadius: '24px', 
              overflow: 'hidden', 
              minHeight: '500px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}
          >
            {/* Background Image with Dark Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <img src="/assets/event.png" alt="Event Space in Zurich" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(43, 41, 42, 0.65)' }} />
            </div>

            {/* Content Container */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'var(--color-bg-white)', padding: 'clamp(2rem, 5vw, 4rem)', maxWidth: '800px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-bg-white)', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                Boutique Event Spaces.
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)' }}>
                Host up to 250 guests in our 3 versatile event rooms. Discover a sophisticated backdrop for your conferences, creative workshops, or private celebrations on our dedicated events platform.
              </p>
              <a 
                href="https://resilient-studios.com/resilient-coworking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary" 
                style={{ 
                  backgroundColor: 'var(--color-bg-white)', 
                  color: 'var(--color-text-dark)', 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  padding: '1.2rem 3rem',
                  fontSize: '1.1rem',
                  border: 'none'
                }}
              >
                Explore Event Website <ArrowRight size={20} style={{ marginLeft: '12px' }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section style={{ backgroundColor: 'var(--color-bg-beige)', padding: 'var(--space-xl) 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="responsive-grid-2"
            style={{ 
              backgroundColor: 'var(--color-bg-sage)', 
              borderRadius: '24px', 
              overflow: 'hidden',
              boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
              display: 'grid',
              gridTemplateColumns: '1fr 1.5fr'
            }}
          >
            <div style={{ padding: 'clamp(3rem, 5vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--color-bg-white)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(2rem, 3vw, 2.5rem)', color: 'var(--color-bg-white)', marginBottom: '1.5rem' }}>Our Location.</h2>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Resilient Coworking</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                  Kreuzstrasse 24<br/>8008 Zurich<br/>Switzerland
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', marginBottom: '3rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  Perfectly situated: Just a 2-minute walk from the Lake Zurich promenade and 5 minutes from Stadelhofen station.
                </p>
              </div>

              <a 
                href="https://maps.app.goo.gl/2viZtDcEoacJwebc9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', backgroundColor: 'var(--color-bg-white)', color: 'var(--color-text-dark)', border: 'none' }}
              >
                Open in Google Maps
              </a>
            </div>
            
            <div style={{ width: '100%', height: '100%', minHeight: '400px', backgroundColor: '#e5e3df', position: 'relative' }}>
              <iframe 
                src="https://www.google.com/maps?q=Kreuzstrasse+24,+8008+Zurich,+Switzerland&output=embed" 
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', filter: 'grayscale(0.3) contrast(1.05)' }} 
                allowFullScreen={false} 
                loading="eager" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Resilient Coworking Location"
              ></iframe>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
