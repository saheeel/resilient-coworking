import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Monitor, Coffee, Car, CheckCircle2, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function MeetingRooms() {
  const { t } = useTranslation();

  const rooms = [
    {
      id: 'seminar',
      title: t('meeting_rooms.rooms.seminar.title'),
      capacity: t('meeting_rooms.rooms.seminar.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.half'), value: "575.-" },
        { label: t('meeting_rooms.prices.full'), value: "950.-" }
      ],
      features: ["Screen / Beamer with HDMI", "Flipchart", "Variable Lighting", "Kitchenette", "Sonos Soundsystem", "Air-conditioned"],
      images: [
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-1.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-2.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-3.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-4.webp",
        "/meeting/the-seminar/resilient-meeting-room-the-seminar-5.webp"
      ],
      description: t('meeting_rooms.rooms.seminar.desc')
    },
    {
      id: 'classic',
      title: t('meeting_rooms.rooms.classic.title'),
      capacity: t('meeting_rooms.rooms.classic.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "145.-" },
        { label: t('meeting_rooms.prices.half'), value: "250.-" },
        { label: t('meeting_rooms.prices.full'), value: "390.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Air-conditioned"],
      images: [
        "/meeting/classic/resilient-meeting-room-classic-1.webp",
        "/meeting/classic/resilient-meeting-room-classic-2.webp",
        "/meeting/classic/resilient-meeting-room-classic-3.webp"
      ],
      description: t('meeting_rooms.rooms.classic.desc')
    },
    {
      id: 'matisse',
      title: t('meeting_rooms.rooms.matisse.title'),
      capacity: t('meeting_rooms.rooms.matisse.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "125.-" },
        { label: t('meeting_rooms.prices.h3'), value: "180.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard"],
      images: [
        "/meeting/matisse/resilient-meeting-room-matisse-1.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-2.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-3.webp",
        "/meeting/matisse/resilient-meeting-room-matisse-4.webp"
      ],
      description: t('meeting_rooms.rooms.matisse.desc')
    },
    {
      id: 'conference',
      title: t('meeting_rooms.rooms.conference.title'),
      capacity: t('meeting_rooms.rooms.conference.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "250.-" },
        { label: t('meeting_rooms.prices.half'), value: "375.-" },
        { label: t('meeting_rooms.prices.full'), value: "650.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Openable Windows", "Air-conditioned"],
      images: [
        "/meeting/conference/resilient-meeting-room-conference-1.webp",
        "/meeting/conference/resilient-meeting-room-conference-2.webp",
        "/meeting/conference/resilient-meeting-room-conference-3.webp",
        "/meeting/conference/resilient-meeting-room-conference-4.webp"
      ],
      description: t('meeting_rooms.rooms.conference.desc')
    },
    {
      id: 'flow',
      title: t('meeting_rooms.rooms.flow.title'),
      capacity: t('meeting_rooms.rooms.flow.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.half'), value: "300.-" },
        { label: t('meeting_rooms.prices.full'), value: "450.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Openable Windows", "7 Layout Options", "Air-conditioned"],
      images: [
        "/meeting/flow/resilient-meeting-room-flow-1.webp",
        "/meeting/flow/resilient-meeting-room-flow-2.webp",
        "/meeting/flow/resilient-meeting-room-flow-3.webp",
        "/meeting/flow/resilient-meeting-room-flow-4.webp",
        "/meeting/flow/resilient-meeting-room-flow-5.webp"
      ],
      description: t('meeting_rooms.rooms.flow.desc')
    },
    {
      id: 'kusama',
      title: t('meeting_rooms.rooms.kusama.title'),
      capacity: t('meeting_rooms.rooms.kusama.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "145.-" },
        { label: t('meeting_rooms.prices.h4'), value: "250.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard", "Openable Windows"],
      images: [
        "/meeting/kusama/resilient-meeting-room-kusama-1.webp",
        "/meeting/kusama/resilient-meeting-room-kusama-2.webp",
        "/meeting/kusama/resilient-meeting-room-kusama-3.webp"
      ],
      description: t('meeting_rooms.rooms.kusama.desc')
    },
    {
      id: 'miro',
      title: t('meeting_rooms.rooms.miro.title'),
      capacity: t('meeting_rooms.rooms.miro.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "145.-" },
        { label: t('meeting_rooms.prices.half'), value: "250.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Openable Windows"],
      images: [
        "/meeting/miro/resilient-meeting-room-miro-1.webp",
        "/meeting/miro/resilient-meeting-room-miro-2.webp",
        "/meeting/miro/resilient-meeting-room-miro-3.webp"
      ],
      description: t('meeting_rooms.rooms.miro.desc')
    },
    {
      id: 'warhol',
      title: t('meeting_rooms.rooms.warhol.title'),
      capacity: t('meeting_rooms.rooms.warhol.capacity'),
      prices: [
        { label: t('meeting_rooms.prices.h2'), value: "125.-" },
        { label: t('meeting_rooms.prices.h3'), value: "180.-" }
      ],
      features: ["Screen with HDMI", "Flipchart", "Whiteboard"],
      images: [
        "/meeting/warhol/resilient-meeting-room-warhol-1.webp",
        "/meeting/warhol/resilient-meeting-room-warhol-2.webp",
        "/meeting/warhol/resilient-meeting-room-warhol-3.webp"
      ],
      description: t('meeting_rooms.rooms.warhol.desc')
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
            pointerEvents: 'none'
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
      <section className="page-hero" style={{ paddingTop: 'max(140px, 15vh)', paddingBottom: 'var(--section-padding-sm)', backgroundColor: 'var(--color-bg-beige)' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', color: 'var(--color-text-dark)', marginBottom: '1rem', lineHeight: 1 }}>
              {t('meeting_rooms.hero_title')}
            </h1>
            <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', maxWidth: '600px', lineHeight: 1.6 }}>
              {t('meeting_rooms.hero_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Rooms List */}
      <section style={{ padding: '0 0 var(--section-padding) 0' }}>
        {rooms.map((room, idx) => (
          <div 
            key={idx} 
            style={{ 
              backgroundColor: idx % 2 === 0 ? 'var(--color-bg-white)' : 'rgba(241, 236, 225, 0.4)',
              padding: 'var(--section-padding) 0',
              borderBottom: '1px solid rgba(0,0,0,0.03)'
            }}
          >
            <div className="container">
              <motion.div 
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.8 }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 450px), 1fr))', 
                  gap: '5rem', 
                  alignItems: 'start' 
                }}
              >
                {/* Image Wrapper */}
                <div className="room-image-wrapper" style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                  <RoomCarousel images={room.images} title={room.title} capacity={room.capacity} />
                </div>

                {/* Content Wrapper */}
                <div className="room-content-wrapper" style={{ order: idx % 2 === 0 ? 1 : 0, paddingTop: '1rem' }}>
                  <h2 style={{ 
                    fontSize: 'clamp(2.25rem, 5vw, 3.5rem)', 
                    marginBottom: '1.25rem', 
                    color: 'var(--color-text-dark)', 
                    fontFamily: 'var(--font-serif)',
                    letterSpacing: '-0.02em',
                    lineHeight: 1.1
                  }}>
                    {room.title}
                  </h2>
                  <p style={{ fontSize: '1.15rem', color: 'var(--color-text-muted)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                    {room.description}
                  </p>

                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: 'clamp(2rem, 4vw, 3rem)', marginBottom: '3rem' }}>
                    {/* Pricing */}
                    <div>
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>{t('meeting_rooms.investment')}</h4>
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
                      <h4 style={{ fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1.25rem' }}>{t('meeting_rooms.included')}</h4>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0.6rem' }}>
                        {room.features.slice(0, 5).map((f, i) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', fontSize: '0.95rem', color: 'var(--color-text-muted)' }}>
                            <CheckCircle2 size={16} color="var(--color-accent-terra)" /> {f}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <Link to="/contact" className="btn btn-primary" style={{ padding: '1rem 2.2rem', fontSize: '0.9rem', display: 'inline-flex', alignItems: 'center', gap: '0.75rem' }}>
                    {t('meeting_rooms.request')} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </section>

      {/* Benefits Banner */}
      <section style={{ backgroundColor: 'var(--color-bg-sage)', padding: 'var(--section-padding) 0' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))', gap: 'clamp(2rem, 5vw, 4rem)', textAlign: 'center' }}>
            <div style={{ color: 'white' }}>
              <Coffee size={36} style={{ marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{t('meeting_rooms.benefits.refreshments.title')}</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>{t('meeting_rooms.benefits.refreshments.desc')}</p>
            </div>
            <div style={{ color: 'white' }}>
              <Monitor size={36} style={{ marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{t('meeting_rooms.benefits.tech.title')}</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>{t('meeting_rooms.benefits.tech.desc')}</p>
            </div>
            <div style={{ color: 'white' }}>
              <Car size={36} style={{ marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{t('meeting_rooms.benefits.parking.title')}</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>{t('meeting_rooms.benefits.parking.desc')}</p>
            </div>
            <div style={{ color: 'white' }}>
              <Users size={36} style={{ marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }} />
              <h3 style={{ marginBottom: '0.75rem', fontSize: '1.5rem' }}>{t('meeting_rooms.benefits.support.title')}</h3>
              <p style={{ opacity: 0.8, fontSize: '1rem' }}>{t('meeting_rooms.benefits.support.desc')}</p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}
