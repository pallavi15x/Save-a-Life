import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Cookie } from 'lucide-react';

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setTimeout(() => setIsVisible(true), 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setIsVisible(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-0 left-0 right-0 bg-deep-forest dark:bg-gray-900 text-white p-4 z-50 shadow-lg"
        >
          <div className="container-custom">
            <div className="flex flex-col md:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <Cookie className="w-6 h-6 text-life-green" />
                <p className="text-sm">We use cookies to improve your experience. By continuing, you agree to our use of cookies.</p>
              </div>
              <div className="flex items-center gap-3">
                <button onClick={declineCookies} className="px-4 py-2 text-sm text-white/80 hover:text-white transition-colors">
                  Decline
                </button>
                <button onClick={acceptCookies} className="px-4 py-2 bg-life-green text-white rounded-lg text-sm hover:bg-medical-green transition-colors">
                  Accept
                </button>
                <button onClick={declineCookies} className="p-1 hover:bg-white/10 rounded-full">
                  <X className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
