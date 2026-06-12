import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Mail, Lock, Eye, EyeOff, User, Building2 } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

export default function LoginPage() {
  const navigate = useNavigate();
  const [userType, setUserType] = useState('donor');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { language } = useLanguage();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (userType === 'organization') {
      navigate('/org-portal');
    } else if (userType === 'admin') {
      navigate('/admin');
    } else {
      navigate('/');
    }
  };

  const pageTexts = {
    en: {
      subtitle: "Sign in to your account",
      donor: "Donor",
      org: "Organization",
      admin: "Admin",
      email: "Email Address",
      password: "Password",
      emailPlaceholder: "Enter your email",
      passPlaceholder: "Enter your password",
      rememberMe: "Remember me",
      forgotPass: "Forgot password?",
      btnSubmit: "Sign In",
      noAccount: "Don't have an account?",
      btnRegister: "Register as a Donor"
    },
    hi: {
      subtitle: "अपने खाते में लॉग इन करें",
      donor: "दाता",
      org: "संस्था",
      admin: "प्रशासक",
      email: "ईमेल पता",
      password: "पासवर्ड",
      emailPlaceholder: "अपना ईमेल दर्ज करें",
      passPlaceholder: "अपना पासवर्ड दर्ज करें",
      rememberMe: "मुझे याद रखें",
      forgotPass: "पासवर्ड भूल गए?",
      btnSubmit: "लॉग इन करें",
      noAccount: "खाता नहीं है?",
      btnRegister: "दाता के रूप में पंजीकरण करें"
    },
    ta: {
      subtitle: "உங்கள் கணக்கில் உள்நுழையவும்",
      donor: "கொடையாளி",
      org: "அமைப்பு",
      admin: "நிர்வாகி",
      email: "மின்னஞ்சல் முகவரி",
      password: "கடவுச்சொல்",
      emailPlaceholder: "மின்னஞ்சலை உள்ளிடவும்",
      passPlaceholder: "கடவுச்சொல்லை உள்ளிடவும்",
      rememberMe: "என்னை நினைவில் கொள்",
      forgotPass: "கடவுச்சொல்லை மறந்துவிட்டீர்களா?",
      btnSubmit: "உள்நுழை",
      noAccount: "கணக்கு இல்லையா?",
      btnRegister: "கொடையாளியாக பதிவு செய்யவும்"
    },
    te: {
      subtitle: "మీ ఖాతాలోకి సైన్ ఇన్ చేయండి",
      donor: "దాత",
      org: "సంస్థ",
      admin: "అడ్మిన్",
      email: "ఈమెయిల్ చిరునామా",
      password: "పాస్వర్డ్",
      emailPlaceholder: "మీ ఈమెయిల్ నమోదు చేయండి",
      passPlaceholder: "మీ పాస్వర్డ్ నమోదు చేయండి",
      rememberMe: "నన్ను గుర్తుంచుకో",
      forgotPass: "పాస్వర్డ్ మర్చిపోయారా?",
      btnSubmit: "సైన్ ఇన్ చేయండి",
      noAccount: "ఖాతా లేదా?",
      btnRegister: "దాతగా నమోదు చేసుకోండి"
    },
    mr: {
      subtitle: "आपल्या खात्यात लॉग इन करा",
      donor: "दाता",
      org: "संस्था",
      admin: "अॅडमिन",
      email: "ईमेल पत्ता",
      password: "पासवर्ड",
      emailPlaceholder: "आपला ईमेल प्रविष्ट करा",
      passPlaceholder: "आपला पासवर्ड प्रविष्ट करा",
      rememberMe: "माझी नोंद ठेवा",
      forgotPass: "पासवर्ड विसरलात?",
      btnSubmit: "लॉग इन करा",
      noAccount: "खाते नाही का?",
      btnRegister: "दाता म्हणून नोंदणी करा"
    }
  };

  const texts = pageTexts[language] || pageTexts.en;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-deep-forest to-medical-green py-12 px-4"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="w-full max-w-md"
      >
        <div className="text-center mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-white font-bold text-2xl mb-4">
            <Heart className="w-10 h-10 text-life-red fill-life-red" />
            Save a Life
          </Link>
          <p className="text-white/80">{texts.subtitle}</p>
        </div>

        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl p-8">
          <div className="flex mb-6 bg-gray-100 dark:bg-gray-800 rounded-lg p-1">
            <button onClick={() => setUserType('donor')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${userType === 'donor' ? 'bg-white dark:bg-gray-700 text-deep-forest dark:text-white shadow' : 'text-slate-gray dark:text-gray-400'}`}>
              <User className="w-4 h-4" />{texts.donor}
            </button>
            <button onClick={() => setUserType('organization')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${userType === 'organization' ? 'bg-white dark:bg-gray-700 text-deep-forest dark:text-white shadow' : 'text-slate-gray dark:text-gray-400'}`}>
              <Building2 className="w-4 h-4" />{texts.org}
            </button>
            <button onClick={() => setUserType('admin')} className={`flex-1 py-2 px-4 rounded-md text-sm font-medium transition-colors flex items-center justify-center gap-2 ${userType === 'admin' ? 'bg-white dark:bg-gray-700 text-deep-forest dark:text-white shadow' : 'text-slate-gray dark:text-gray-400'}`}>
              <User className="w-4 h-4" />{texts.admin}
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{texts.email}</label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray" />
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green" placeholder={texts.emailPlaceholder} required />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{texts.password}</label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-gray" />
                <input type={showPassword ? 'text' : 'password'} value={password} onChange={(e) => setPassword(e.target.value)} className="w-full pl-10 pr-12 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green" placeholder={texts.passPlaceholder} required />
                <button type="button" onClick={() => setShowPassword(!showPassword)} className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-gray hover:text-deep-forest">
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 cursor-pointer">
                <input type="checkbox" className="w-4 h-4 rounded border-gray-300 text-life-green" />
                <span className="text-slate-gray dark:text-gray-400">{texts.rememberMe}</span>
              </label>
              <Link to="/forgot-password" className="text-life-green hover:underline">{texts.forgotPass}</Link>
            </div>
            <button type="submit" className="btn-primary w-full">{texts.btnSubmit}</button>
          </form>

          <div className="mt-6 text-center">
            <p className="text-sm text-slate-gray dark:text-gray-400">
              {texts.noAccount}{' '}
              <Link to="/register" className="text-life-green hover:underline font-medium">{texts.btnRegister}</Link>
            </p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
