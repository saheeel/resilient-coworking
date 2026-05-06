import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building, Building2, ShieldCheck, Wifi, Coffee, Star, Car, Paintbrush, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function Offices() {
  const { t } = useTranslation();
  const officeImages = [
    '/private-office/IMG_1831-HDR.jpg',
    '/private-office/IMG_3948-HDR.jpg',
    '/private-office/IMG_4877.jpg',
    '/private-office/img_4800-plant.jpg.jpg'
  ];

  const OfficeCarousel = ({ images }: { images: string[] }) => {
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
      <motion.div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        style={{ 
          margin: '4rem auto 0', 
          position: 'relative', 
          width: '100%', 
          maxWidth: '1000px', 
          aspectRatio: '16/9', 
          maxHeight: '70vh', 
          borderRadius: '24px', 
          overflow: 'hidden', 
          boxShadow: '0 20px 40px rgba(0,0,0,0.1)',
          backgroundColor: '#1a1a1a'
        }}
      >
        <AnimatePresence initial={false}>
          <motion.img
            key={current}
            src={images[current]}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
            alt={`Private Office View ${current + 1}`}
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
            padding: '0 2rem',
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
                width: '44px',
                height: '44px',
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
              <ChevronLeft size={24} />
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
                width: '44px',
                height: '44px',
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
              <ChevronRight size={24} />
            </motion.button>
          </div>
        )}
        
        {/* Dots */}
        <div style={{ position: 'absolute', bottom: '2rem', left: 0, width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem', zIndex: 10 }}>
          {images.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrent(idx)}
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                background: current === idx ? 'white' : 'rgba(255,255,255,0.5)',
                border: 'none',
                cursor: 'pointer',
                transition: 'all 0.3s ease'
              }}
            />
          ))}
        </div>
      </motion.div>
    );
  };

  interface PriceOption {
    label: string;
    price: string;
    isOccupied?: boolean;
    hideStatus?: boolean;
  }

  const plans = [
    {
      title: t('offices.plans.private.title'),
      desc: t('offices.plans.private.desc'),
      subdesc: t('offices.plans.private.subdesc'),
      prices: [
        { label: t('offices.plans.private.label2'), price: "1'850.- / " + t('offices.plans.private.month'), isOccupied: true },
        { label: t('offices.plans.private.label4'), price: "2'600.- / " + t('offices.plans.private.month') },
        { label: t('offices.plans.private.label6'), price: "3'850.- / " + t('offices.plans.private.month') },
        { label: t('offices.plans.private.label8'), price: "5'500.- / " + t('offices.plans.private.month') }
      ] as PriceOption[],
      icon: <Building size={28} strokeWidth={1.5} />,
      features: t('offices.plans.private.features', { returnObjects: true }) as string[]
    },
    {
      title: t('offices.plans.corporate.title'),
      desc: t('offices.plans.corporate.desc'),
      subdesc: t('offices.plans.corporate.subdesc'),
      prices: [
        { label: t('offices.plans.corporate.label'), price: t('offices.plans.corporate.price'), hideStatus: true }
      ] as PriceOption[],
      icon: <Building2 size={28} strokeWidth={1.5} />,
      features: t('offices.plans.corporate.features', { returnObjects: true }) as string[]
    }
  ];

  const serviceCategories = [
    {
      title: t('offices.services.cat1.title'),
      icon: <Wifi size={28} strokeWidth={1.5} />,
      items: [
        t('offices.services.cat1.item1'),
        t('offices.services.cat1.item2'),
        t('offices.services.cat1.item3'),
        t('offices.services.cat1.item4')
      ]
    },
    {
      title: t('offices.services.cat2.title'),
      icon: <Coffee size={28} strokeWidth={1.5} />,
      items: [
        t('offices.services.cat2.item1'),
        t('offices.services.cat2.item2'),
        t('offices.services.cat2.item3'),
        t('offices.services.cat2.item4'),
        t('offices.services.cat2.item5')
      ]
    },
    {
      title: t('offices.services.cat3.title'),
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      items: [
        t('offices.services.cat3.item1'),
        t('offices.services.cat3.item2'),
        t('offices.services.cat3.item3'),
        t('offices.services.cat3.item4')
      ]
    },
    {
      title: t('offices.services.cat4.title'),
      icon: <Star size={28} strokeWidth={1.5} />,
      items: [
        t('offices.services.cat4.item1'),
        t('offices.services.cat4.item2'),
        t('offices.services.cat4.item3')
      ]
    }
  ];

  return (
    <main className="page-offices" style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Hero Section */}
      <section className="page-hero" style={{ paddingTop: 'max(180px, 20vh)', paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'var(--color-text-dark)', marginBottom: '1.5rem', lineHeight: 1 }}>
              {t('offices.hero_title')}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
              {t('offices.hero_subtitle')}
            </p>
          </motion.div>

          <OfficeCarousel images={officeImages} />
        </div>
      </section>

      {/* Pricing Section */}
      <section className="container pricing-section" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              className="pricing-row"
            >
              {/* Icon Column */}
              <div style={{ color: 'var(--color-accent-terra)' }}>
                {plan.icon}
              </div>

              {/* Info Column */}
              <div>
                <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--color-text-dark)', fontFamily: 'var(--font-serif)' }}>{plan.title}</h2>
                <div style={{ color: 'var(--color-text-dark)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.5rem' }}>{plan.desc}</div>
                <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', lineHeight: 1.5, maxWidth: '400px' }}>
                  {plan.subdesc}
                </p>
              </div>

              {/* Pricing Column */}
              <div style={{ flex: 1.5 }}>
                <div style={{ 
                  display: 'grid', 
                  gridTemplateColumns: plan.prices.length > 1 ? 'repeat(auto-fit, minmax(180px, 1fr))' : '1fr',
                  gap: '1.5rem',
                  backgroundColor: 'rgba(0,0,0,0.02)',
                  padding: '1.5rem',
                  borderRadius: '20px'
                }}>
                  {plan.prices.map((p, i) => (
                    <div key={i}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.5rem' }}>
                        <div style={{ fontSize: '0.7rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{p.label}</div>
                        {!p.hideStatus && (
                          <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                            <span style={{ 
                              width: '6px', 
                              height: '6px', 
                              backgroundColor: p.isOccupied ? '#94a3b8' : '#22c55e', 
                              borderRadius: '50%',
                              display: 'inline-block',
                              boxShadow: p.isOccupied ? 'none' : '0 0 8px rgba(34, 197, 94, 0.5)'
                            }} />
                            <span style={{ 
                              fontSize: '0.65rem', 
                              color: p.isOccupied ? '#64748b' : '#16a34a', 
                              fontWeight: 600, 
                              textTransform: 'uppercase' 
                            }}>
                              {p.isOccupied ? t('offices.plans.private.occupied') : t('offices.plans.private.available')}
                            </span>
                          </div>
                        )}
                      </div>
                      <div style={{ fontSize: '1.4rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>
                        {p.price.includes('CHF') ? p.price : (p.price === t('offices.plans.corporate.price') ? p.price : `CHF ${p.price}`)}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* CTA Column */}
              <div className="pricing-row-cta" style={{ textAlign: 'right' }}>
                <Link 
                  to="/contact" 
                  className="btn btn-primary" 
                  style={{ 
                    padding: '1rem 2rem', 
                    backgroundColor: 'var(--color-text-dark)', 
                    color: 'white', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  {t('offices.plans.inquire')} <ArrowRight size={18} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Included Services (Sage Green) */}
      <section className="services-section" style={{ backgroundColor: 'var(--color-bg-sage)', padding: '8rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2rem' }}
          >
            <h2 style={{ color: 'var(--color-bg-white)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>{t('offices.services.title')}</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px' }}>
              {t('offices.services.subtitle')}
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem 6rem' }}>
            {serviceCategories.map((category, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1rem' }}>
                  <div style={{ color: 'var(--color-accent-terra)' }}>
                    {category.icon}
                  </div>
                  <h3 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-bg-white)' }}>{category.title}</h3>
                </div>
                <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  {category.items.map((item, i) => (
                    <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'rgba(255,255,255,0.9)' }}>
                      <span style={{ color: 'rgba(255,255,255,0.4)' }}>—</span>
                      <span style={{ lineHeight: 1.5 }}>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Optional Upgrades */}
      <section className="upgrades-section" style={{ backgroundColor: 'var(--color-bg-white)', padding: '8rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(0,0,0,0.1)', paddingBottom: '2rem' }}
          >
            <h2 style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>{t('offices.upgrades.title')}</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px' }}>
              {t('offices.upgrades.subtitle')}
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Car size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>{t('offices.upgrades.car.title')}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                {t('offices.upgrades.car.desc')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Building2 size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>{t('offices.upgrades.conf.title')}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                {t('offices.upgrades.conf.desc')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Paintbrush size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>{t('offices.upgrades.design.title')}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                {t('offices.upgrades.design.desc')}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Star size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>{t('offices.upgrades.event.title')}</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                {t('offices.upgrades.event.desc')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
