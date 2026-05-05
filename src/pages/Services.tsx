import { motion } from 'framer-motion';
import { ShieldCheck, Wifi, Coffee, Star, Building2, Car, Paintbrush, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Services() {
  const serviceCategories = [
    {
      title: "Workspace & Tech",
      icon: <Wifi size={28} strokeWidth={1.5} />,
      items: [
        "High speed fiber optic internet connection",
        "Laser Printer and highspeed-scanner",
        "Phone booths and lounge areas on each floor",
        "Postal service to your door or desk"
      ]
    },
    {
      title: "Facilities & Comfort",
      icon: <Coffee size={28} strokeWidth={1.5} />,
      items: [
        "High standard private showers",
        "Cleaning: kitchen/toilets 4x per week, offices 2x",
        "PET, glass, paper and cardboard recycling",
        "Fully equipped kitchenettes (fridge, dishwasher)",
        "Premium coffee and tea included"
      ]
    },
    {
      title: "Access & Security",
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      items: [
        "Security badge system to entrance doors",
        "Access to the premises 24/7",
        "In-house facility and support team",
        "Access to the Resident 9.00am - 5pm (no events)"
      ]
    },
    {
      title: "Exclusive Perks",
      icon: <Star size={28} strokeWidth={1.5} />,
      items: [
        "4h per desk Meeting room allowance",
        "25% discount on additional meeting room hours",
        "25% off all drinks at the Resident",
        "Discounted rental of the Resident Eventlocation"
      ]
    }
  ];

  const optionalServices = [
    {
      title: "Indoor Parking",
      desc: "CHF 400.- (excl. VAT) depending on availability.",
      icon: <Car size={24} strokeWidth={1.5} />
    },
    {
      title: "Conference Facilities",
      desc: "Full access to large-scale seminar infrastructure.",
      icon: <Building2 size={24} strokeWidth={1.5} />
    },
    {
      title: "Interior Design",
      desc: "Custom design services to upgrade your office space.",
      icon: <Paintbrush size={24} strokeWidth={1.5} />
    }
  ];

  return (
    <main style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Minimalist Hero */}
      <section style={{ paddingTop: 'max(180px, 20vh)', paddingBottom: '6rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px' }}
          >
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'var(--color-text-dark)', marginBottom: '1.5rem', lineHeight: 1 }}>
              Premium Amenities.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
              Everything you need to run your business seamlessly. All included in your membership, with no hidden fees.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Included Services - Compact Grid */}
      <section className="container" style={{ paddingBottom: '8rem' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 400px), 1fr))', gap: '4rem 6rem' }}>
          {serviceCategories.map((category, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem', borderBottom: '1px solid var(--color-text-dark)', paddingBottom: '1rem' }}>
                <div style={{ color: 'var(--color-accent-terra)' }}>
                  {category.icon}
                </div>
                <h2 style={{ fontSize: '1.5rem', margin: 0, color: 'var(--color-text-dark)' }}>{category.title}</h2>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                {category.items.map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', fontSize: '1.1rem', color: 'var(--color-text-dark)' }}>
                    <span style={{ color: 'var(--color-text-muted)' }}>—</span>
                    <span style={{ lineHeight: 1.5, opacity: 0.9 }}>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Optional Services - Dark Minimal Section */}
      <section style={{ backgroundColor: 'var(--color-bg-sage)', padding: '8rem 0' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '5rem', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '2rem' }}
          >
            <h2 style={{ color: 'var(--color-bg-white)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>Optional Upgrades.</h2>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
            {optionalServices.map((service, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1, duration: 0.6 }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                  {service.icon}
                  <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-bg-white)', fontWeight: 400 }}>{service.title}</h3>
                </div>
                <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                  {service.desc}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ marginTop: '6rem', paddingTop: '3rem', borderTop: '1px solid rgba(255,255,255,0.1)' }}
          >
            <Link to="/contact" className="btn btn-primary" style={{ backgroundColor: 'var(--color-bg-white)', color: 'var(--color-bg-sage)', display: 'inline-flex', alignItems: 'center', gap: '0.75rem', padding: '1rem 2.5rem', border: 'none' }}>
              Inquire about Upgrades <ArrowRight size={18} />
            </Link>
          </motion.div>

        </div>
      </section>
    </main>
  );
}
