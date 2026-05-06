import { motion } from 'framer-motion';
import { ArrowRight, Users, Sparkles, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation, Trans } from 'react-i18next';

export default function About() {
  const { t } = useTranslation();

  return (
    <main style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh' }}>
      
      {/* Hero Section */}
      <section style={{ position: 'relative', paddingTop: 'max(180px, 20vh)', paddingBottom: '6rem', overflow: 'hidden' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '900px' }}
          >
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', color: 'var(--color-text-dark)', marginBottom: '2rem', lineHeight: 1 }}>
              <Trans i18nKey="about.hero_title">
                Boutique Workspace <br /> With Soul.
              </Trans>
            </h1>
            <p style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '700px' }}>
              {t('about.hero_subtitle')}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section style={{ padding: '6rem 0', backgroundColor: 'var(--color-bg-white)' }}>
        <div className="container">
          <div className="responsive-grid-2" style={{ alignItems: 'center', gap: '4rem' }}>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <img 
                src="/assets/heroimage.webp" 
                alt="Our Boutique Interior" 
                style={{ width: '100%', borderRadius: '24px', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }} 
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', marginBottom: '2rem' }}>{t('about.focus_title')}</h2>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
                {t('about.focus_p1')}
              </p>
              <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
                {t('about.focus_p2')}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Community Section (Sage Theme) */}
      <section style={{ backgroundColor: 'var(--color-bg-sage)', padding: '8rem 0', color: 'var(--color-bg-white)' }}>
        <div className="container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: 'var(--color-bg-white)', marginBottom: '2rem' }}
            >
              {t('about.community_title')}
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              style={{ fontSize: '1.25rem', color: 'rgba(255,255,255,0.8)', lineHeight: 1.7, marginBottom: '3rem' }}
            >
              {t('about.community_subtitle')}
            </motion.p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '3rem', marginTop: '4rem' }}>
              <div>
                <Heart size={40} color="var(--color-accent-terra)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ color: 'var(--color-bg-white)', marginBottom: '1rem' }}>{t('about.features.service.title')}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('about.features.service.desc')}</p>
              </div>
              <div>
                <Users size={40} color="var(--color-accent-terra)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ color: 'var(--color-bg-white)', marginBottom: '1rem' }}>{t('about.features.exchange.title')}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('about.features.exchange.desc')}</p>
              </div>
              <div>
                <Sparkles size={40} color="var(--color-accent-terra)" style={{ marginBottom: '1.5rem' }} />
                <h3 style={{ color: 'var(--color-bg-white)', marginBottom: '1rem' }}>{t('about.features.amenities.title')}</h3>
                <p style={{ color: 'rgba(255,255,255,0.7)' }}>{t('about.features.amenities.desc')}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '8rem 0', textAlign: 'center' }}>
        <div className="container">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', marginBottom: '2rem' }}>{t('about.cta_title')}</h2>
            <Link to="/contact" className="btn btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '1rem', padding: '1.2rem 3rem', fontSize: '1.1rem' }}>
              {t('about.cta_btn')} <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

    </main>
  );
}
