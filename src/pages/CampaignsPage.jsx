import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MapPin, Users, Clock, Grid, Map, X, Filter, AlertCircle } from 'lucide-react';
import { campaigns } from '../data/organData';
import { campaignsHi } from '../data/organDataHindi';
import { campaignsTa, campaignsTe, campaignsMr } from '../data/organDataI18n';
import { useLanguage } from '../context/LanguageContext';

export default function CampaignsPage() {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCampaign, setSelectedCampaign] = useState(null);
  const [showVolunteerModal, setShowVolunteerModal] = useState(false);
  const [filterState, setFilterState] = useState('all');
  const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });
  const mapRef = useRef(null);
  const mapInstanceRef = useRef(null);
  const { language, t } = useLanguage();

  const currentCampaigns = 
    language === 'hi' ? campaignsHi : 
    language === 'ta' ? campaignsTa : 
    language === 'te' ? campaignsTe : 
    language === 'mr' ? campaignsMr : 
    campaigns;

  const upcomingCampaign = currentCampaigns.find(c => !c.completed);

  const allStatesLabel = {
    en: 'All States',
    hi: 'सभी राज्य',
    ta: 'அனைத்து மாநிலங்கள்',
    te: 'అన్ని రాష్ట్రాలు',
    mr: 'सर्व राज्ये'
  };

  const pageTexts = {
    en: {
      title: "Awareness Campaigns",
      subtitle: "Join our events and help spread awareness about organ donation.",
      nextEvent: "Next Event",
      upcoming: "Upcoming Campaigns",
      past: "Past Campaigns",
      completed: "Completed",
      volunteersNeeded: "volunteers needed",
      btnRegister: "Register as Volunteer",
      days: "Days", hours: "Hours", minutes: "Minutes", seconds: "Seconds",
      modalTitle: "Volunteer Registration",
      modalSub: "Register as a volunteer for",
      labelName: "Full Name",
      labelEmail: "Email Address",
      labelPhone: "Phone Number",
      btnSubmit: "Submit Registration",
      btnCancel: "Cancel",
      alertSuccess: "Registration successful! Thank you for volunteering.",
      close: "Close"
    },
    hi: {
      title: "जागरूकता अभियान",
      subtitle: "हमारे कार्यक्रमों में शामिल हों और अंगदान के बारे में जागरूकता फैलाने में मदद करें।",
      nextEvent: "अगला कार्यक्रम",
      upcoming: "आगामी अभियान",
      past: "पिछले अभियान",
      completed: "पूरा हुआ",
      volunteersNeeded: "स्वयंसेवकों की आवश्यकता है",
      btnRegister: "स्वयंसेवक के रूप में पंजीकरण करें",
      days: "दिन", hours: "घंटे", minutes: "मिनट", seconds: "सेकंड",
      modalTitle: "स्वयंसेवक पंजीकरण",
      modalSub: "स्वयंसेवक के रूप में पंजीकरण करें:",
      labelName: "पूरा नाम",
      labelEmail: "ईमेल पता",
      labelPhone: "फ़ोन नंबर",
      btnSubmit: "पंजीकरण जमा करें",
      btnCancel: "रद्द करें",
      alertSuccess: "पंजीकरण सफल! स्वयंसेवा के लिए धन्यवाद।",
      close: "बंद करें"
    },
    ta: {
      title: "விழிப்புணர்வு பிரச்சாரங்கள்",
      subtitle: "எங்கள் நிகழ்வுகளில் இணைந்து உறுப்பு தானம் பற்றிய விழிப்புணர்வை பரப்ப உதவுங்கள்.",
      nextEvent: "அடுத்த நிகழ்வு",
      upcoming: "வரவிருக்கும் பிரச்சாரங்கள்",
      past: "கடந்த பிரச்சாரங்கள்",
      completed: "முடிந்தது",
      volunteersNeeded: "தொண்டர்கள் தேவை",
      btnRegister: "தொண்டராக பதிவு செய்யவும்",
      days: "நாட்கள்", hours: "மணிநேரம்", minutes: "நிமிடங்கள்", seconds: "விநாடிகள்",
      modalTitle: "தொண்டர் பதிவு",
      modalSub: "இதற்கான தொண்டராக பதிவு செய்யவும்:",
      labelName: "முழு பெயர்",
      labelEmail: "மின்னஞ்சல் முகவரி",
      labelPhone: "தொலைபேசி எண்",
      btnSubmit: "பதிவைச் சமர்ப்பிக்கவும்",
      btnCancel: "ரத்து",
      alertSuccess: "பதிவு வெற்றிகரமாக முடிந்தது! உதவ முன்வந்ததற்கு நன்றி.",
      close: "மூடு"
    },
    te: {
      title: "అవగాహన ప్రచారాలు",
      subtitle: "మా కార్యక్రమాలలో చేరి అవయవ దానంపై అవగాహన పెంచడంలో సహాయపడండి.",
      nextEvent: "తదుపరి కార్యక్రమం",
      upcoming: "రాబోయే ప్రచారాలు",
      past: "గత ప్రచారాలు",
      completed: "పూర్తయింది",
      volunteersNeeded: "స్వచ్ఛంద సేవకులు అవసరం",
      btnRegister: "స్వచ్ఛంద సేవకుడిగా నమోదు చేసుకోండి",
      days: "రోజులు", hours: "గంటలు", minutes: "నిమిషాలు", seconds: "సెకన్లు",
      modalTitle: "స్వచ్ఛంద సేవకుల నమోదు",
      modalSub: "స్వచ్ఛంద సేవకుడిగా నమోదు చేసుకోండి:",
      labelName: "పూర్తి పేరు",
      labelEmail: "ఈమెయిల్ చిరునామా",
      labelPhone: "ఫోన్ నంబర్",
      btnSubmit: "నమోదును సమర్పించు",
      btnCancel: "రద్దు",
      alertSuccess: "నమోదు విజయవంతమైంది! స్వచ్ఛంద సేవ చేసినందుకు ధన్యవాదాలు.",
      close: "మూసివేయి"
    },
    mr: {
      title: "जनजागृती मोहिमा",
      subtitle: "आमच्या कार्यक्रमांमध्ये सामील व्हा आणि अवयवदानाबद्दल जागरूकता पसरविण्यास मदत करा.",
      nextEvent: "पुढील कार्यक्रम",
      upcoming: "आगामी मोहिमा",
      past: "मागील मोहिमा",
      completed: "पूर्ण झाले",
      volunteersNeeded: "स्वयंसेवकांची आवश्यकता आहे",
      btnRegister: "स्वयंसेवक म्हणून नोंदणी करा",
      days: "दिवस", hours: "तास", minutes: "मिनिटे", seconds: "सेकंद",
      modalTitle: "स्वयंसेवक नोंदणी",
      modalSub: "या मोहिमेसाठी स्वयंसेवक म्हणून नोंदणी करा:",
      labelName: "पूर्ण नाव",
      labelEmail: "ईमेल पत्ता",
      labelPhone: "फोन नंबर",
      btnSubmit: "नोंदणी सबमिट करा",
      btnCancel: "रद्द करा",
      alertSuccess: "नोंदणी यशस्वी! स्वयंसेवक म्हणून सहभागी झाल्याबद्दल धन्यवाद.",
      close: "बंद"
    }
  };

  const texts = pageTexts[language] || pageTexts.en;
  const currentAllStatesLabel = allStatesLabel[language] || allStatesLabel.en;

  useEffect(() => {
    if (!upcomingCampaign) return;
    const targetDate = new Date(upcomingCampaign.date + 'T' + upcomingCampaign.time).getTime();
    const interval = setInterval(() => {
      const now = new Date().getTime();
      const difference = targetDate - now;
      if (difference > 0) {
        setCountdown({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((difference % (1000 * 60)) / 1000),
        });
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [upcomingCampaign]);

  useEffect(() => {
    if (viewMode === 'map' && mapRef.current && !mapInstanceRef.current) {
      import('leaflet').then((L) => {
        const map = L.map(mapRef.current).setView([20.5937, 78.9629], 5);
        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);
        currentCampaigns.forEach((campaign) => {
          if (campaign.coordinates) {
            L.circleMarker(campaign.coordinates, { radius: 8, fillColor: campaign.completed ? '#9CA3AF' : '#1D9E75', color: '#fff', weight: 2, fillOpacity: 0.8 }).addTo(map).bindPopup(`<strong>${campaign.name}</strong><br/>${campaign.city}, ${campaign.state}`);
          }
        });
        mapInstanceRef.current = map;
      });
    }
    return () => { if (mapInstanceRef.current) { mapInstanceRef.current.remove(); mapInstanceRef.current = null; } };
  }, [viewMode, currentCampaigns]);

  const filteredCampaigns = currentCampaigns.filter((c) => filterState === 'all' || c.state === filterState);
  const activeCampaigns = filteredCampaigns.filter(c => !c.completed);
  const pastCampaigns = filteredCampaigns.filter(c => c.completed);

  const handleVolunteerSubmit = (e) => {
    e.preventDefault();
    alert(texts.alertSuccess);
    setShowVolunteerModal(false);
    setSelectedCampaign(null);
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen bg-off-white dark:bg-gray-950">
      <section className="py-16 bg-gradient-to-br from-deep-forest to-medical-green text-white">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">{texts.title}</h1>
            <p className="text-lg text-white/80 mb-8">{texts.subtitle}</p>
            {upcomingCampaign && (
              <div className="bg-white/10 backdrop-blur rounded-xl p-6 max-w-lg mx-auto">
                <p className="text-sm text-white/70 mb-2">{texts.nextEvent}</p>
                <h3 className="text-xl font-semibold mb-4">{upcomingCampaign.name}</h3>
                <div className="flex justify-center gap-4">
                  {[{ label: texts.days, value: countdown.days }, { label: texts.hours, value: countdown.hours }, { label: texts.minutes, value: countdown.minutes }, { label: texts.seconds, value: countdown.seconds }].map((item) => (
                    <div key={item.label} className="text-center"><div className="text-2xl md:text-3xl font-bold">{String(item.value).padStart(2, '0')}</div><div className="text-xs text-white/70">{item.label}</div></div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
        </div>
      </section>

      <section className="py-4 sticky top-28 z-30 pointer-events-none flex justify-center w-full px-4 mt-[-2rem]">
        <div className="pointer-events-auto bg-white/85 dark:bg-gray-900/85 backdrop-blur-md rounded-full shadow-xl border border-gray-200 dark:border-gray-700 w-fit px-6 py-3">
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8">
            <div className="flex items-center gap-3">
              <Filter className="w-5 h-5 text-slate-gray" />
              <select value={filterState} onChange={(e) => setFilterState(e.target.value)} className="px-4 py-2 rounded-full border border-gray-200 dark:border-gray-700 bg-transparent dark:text-white focus:outline-none focus:border-life-green text-sm font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors cursor-pointer">
                <option value="all">{currentAllStatesLabel}</option>
                {[...new Set(currentCampaigns.map(c => c.state))].map((state) => (<option key={state} value={state}>{state}</option>))}
              </select>
            </div>
            <div className="flex items-center bg-gray-100/50 dark:bg-gray-800/50 rounded-full p-1 border border-gray-200/50 dark:border-gray-700/50">
              <button onClick={() => setViewMode('grid')} className={`p-2 rounded-full transition-all duration-200 ${viewMode === 'grid' ? 'bg-white dark:bg-gray-700 shadow-md text-deep-forest dark:text-white scale-105' : 'text-slate-gray hover:text-deep-forest dark:hover:text-white'}`}><Grid className="w-5 h-5" /></button>
              <button onClick={() => setViewMode('map')} className={`p-2 rounded-full transition-all duration-200 ${viewMode === 'map' ? 'bg-white dark:bg-gray-700 shadow-md text-deep-forest dark:text-white scale-105' : 'text-slate-gray hover:text-deep-forest dark:hover:text-white'}`}><Map className="w-5 h-5" /></button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            {viewMode === 'grid' ? (
              <motion.div key="grid" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                <div className="mb-12">
                  <h2 className="text-2xl font-bold text-deep-forest dark:text-white mb-6 flex items-center gap-2"><div className="w-3 h-3 rounded-full bg-life-green animate-pulse" />{texts.upcoming} ({activeCampaigns.length})</h2>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeCampaigns.map((campaign, index) => (
                      <motion.div key={campaign.id} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.1 }} onClick={() => setSelectedCampaign(campaign)} className="bg-white dark:bg-gray-900 rounded-xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition-shadow group">
                        <div className="relative h-40 overflow-hidden">
                          <img src={campaign.image} alt={campaign.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                          <div className="absolute top-3 left-3 bg-life-green text-white text-xs px-3 py-1 rounded-full">{campaign.state}</div>
                        </div>
                        <div className="p-5">
                          <h3 className="font-semibold text-deep-forest dark:text-white mb-2 group-hover:text-life-green transition-colors">{campaign.name}</h3>
                          <div className="space-y-2 text-sm text-slate-gray dark:text-gray-400">
                            <div className="flex items-center gap-2"><Calendar className="w-4 h-4 text-life-green" /><span>{new Date(campaign.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                            <div className="flex items-center gap-2"><MapPin className="w-4 h-4 text-life-green" /><span>{campaign.city}</span></div>
                            <div className="flex items-center gap-2"><Users className="w-4 h-4 text-life-green" /><span>{campaign.maxVolunteers} {texts.volunteersNeeded}</span></div>
                          </div>
                          <button onClick={(e) => { e.stopPropagation(); setSelectedCampaign(campaign); setShowVolunteerModal(true); }} className="mt-4 btn-primary w-full text-center">{texts.btnRegister}</button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {pastCampaigns.length > 0 && (
                  <div>
                    <h2 className="text-2xl font-bold text-deep-forest dark:text-white mb-6 flex items-center gap-2"><AlertCircle className="w-5 h-5 text-slate-gray" />{texts.past} ({pastCampaigns.length})</h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                      {pastCampaigns.map((campaign) => (
                        <div key={campaign.id} className="bg-white dark:bg-gray-900 rounded-xl shadow-sm overflow-hidden opacity-75">
                          <div className="relative h-40">
                            <img src={campaign.image} alt={campaign.name} className="w-full h-full object-cover grayscale" />
                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center"><span className="bg-slate-gray text-white text-sm px-4 py-2 rounded-full">{texts.completed}</span></div>
                          </div>
                          <div className="p-5"><h3 className="font-semibold text-slate-gray dark:text-gray-400 mb-2">{campaign.name}</h3><p className="text-sm text-slate-gray dark:text-gray-500">{campaign.city}, {campaign.state}</p></div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            ) : (
              <motion.div key="map" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-xl shadow-lg overflow-hidden">
                <div ref={mapRef} className="h-[500px] w-full" />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Modals */}
      {showVolunteerModal && selectedCampaign && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => { setShowVolunteerModal(false); setSelectedCampaign(null); }}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl p-6 max-w-md w-full" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-xl font-bold text-deep-forest dark:text-white">{texts.modalTitle}</h3>
              <button onClick={() => { setShowVolunteerModal(false); setSelectedCampaign(null); }} className="text-slate-gray hover:text-deep-forest dark:hover:text-white"><X className="w-5 h-5" /></button>
            </div>
            <p className="text-sm text-slate-gray dark:text-gray-400 mb-6">{texts.modalSub} <strong>{selectedCampaign.name}</strong></p>
            <form onSubmit={handleVolunteerSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-1">{texts.labelName}</label>
                <input type="text" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-1">{texts.labelEmail}</label>
                <input type="email" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-gray dark:text-gray-400 mb-1">{texts.labelPhone}</label>
                <input type="tel" className="w-full px-4 py-2 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" required />
              </div>
              <div className="flex gap-4 pt-2">
                <button type="button" onClick={() => { setShowVolunteerModal(false); setSelectedCampaign(null); }} className="btn-secondary flex-1">{texts.btnCancel}</button>
                <button type="submit" className="btn-primary flex-1">{texts.btnSubmit}</button>
              </div>
            </form>
          </motion.div>
        </motion.div>
      )}

      {selectedCampaign && !showVolunteerModal && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4" onClick={() => setSelectedCampaign(null)}>
          <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} className="bg-white dark:bg-gray-900 rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="relative">
              <img src={selectedCampaign.image} alt={selectedCampaign.name} className="w-full h-48 object-cover" />
              <button onClick={() => setSelectedCampaign(null)} className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white transition-colors"><X className="w-5 h-5 text-deep-forest" /></button>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-deep-forest dark:text-white">{selectedCampaign.name}</h3>
                  <p className="text-slate-gray dark:text-gray-400">{selectedCampaign.city}, {selectedCampaign.state}</p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-6 text-sm">
                <div className="bg-gray-50 dark:bg-gray-850 p-3 rounded-lg flex items-center gap-2"><Calendar className="w-4 h-4 text-life-green" /><span className="text-deep-forest dark:text-white">{new Date(selectedCampaign.date).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</span></div>
                <div className="bg-gray-50 dark:bg-gray-850 p-3 rounded-lg flex items-center gap-2"><Clock className="w-4 h-4 text-life-green" /><span className="text-deep-forest dark:text-white">{selectedCampaign.time}</span></div>
              </div>
              <p className="text-slate-gray dark:text-gray-300 leading-relaxed mb-6">{selectedCampaign.description}</p>
              <div className="flex gap-4">
                <button onClick={() => setSelectedCampaign(null)} className="btn-secondary flex-1">{texts.close}</button>
                {!selectedCampaign.completed && <button onClick={() => setShowVolunteerModal(true)} className="btn-primary flex-1">{texts.btnRegister}</button>}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </motion.div>
  );
}
