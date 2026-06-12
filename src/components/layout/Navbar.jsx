import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Moon, Sun, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';
import { useLanguage } from '../../context/LanguageContext';

const languages = [
  { code: 'en', name: 'English' },
  { code: 'hi', name: 'हिंदी' },
  { code: 'ta', name: 'தமிழ்' },
  { code: 'te', name: 'తెలుగు' },
  { code: 'mr', name: 'मराठी' },
  { code: 'bn', name: 'বাংলা' },
  { code: 'gu', name: 'ગુજરાતી' },
  { code: 'kn', name: 'ಕನ್ನಡ' },
  { code: 'ml', name: 'മലയാളം' },
  { code: 'pa', name: 'ਪੰਜਾਬੀ' },
  { code: 'ur', name: 'اردو' },
  { code: 'es', name: 'Español' },
  { code: 'fr', name: 'Français' },
  { code: 'de', name: 'Deutsch' },
  { code: 'zh-CN', name: '中文' },
  { code: 'ru', name: 'Русский' },
  { code: 'ar', name: 'العربية' },
  { code: 'ja', name: '日本語' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLangMenu, setShowLangMenu] = useState(false);
  const location = useLocation();
  const { darkMode, toggleDarkMode } = useTheme();
  const { language, setLanguage, t } = useLanguage();

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.learn'), path: '/learn' },
    { name: t('nav.myths'), path: '/myths' },
    { name: t('nav.register'), path: '/register' },
    { name: t('nav.stories'), path: '/stories' },
    { name: t('nav.campaigns'), path: '/campaigns' },
  ];

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <div className="w-full sticky top-0 z-50 bg-deep-forest shadow-md">
      <nav className="w-full">
        <div className="container-custom">
          <div className="relative flex items-center justify-center w-full h-16 md:h-20 px-2 md:px-6">
            
            {/* Left Corner Logo */}
            <div className="absolute left-4 md:left-8 top-0 bottom-0 flex items-center z-10 bg-deep-forest pr-4 after:content-[''] after:absolute after:right-[-30px] after:w-[30px] after:h-full after:bg-gradient-to-l after:from-transparent after:to-deep-forest">
              <Link to="/" className="flex items-center gap-2 text-white font-bold text-xl shrink-0">
                <Heart className="w-6 h-6 sm:w-8 sm:h-8 text-life-red fill-life-red" />
                <span className="hidden sm:block">Save a Life</span>
              </Link>
            </div>

            <div className="flex-1 flex items-center justify-start md:justify-center overflow-x-auto overflow-y-hidden whitespace-nowrap no-scrollbar px-2 pl-[180px] md:pl-[200px]">
              <div className="flex items-center gap-2 md:gap-4 shrink-0 relative">
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`relative px-4 py-2 rounded-full transition-all duration-300 text-sm z-10 group ${
                        isActive
                          ? 'text-white font-bold drop-shadow-[0_0_8px_rgba(255,255,255,0.6)]'
                          : 'text-white/80 hover:text-white font-medium'
                      }`}
                    >
                      {isActive && (
                        <>
                          <motion.div
                            layoutId="navPill"
                            className="absolute inset-0 bg-gradient-to-r from-life-red/20 to-life-green/20 border border-life-green/40 rounded-full -z-10 shadow-[0_0_15px_rgba(26,107,74,0.6)]"
                            transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
                          />
                          <motion.div
                            layoutId="navUnderline"
                            className="absolute bottom-[2px] left-4 right-4 h-[2px] bg-life-green shadow-[0_0_8px_rgba(26,107,74,0.8)] rounded-full -z-10"
                            transition={{ type: 'spring', stiffness: 800, damping: 35, mass: 0.5 }}
                          />
                        </>
                      )}
                      {!isActive && (
                        <div className="absolute inset-0 bg-white/5 rounded-full -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      )}
                      {link.name}
                    </Link>
                  );
                })}
              </div>
            </div>

            <div className="w-px h-8 bg-white/20 hidden sm:block shrink-0 mx-2"></div>

            {/* Right Actions (Fixed) */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {/* Language Selector */}
              <div className="relative">
                <button onClick={() => setShowLangMenu(!showLangMenu)} className="flex items-center gap-1 text-white/90 hover:text-white p-2 hover:bg-white/10 rounded-full transition-colors">
                  <Globe className="w-4 h-4 md:w-5 md:h-5" />
                  <span className="text-xs md:text-sm">{languages.find(l => l.code === language)?.name || 'EN'}</span>
                </button>
                {showLangMenu && (
                  <div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 rounded-xl shadow-2xl py-2 min-w-[120px] max-h-64 overflow-y-auto border border-gray-100 dark:border-gray-700 z-[100]">
                    {languages.map((lang) => (
                      <button key={lang.code} onClick={() => { setLanguage(lang.code); setShowLangMenu(false); }} className={`block w-full text-left px-4 py-2 text-sm transition-colors ${language === lang.code ? 'text-life-green bg-mint-tint dark:bg-gray-700 font-bold' : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700'}`}>
                        {lang.name}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Dark Mode Toggle */}
              <button onClick={toggleDarkMode} className="p-2 text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                {darkMode ? <Sun className="w-4 h-4 md:w-5 md:h-5" /> : <Moon className="w-4 h-4 md:w-5 md:h-5" />}
              </button>

              <Link to="/login" className="text-white hover:text-life-green transition-colors text-sm font-medium px-2 hidden sm:block">{t('nav.login')}</Link>
              <Link to="/register" className="bg-life-green hover:bg-white hover:text-deep-forest text-white text-sm font-bold px-4 py-2 rounded-full transition-all shadow-md hover:shadow-lg">{t('nav.donateNow')}</Link>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
