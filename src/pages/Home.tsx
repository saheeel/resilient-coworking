import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence, useSpring, useInView } from 'framer-motion';
import { Users, Monitor, Coffee, Car, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import BoutiqueMap from '../components/BoutiqueMap';

function Counter({ value, suffix = "" }: { value: number; suffix?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const springValue = useSpring(0, {
    stiffness: 120, // Increased stiffness for a faster start
    damping: 40,    // Balanced damping to stop quickly without a long crawl
    restDelta: 0.001
  });

  useEffect(() => {
    if (isInView) {
      springValue.set(value);
    }
  }, [isInView, value, springValue]);

  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      setDisplayValue(Math.floor(latest));
    });
  }, [springValue]);

  return (
    <span ref={ref}>
      {displayValue.toLocaleString()}{suffix}
    </span>
  );
}

function CommunityCarousel() {
  const images = [
    '/private-office/IMG_1831-HDR.jpg',
    '/private-office/IMG_3948-HDR.jpg',
    '/openspace/openspace1.jpg',
    '/openspace/openspace2.jpg'
  ];
  const [index, setIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const next = () => setIndex((prev) => (prev + 1) % images.length);
  const prev = () => setIndex((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{ position: 'relative', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.2)', height: '500px', backgroundColor: '#1a1a1a' }}
    >
      <AnimatePresence mode="wait">
        <motion.img
          key={index}
          src={images[index]}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute' }}
        />
      </AnimatePresence>

      <AnimatePresence>
        {isHovered && (
          <>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -10 }}
              onClick={(e) => { e.preventDefault(); prev(); }}
              style={{ position: 'absolute', left: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#1a1a1a' }}
            >
              <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
            </motion.button>
            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 10 }}
              onClick={(e) => { e.preventDefault(); next(); }}
              style={{ position: 'absolute', right: '20px', top: '50%', transform: 'translateY(-50%)', zIndex: 10, background: 'rgba(255,255,255,0.9)', border: 'none', width: '40px', height: '40px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: '#1a1a1a' }}
            >
              <ArrowRight size={20} />
            </motion.button>
          </>
        )}
      </AnimatePresence>

      <div style={{ position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)', display: 'flex', gap: '8px', zIndex: 5 }}>
        {images.map((_, i) => (
          <div key={i} style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: i === index ? 'white' : 'rgba(255,255,255,0.4)', transition: 'all 0.3s' }} />
        ))}
      </div>
    </div>
  );
}

export default function Home() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { t } = useTranslation();
  const heroImages = [
    '/assets/heroimage.webp',
    '/assets/heroimage2.jpg',
    '/assets/heroimage3.jpg'
  ];

  const { scrollY } = useScroll();
  const heroImageY = useTransform(scrollY, [0, 1000], [0, 200]);
  const storyImageY = useTransform(scrollY, [400, 1400], [-60, 60]);

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
            {t('home.hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            {t('home.hero_subtitle')}
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
              {t('home.explore_btn')}
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
      
      {/* Highlights Section */}
      <section style={{ backgroundColor: 'rgba(241, 236, 225, 0.6)', padding: 'var(--section-padding) 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(2rem, 5vw, 3.5rem)' }}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-accent-terra)', marginBottom: '0.5rem', fontWeight: 500 }}>
                <Counter value={3000} suffix="m²" />
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{t('home.stats.area')}</p>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-accent-terra)', marginBottom: '0.5rem', fontWeight: 500 }}>
                <Counter value={250} />
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{t('home.stats.workstations')}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-accent-terra)', marginBottom: '0.5rem', fontWeight: 500 }}>
                <Counter value={10} />
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{t('home.stats.rooms')}</p>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              style={{ textAlign: 'center' }}
            >
              <h2 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--color-accent-terra)', marginBottom: '0.5rem', fontWeight: 500 }}>
                <Counter value={250} />
              </h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.2em' }}>{t('home.stats.event_capacity')}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Introduction Paragraph - Client Story Section */}
      <section style={{ backgroundColor: 'var(--color-bg-white)', padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', gap: 'clamp(3rem, 8vw, 6rem)', alignItems: 'center' }}>
            
            {/* Image Block */}
            <motion.div 
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              style={{ overflow: 'hidden', borderRadius: '32px' }}
            >
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <motion.img 
                  src="/assets/heroimage2.jpg" 
                  alt="Resilient Coworking Team and Space" 
                  style={{ 
                    width: '100%', 
                    height: 'clamp(400px, 60vh, 650px)', 
                    objectFit: 'cover',
                    scale: 1.3,
                    y: storyImageY
                  }} 
                />
                <div style={{ 
                  position: 'absolute', 
                  bottom: 'clamp(20px, 4vw, 30px)', 
                  right: 'clamp(20px, 4vw, 30px)', 
                  backgroundColor: 'white', 
                  padding: 'clamp(1rem, 2vw, 1.5rem) clamp(1.5rem, 3vw, 2rem)', 
                  borderRadius: '20px',
                  boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: 'clamp(1.25rem, 3vw, 1.75rem)', fontWeight: 700, color: 'var(--color-accent-terra)', lineHeight: 1 }}>7</div>
                  <div style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginTop: '0.25rem', color: 'var(--color-text-muted)' }}>Boutiques</div>
                </div>
              </div>
            </motion.div>

            {/* Content Block */}
            <motion.div 
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h4 style={{ color: 'var(--color-accent-terra)', textTransform: 'uppercase', letterSpacing: '0.2em', fontSize: '0.85rem', marginBottom: '1.5rem' }}>{t('home.story.subtitle')}</h4>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', color: 'var(--color-text-dark)', marginBottom: '2rem', lineHeight: 1.1 }}>
                {t('home.story.title')}
              </h2>
              
              <div style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.8 }}>
                <p style={{ marginBottom: '1.5rem' }}>
                  {t('home.story.p1')}
                </p>
                <p style={{ marginBottom: '2rem' }}>
                  {t('home.story.p2')}
                </p>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', marginTop: '1rem' }}>
                <div>
                  <h5 style={{ color: 'var(--color-text-dark)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{t('home.story.feature1_title')}</h5>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{t('home.story.feature1_desc')}</p>
                </div>
                <div>
                  <h5 style={{ color: 'var(--color-text-dark)', marginBottom: '0.75rem', fontSize: '1.1rem' }}>{t('home.story.feature2_title')}</h5>
                  <p style={{ fontSize: '0.95rem', margin: 0 }}>{t('home.story.feature2_desc')}</p>
                </div>
              </div>

              <div style={{ marginTop: '3rem' }}>
                <Link 
                  to="/about" 
                  style={{ 
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '0.75rem',
                    color: 'var(--color-text-dark)',
                    fontWeight: 600,
                    fontSize: '1rem',
                    textDecoration: 'none',
                    borderBottom: '1px solid var(--color-accent-terra)',
                    paddingBottom: '4px'
                  }}
                >
                  {t('home.story.learn_more')} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Types Preview Section */}
      <section id="memberships" className="offices-preview" style={{ padding: 'var(--section-padding) 0', backgroundColor: '#fcfbf9' }}>
        <div className="container">
          <div className="section-header" style={{ marginBottom: '2rem' }}>
            <div style={{ maxWidth: '600px' }}>
              <h2 style={{ fontSize: 'clamp(2.25rem, 4.5vw, 3.5rem)', lineHeight: 1.1, marginBottom: '1rem', color: 'var(--color-text-dark)' }}>{t('home.workspaces.title')}</h2>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)' }}>{t('home.workspaces.subtitle')}</p>
            </div>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <Link to="/open-space" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'rgba(241, 236, 225, 0.5)', padding: 'clamp(3rem, 8vw, 4rem) clamp(2rem, 5vw, 3rem)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.05)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontFamily: 'var(--font-serif)' }}>{t('home.workspaces.open_space')}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {t('home.workspaces.open_space_desc')}
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent-terra)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  {t('home.workspaces.explore')} {t('home.workspaces.open_space')} <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>

            <Link to="/offices" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'var(--color-bg-sage)', padding: 'clamp(3rem, 8vw, 4rem) clamp(2rem, 5vw, 3rem)', borderRadius: '24px', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-bg-white)', fontFamily: 'var(--font-serif)' }}>{t('home.workspaces.private_offices')}</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {t('home.workspaces.private_offices_desc')}
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-bg-white)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  {t('home.workspaces.explore')} {t('home.workspaces.private_offices')} <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>

            <Link to="/meeting-rooms" style={{ textDecoration: 'none' }}>
              <div className="membership-card" style={{ backgroundColor: 'var(--color-bg-white)', padding: 'clamp(3rem, 8vw, 4rem) clamp(2rem, 5vw, 3rem)', borderRadius: '24px', border: '1px solid rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
                <h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontFamily: 'var(--font-serif)' }}>{t('home.workspaces.meeting_rooms')}</h3>
                <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', fontSize: '1.1rem', flexGrow: 1, lineHeight: 1.6 }}>
                  {t('home.workspaces.meeting_rooms_desc')}
                </p>
                <div className="explore-link" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', color: 'var(--color-accent-terra)', fontWeight: 600, fontSize: '1.1rem', transition: 'gap 0.3s ease' }}>
                  {t('home.workspaces.explore')} {t('home.workspaces.meeting_rooms')} <ArrowRight size={20} className="arrow-icon" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Culture & Community Story Section */}
      <section style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--color-bg-sage)', color: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: 'clamp(3rem, 8vw, 6rem)', alignItems: 'center' }}>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'rgba(255,255,255,0.9)', lineHeight: 1.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2.25rem, 4vw, 3rem)', lineHeight: 1.2, marginBottom: '1rem', color: 'var(--color-bg-white)' }}>
                {t('home.community.title')}
              </h2>
              
              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                {t('home.community.p1')}
              </p>

              <blockquote style={{ 
                borderLeft: '4px solid var(--color-accent-terra)', 
                paddingLeft: '1.5rem', 
                margin: '1.5rem 0',
                fontStyle: 'italic',
                fontSize: '1.25rem',
                color: 'var(--color-bg-white)'
              }}>
                {t('home.community.quote')}
              </blockquote>

              <p style={{ color: 'rgba(255,255,255,0.9)' }}>
                {t('home.community.p2')}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <CommunityCarousel />
            </motion.div>

          </div>
        </div>
      </section>

      {/* Event Location Section - Portal Banner */}
      <section style={{ padding: 'var(--section-padding) 0', backgroundColor: 'var(--color-bg-beige)' }}>
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
              minHeight: 'clamp(400px, 60vh, 550px)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              boxShadow: '0 20px 40px rgba(0,0,0,0.15)'
            }}
          >
            {/* Background Image with Dark Overlay */}
            <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 0 }}>
              <img src="/eventspace.webp" alt="Event Space in Zurich" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'rgba(43, 41, 42, 0.5)' }} />
            </div>

            {/* Content Container */}
            <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', color: 'var(--color-bg-white)', padding: 'clamp(2rem, 5vw, 4rem)', maxWidth: '800px' }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-bg-white)', marginBottom: '1.5rem', textShadow: '0 4px 20px rgba(0,0,0,0.3)' }}>
                {t('home.events.title')}
              </h2>
              <p style={{ fontSize: '1.25rem', marginBottom: '3rem', lineHeight: 1.6, color: 'rgba(255,255,255,0.95)' }}>
                {t('home.events.desc')}
              </p>
              <a 
                href="https://resilient-studios.com/resilient-coworking/" 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ 
                  backgroundColor: 'var(--color-bg-white)', 
                  color: 'var(--color-text-dark)', 
                  display: 'inline-flex', 
                  alignItems: 'center',
                  padding: '1rem 2.2rem',
                  fontSize: '0.95rem',
                  fontWeight: 600,
                  borderRadius: '100px',
                  textDecoration: 'none',
                  transition: 'transform 0.3s ease, background-color 0.3s ease',
                  border: 'none'
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                {t('home.events.btn')} <ArrowRight size={18} style={{ marginLeft: '10px' }} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Location Map Section */}
      <section style={{ backgroundColor: 'var(--color-bg-beige)', padding: 'var(--section-padding) 0' }}>
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
              gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))'
            }}
          >
            <div style={{ padding: 'clamp(2.5rem, 6vw, 5rem)', display: 'flex', flexDirection: 'column', justifyContent: 'center', color: 'var(--color-bg-white)' }}>
              <div style={{ marginBottom: '2rem' }}>
                <h2 style={{ fontSize: 'clamp(2.25rem, 3vw, 2.5rem)', color: 'var(--color-bg-white)', marginBottom: '1.5rem' }}>{t('home.location.title')}</h2>
                <h3 style={{ fontSize: '1.25rem', marginBottom: '0.25rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>Resilient Coworking</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', margin: 0, lineHeight: 1.6 }}>
                  Kreuzstrasse 24<br/>8008 Zurich<br/>Switzerland
                </p>
              </div>
              
              <div style={{ borderTop: '1px solid rgba(255,255,255,0.2)', paddingTop: '2rem', marginBottom: '3rem' }}>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                  {t('home.location.desc')}
                </p>
              </div>

              <a 
                href="https://maps.app.goo.gl/2viZtDcEoacJwebc9" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-primary"
                style={{ alignSelf: 'flex-start', backgroundColor: 'var(--color-bg-white)', color: 'var(--color-text-dark)', border: 'none' }}
              >
                {t('home.location.btn')}
              </a>
            </div>
            
            <div style={{ width: '100%', height: '100%', minHeight: '450px', backgroundColor: '#1a1a1a', position: 'relative' }}>
              <BoutiqueMap />
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
