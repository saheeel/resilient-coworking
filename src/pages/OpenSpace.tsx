import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Monitor, ShieldCheck, Wifi, Coffee, Star, Car, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export default function OpenSpace() {
  const { t } = useTranslation();

  const plans = [
    {
      title: t('open_space.plans.daypass.title'),
      desc: t('open_space.plans.daypass.desc'),
      prices: [
        { label: t('open_space.plans.daypass.label_full'), price: "35.-" },
        { label: t('open_space.plans.daypass.label_half'), price: "20.-" }
      ],
      icon: <Clock size={28} strokeWidth={1.5} />,
      features: ["Flexible workspace", "High-speed WiFi", "Premium Coffee/Tea", "Lounge access"]
    },
    {
      title: t('open_space.plans.flexdesk.title'),
      desc: t('open_space.plans.flexdesk.desc'),
      prices: [
        { label: t('open_space.plans.flexdesk.label10'), price: "380.-" },
        { label: t('open_space.plans.flexdesk.label15'), price: "520.-" }
      ],
      icon: <Shield size={28} strokeWidth={1.5} />,
      features: ["24/7 access", "Badge system", "Mail handling", "Community events"]
    },
    {
      title: t('open_space.plans.fixdesk.title'),
      desc: t('open_space.plans.fixdesk.desc'),
      prices: [
        { label: t('open_space.plans.fixdesk.label'), price: "725.-" }
      ],
      icon: <Monitor size={28} strokeWidth={1.5} />,
      features: ["Dedicated desk", "24/7 access", "5h Meeting rooms incl.", "Business address incl."]
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
    <main className="page-openspace" style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh', paddingBottom: '0' }}>
      
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
              {t('open_space.hero_title')}
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
              {t('open_space.hero_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="container image-showcase" style={{ paddingBottom: 'var(--section-padding-sm)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '2rem' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="/openspace/openspace1.jpg" 
              alt="Resilient Open Space View 1" 
              style={{ width: '100%', height: 'clamp(300px, 45vh, 450px)', objectFit: 'cover', borderRadius: '24px' }}
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="/openspace/openspace2.jpg" 
              alt="Resilient Open Space View 2" 
              style={{ width: '100%', height: 'max(400px, 45vh)', objectFit: 'cover', borderRadius: '24px' }}
            />
          </motion.div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="pricing-section" style={{ backgroundColor: '#f5f4f1', padding: 'var(--section-padding) 0' }}>
        <div className="container">
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
                  <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.5, maxWidth: '400px' }}>
                    {plan.desc}
                  </p>
                </div>

                {/* Pricing Column */}
                <div>
                  {plan.prices.map((p, i) => (
                    <div key={i} style={{ marginBottom: i === plan.prices.length - 1 ? 0 : '1rem' }}>
                      <div style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.25rem' }}>{p.label}</div>
                      <div style={{ fontSize: '1.75rem', fontWeight: 600, color: 'var(--color-text-dark)' }}>CHF {p.price}</div>
                    </div>
                  ))}
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
                    {t('open_space.plans.inquire')} <ArrowRight size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Included Services (Sage Green) */}
      <section className="services-section" style={{ backgroundColor: 'var(--color-bg-sage)', padding: 'var(--section-padding) 0' }}>
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
