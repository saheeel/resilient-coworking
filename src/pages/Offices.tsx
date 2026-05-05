import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';

export default function Offices() {
  const officeTypes = [
    {
      name: "Private Boutique Office (Unit 102)",
      size: "18 m²",
      capacity: "2 people",
      status: "Available",
      description: "A cozy, sun-drenched private office on the 1st floor of Boutique #3. Fully furnished and ready for immediate move-in.",
      features: ["Full furniture set", "Daily cleaning", "Package service", "24/7 access"]
    },
    {
      name: "Team Studio (Unit 405)",
      size: "45 m²",
      capacity: "8 people",
      status: "Rented Out",
      description: "Our popular south-facing studio. Currently occupied by a creative agency, but typical for our long-term community members.",
      features: ["Integrated kitchenette", "Private balcony access", "Premium Wi-Fi", "Coffee flatrate"]
    },
    {
      name: "Executive Suite (Unit 701)",
      size: "85 m²",
      capacity: "15 people",
      status: "Available",
      description: "The crown jewel of our Stadelhofen boutique. Top floor with views of Lake Zurich and maximum privacy for high-growth teams.",
      features: ["Private meeting room", "Highest floor views", "Premium concierge service", "Boutique design"]
    }
  ];

  return (
    <main style={{ paddingTop: '100px' }}>
      <section className="spaces-section">
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="section-header"
            style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <h1>Your Private Office Boutique.</h1>
            <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
              We offer uniquely designed private offices across 7 floors and 3 buildings. 
              Find the perfect home for your team with hotel-like services in the heart of Zurich.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '2rem', marginTop: '3rem', marginBottom: '6rem' }}>
            {/* Daypass */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Daypass / Test Day</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                In the Resilient and/or Resident from 08:30 a.m. to 05:30 p.m.
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                35.- / day<br/>
                20.- / half day
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Flexdesk */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Flexdesk</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                7×24 Badge Access
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                10 days / month: 380.-<br/>
                15 days / month: 520.-
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Fixdesk */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Fixdesk</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                my desk, 7×24 badge access, incl. 5 hours meeting rooms, incl. domicile address
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                725.- / month
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Private Office */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Private Office</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                7×24 badge access<br/><br/>
                <span style={{ fontSize: '0.75rem' }}>20m2 for max. 4 people</span>
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                4 people from 2'650.- / month
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Virtual Office */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Virtual Office</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                Only in combination with Flexdesk.<br/>
                Own company address, mail handling in stock, other services such as postal dispatch, scanning of mail according to the offer.
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                Price on request
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>

            {/* Corporate Spaces */}
            <div style={{ backgroundColor: 'rgba(241, 236, 225, 0.3)', padding: '3rem 2rem', textAlign: 'center', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <h3 style={{ fontSize: '1.75rem', marginBottom: '1rem' }}>Corporate Spaces</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--color-text-muted)', marginBottom: '2rem', flexGrow: 1 }}>
                Do you need more than 6 workstations? Office space for up to approx. 25 workstations is our specialty.
              </p>
              <div style={{ fontWeight: 600, fontSize: '1.125rem', marginBottom: '2rem' }}>
                Price on request
              </div>
              <button className="btn btn-primary" style={{ width: '100%' }}>Inquiries</button>
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header"
            style={{ flexDirection: 'column', alignItems: 'flex-start' }}
          >
            <h2>Current Availability.</h2>
            <p style={{ marginTop: '1rem', fontSize: '1.25rem' }}>
              Take a look at our specifically managed office units across our boutiques.
            </p>
          </motion.div>

          <div style={{ display: 'grid', gap: '4rem', marginTop: '4rem' }}>
            {officeTypes.map((office, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="responsive-grid-2"
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', 
                  gap: '4rem',
                  alignItems: 'center',
                  backgroundColor: 'var(--color-bg-white)',
                  padding: '3rem',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0,0,0,0.03)'
                }}
              >
                {index % 2 === 0 ? (
                  <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src="/assets/heroimage2.jpg" alt={office.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  </div>
                ) : null}

                <div className={index % 2 === 0 ? "" : "responsive-order-reset order-1"}>
                  <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', alignItems: 'center' }}>
                    <span style={{ 
                      padding: '4px 12px', 
                      borderRadius: '99px', 
                      fontSize: '0.7rem', 
                      fontWeight: 700, 
                      textTransform: 'uppercase',
                      backgroundColor: office.status === 'Available' ? 'rgba(111, 133, 105, 0.1)' : 'rgba(158, 113, 96, 0.1)',
                      color: office.status === 'Available' ? 'var(--color-accent-green)' : 'var(--color-accent-terra)'
                    }}>
                      {office.status}
                    </span>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', fontWeight: 600 }}>{office.size}</span>
                    <span style={{ fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--color-text-muted)', fontWeight: 600 }}>{office.capacity}</span>
                  </div>
                  <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{office.name}</h2>
                  <p style={{ marginBottom: '2rem', color: 'var(--color-text-muted)' }}>{office.description}</p>
                  
                  <ul style={{ listStyle: 'none', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2.5rem' }}>
                    {office.features.map((feature, fIndex) => (
                      <li key={fIndex} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem' }}>
                        <div style={{ color: 'var(--color-accent-green)', display: 'flex' }}><Check size={16} /></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  <button className="btn btn-primary">
                    Inquire Now <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                  </button>
                </div>

                {index % 2 !== 0 ? (
                  <div style={{ borderRadius: '16px', overflow: 'hidden' }}>
                    <img src="/assets/heroimage3.jpg" alt={office.name} style={{ width: '100%', height: '400px', objectFit: 'cover' }} />
                  </div>
                ) : null}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="event-teaser" style={{ backgroundColor: 'var(--color-bg-sage)', color: 'var(--color-bg-white)', margin: '4rem 5vw', borderRadius: '32px' }}>
        <div className="container text-center" style={{ padding: '6rem 0' }}>
          <h2 style={{ color: 'var(--color-bg-white)', fontSize: '3.5rem' }}>Ready to move in?</h2>
          <p style={{ margin: '1.5rem auto 3rem', color: 'rgba(255,255,255,0.8)', maxWidth: '600px' }}>
            Book a non-binding tour of our 7 boutiques and find the space that inspires you and your team.
          </p>
          <button className="btn btn-primary" style={{ backgroundColor: 'var(--color-bg-white)', color: 'var(--color-bg-sage)' }}>
            Schedule a Visit
          </button>
        </div>
      </section>
    </main>
  );
}
