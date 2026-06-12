import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Droplet, Eye, Activity } from 'lucide-react';
import CountUp from 'react-countup';
import { useState, useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const floatingIcons = [
  { Icon: Heart, delay: 0, duration: 8 },
  { Icon: Droplet, delay: 1, duration: 10 },
  { Icon: Eye, delay: 2, duration: 9 },
  { Icon: Activity, delay: 0.5, duration: 11 },
  { Icon: Heart, delay: 3, duration: 7 },
  { Icon: Droplet, delay: 1.5, duration: 12 },
  { Icon: Eye, delay: 2.5, duration: 8 },
  { Icon: Activity, delay: 4, duration: 10 },
  { Icon: Heart, delay: 0.7, duration: 9 },
  { Icon: Droplet, delay: 3.5, duration: 11 },
  { Icon: Eye, delay: 1.2, duration: 8 },
  { Icon: Activity, delay: 2.8, duration: 10 },
];

export default function Hero() {
  const [todayDonors, setTodayDonors] = useState(127);
  const { t, language } = useLanguage();

  useEffect(() => {
    const interval = setInterval(() => {
      setTodayDonors(prev => prev + Math.floor(Math.random() * 3));
    }, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen bg-gradient-to-br from-deep-forest via-deep-forest to-medical-green overflow-hidden">
      {/* SVG Filter to remove white background from the heart image */}
      <svg style={{ position: 'absolute', width: 0, height: 0, pointerEvents: 'none' }}>
        <defs>
          <filter id="remove-white">
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 -1.5 -1.5 -1.5 4.5 0"
            />
          </filter>
        </defs>
      </svg>

      {/* Floating Background Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingIcons.map((item, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{
              left: `${(index * 8 + 5) % 90}%`,
              top: '100%',
            }}
            animate={{
              y: [0, -window.innerHeight - 100],
              opacity: [0, 0.06, 0.06, 0],
            }}
            transition={{
              duration: item.duration,
              delay: item.delay,
              repeat: Infinity,
              ease: 'linear',
            }}
          >
            <item.Icon className="w-6 h-6 text-white" />
          </motion.div>
        ))}
      </div>

      <div className="container-custom relative z-10 min-h-screen flex items-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center py-20">
          {/* Hero Text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-left"
          >
            <h1 className="text-white font-bold text-4xl md:text-5xl lg:text-[56px] leading-tight mb-6">
              {t('hero.title')}
            </h1>
            <p className="text-white/70 text-lg md:text-xl mb-4 leading-relaxed max-w-xl">
              {t('hero.subtitle')}
            </p>

            {/* Live Counter */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 mb-8 text-white/90"
            >
              <div className="w-2 h-2 bg-life-green rounded-full animate-pulse" />
              <span className="text-sm">
                <CountUp end={todayDonors} duration={2} separator="," /> {t('hero.pledgedToday')}
              </span>
            </motion.div>

            <div className="flex flex-wrap gap-4 mb-6">
              <Link to="/register" className="btn-primary">
                {t('hero.cta')}
              </Link>
              <Link to="/learn" className="btn-secondary">
                {t('hero.learnHow')}
              </Link>
            </div>
            <p className="text-white/50 text-sm">
              {t('hero.joinDonors')}
            </p>
          </motion.div>

          {/* Animated Heart */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center items-center"
          >
            <div className="relative flex items-center justify-center">
              {/* Main pulsing heart */}
              <motion.div
                animate={{ scale: [1, 1.08, 1] }}
                transition={{ duration: 0.9, repeat: Infinity, ease: 'easeInOut' }}
                className="relative"
              >
                <img
                  src="https://th.bing.com/th/id/OIP.U5AHgthMroUdR7__6DXQiQHaHa?w=192&h=194&c=7&r=0&o=7&dpr=1.9&pid=1.7&rm=3"
                  alt="Real Heart"
                  crossOrigin="anonymous"
                  className="w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 object-contain rounded-full overflow-hidden"
                  style={{
                    filter: 'url(#remove-white) drop-shadow(0 0 35px rgba(226,75,74,0.75))'
                  }}
                />
              </motion.div>

              {/* Pulse Rings */}
              <motion.div
                animate={{ scale: [1, 1.5, 2], opacity: [0.5, 0.2, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: 'easeOut' }}
                className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-life-red/30"
              />
              <motion.div
                animate={{ scale: [1, 1.5, 2], opacity: [0.3, 0.1, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5, ease: 'easeOut' }}
                className="absolute w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80 rounded-full border-2 border-life-red/20"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/50"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs">{t('hero.scroll')}</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-1">
            <motion.div
              animate={{ y: [0, 12, 0] }}
              transition={{ duration: 1, repeat: Infinity }}
              className="w-1.5 h-3 bg-white/50 rounded-full"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
