import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BoutiqueMap from '../components/BoutiqueMap';
import { useTranslation } from 'react-i18next';

export default function Contact() {
  const { t } = useTranslation();

  return (
    <main style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh', paddingTop: 'max(150px, 15vh)', paddingBottom: '100px' }}>
      
      <div className="container">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          style={{ marginBottom: '6rem', maxWidth: '800px' }}
        >
          <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 6rem)', color: 'var(--color-text-dark)', marginBottom: '1.5rem', lineHeight: 1 }}>
            {t('contact.hero_title')}
          </h1>
          <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
            {t('contact.hero_subtitle')}
          </p>
        </motion.div>

        {/* Split Layout */}
        <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 'clamp(4rem, 8vw, 8rem)' }}>
          
          {/* Contact Details (Left) */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '3rem' }}
          >
            <div>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{t('contact.details.location')}</h3>
              <p style={{ fontSize: '1.25rem', color: 'var(--color-text-dark)', margin: 0, lineHeight: 1.5 }}>
                Kreuzstrasse 24<br/>
                8008 Zurich<br/>
                Switzerland
              </p>
              <a 
                href="https://maps.app.goo.gl/2viZtDcEoacJwebc9" 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: 'var(--color-accent-terra)', fontSize: '1rem', marginTop: '1rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 500 }}
              >
                {t('contact.details.view_maps')} <ArrowRight size={16} />
              </a>
            </div>

            <div>
              <h3 style={{ fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '1rem', fontFamily: 'var(--font-sans)', fontWeight: 600 }}>{t('contact.details.contact')}</h3>
              <a href="mailto:info@resilient-studios.com" style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-text-dark)', marginBottom: '0.5rem', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent-terra)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-dark)'}>
                info@resilient-studios.com
              </a>
              <a href="tel:+41445452233" style={{ display: 'block', fontSize: '1.25rem', color: 'var(--color-text-dark)', textDecoration: 'none' }} onMouseOver={(e) => e.currentTarget.style.color = 'var(--color-accent-terra)'} onMouseOut={(e) => e.currentTarget.style.color = 'var(--color-text-dark)'}>
                044 545 22 33
              </a>
            </div>

            <div style={{ paddingTop: '3rem', borderTop: '1px solid rgba(0,0,0,0.1)' }}>
               <p style={{ fontSize: '1rem', color: 'var(--color-text-muted)', fontStyle: 'italic', margin: 0, lineHeight: 1.6 }}>
                {t('location.desc')}
              </p>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            style={{ 
              backgroundColor: 'var(--color-bg-white)', 
              padding: 'clamp(2rem, 5vw, 4rem)', 
              borderRadius: '24px', 
              border: '1px solid rgba(0,0,0,0.05)',
              boxShadow: '0 20px 40px rgba(0,0,0,0.03)'
            }}
          >
            <form style={{ display: 'flex', flexDirection: 'column', gap: '2.5rem' }}>
              
              <div className="responsive-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
                <div style={{ position: 'relative' }}>
                  <label htmlFor="firstName" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{t('contact.form.first_name')}</label>
                  <input type="text" id="firstName" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1.125rem', color: 'var(--color-text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-text-dark)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.2)'} />
                </div>
                <div style={{ position: 'relative' }}>
                  <label htmlFor="lastName" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{t('contact.form.last_name')}</label>
                  <input type="text" id="lastName" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1.125rem', color: 'var(--color-text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-text-dark)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.2)'} />
                </div>
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="email" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{t('contact.form.email')}</label>
                <input type="email" id="email" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1.125rem', color: 'var(--color-text-dark)', outline: 'none', transition: 'border-color 0.3s' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-text-dark)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.2)'} />
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="interest" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{t('contact.form.interest_label')}</label>
                <select id="interest" style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1.125rem', color: 'var(--color-text-dark)', outline: 'none', cursor: 'pointer', appearance: 'none', borderRadius: 0 }} onFocus={(e) => e.target.style.borderColor = 'var(--color-text-dark)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.2)'}>
                  <option>{t('contact.form.interests.private')}</option>
                  <option>{t('contact.form.interests.team')}</option>
                  <option>{t('contact.form.interests.fixdesk')}</option>
                  <option>{t('contact.form.interests.flexdesk')}</option>
                  <option>{t('contact.form.interests.event')}</option>
                  <option>{t('contact.form.interests.other')}</option>
                </select>
              </div>

              <div style={{ position: 'relative' }}>
                <label htmlFor="message" style={{ display: 'block', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', marginBottom: '0.5rem' }}>{t('contact.form.message')}</label>
                <textarea id="message" rows={3} style={{ width: '100%', padding: '0.5rem 0', border: 'none', borderBottom: '1px solid rgba(0,0,0,0.2)', backgroundColor: 'transparent', fontFamily: 'inherit', fontSize: '1.125rem', color: 'var(--color-text-dark)', outline: 'none', transition: 'border-color 0.3s', resize: 'vertical' }} onFocus={(e) => e.target.style.borderColor = 'var(--color-text-dark)'} onBlur={(e) => e.target.style.borderColor = 'rgba(0,0,0,0.2)'}></textarea>
              </div>

              <button type="button" className="btn btn-primary" style={{ marginTop: '0.5rem', alignSelf: 'flex-start', padding: '1rem 3rem', fontSize: '1rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                {t('contact.form.submit')} <ArrowRight size={18} />
              </button>
            </form>
          </motion.div>

        </div>

        {/* Full Width Map */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginTop: '8rem', borderRadius: '24px', overflow: 'hidden', height: '500px', position: 'relative', boxShadow: '0 20px 40px rgba(0,0,0,0.1)' }}
        >
          <BoutiqueMap />
        </motion.div>

      </div>
    </main>
  );
}
