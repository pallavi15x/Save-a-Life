import { motion } from 'framer-motion';
import { BookOpen, Users, Clock, Heart, FileText, Building2, Stethoscope, HeartPulse, HandHeart, ChevronDown, UserCheck, Activity, Eye, Droplet, Wind, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import { organs, processSteps, faqs, bloodGroups, bloodCompatibility } from '../data/organData';
import { organsHi, faqsHi, processStepsHi } from '../data/organDataHindi';
import { organsTa, faqsTa, processStepsTa, organsTe, faqsTe, processStepsTe, organsMr, faqsMr, processStepsMr } from '../data/organDataI18n';
import { useLanguage } from '../context/LanguageContext';

const learnCards = [
  { icon: BookOpen, title: 'What is Organ Donation?', description: 'Organ donation is the process of giving an organ or tissue to save or transform the life of another person.' },
  { icon: Users, title: 'Who Can Donate', description: 'Anyone can register as a donor. Age, medical conditions, and lifestyle do not automatically disqualify you.' },
  { icon: Clock, title: 'When It Happens', description: 'Deceased donation occurs after brain death. Living donation can happen while the donor is alive.' },
];

const learnCardsHi = [
  { icon: BookOpen, title: 'अंग दान क्या है?', description: 'अंग दान किसी अन्य व्यक्ति के जीवन को बचाने या बदलने के लिए अंग या ऊतक देने की प्रक्रिया है।' },
  { icon: Users, title: 'कौन दान कर सकता है', description: 'कोई भी दाता के रूप में पंजीकरण कर सकता है। आयु, चिकित्सीय स्थितियां और जीवनशैली आपको स्वतः अयोग्य नहीं बनाती हैं।' },
  { icon: Clock, title: 'यह कब होता है', description: 'मृत्यु के बाद दान मस्तिष्क मृत्यु के बाद होता है। जीवित दान दाता के जीवित रहने के दौरान हो सकता है।' },
];

const learnCardsTa = [
  { icon: BookOpen, title: 'அவயவ தானம் என்றால் என்ன?', description: 'அவயவ தானம் என்பது மற்றொரு நபரின் உயிரைக் காப்பாற்ற அல்லது மாற்ற ஒரு உறுப்பு அல்லது திசுக்களை வழங்கும் செயல்முறையாகும்.' },
  { icon: Users, title: 'யார் தானம் செய்யலாம்', description: 'யார் வேண்டுமானாலும் தானம் செய்பவராகப் பதிவு செய்யலாம். வயது, மருத்துவ நிலைகள் மற்றும் வாழ்க்கை முறை ஆகியவை உங்களைத் தானாகவே தகுதி நீக்கம் செய்யாது.' },
  { icon: Clock, title: 'அது எப்போது நடக்கும்', description: 'மூளை மரணத்திற்குப் பிறகு இறந்த தானம் நிகழ்கிறது. கொடையாளி உயிரோடு இருக்கும்போதே உயிருள்ள தானம் நடக்கலாம்.' },
];

const learnCardsTe = [
  { icon: BookOpen, title: 'అవయవ దానం అంటే ఏమిటి?', description: 'అవయవ దానం అంటే మరొకరి ప్రాణాన్ని కాపాడటానికి లేదా మార్చడానికి ఒక అవయవం లేదా కణజాలాన్ని ఇచ్చే ప్రక్రియ.' },
  { icon: Users, title: 'ఎవరు దానం చేయవచ్చు', description: 'ఎవరైనా దాతగా నమోదు చేసుకోవచ్చు. వయస్సు, వైద్య పరిస్థితులు మరియు జీవనశైలి మిమ్మల్ని స్వయంచాలకంగా అనర్హులుగా చేయవు.' },
  { icon: Clock, title: 'ఇది ఎప్పుడు జరుగుతుంది', description: 'మెదడు మరణం తర్వాత మరణించిన దానం జరుగుతుంది. దాత సజీవంగా ఉన్నప్పుడు కూడా సజీవ దానం జరగవచ్చు.' },
];

const learnCardsMr = [
  { icon: BookOpen, title: 'अवयवदान म्हणजे काय?', description: 'अवयवदान ही दुसऱ्या व्यक्तीचे जीवन वाचवण्यासाठी किंवा बदलण्यासाठी अवयव किंवा ऊतक देण्याची प्रक्रिया आहे.' },
  { icon: Users, title: 'कोण दान करू शकते', description: 'कोणीही दाता म्हणून नोंदणी करू शकते. वय, वैद्यकीय परिस्थिती आणि जीवनशैली तुम्हाला आपोआप अपात्र ठरवत नाही.' },
  { icon: Clock, title: 'हे केव्हा होते', description: 'ब्रेन डेथ झाल्यानंतर मृत्यूनंतरचे दान होते. जिवंत असतानाही अवयवदान केले जाऊ शकते.' },
];

const iconMap = { FileText, Building2, Stethoscope, HeartPulse, HandHeart, Heart, Eye, Activity, Droplet, Wind };

export default function LearnPage() {
  const [expandedOrgan, setExpandedOrgan] = useState(null);
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [selectedBloodGroup, setSelectedBloodGroup] = useState('');
  const { language, t } = useLanguage();

  const currentLearnCards = 
    language === 'hi' ? learnCardsHi : 
    language === 'ta' ? learnCardsTa : 
    language === 'te' ? learnCardsTe : 
    language === 'mr' ? learnCardsMr : 
    learnCards;

  const currentProcessSteps = 
    language === 'hi' ? processStepsHi : 
    language === 'ta' ? processStepsTa : 
    language === 'te' ? processStepsTe : 
    language === 'mr' ? processStepsMr : 
    processSteps;

  const currentFaqs = 
    language === 'hi' ? faqsHi : 
    language === 'ta' ? faqsTa : 
    language === 'te' ? faqsTe : 
    language === 'mr' ? faqsMr : 
    faqs;

  const currentOrgans = 
    language === 'hi' ? organsHi : 
    language === 'ta' ? organsTa : 
    language === 'te' ? organsTe : 
    language === 'mr' ? organsMr : 
    organs;

  const getBloodTitle = () => {
    const titles = {
      en: `Blood Group ${selectedBloodGroup} Compatibility`,
      hi: `रक्त समूह ${selectedBloodGroup} अनुकूलता`,
      ta: `இரத்த வகை ${selectedBloodGroup} பொருந்தக்கூடிய தன்மை`,
      te: `రక్త సమూహం ${selectedBloodGroup} అనుకూలత`,
      mr: `रक्त गट ${selectedBloodGroup} सुसंगतता`
    };
    return titles[language] || titles.en;
  };

  const getDonateToText = () => {
    const texts = {
      en: 'Can Donate To:',
      hi: 'इन्हें दान कर सकते हैं:',
      ta: 'இவர்களுக்கு தானம் செய்யலாம்:',
      te: 'వీరికి దానం చేయవచ్చు:',
      mr: 'यांना दान करू शकता:'
    };
    return texts[language] || texts.en;
  };

  const getReceiveFromText = () => {
    const texts = {
      en: 'Can Receive From:',
      hi: 'इनसे प्राप्त कर सकते हैं:',
      ta: 'இவர்களிடமிருந்து பெறலாம்:',
      te: 'వీరి నుండి స్వీకరించవచ్చు:',
      mr: 'यांच्याकडून मिळवू शकता:'
    };
    return texts[language] || texts.en;
  };

  const getRecipientText = (count) => {
    const texts = {
      en: count === 1 ? 'recipient' : 'recipients',
      hi: 'मरीज',
      ta: 'நோயாளி',
      te: 'రోగి',
      mr: 'रुग्ण'
    };
    return `${count} ${texts[language] || texts.en}`;
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen">
      <section className="py-20 px-4" style={{ background: 'linear-gradient(135deg, #E6F1FB 0%, #E1F5EE 100%)' }}>
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6" style={{ color: '#185FA5' }}>{t('learn.title')}</h1>
            <p className="text-lg text-slate-gray leading-relaxed">{t('learn.subtitle')}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="grid md:grid-cols-3 gap-8">
            {currentLearnCards.map((card, index) => (
              <motion.div key={card.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="bg-off-white dark:bg-gray-800 rounded-xl p-8 text-center">
                <div className="w-16 h-16 rounded-full bg-trust-blue/10 mx-auto mb-4 flex items-center justify-center">
                  <card.icon className="w-8 h-8 text-trust-blue" />
                </div>
                <h3 className="text-xl font-semibold text-deep-forest dark:text-white mb-3">{card.title}</h3>
                <p className="text-slate-gray dark:text-gray-400">{card.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Blood Group Compatibility Checker */}
      <section className="py-16 bg-mint-tint/30 dark:bg-gray-800 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white text-center mb-6">{t('learn.bloodChecker')}</h2>
            <p className="text-slate-gray dark:text-gray-400 text-center mb-8 max-w-xl mx-auto">{t('learn.bloodSub')}</p>

            <div className="max-w-2xl mx-auto">
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {bloodGroups.map((bg) => (
                  <button key={bg} onClick={() => setSelectedBloodGroup(bg)} className={`px-6 py-3 rounded-full font-medium transition-all ${selectedBloodGroup === bg ? 'bg-life-green text-white' : 'bg-white dark:bg-gray-700 text-deep-forest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-600'}`}>
                    {bg}
                  </button>
                ))}
              </div>

              {selectedBloodGroup && bloodCompatibility[selectedBloodGroup] && (
                <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="bg-white dark:bg-gray-900 rounded-xl p-6 shadow-lg">
                  <h3 className="text-xl font-semibold text-deep-forest dark:text-white mb-4 text-center">
                    {getBloodTitle()}
                  </h3>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h4 className="text-sm font-medium text-slate-gray dark:text-gray-400 mb-3">{getDonateToText()}</h4>
                      <div className="flex flex-wrap gap-2">
                        {bloodCompatibility[selectedBloodGroup].canDonateTo.map((group) => (
                          <span key={group} className="px-3 py-1 bg-mint-tint text-medical-green rounded-full text-sm font-medium">{group}</span>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-slate-gray dark:text-gray-400 mb-3">{getReceiveFromText()}</h4>
                      <div className="flex flex-wrap gap-2">
                        {bloodCompatibility[selectedBloodGroup].canReceiveFrom.map((group) => (
                          <span key={group} className="px-3 py-1 bg-blue-50 text-trust-blue rounded-full text-sm font-medium">{group}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-off-white dark:bg-gray-900 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white text-center mb-12">{t('learn.types')}</h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-mint-tint dark:bg-gray-800 rounded-xl p-8 border-t-4 border-life-green">
                <h3 className="text-xl font-semibold text-deep-forest dark:text-white mb-4">{t('learn.living')}</h3>
                <ul className="space-y-3 text-slate-gray dark:text-gray-400">
                  <li className="flex items-start gap-2"><UserCheck className="w-5 h-5 text-life-green mt-0.5 flex-shrink-0" /><span>{t('learn.living1')}</span></li>
                  <li className="flex items-start gap-2"><UserCheck className="w-5 h-5 text-life-green mt-0.5 flex-shrink-0" /><span>{t('learn.living2')}</span></li>
                  <li className="flex items-start gap-2"><UserCheck className="w-5 h-5 text-life-green mt-0.5 flex-shrink-0" /><span>{t('learn.living3')}</span></li>
                </ul>
              </motion.div>
              <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="bg-blue-50 dark:bg-gray-800 rounded-xl p-8 border-t-4 border-trust-blue">
                <h3 className="text-xl font-semibold text-deep-forest dark:text-white mb-4">{t('learn.deceased')}</h3>
                <ul className="space-y-3 text-slate-gray dark:text-gray-400">
                  <li className="flex items-start gap-2"><Heart className="w-5 h-5 text-trust-blue mt-0.5 flex-shrink-0" /><span>{t('learn.deceased1')}</span></li>
                  <li className="flex items-start gap-2"><Heart className="w-5 h-5 text-trust-blue mt-0.5 flex-shrink-0" /><span>{t('learn.deceased2')}</span></li>
                  <li className="flex items-start gap-2"><Heart className="w-5 h-5 text-trust-blue mt-0.5 flex-shrink-0" /><span>{t('learn.deceased3')}</span></li>
                </ul>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white text-center mb-12">{t('learn.process')}</h2>
            <div className="max-w-3xl mx-auto">
              {currentProcessSteps.map((step, index) => {
                const IconComponent = iconMap[step.icon] || Heart;
                return (
                  <motion.div key={step.step} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.1 }} className="relative flex gap-6">
                    {index < currentProcessSteps.length - 1 && <div className="absolute left-6 top-14 w-0.5 h-full border-l-2 border-dashed border-life-green/50" />}
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-full bg-life-green text-white flex items-center justify-center font-bold text-lg relative z-10">{step.step}</div>
                    </div>
                    <div className="pb-12 flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <IconComponent className="w-5 h-5 text-life-green" />
                        <h3 className="text-xl font-semibold text-deep-forest dark:text-white">{step.title}</h3>
                      </div>
                      <p className="text-slate-gray dark:text-gray-400">{step.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Organs Accordion */}
      <section className="py-16 bg-mint-tint/30 dark:bg-gray-800 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white text-center mb-12">{t('learn.organQuestion')}</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {currentOrgans.map((organ) => (
                <motion.div key={organ.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4 }} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden">
                  <button onClick={() => setExpandedOrgan(expandedOrgan === organ.id ? null : organ.id)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ backgroundColor: organ.bgColor }}>
                        <Heart className="w-5 h-5" style={{ color: organ.color }} />
                      </div>
                      <span className="font-semibold text-deep-forest dark:text-white">{organ.name}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-slate-gray transition-transform ${expandedOrgan === organ.id ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedOrgan === organ.id && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-4">
                      <div className="pt-2 space-y-2 text-sm text-slate-gray dark:text-gray-400">
                        <p><span className="font-medium text-deep-forest dark:text-white">{t('learn.medName')}:</span> {organ.medicalName}</p>
                        <p><span className="font-medium text-deep-forest dark:text-white">{t('learn.canHelp')}:</span> {getRecipientText(organ.livesSaved)}</p>
                        <p><span className="font-medium text-deep-forest dark:text-white">{t('learn.survival')}:</span> {organ.survivalRateImprovement}</p>
                        <p className="pt-2 border-t dark:border-gray-700">{organ.description}</p>
                      </div>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-16 bg-white dark:bg-gray-900 transition-colors">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white text-center mb-12">{t('learn.faqTitle')}</h2>
            <div className="max-w-3xl mx-auto space-y-4">
              {currentFaqs.map((faq, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="bg-off-white dark:bg-gray-800 rounded-xl overflow-hidden">
                  <button onClick={() => setExpandedFaq(expandedFaq === index ? null : index)} className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
                    <span className="font-medium text-deep-forest dark:text-white">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-slate-gray transition-transform flex-shrink-0 ${expandedFaq === index ? 'rotate-180' : ''}`} />
                  </button>
                  {expandedFaq === index && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} className="px-6 pb-4">
                      <p className="text-slate-gray dark:text-gray-400 text-sm">{faq.answer}</p>
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
