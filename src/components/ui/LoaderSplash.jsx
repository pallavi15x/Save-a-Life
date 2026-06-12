import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

export default function LoaderSplash({ onComplete }) {
  const [isExiting, setIsExiting] = useState(false);
  const { t } = useLanguage();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsExiting(true);
      setTimeout(onComplete, 500);
    }, 3800); // Wait for the 3s animation to finish + a short delay
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {!isExiting && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed inset-0 z-[100] bg-deep-forest flex flex-col items-center justify-center"
        >
          <div className="relative flex items-center justify-center mb-8 w-64 h-64 md:w-80 md:h-80">
            {/* Neon ECG Heartbeat Line */}
            <svg viewBox="0 0 300 100" className="absolute w-[340px] h-[120px] md:w-[440px] md:h-[160px] z-0 overflow-visible">
              <defs>
                <linearGradient id="ecg-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#E24B4A" stopOpacity="0.1" />
                  <stop offset="30%" stopColor="#E24B4A" stopOpacity="1" />
                  <stop offset="48%" stopColor="#E24B4A" stopOpacity="1" />
                  <stop offset="52%" stopColor="#1A6B4A" stopOpacity="1" />
                  <stop offset="70%" stopColor="#1A6B4A" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1A6B4A" stopOpacity="0.1" />
                </linearGradient>
              </defs>
              
              {/* Outer soft neon glow path */}
              <motion.path
                d="M 10 50 L 60 50 L 65 45 L 70 50 L 73 53 L 77 15 L 81 85 L 85 50 L 92 45 L 98 50 L 202 50 L 207 45 L 212 50 L 215 53 L 219 15 L 223 85 L 227 50 L 234 45 L 240 50 L 290 50"
                fill="none"
                stroke="url(#ecg-grad)"
                strokeWidth="6"
                strokeLinecap="round"
                strokeLinejoin="round"
                opacity="0.3"
                className="blur-[2px]"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              
              {/* Inner sharp glowing path */}
              <motion.path
                d="M 10 50 L 60 50 L 65 45 L 70 50 L 73 53 L 77 15 L 81 85 L 85 50 L 92 45 L 98 50 L 202 50 L 207 45 L 212 50 L 215 53 L 219 15 L 223 85 L 227 50 L 234 45 L 240 50 L 290 50"
                fill="none"
                stroke="url(#ecg-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
            </svg>

            {/* Glowing & Breathing Heart */}
            <motion.div
              animate={{ 
                scale: [1, 1.15, 0.98, 1, 1, 1.15, 0.98, 1, 1],
                filter: [
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 35px rgba(226,75,74,0.85))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 35px rgba(226,75,74,0.85))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))",
                  "drop-shadow(0 0 15px rgba(226,75,74,0.4))"
                ]
              }}
              transition={{ 
                duration: 3, 
                ease: 'easeInOut',
                times: [0, 0.22, 0.28, 0.35, 0.70, 0.76, 0.82, 0.90, 1] 
              }}
              className="z-10 relative"
            >
              <Heart className="w-28 h-28 md:w-36 md:h-36 text-life-red fill-life-red" />
            </motion.div>
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="mt-8 text-4xl md:text-6xl font-bold text-white"
          >
            {t('loader.title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="mt-4 text-white/70 text-lg md:text-xl"
          >
            {t('loader.subtitle')}
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
