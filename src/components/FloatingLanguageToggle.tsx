import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

const FlagIcon = ({ country }: { country: 'gb' | 'de' }) => {
  if (country === 'gb') {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 60 30" width="24" height="12">
        <clipPath id="s">
          <path d="M0,0 v30 h60 v-30 z"/>
        </clipPath>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6"/>
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#C8102E" strokeWidth="4" clipPath="url(#s)"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10"/>
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6"/>
      </svg>
    );
  }
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 5 3" width="24" height="14.4">
      <rect width="5" height="3" y="0" fill="#000"/>
      <rect width="5" height="2" y="1" fill="#D00"/>
      <rect width="5" height="1" y="2" fill="#FFCE00"/>
    </svg>
  );
};

export default function FloatingLanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'de' : 'en';
    i18n.changeLanguage(nextLang);
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={toggleLanguage}
      className="desktop-only-toggle"
      style={{
        position: 'fixed',
        top: '1.5rem',
        right: '2.5rem',
        zIndex: 9999,
        background: 'rgba(255, 255, 255, 0.15)',
        backdropFilter: 'blur(12px)',
        WebkitBackdropFilter: 'blur(12px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        width: '54px',
        height: '54px',
        borderRadius: '16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.1)',
        padding: 0,
      }}
    >
      <FlagIcon country={i18n.language === 'en' ? 'de' : 'gb'} />
    </motion.button>
  );
}
