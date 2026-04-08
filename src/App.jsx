import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Howl } from 'howler';
import weddingConfig from './weddingConfig';
import { useCountdown } from './hooks/useCountdown';

let sharedHowl = null;

const SectionDivider = () => (
  <div className="flex justify-center items-center py-12">
    <div className="h-[1px] w-12 bg-gold/40"></div>
    <div className="mx-4 text-gold opacity-60">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
      </svg>
    </div>
    <div className="h-[1px] w-12 bg-gold/40"></div>
  </div>
);

const Hero = ({ onExplore }) => {
  const { days, hours, minutes, seconds } = useCountdown(weddingConfig.date);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const opacity = useTransform(scrollY, [0, 500], [1, 0]);
  
  return (
    <section id="hero" className="relative h-screen flex flex-col items-center justify-center text-center px-4 overflow-hidden">
      <motion.div style={{ y: y1 }} className="absolute inset-0 z-0">
        <img 
          src={weddingConfig.gallery[0]} 
          alt="Hero Background" 
          className="w-full h-full object-cover opacity-30 scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-cream/80 via-transparent to-cream"></div>
      </motion.div>

      <motion.div 
        style={{ opacity }}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        className="z-10"
      >
        <h2 className="font-playfair text-xl md:text-2xl text-gold mb-4 tracking-widest uppercase italic">
          {weddingConfig.hero.subtitle}
        </h2>
        <h1 className="font-playfair text-5xl md:text-8xl text-maroon mb-6 leading-tight">
          {weddingConfig.hero.title}
        </h1>
        <p className="font-playfair text-2xl md:text-3xl text-maroon/80 mb-12 italic">
          {weddingConfig.displayDate}
        </p>

        {/* Countdown */}
        <div className="flex gap-4 md:gap-8 justify-center mb-12">
          {[
            { label: 'Days', value: days },
            { label: 'Hours', value: hours },
            { label: 'Mins', value: minutes },
            { label: 'Secs', value: seconds },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-playfair text-maroon">{item.value.toString().padStart(2, '0')}</span>
              <span className="text-xs uppercase tracking-widest text-gold mt-1 font-poppins">{item.label}</span>
            </div>
          ))}
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onExplore}
          className="bg-maroon text-cream px-10 py-4 rounded-full font-poppins text-sm tracking-widest uppercase hover:bg-maroon/90 transition-colors shadow-lg"
        >
          {weddingConfig.hero.buttonText}
        </motion.button>
      </motion.div>

      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-gold opacity-50"
      >
        <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
          <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
        </svg>
      </motion.div>
    </section>
  );
};

const Couple = () => (
  <section id="couple" className="py-20 px-4 max-w-6xl mx-auto">
    <SectionDivider />
    <h2 className="text-center font-playfair text-4xl md:text-5xl text-maroon mb-16 italic">The Happy Couple</h2>
    
    <div className="grid md:grid-cols-2 gap-12 md:gap-24">
      {/* Groom */}
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative mb-8 inline-block group">
          <div className="absolute -inset-2 border border-gold/30 rounded-full transition-transform group-hover:scale-105"></div>
          <img src={weddingConfig.couple.groom.image} alt={weddingConfig.names.groom} className="w-64 h-64 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <h3 className="font-playfair text-3xl text-maroon mb-2">{weddingConfig.couple.groom.name}</h3>
        <p className="text-gold uppercase tracking-widest text-xs mb-4">The Groom</p>
        <p className="text-maroon/60 font-poppins text-sm leading-relaxed max-w-xs mx-auto italic">
          {weddingConfig.couple.groom.parents}
        </p>
      </motion.div>

      {/* Bride */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <div className="relative mb-8 inline-block group">
          <div className="absolute -inset-2 border border-gold/30 rounded-full transition-transform group-hover:scale-105"></div>
          <img src={weddingConfig.couple.bride.image} alt={weddingConfig.names.bride} className="w-64 h-64 object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-700" />
        </div>
        <h3 className="font-playfair text-3xl text-maroon mb-2">{weddingConfig.couple.bride.name}</h3>
        <p className="text-gold uppercase tracking-widest text-xs mb-4">The Bride</p>
        <p className="text-maroon/60 font-poppins text-sm leading-relaxed max-w-xs mx-auto italic">
          {weddingConfig.couple.bride.parents}
        </p>
      </motion.div>
    </div>
  </section>
);

const Events = () => (
  <section id="events" className="py-20 bg-beige/30">
    <div className="max-w-4xl mx-auto px-4">
      <SectionDivider />
      <h2 className="text-center font-playfair text-4xl md:text-5xl text-maroon mb-16 italic">Wedding Events</h2>
      
      <div className="space-y-12">
        {weddingConfig.events.map((event, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass-card p-8 rounded-2xl relative overflow-hidden flex flex-col md:flex-row items-center md:items-start gap-6 group hover:shadow-xl transition-shadow"
          >
            <div className="text-5xl text-gold/40 group-hover:text-gold transition-colors">{event.icon}</div>
            <div className="flex-1 text-center md:text-left">
              <h3 className="font-playfair text-2xl text-maroon mb-2">{event.title}</h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 text-sm text-maroon/70 mb-4 font-poppins uppercase tracking-widest">
                <span>📅 {event.date}</span>
                <span>⏰ {event.time}</span>
              </div>
              <p className="text-maroon/80 font-poppins mb-1 font-semibold">{event.location}</p>
              {event.address && <p className="text-maroon/60 text-sm font-poppins italic">{event.address}</p>}
              {event.note && (
                <div className="mt-4 inline-block px-3 py-1 bg-gold/10 text-gold text-xs rounded-full font-semibold">
                  Note: {event.note}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Venue = () => (
  <section id="venue" className="py-20 px-4">
    <div className="max-w-5xl mx-auto">
      <SectionDivider />
      <h2 className="text-center font-playfair text-4xl md:text-5xl text-maroon mb-16 italic">The Venue</h2>
      
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="rounded-3xl overflow-hidden shadow-2xl h-[400px] relative group"
        >
          <iframe
            src={weddingConfig.venue.mapsEmbed}
            className="w-full h-full grayscale hover:grayscale-0 transition-all duration-700 border-none"
            allowFullScreen=""
            loading="lazy"
            title="Venue Location"
          ></iframe>
          <div className="absolute top-4 left-4 bg-maroon text-cream px-4 py-2 rounded-full text-xs tracking-widest uppercase flex items-center gap-2">
            <motion.span 
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >📍</motion.span>
            Milan Garden
          </div>
        </motion.div>

        <div className="text-center lg:text-left space-y-6">
          <h3 className="font-playfair text-3xl text-maroon">{weddingConfig.venue.name}</h3>
          <p className="text-maroon/70 font-poppins leading-relaxed italic">
            {weddingConfig.venue.address}
          </p>
          <motion.a 
            href={weddingConfig.venue.navigateLink}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 bg-transparent border-2 border-gold text-gold px-8 py-3 rounded-full font-poppins text-sm tracking-widest uppercase hover:bg-gold hover:text-cream transition-all"
          >
            <span>Navigate to Venue</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 3L14.5 21L11.5 12.5L3 9.5L21 3Z" />
            </svg>
          </motion.a>
        </div>
      </div>
    </div>
  </section>
);

const Gallery = () => (
  <section id="gallery" className="py-20 bg-cream">
    <div className="max-w-6xl mx-auto px-4">
      <SectionDivider />
      <h2 className="text-center font-playfair text-4xl md:text-5xl text-maroon mb-16 italic">Our Memories</h2>
      
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {weddingConfig.gallery.map((img, i) => (
          <motion.div 
            key={i}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="relative group overflow-hidden rounded-2xl"
          >
            <img 
              src={img} 
              alt={`Gallery ${i}`} 
              className="w-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-maroon/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-cream text-2xl font-playfair italic">Forever ❤️</span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-20 px-4">
    <div className="max-w-3xl mx-auto text-center">
      <SectionDivider />
      <h2 className="font-playfair text-4xl md:text-5xl text-maroon mb-8 italic">RSVP & Contacts</h2>
      <p className="text-maroon/70 font-poppins mb-12 max-w-lg mx-auto leading-relaxed">
        For any inquiries or to confirm your presence, feel free to contact the families directly.
      </p>

      <div className="grid sm:grid-cols-2 gap-8 mb-12">
        {weddingConfig.contact.phones.map((phone, i) => (
          <div key={i} className="glass-card p-6 rounded-2xl flex flex-col items-center">
            <span className="text-xs uppercase tracking-widest text-gold mb-4">Contact Person {i + 1}</span>
            <span className="font-playfair text-2xl text-maroon mb-6 tracking-wide">{phone}</span>
            <div className="flex gap-4">
              <motion.a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-maroon text-cream rounded-full flex items-center justify-center shadow-lg"
              >
                📞
              </motion.a>
              <motion.a 
                href={`https://wa.me/${phone.replace(/[+\s]/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-12 h-12 bg-green-600 text-cream rounded-full flex items-center justify-center shadow-lg"
              >
                💬
              </motion.a>
            </div>
          </div>
        ))}
      </div>

      <div className="text-maroon/60 font-poppins text-sm italic">
        {weddingConfig.contact.address}
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-12 bg-maroon text-cream text-center">
    <h2 className="font-playfair text-3xl mb-4 italic">{weddingConfig.names.groom} ❤️ {weddingConfig.names.bride}</h2>
    <p className="font-poppins text-xs uppercase tracking-[0.3em] opacity-60 mb-8">Wedding Celebration 2026</p>
    <div className="text-[10px] uppercase tracking-widest opacity-40">
      Made with Love for Yashraj & Aditi
    </div>
  </footer>
);

function EnvelopeOverlay({ onOpen }) {
  const [opened, setOpened] = useState(false);
  const handleClick = () => {
    if (!opened) {
      setOpened(true);
      setTimeout(onOpen, 1100);
    }
  };
  const sealBg = 'radial-gradient(ellipse at 30% 30%, #d7b865, #b9952a 60%, #9e7f1f)';
  return (
    <div className="fixed inset-0 z-50 grid place-items-center bg-ivory [perspective:1200px]">
      <div className="absolute inset-0 flex">
        <motion.div
          className="flex-1 bg-white border border-gold/20 shadow-2xl"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: opened ? -110 : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          style={{ transformOrigin: 'left center', backfaceVisibility: 'hidden' }}
        />
        <motion.div
          className="flex-1 bg-white border border-gold/20 shadow-2xl"
          initial={{ rotateY: 0 }}
          animate={{ rotateY: opened ? 110 : 0 }}
          transition={{ type: 'spring', stiffness: 80, damping: 20, delay: 0.2 }}
          style={{ transformOrigin: 'right center', backfaceVisibility: 'hidden' }}
        />
      </div>
      <motion.button
        onClick={handleClick}
        initial={{ scale: 1, opacity: 1 }}
        animate={{ scale: opened ? 0 : 1, opacity: opened ? 0 : 1 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
        aria-label="Open invitation"
        className="relative grid place-items-center rounded-full shadow-2xl text-white"
        style={{
          width: 'min(40vw, 160px)',
          height: 'min(40vw, 160px)',
          background: sealBg,
          letterSpacing: '1px',
          fontFamily: '"Playfair Display", serif',
          fontSize: 'clamp(20px, 5vw, 34px)'
        }}
      >
        {weddingConfig.names.monogram || 'Y & A'}
      </motion.button>
    </div>
  );
}

export default function App() {
  const [muted, setMuted] = useState(true);
  const [showOverlay, setShowOverlay] = useState(() => {
    try {
      const params = new URLSearchParams(window.location.search);
      return params.get('open') !== '1';
    } catch {
      return true;
    }
  });
  const soundRef = useRef(null);

  const ensureHowl = () => {
    if (!sharedHowl) {
      sharedHowl = new Howl({
        src: [weddingConfig.audio.url],
        html5: true,
        loop: true,
        volume: weddingConfig.audio.volume
      });
    }
    soundRef.current = sharedHowl;
  };

  useEffect(() => {
    if (import.meta?.hot) {
      import.meta.hot.dispose(() => {
        if (sharedHowl) {
          sharedHowl.unload();
          sharedHowl = null;
        }
      });
    }
  }, []);

  const toggleMute = () => {
    ensureHowl();
    const s = soundRef.current;
    if (!s) return;
    if (muted) {
      if (!s.playing()) s.play();
      s.mute(false);
    } else {
      s.mute(true);
    }
    setMuted((m) => !m);
  };

  const scrollToInvitation = () => {
    const el = document.getElementById('couple');
    el?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    document.body.style.overflow = showOverlay ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [showOverlay]);

  const handleEnvelopeOpen = () => {
    setShowOverlay(false);
    ensureHowl();
    const s = soundRef.current;
    if (s) {
      if (!s.playing()) s.play();
      s.mute(false);
      setMuted(false);
    }
  };

  return (
    <div className="app selection:bg-gold selection:text-cream overflow-x-hidden bg-cream">
      {showOverlay && <EnvelopeOverlay onOpen={handleEnvelopeOpen} />}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        onClick={toggleMute}
        className="fixed bottom-6 right-6 z-50 w-12 h-12 bg-white/80 backdrop-blur-sm border border-gold/30 rounded-full flex items-center justify-center shadow-xl text-maroon hover:bg-white transition-colors"
      >
        {muted ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM22 9l-6 6M16 9l6 6" /></svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14" /></svg>
        )}
      </motion.button>

      {/* Floating RSVP Button */}
      <motion.a
        href="#contact"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        className="fixed bottom-6 left-1/2 -translate-x-1/2 z-40 bg-gold text-cream px-8 py-3 rounded-full font-poppins text-[10px] tracking-[0.2em] uppercase shadow-2xl hover:bg-maroon transition-all"
      >
        RSVP Now
      </motion.a>

      <Hero onExplore={scrollToInvitation} />
      <Couple />
      <Events />
      <Venue />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}
