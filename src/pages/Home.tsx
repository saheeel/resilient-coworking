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
            Zurich's Leading Boutique Coworking.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            7 unique boutiques across 7 floors in 3 neighboring buildings. Discover a personal, family-run boutique concept that redefines how you and your team work in the heart of Zurich.
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

      {/* Spaces Section */}
      <section id="coworking" className="spaces-section">
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Boutique spaces for your best work.</h2>
              <p>With 3,000m² of space and 250 workstations, we offer a hotel-like service experience where every detail is lovingly curated by our 20-person team.</p>
            </div>
          </div>

          <div className="spaces-grid">
            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/assets/heroimage.webp" alt="Open Space" className="space-card-image" />
              <div className="space-card-content">
                <h3>Flexible Coworking</h3>
                <p>Enjoy vibrant exchange with other unique personalities, with the flexibility to grow or shrink as needed.</p>
              </div>
            </motion.div>

            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <img src="/assets/meeting.png" alt="Meeting Rooms" className="space-card-image" />
              <div className="space-card-content">
                <h3>Boutique Amenities</h3>
                <p>10 professional meeting rooms, kitchenettes, award-winning cafe, and even showers for your convenience.</p>
              </div>
            </motion.div>

            <motion.div 
              className="space-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img src="/assets/heroimage.webp" alt="Private Offices" className="space-card-image" style={{ objectPosition: 'left' }} />
              <div className="space-card-content">
                <h3>Private Studios</h3>
                <p>Maintain your own space while leaving the cleaning, Wi-Fi, and package management to us.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Office Types Preview Section */}
      <section className="offices-preview" style={{ padding: 'var(--space-xl) 0', backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="section-header">
            <div>
              <h2>Find your perfect studio.</h2>
              <p>Explore our range of private offices designed for teams of all sizes.</p>
            </div>
            <Link to="/offices" className="btn btn-outline">View All Offices</Link>
          </div>
          <div className="spaces-grid" style={{ marginTop: '3rem' }}>
            <div className="space-card">
              <img src="/assets/heroimage2.jpg" alt="Private Office" className="space-card-image" />
              <div className="space-card-content">
                <h3>Private Boutique Office</h3>
                <p>Furnished spaces for 2-4 people.</p>
              </div>
            </div>
            <div className="space-card">
              <img src="/assets/heroimage3.jpg" alt="Team Studio" className="space-card-image" />
              <div className="space-card-content">
                <h3>Team Studio</h3>
                <p>Spacious rooms for 6-10 people.</p>
              </div>
            </div>
            <div className="space-card">
              <img src="/assets/heroimage.webp" alt="Executive Suite" className="space-card-image" />
              <div className="space-card-content">
                <h3>Executive Suite</h3>
                <p>Flagship spaces for 12+ people.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Location Section */}
      <section id="event" className="event-teaser">
        <div className="container event-teaser-inner">
          <motion.div 
            className="event-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>Boutique Event Spaces</h2>
            <p style={{ marginBottom: '2rem', marginTop: '1rem' }}>
              Host up to 250 guests in our 3 versatile event rooms. Perfectly suited for conferences, creative workshops, or private celebrations, our spaces offer a sophisticated backdrop supported by a professional, appreciative work culture.
            </p>
            <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-accent-terra)' }}>
              Discover Events <ArrowRight size={18} style={{ marginLeft: '8px' }} />
            </button>
          </motion.div>
          <motion.div 
            className="event-image-wrapper"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <img src="/assets/event.png" alt="Event Space in Zurich" className="event-image" />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
