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
            style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}
          >
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-bg-beige)', color: 'var(--color-bg-sage)' }}>Explore Spaces</button>
            <button className="btn btn-outline" style={{ borderColor: 'var(--color-bg-beige)', color: 'var(--color-bg-beige)' }}>Join Community</button>
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

      {/* The Story Section */}
      <section id="coworking" className="story-section" style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem', alignItems: 'center' }}>
            
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ position: 'relative' }}
            >
              <div style={{ borderRadius: '24px', overflow: 'hidden', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}>
                <img src="/assets/heroimage3.jpg" alt="Boutique Environment" style={{ width: '100%', height: '600px', objectFit: 'cover' }} />
              </div>
              <div style={{ 
                position: 'absolute', 
                bottom: '-30px', 
                right: '-30px', 
                backgroundColor: 'var(--color-bg-sage)', 
                color: 'var(--color-bg-white)',
                padding: '2rem',
                borderRadius: '24px',
                maxWidth: '280px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
              }}>
                <h3 style={{ color: 'var(--color-bg-white)', marginBottom: '0.5rem', fontSize: '1.25rem' }}>Family-Run.</h3>
                <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', lineHeight: 1.5 }}>
                  Managed and operated by a dedicated 20-person team, ensuring a personal touch in every detail.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', fontSize: '1.125rem', color: 'var(--color-text-dark)', lineHeight: 1.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.5rem)', lineHeight: 1.2, marginBottom: '1.5rem', color: 'var(--color-text-dark)' }}>
                The perfect balance of <span style={{ color: 'var(--color-accent-terra)' }}>privacy</span> and community.
              </h2>
              
              <p>
                Spread across 3 neighboring buildings, our <strong>7 uniquely furnished boutiques</strong> offer a refreshing alternative to traditional offices. Maintain your own private sanctuary while staying connected to an inspiring network of professionals.
              </p>

              <div style={{ backgroundColor: 'var(--color-bg-beige)', padding: '1.5rem 2rem', borderRadius: '16px', margin: '1rem 0', borderLeft: '4px solid var(--color-bg-sage)' }}>
                <p style={{ fontSize: '1.05rem', margin: 0, lineHeight: 1.6 }}>
                  <strong>The Luxury of Focus:</strong> Say goodbye to cleaning schedules, Wi-Fi issues, and package deliveries. Experience an all-inclusive, <em>hotel-like service</em> that lets your team focus purely on what matters.
                </p>
              </div>

              <p>
                Beyond your private studio, enjoy access to professionally equipped meeting rooms, modern kitchenettes, private showers, and our award-winning working café. 
              </p>
              
              <p>
                Located just <strong>two minutes from Lake Zurich</strong> and five minutes from Stadelhofen station, we provide an appreciative, professional work culture designed to help your business attract top talent and thrive.
              </p>
              
              <Link to="/contact" className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: '1rem' }}>Experience It Yourself</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Types Preview Section */}
      <section className="offices-preview" style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Our Memberships & Workspaces.</h2>
              <p>Flexible options designed for individuals and teams.</p>
            </div>
            <Link to="/offices" className="btn btn-outline">View All Options</Link>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 280px), 1fr))', gap: '2rem', marginTop: '3rem' }}>
            {/* Daypass */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Daypass / Test Day</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                In the Resilient and/or Resident from 08:30 a.m. to 05:30 p.m.
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                35.- / day<br/>
                20.- / half day
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Flexdesk */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Flexdesk</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                7×24 Badge Access
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                10 days / month: 380.-<br/>
                15 days / month: 520.-
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Fixdesk */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Fixdesk</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                my desk, 7×24 badge access, incl. 5 hours meeting rooms, incl. domicile address
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                725.- / month
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Private Office */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Private Office</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                7×24 badge access<br/><br/>
                <span style={{ fontSize: '0.75rem' }}>20m2 for max. 4 people</span>
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                4 people from 2'650.- / month
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>
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
                loading="lazy" 
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
