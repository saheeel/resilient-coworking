import { motion } from 'framer-motion';

export default function LocationOverview() {
  const pointsOfInterest = [
    { location: "Lake Zurich (Lakeside Promenade)", desc: "Recreation, Swimming, Walks", distance: "2 min" },
    { location: "Zurich Opera House", desc: "Opera, Ballet & Cultural events", distance: "3 min" },
    { location: "Chinese Garden Zurich", desc: "Historic Garden & Park", distance: "10 min" },
    { location: "Zurich Old Town", desc: "Historic City Center", distance: "12 min" },
  ];

  const publicTransport = [
    { station: "Kreuzstrasse", type: "Tram & bus stop", distance: "1 min" },
    { station: "Kreuzplatz", type: "Tram & bus hub", distance: "5 min" },
    { station: "Zurich Stadelhofen", type: "S-Bahn & regional trains", distance: "6 min" },
    { station: "Zurich Main Station", type: "National & international rail", distance: "12 min" },
    { station: "Zurich Airport", type: "International air connections", distance: "27 min" },
  ];

  const supermarkets = [
    { store: "Coop Seefeld (Food)", location: "Seefeldstrasse", distance: "1 min" },
    { store: "Globus Bellevue (Fine Food)", location: "Theaterstrasse", distance: "4 min" },
    { store: "Migros Stadelhofen (Food)", location: "Falkenstrasse", distance: "3 min" },
    { store: "Coop City Bellevue (Department store)", location: "Theaterstrasse", distance: "5 min" },
  ];

  return (
    <main style={{ backgroundColor: 'var(--color-bg-beige)', minHeight: '100vh', paddingBottom: '0' }}>
      
      {/* Header Section */}
      <section style={{ paddingTop: 'max(150px, 15vh)', paddingBottom: '4rem' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ maxWidth: '800px', textAlign: 'center', margin: '0 auto' }}
          >
            <h1 style={{ fontSize: 'clamp(3.5rem, 6vw, 5.5rem)', color: 'var(--color-text-dark)', marginBottom: '1.5rem', lineHeight: 1 }}>
              Location Overview.
            </h1>
            <p style={{ fontSize: '1.25rem', color: 'var(--color-text-muted)', lineHeight: 1.6 }}>
              Kreuzstrasse 24, 8008 Zurich. Situated in the heart of the city, perfectly connected and just steps away from the lake.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="container" style={{ paddingBottom: '6rem' }}>
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ 
            borderRadius: '24px', 
            overflow: 'hidden', 
            height: '600px', 
            position: 'relative', 
            boxShadow: '0 20px 40px rgba(0,0,0,0.1)' 
          }}
        >
          <iframe 
            src="https://www.google.com/maps?q=Kreuzstrasse+24,+8008+Zurich,+Switzerland&output=embed" 
            style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', filter: 'grayscale(0.3) contrast(1.05)' }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
            title="Resilient Coworking Location"
          ></iframe>
        </motion.div>
      </section>

      {/* Data Section (Sage Theme) */}
      <section style={{ backgroundColor: 'var(--color-bg-sage)', padding: '8rem 0' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          
          {/* Points of Interest */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '6rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-bg-white)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1.5rem' }}>Points of Interest</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {pointsOfInterest.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', fontWeight: 500 }}>{row.location}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>{row.desc}</div>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', textAlign: 'right', fontWeight: 600 }}>{row.distance}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Public Transport */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '6rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-bg-white)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1.5rem' }}>Public Transport</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {publicTransport.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', fontWeight: 500 }}>{row.station}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>{row.type}</div>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', textAlign: 'right', fontWeight: 600 }}>{row.distance}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Supermarkets */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginBottom: '4rem' }}
          >
            <h2 style={{ fontSize: '2.5rem', marginBottom: '3rem', color: 'var(--color-bg-white)', borderBottom: '1px solid rgba(255,255,255,0.2)', paddingBottom: '1.5rem' }}>Supermarkets</h2>
            <div style={{ display: 'flex', flexDirection: 'column' }}>
              {supermarkets.map((row, i) => (
                <div key={i} style={{ display: 'grid', gridTemplateColumns: '1.5fr 1.5fr 1fr', padding: '1.5rem 0', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', fontWeight: 500 }}>{row.store}</div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1.125rem' }}>{row.location}</div>
                  <div style={{ color: 'var(--color-bg-white)', fontSize: '1.125rem', textAlign: 'right', fontWeight: 600 }}>{row.distance}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <p style={{ fontSize: '1rem', color: 'rgba(255,255,255,0.5)', textAlign: 'center', fontStyle: 'italic', marginTop: '4rem' }}>
            *All distances are approximate and calculated using the fastest available means of transport.
          </p>

        </div>
      </section>
    </main>
  );
}
