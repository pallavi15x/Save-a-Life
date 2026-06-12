import { Link } from 'react-router-dom';
import { Heart, Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, Phone, MapPin } from 'lucide-react';

import { useLanguage } from '../../context/LanguageContext';

const quickLinks = [
  { nameKey: 'nav.home', path: '/' },
  { nameKey: 'nav.learn', path: '/learn' },
  { nameKey: 'nav.register', path: '/register' },
  { nameKey: 'nav.stories', path: '/stories' },
  { nameKey: 'nav.campaigns', path: '/campaigns' },
];

const socialLinks = [
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export default function Footer() {
  const { language, t } = useLanguage();

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    const alerts = {
      en: 'Thank you for subscribing!',
      hi: 'सदस्यता लेने के लिए धन्यवाद!',
      ta: 'பதிவுசெய்ததற்கு நன்றி!',
      te: 'సభ్యత్వం పొందినందుకు ధన్యవాదాలు!',
      mr: 'सदस्यता घेतल्याबद्दल धन्यवाद!'
    };
    alert(alerts[language] || alerts.en);
  };

  const locations = {
    en: 'New Delhi, India',
    hi: 'नई दिल्ली, भारत',
    ta: 'புது தில்லி, இந்தியா',
    te: 'న్యూ ఢిల్లీ, భారతదేశం',
    mr: 'नवी दिल्ली, भारत'
  };

  const forIndiaText = {
    en: 'for India',
    hi: 'भारत के लिए',
    ta: 'இந்தியாவுக்காக',
    te: 'భారతదేశం కోసం',
    mr: 'भारतासाठी'
  };

  return (
    <footer className="bg-deep-forest dark:bg-gray-900 text-white">
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <Link to="/" className="flex items-center gap-2 font-bold text-xl mb-4">
              <Heart className="w-8 h-8 text-life-red fill-life-red" />
              <span>Save a Life</span>
            </Link>
            <p className="text-white/70 mb-4 leading-relaxed">{t('footer.tagline')}</p>
            <div className="space-y-2 text-white/70 text-sm">
              <div className="flex items-center gap-2"><Phone className="w-4 h-4" /><span>1800-XXX-XXXX ({t('footer.tollFree')})</span></div>
              <div className="flex items-center gap-2"><Mail className="w-4 h-4" /><span>support@savealife.org</span></div>
              <div className="flex items-center gap-2"><MapPin className="w-4 h-4" /><span>{locations[language] || locations.en}</span></div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.quickLinks')}</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path} className="text-white/70 hover:text-white transition-colors">{t(link.nameKey)}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.followUs')}</h3>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a key={social.label} href={social.href} className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-life-green transition-colors" aria-label={social.label}>
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">{t('footer.stayUpdated')}</h3>
            <p className="text-white/70 mb-4 text-sm">{t('footer.newsletterSub')}</p>
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <input type="email" placeholder={t('footer.emailPlaceholder')} className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:border-life-green" required />
              <button type="submit" className="w-full btn-primary bg-life-green hover:bg-medical-green">{t('footer.subscribe')}</button>
            </form>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container-custom py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/60 text-sm">&copy; {new Date().getFullYear()} Save a Life. {t('footer.rights')}</p>
          <p className="text-white/60 text-sm flex items-center gap-1">{t('footer.madeWith')} <Heart className="w-4 h-4 text-life-red fill-life-red" /> {forIndiaText[language] || forIndiaText.en}</p>
        </div>
      </div>
    </footer>
  );
}
