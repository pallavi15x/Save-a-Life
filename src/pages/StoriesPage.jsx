import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, X, Quote } from 'lucide-react';
import { successStories } from '../data/organData';
import { successStoriesHi } from '../data/organDataHindi';
import { successStoriesTa, successStoriesTe, successStoriesMr } from '../data/organDataI18n';
import { useLanguage } from '../context/LanguageContext';

const getRoleType = (role) => {
  const r = role.toLowerCase();
  if (
    r.includes('donor') || 
    r.includes('दाता') || 
    r.includes('தான') || 
    r.includes('దాత') || 
    r.includes('दात्या') || 
    r.includes('दात्याचे')
  ) {
    return 'donor';
  }
  if (
    r.includes('recipient') || 
    r.includes('प्राप्तकर्ता') || 
    r.includes('பெறுநர்') || 
    r.includes('గ్రహీత')
  ) {
    return 'recipient';
  }
  return 'family';
};

const getOrganColor = (organ) => {
  const colors = { 
    Heart: '#E24B4A', 'हृदय': '#E24B4A', 'இருதயம்': '#E24B4A', 'గుండె': '#E24B4A',
    Kidney: '#7F77DD', 'किडनी': '#7F77DD', 'सிறுநீரகம்': '#7F77DD', 'కిడ్నీ': '#7F77DD', 'मूत्रपिंड': '#7F77DD',
    Liver: '#EF9F27', 'यकृत': '#EF9F27', 'கல்லீரல்': '#EF9F27', 'కాలేయం': '#EF9F27',
    Eyes: '#1D9E75', 'आँखें': '#1D9E75', 'கண்கள்': '#1D9E75', 'కళ్ళు': '#1D9E75', 'डोळे': '#1D9E75',
    'Bone Marrow': '#8B5CF6', 
    Multiple: '#378ADD', 'अनेक अंग': '#378ADD', 'பல்வேறு உறுப்புகள்': '#378ADD', 'अनेक अवयवాలు': '#378ADD', 'विविध अवयव': '#378ADD',
    Cornea: '#1D9E75' 
  };
  return colors[organ] || '#1A6B4A';
};

export default function StoriesPage() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedStory, setSelectedStory] = useState(null);
  const [showSubmitForm, setShowSubmitForm] = useState(false);
  const { language, t } = useLanguage();

  const currentStoriesList = 
    language === 'hi' ? successStoriesHi : 
    language === 'ta' ? successStoriesTa : 
    language === 'te' ? successStoriesTe : 
    language === 'mr' ? successStoriesMr : 
    successStories;

  const filterLabels = {
    en: { all: 'All', donor: 'Donor Stories', recipient: 'Recipient Stories', family: 'Family Stories' },
    hi: { all: 'सभी', donor: 'दाता की कहानियाँ', recipient: 'प्राप्तकर्ता की कहानियाँ', family: 'परिवार की कहानियाँ' },
    ta: { all: 'அனைத்தும்', donor: 'தானதாரி கதைகள்', recipient: 'பெறுநர் கதைகள்', family: 'குடும்பக் கதைகள்' },
    te: { all: 'అన్నీ', donor: 'దాతల కథలు', recipient: 'గ్రహీతల కథలు', family: 'కుటుంబ కథలు' },
    mr: { all: 'सर्व', donor: 'दात्यांच्या गोष्टी', recipient: 'प्राप्तकर्त्यांच्या गोष्टी', family: 'कुटुंबाच्या गोष्टी' }
  };

  const currentFilters = filterLabels[language] || filterLabels.en;

  const pageTexts = {
    en: {
      title: "Success Stories",
      subtitle: "Real stories of hope, courage, and the gift of life.",
      shareTitle: "Have a Story to Share?",
      shareSub: "Your experience can inspire others to register as organ donors.",
      btnSubmit: "Submit Your Story",
      readFull: "Read Full Story →",
      ageText: "years",
      close: "Close"
    },
    hi: {
      title: "सफलता की कहानियाँ",
      subtitle: "आशा, साहस और जीवन के उपहार की वास्तविक कहानियाँ।",
      shareTitle: "क्या आपके पास साझा करने के लिए कोई कहानी है?",
      shareSub: "आपका अनुभव दूसरों को अंगदाता के रूप में पंजीकरण करने के लिए प्रेरित कर सकता है।",
      btnSubmit: "अपनी कहानी साझा करें",
      readFull: "पूरी कहानी पढ़ें →",
      ageText: "वर्ष",
      close: "बंद करें"
    },
    ta: {
      title: "வெற்றிக் கதைகள்",
      subtitle: "நம்பிக்கை, தைரியம் மற்றும் வாழ்க்கை பரிசின் உண்மைக் கதைகள்.",
      shareTitle: "பகிர்ந்து கொள்ள ஒரு கதை இருக்கிறதா?",
      shareSub: "உங்கள் அனுபவம் மற்றவர்களை உறுப்பு தானம் செய்ய தூண்டும்.",
      btnSubmit: "உங்கள் கதையைச் சமர்ப்பிக்கவும்",
      readFull: "முழு கதையையும் படியுங்கள் →",
      ageText: "வயது",
      close: "மூடு"
    },
    te: {
      title: "విజయగాథలు",
      subtitle: "ఆశ, ధైర్యం మరియు జీవితం యొక్క బహుమతికి సంబంధించిన నిజమైన కథలు.",
      shareTitle: "షేర్ చేయడానికి కథ ఉందా?",
      shareSub: "మీ అనుభవం ఇతరులను అవయవ దాతలుగా నమోదు చేసుకోవడానికి ప్రేరేపిస్తుంది.",
      btnSubmit: "మీ కథను సమర్పించండి",
      readFull: "పూర్తి కథనాన్ని చదవండి →",
      ageText: "సంవత్సరాలు",
      close: "మూసివేయి"
    },
    mr: {
      title: "यशोगाथा",
      subtitle: "आशा, धैर्य आणि जीवन भेट याविषयीच्या खऱ्या गोष्टी.",
      shareTitle: "तुमचीही एखादी गोष्ट आहे का?",
      shareSub: "तुमचा अनुभव इतरांना अवयवदानाचा संकल्प करण्यास प्रेरित करू शकतो.",
      btnSubmit: "तुमची गोष्ट सबमिट करा",
      readFull: "पूर्ण गोष्ट वाचा →",
      ageText: "वर्षे",
      close: "बंद"
    }
  };

  const texts = pageTexts[language] || pageTexts.en;

  const filteredStories = currentStoriesList.filter((story) => 
    activeFilter === 'all' || getRoleType(story.role) === activeFilter
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen bg-off-white dark:bg-gray-950">
      <section className="py-16 bg-gradient-to-br from-deep-forest to-medical-green text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{texts.title}</h1>
            <p className="text-lg text-white/80">{texts.subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-8 bg-white dark:bg-gray-900 border-b">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-3">
            {Object.keys(currentFilters).map((key) => (
              <button 
                key={key} 
                onClick={() => setActiveFilter(key)} 
                className={`px-5 py-2 rounded-full font-medium transition-all ${activeFilter === key ? 'bg-life-green text-white' : 'bg-gray-100 dark:bg-gray-800 text-slate-gray dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700'}`}
              >
                {currentFilters[key]}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredStories.map((story) => (
                <motion.div key={story.id} layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} onClick={() => setSelectedStory(story)} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden cursor-pointer hover:-translate-y-1 transition-transform group hover:shadow-lg">
                  <div className="p-6">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="relative">
                        <img src={story.image} alt={story.name} className="w-16 h-16 rounded-full object-cover" />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full flex items-center justify-center" style={{ backgroundColor: getOrganColor(story.organ) }}><Heart className="w-3 h-3 text-white fill-white" /></div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-deep-forest dark:text-white">{story.name}</h3>
                        <p className="text-sm text-slate-gray dark:text-gray-400">{story.age > 0 ? `${story.age} ${texts.ageText}, ` : ''}{story.city}</p>
                        <span className="inline-block px-2 py-0.5 rounded-full text-xs font-medium mt-1" style={{ backgroundColor: getOrganColor(story.organ) + '20', color: getOrganColor(story.organ) }}>{story.role}</span>
                      </div>
                    </div>
                    <Quote className="w-8 h-8 text-life-green/20 mb-2" />
                    <p className="text-slate-gray dark:text-gray-300 italic line-clamp-3">"{story.quote}"</p>
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t dark:border-gray-700">
                      <span className="px-3 py-1 rounded-full text-xs font-medium text-white" style={{ backgroundColor: getOrganColor(story.organ) }}>{story.organ}</span>
                      <span className="text-xs text-life-green ml-auto group-hover:translate-x-1 transition-transform">{texts.readFull}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      <section className="py-16 bg-mint-tint dark:bg-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="max-w-2xl mx-auto text-center bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
            <Heart className="w-12 h-12 text-life-green mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-deep-forest dark:text-white mb-2">{texts.shareTitle}</h2>
            <p className="text-slate-gray dark:text-gray-400 mb-6">{texts.shareSub}</p>
            <button onClick={() => {
              const formsAlerts = {
                en: "Submit feature is coming soon!",
                hi: "साझा करने की सुविधा जल्द ही आ रही है!",
                ta: "சமர்ப்பிக்கும் அம்சம் விரைவில் வருகிறது!",
                te: "సమర్పించే ఫీచర్ త్వరలో వస్తుంది!",
                mr: "सबमिट करण्याची सुविधा लवकरच येत आहे!"
              };
              alert(formsAlerts[language] || formsAlerts.en);
            }} className="btn-primary">{texts.btnSubmit}</button>
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {selectedStory && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedStory(null)}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="relative">
                <img src={selectedStory.image} alt={selectedStory.name} className="w-full h-48 object-cover" />
                <button onClick={() => setSelectedStory(null)} className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"><X className="w-5 h-5 text-deep-forest" /></button>
              </div>
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-deep-forest dark:text-white">{selectedStory.name}</h3>
                    <p className="text-slate-gray dark:text-gray-400">{selectedStory.age > 0 ? `${selectedStory.age} ${texts.ageText}, ` : ''}{selectedStory.city} | {selectedStory.role}</p>
                  </div>
                  <span className="ml-auto px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: getOrganColor(selectedStory.organ) }}>{selectedStory.organ}</span>
                </div>
                <p className="text-slate-gray dark:text-gray-300 leading-relaxed mb-6">"{selectedStory.fullStory}"</p>
                <button onClick={() => setSelectedStory(null)} className="btn-secondary w-full text-center">{texts.close}</button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
