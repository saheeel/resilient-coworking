import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Monitor, Coffee, Car, CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MeetingRooms() {
  // ... (rooms data remains the same)
  const rooms = [
    {
      title: "THE SEMINAR",
      capacity: "Up to 55 persons",
      prices: [
        { label: "Half Day", value: "575.-" },
        { label: "Full Day", value: "950.-" }
      ],
      features: ["Screen / Beamer with HDMI", "Flipchart", "Variable Lighting", "Kitchenette", "Sonos Soundsystem", "Air-conditioned"],
      images: [
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-1.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-2.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-3.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-4.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-5.webp"
      ],
      description: "The ideal infrastructure for complex and exciting business meetings, seminars, workshops, and events."
    },
    {
      title: "CLASSIC",
      capacity: "Up to 10 persons",
      prices: [
        { label: "Up to 2 Hours", value: "145.-" },
        { label: "Half Day", value: "250.-" },
        { label: "Full Day", value: "390.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Air-conditioned"],
      images: [
        "/meeting/classic/resilient-meeting-room-classic-1.webp",
        "/meeting/classic/resilient-meeting-room-classic-2.webp",
        "/meeting/classic/resilient-meeting-room-classic-3.webp"
      ],
      description: "A classic meeting room for focused work in groups of up to 10 people."
    },
    {
      title: "MATISSE",
      capacity: "Up to 7 persons",
      prices: [
        { label: "Up to 2 Hours", value: "125.-" },
        { label: "Up to 3 Hours", value: "180.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard"],
      images: [
        "/meeting/matisse/resilient-meeting-room-matisse-1.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-2.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-3.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-4.webp"
      ],
      description: "Compact and creative space for smaller meetings."
    },
    {
      title: "CONFERENCE",
      capacity: "Up to 13 persons",
      prices: [
        { label: "Up to 2 Hours", value: "250.-" },
        { label: "Half Day", value: "375.-" },
        { label: "Full Day", value: "650.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Openable Windows", "Air-conditioned"],
      images: [
        "/meeting/conference/resilient-meeting-room-conference-1.webp",
        "/meeting/conference/resilient-meeting-room-conference-2.webp",
        "/meeting/conference/resilient-meeting-room-conference-3.webp",
        "/meeting/conference/resilient-meeting-room-conference-4.webp"
      ],
      description: "Spacious conference room for professional meetings."
    },
    {
      title: "FLOW",
      capacity: "Up to 16 persons",
      prices: [
        { label: "Half Day", value: "300.-" },
        { label: "Full Day", value: "450.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Openable Windows", "7 Layout Options", "Air-conditioned"],
      images: [
        "/meeting/flow/resilient-meeting-room-flow-1.webp",
        "/meeting/flow/resilient-meeting-room-flow-2.webp",
        "/meeting/flow/resilient-meeting-room-flow-3.webp",
        "/meeting/flow/resilient-meeting-room-flow-4.webp",
        "/meeting/flow/resilient-meeting-room-flow-5.webp"
      ],
      description: "Flexible room with 7 different setup variants, ideal for dynamic workshops."
    },
    {
      title: "KUSAMA",
      capacity: "Up to 8 persons",
      prices: [
        { label: "Up to 2 Hours", value: "145.-" },
        { label: "Up to 4 Hours", value: "250.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Openable Windows"],
      images: [
        "/meeting/kusama/resilient-meeting-room-kusama-1.webp",
        "/meeting/kusama/resilient-meeting-room-kusama-2.webp",
        "/meeting/kusama/resilient-meeting-room-kusama-3.webp"
      ],
      description: "Inspiring ambiance for creative teamwork."
    },
    {
      title: "MIRO",
      capacity: "Up to 8 persons",
      prices: [
        { label: "Up to 2 Hours", value: "145.-" },
        { label: "Half Day", value: "250.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Openable Windows"],
      images: [
        "/meeting/miro/resilient-meeting-room-miro-1.webp",
        "/meeting/miro/resilient-meeting-room-miro-2.webp",
        "/meeting/miro/resilient-meeting-room-miro-3.webp"
      ],
      description: "Bright and friendly for efficient meetings."
    },
    {
      title: "WARHOL",
      capacity: "Up to 7 persons",
      prices: [
        { label: "Up to 2 Hours", value: "125.-" },
        { label: "Up to 3 Hours", value: "180.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard"],
      images: [
        "/meeting/warhol/resilient-meeting-room-warhol-1.webp",
        "/meeting/warhol/resilient-meeting-room-warhol-2.webp",
        "/meeting/warhol/resilient-meeting-room-warhol-3.webp"
      ],
      description: "Small meeting room with modern flair."
    }
  ];

  const RoomCarousel = ({ images, title, capacity }: { images: string[], title: string, capacity: string }) => {
    const [current, setCurrent] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
      if (images.length <= 1 || isHovered) return;
      const timer = setInterval(() => {
        setCurrent((prev) => (prev + 1) % images.length);
      }, 5000);
      return () => clearInterval(timer);
    }, [images.length, isHovered]);

    const next = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((prev) => (prev + 1) % images.length);
    };

    const prev = (e: React.MouseEvent) => {
      e.stopPropagation();
      setCurrent((prev) => (prev - 1 + images.length) % images.length);
    };

    return (
      <div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{ 
          position: 'relative',
          borderRadius: '24px', 
          overflow: 'hidden', 
          boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
          aspectRatio: '16/10',
          backgroundColor: '#1a1a1a',
          cursor: images.length > 1 ? 'pointer' : 'default'
        }}
      >
        <AnimatePresence initial={false}>
          <motion.img 
            key={current}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            src={images[current]} 
            alt={title} 
            style={{ 
              width: '100%', 
              height: '100%', 
              objectFit: 'cover',
              position: 'absolute',
              top: 0,
              left: 0
            }} 
          />
        </AnimatePresence>

        {/* Navigation Arrows - Only on Hover */}
        {images.length > 1 && (
          <div style={{ 
            position: 'absolute', 
            top: 0, 
            left: 0, 
            right: 0, 
            bottom: 0, 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center', 
            padding: '0 15px',
            zIndex: 20,
            pointerEvents: 'none' // Click events handled by buttons
          }}>
            <motion.button
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
              onClick={prev}
              style={{ 
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            >
              <ChevronLeft size={20} />
            </motion.button>

            <motion.button
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
              onClick={next}
              style={{ 
                pointerEvents: 'auto',
                backgroundColor: 'rgba(255,255,255,0.2)',
                backdropFilter: 'blur(10px)',
                border: 'none',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white',
                cursor: 'pointer',
                transition: 'background-color 0.3s ease'
              }}
              whileHover={{ backgroundColor: 'rgba(255,255,255,0.4)' }}
            >
              <ChevronRight size={20} />
            </motion.button>
          </div>
        )}

        <div style={{ 
          position: 'absolute', 
          top: '20px', 
          left: '20px', 
          backgroundColor: 'rgba(255,255,255,0.9)', 
          backdropFilter: 'blur(4px)',
          padding: '0.5rem 1.25rem',
          borderRadius: '100px',
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--color-text-dark)',
          display: 'flex',
          alignItems: 'center',
          gap: '0.5rem',
          zIndex: 10
        }}>
          <Users size={16} /> {capacity}
        </div>
        
        {images.length > 1 && (
          <div style={{ 
            position: 'absolute', 
            bottom: '20px', 
            left: '50%', 
            transform: 'translateX(-50%)', 
            display: 'flex', 
            gap: '8px',
            zIndex: 10 
          }}>
            {images.map((_, i) => (
              <div key={i} style={{ 
                width: '6px', 
                height: '6px', 
                borderRadius: '50%', 
                backgroundColor: i === current ? 'white' : 'rgba(255,255,255,0.4)',
                transition: 'all 0.3s ease'
              }} />
            ))}
          </div>
        )}
      </div>
    );
  };

  return (
    <main style={{ backgroundColor: 'var(--color-bg-white)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section className="page-hero" style={{ paddingTop: 'max(160px, 15vh)', paddingBottom: '4rem', backgroundColor: 'var(--color-bg-beige)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(3rem, 5vw, 5rem)', color: 'var(--color-text-dark)', marginBottom: '1rem', lineHeight: 1 }}>
              Boutique Meeting Rooms.
            </h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
              Professional, inspiring, and fully equipped. Discover our range of uniquely designed rooms for your next success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section style={{ padding: '4rem 0 8rem' }}>
        <div className="container">
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8rem' }}>
            {rooms.map((room, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
                  gap: '4rem', 
                  alignItems: 'start' 
                }}
              >
                {/* Image Wrapper */}
                <div style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <RoomCarousel images={room.images} title={room.title} capacity={room.capacity} />
                </div>

                {/* Content Wrapper */}
                <div style={{ order: idx % 2 === 0 ? 1 : 0, paddingTop: '1rem' }}>
                  <h2 style={{ 
                    fontSize: '3.5rem', 
                    marginBottom: '1rem', 
                    color: 'var(--color-text-dark)', 
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '-0.02em'
                  }}>
                    {room.title}
                  </h2>
                  <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    {room.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', marginBottom: '3rem' }}>
                    {/* Pricing */}
                    <div>
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>Investment</h4>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {room.prices.map((p, i) => (
                          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid rgba(0,0,0,0.05)', paddingBottom: '0.5rem' }}>
                            <span style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem' }}>{p.label}</span>
                            <span style={{ fontWeight: 600, color: 'var(--color-text-dark)' }}>CHF {p.value}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Features */}
                    <div>
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>Included</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                        {room.features.slice(0, 5).map((f, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                            <CheckCircle2 size={16} color="var(--color-accent-terra)" /> {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.5rem' }}>
                    Request Booking
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-sage)', padding: '6rem 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', textAlign: 'center' }}>
            <div style={{ color: 'white' }}>
              <Coffee size={32} style={{ marginBottom: '1rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Refreshments</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Premium coffee, tea & water included in all bookings.</p>
            </div>
            <div style={{ color: 'white' }}>
              <Monitor size={32} style={{ marginBottom: '1rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Full Tech</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>High-speed WiFi & large screens with easy HDMI setup.</p>
            </div>
            <div style={{ color: 'white' }}>
              <Car size={32} style={{ marginBottom: '1rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Parking</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>Private courtyard parking available on request.</p>
            </div>
            <div style={{ color: 'white' }}>
              <Users size={32} style={{ marginBottom: '1rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.5rem' }}>Support</h3>
              <p style={{ opacity: 0.8, fontSize: '0.9rem' }}>On-site team to help with any technical or catering needs.</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
