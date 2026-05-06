import { motion } from 'framer-motion';
import { ArrowRight, Clock, Shield, Monitor, ShieldCheck, Wifi, Coffee, Star, Car, Building2 } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function OpenSpace() {
  const plans = [
    {
      title: "Daypass / Test Day",
      desc: "At Resilient and/or Resident from 08:30 to 17:30.",
      prices: [
        { label: "Full Day", price: "35.-" },
        { label: "Half Day", price: "20.-" }
      ],
      icon: <Clock size={28} strokeWidth={1.5} />,
      features: ["Flexible workspace", "High-speed WiFi", "Premium Coffee/Tea", "Lounge access"]
    },
    {
      title: "Flexdesk",
      desc: "24/7 Badge access for ultimate flexibility.",
      prices: [
        { label: "10 Days / Month", price: "380.-" },
        { label: "15 Days / Month", price: "520.-" }
      ],
      icon: <Shield size={28} strokeWidth={1.5} />,
      features: ["24/7 access", "Badge system", "Mail handling", "Community events"]
    },
    {
      title: "Fixdesk",
      desc: "Your own permanent desk with full business support.",
      prices: [
        { label: "Monthly", price: "725.-" }
      ],
      icon: <Monitor size={28} strokeWidth={1.5} />,
      features: ["Dedicated desk", "24/7 access", "5h Meeting rooms incl.", "Business address incl."]
    }
  ];

  const serviceCategories = [
    {
      title: "Workspace & Tech",
      icon: <Wifi size={28} strokeWidth={1.5} />,
      items: [
        "High speed fiber optic internet connection",
        "Laser Printer and highspeed-scanner",
        "Phone booths and lounge areas on each floor",
        "Address can be used as official business address, postal service to your desk (fixdesk only)"
      ]
    },
    {
      title: "Facilities & Comfort",
      icon: <Coffee size={28} strokeWidth={1.5} />,
      items: [
        "High standard private showers",
        "Cleaning: kitchen + toilets 4 x per week / offices 2 x per week",
        "PET, glass, paper and cardboard are collected and recycled",
        "In the kitchenettes: refrigerator, cutlery, dishwasher, coffee maker",
        "Coffee and tea are included"
      ]
    },
    {
      title: "Access & Security",
      icon: <ShieldCheck size={28} strokeWidth={1.5} />,
      items: [
        "Access to the premises 24/7 (fixdesk only)",
        "Security badge system to the entrance doors",
        "Access to the Resident 9 - 5pm, if no events",
        "In-house facility and support team"
      ]
    },
    {
      title: "Exclusive Perks",
      icon: <Star size={28} strokeWidth={1.5} />,
      items: [
        "4h per desk Meetingroom-allowance (fixdesk only, additional hours 25% discount)",
        "Discount on the rental of the Resident Eventlocation (fixdesk only, for up to 250 people)",
        "25% off drinks at the Resident"
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
              Open Space.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6, maxWidth: '600px' }}>
              Flexible coworking solutions for creative professionals and growing teams. Choose the plan that fits your rhythm.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Image Showcase */}
      <section className="container image-showcase" style={{ paddingBottom: '8rem' }}>
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
              style={{ width: '100%', height: 'max(400px, 45vh)', objectFit: 'cover', borderRadius: '24px' }}
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
                    padding: '1.2rem 2.5rem', 
                    backgroundColor: 'var(--color-text-dark)', 
                    color: 'white', 
                    display: 'inline-flex', 
                    alignItems: 'center', 
                    gap: '0.75rem',
                    fontSize: '1rem',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Inquire Now <ArrowRight size={18} />
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
            <h2 style={{ color: 'var(--color-bg-white)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>Included Services.</h2>
            <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px' }}>
              Everything you need to run your business seamlessly. All included in your membership, with no hidden fees.
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
            <h2 style={{ color: 'var(--color-text-dark)', fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', margin: 0 }}>Optional Upgrades.</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.25rem', marginTop: '1rem', maxWidth: '600px' }}>
              Tailor your workspace with additional services designed to support your business growth.
            </p>
          </motion.div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '4rem' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Car size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>Indoor Parking</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                Parking: Indoor (CHF 400.-, excl. VAT) depending on availability
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Building2 size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>Conference & Seminar</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                Conference and Seminar facilities available for larger team meetings or presentations.
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--color-accent-terra)' }}>
                <Star size={24} strokeWidth={1.5} />
                <h3 style={{ fontSize: '1.25rem', margin: 0, color: 'var(--color-text-dark)', fontWeight: 600 }}>Event Consulting</h3>
              </div>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', lineHeight: 1.6, margin: 0 }}>
                Professional Event consulting to help you plan and execute the perfect occasion.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

    </main>
  );
}
