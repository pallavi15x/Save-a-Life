import { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import confetti from 'canvas-confetti';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { User, Mail, Phone, MapPin, Calendar, Heart, Check, ChevronRight, ChevronLeft, Eye, Droplet, Wind, Activity, Upload, FileText, Shield, Download, Share2 } from 'lucide-react';
import { organs, indianStates, bloodGroups } from '../data/organData';
import { organsHi } from '../data/organDataHindi';
import { organsTa, organsTe, organsMr } from '../data/organDataI18n';
import { useLanguage } from '../context/LanguageContext';

const organIcons = { heart: Heart, lungs: Wind, liver: Droplet, kidneys: Activity, eyes: Eye, skin: User, pancreas: Activity, intestines: Activity, 'bone-marrow': Activity };

const initialFormData = {
  fullName: '', dateOfBirth: '', gender: '', phone: '', email: '', city: '', state: '', bloodGroup: '',
  organs: [], emergencyContactName: '', emergencyContactPhone: '', governmentId: null
};

// Translations object for all 5 languages
const registerTranslations = {
  en: {
    title: "Register as an Organ Donor",
    subtitle: "Complete the form below to pledge your organs and receive your donor certificate.",
    steps: {
      personalInfo: "Personal Info",
      organSelection: "Organ Selection",
      consent: "Consent",
      certificate: "Certificate"
    },
    personalInfoHeading: "Personal Information",
    fullNameLabel: "Full Name *",
    fullNamePlaceholder: "Enter your full name",
    dobLabel: "Date of Birth *",
    genderLabel: "Gender *",
    selectGender: "Select Gender",
    genderMale: "Male",
    genderFemale: "Female",
    genderOther: "Other",
    phoneLabel: "Phone Number *",
    phonePlaceholder: "10-digit phone number",
    emailLabel: "Email *",
    emailPlaceholder: "your@email.com",
    cityLabel: "City *",
    cityPlaceholder: "Your city",
    stateLabel: "State *",
    selectState: "Select State",
    bloodGroupLabel: "Blood Group *",
    selectBloodGroup: "Select Blood Group",
    
    organHeading: "Select Organs to Donate",
    selectAll: "Select All",
    deselectAll: "Deselect All",
    
    consentHeading: "Consent & Emergency Contact",
    declarationTitle: "DECLARATION OF ORGAN DONATION",
    declarationIntro: "I hereby declare that I am voluntarily pledging to donate my organs after my death for transplantation purposes. I understand that:",
    bullet1: "My decision is voluntary.",
    bullet2: "Organ donation will only take place after death is declared.",
    bullet3: "My family will be informed before any retrieval.",
    bullet4: "Organs are allocated by medical need, not wealth.",
    consentCheckbox: "I understand and voluntarily pledge my organs for donation",
    emergencyHeading: "Emergency Contact",
    emergencyNameLabel: "Contact Name *",
    emergencyNamePlaceholder: "Family member or friend",
    emergencyPhoneLabel: "Contact Phone *",
    emergencyPhonePlaceholder: "10-digit phone number",
    
    backButton: "Back",
    continueButton: "Continue",
    submitButton: "Submit & Get Certificate",
    
    certTitle: "SAVE A LIFE",
    certSubtitle: "Organ Donation Pledge Certificate",
    certCertifiedText: "This is to certify that",
    certPledgedText: "has pledged to donate",
    certPledgedTextPdf: "has pledged to donate the following organs to save lives:",
    certDonorId: "Donor ID",
    certDate: "Date",
    certThankYou: "Thank you for giving the gift of life. Your pledge can save up to 8 lives.",
    certDownloadPdf: "Download PDF",
    certShareWhatsapp: "WhatsApp",
    certShareTwitter: "Twitter",
    certShareCard: "Share Card",
    
    shareTextWhatsapp: "I've pledged my organs on Save a Life! My Donor ID is {donorId}. One donor can save up to 8 lives. Register at savealife.org",
    shareTextTwitter: "I've pledged my organs on Save a Life! My Donor ID is {donorId}. One donor can save up to 8 lives. #OrganDonation #SaveALife",
    
    shareCardTitle: "I Pledged to Save Lives",
    shareCardDonorId: "My donor ID",
    shareCardSaveLives: "One donor can save up to 8 lives",
    shareCardBrand: "Save a Life",
    
    errors: {
      fullName: "Full name is required",
      dateOfBirth: "Date of birth is required",
      mustBe18: "You must be 18 or older",
      gender: "Please select a gender",
      phone: "Phone must be 10 digits",
      email: "Valid email required",
      city: "City is required",
      state: "State is required",
      bloodGroup: "Blood group is required",
      selectOneOrgan: "Please select at least one organ",
      acceptConsent: "Please accept the consent",
      emergencyName: "Emergency contact name required",
      emergencyPhone: "Emergency contact phone must be 10 digits"
    }
  },
  hi: {
    title: "अंग दाता के रूप में पंजीकरण करें",
    subtitle: "अपने अंगों को दान करने की प्रतिज्ञा लेने और अपना दाता प्रमाणपत्र प्राप्त करने के लिए नीचे दिए गए फॉर्म को पूरा करें।",
    steps: {
      personalInfo: "व्यक्तिगत जानकारी",
      organSelection: "अंग चयन",
      consent: "सहमति",
      certificate: "प्रमाणपत्र"
    },
    personalInfoHeading: "व्यक्तिगत जानकारी",
    fullNameLabel: "पूरा नाम *",
    fullNamePlaceholder: "अपना पूरा नाम दर्ज करें",
    dobLabel: "जन्म तिथि *",
    genderLabel: "लिंग *",
    selectGender: "लिंग चुनें",
    genderMale: "पुरुष",
    genderFemale: "महिला",
    genderOther: "अन्य",
    phoneLabel: "फ़ोन नंबर *",
    phonePlaceholder: "10-अंकीय फ़ोन नंबर",
    emailLabel: "ईमेल *",
    emailPlaceholder: "your@email.com",
    cityLabel: "शहर *",
    cityPlaceholder: "आपका शहर",
    stateLabel: "राज्य *",
    selectState: "राज्य चुनें",
    bloodGroupLabel: "रक्त समूह *",
    selectBloodGroup: "रक्त समूह चुनें",
    
    organHeading: "दान करने के लिए अंग चुनें",
    selectAll: "सभी चुनें",
    deselectAll: "सभी अचयनित करें",
    
    consentHeading: "सहमति और आपातकालीन संपर्क",
    declarationTitle: "अंग दान की घोषणा",
    declarationIntro: "मैं इसके द्वारा घोषणा करता/करती हूँ कि मैं स्वेच्छा से प्रत्यारोपण के उद्देश्यों के लिए अपनी मृत्यु के बाद अपने अंग दान करने की प्रतिज्ञा ले रहा/रही हूँ। मैं समझता/समझती हूँ कि:",
    bullet1: "मेरा निर्णय स्वैच्छिक है।",
    bullet2: "अंग दान केवल मृत्यु घोषित होने के बाद ही होगा।",
    bullet3: "अंग निकालने से पहले मेरे परिवार को सूचित किया जाएगा।",
    bullet4: "अंगों का आवंटन चिकित्सा आवश्यकता के अनुसार होता है, न कि धन के आधार पर।",
    consentCheckbox: "मैं समझता/समझती हूँ और स्वेच्छा से दान के लिए अपने अंगों की प्रतिज्ञा करता/करती हूँ",
    emergencyHeading: "आपातकालीन संपर्क",
    emergencyNameLabel: "संपर्क नाम *",
    emergencyNamePlaceholder: "परिवार का सदस्य या मित्र",
    emergencyPhoneLabel: "संपर्क फ़ोन *",
    emergencyPhonePlaceholder: "10-अंकीय फ़ोन नंबर",
    
    backButton: "पीछे",
    continueButton: "आगे बढ़ें",
    submitButton: "जमा करें और प्रमाणपत्र प्राप्त करें",
    
    certTitle: "सेव अ लाइफ",
    certSubtitle: "अंग दान प्रतिज्ञा प्रमाणपत्र",
    certCertifiedText: "यह प्रमाणित किया जाता है कि",
    certPledgedText: "ने अंग दान करने की प्रतिज्ञा की है",
    certPledgedTextPdf: "ने जीवन बचाने के लिए निम्नलिखित अंगों को दान करने की प्रतिज्ञा की है:",
    certDonorId: "दाता आईडी",
    certDate: "दिनांक",
    certThankYou: "जीवन का उपहार देने के लिए धन्यवाद। आपकी प्रतिज्ञा 8 लोगों की जान बचा सकती है।",
    certDownloadPdf: "पीडीएफ डाउनलोड करें",
    certShareWhatsapp: "व्हाट्सएप",
    certShareTwitter: "ट्विटर",
    certShareCard: "कार्ड साझा करें",
    
    shareTextWhatsapp: "मैंने सेव अ लाइफ पर अपने अंग दान करने की प्रतिज्ञा ली है! मेरी दाता आईडी {donorId} है। एक दाता 8 लोगों की जान बचा सकता है। savealife.org पर पंजीकरण करें",
    shareTextTwitter: "मैंने सेव अ लाइफ पर अपने अंग दान करने की प्रतिज्ञा ली है! मेरी दाता आईडी {donorId} है। एक दाता 8 लोगों की जान बचा सकता है। #OrganDonation #SaveALife",
    
    shareCardTitle: "मैंने जीवन बचाने की प्रतिज्ञा ली है",
    shareCardDonorId: "मेरी दाता आईडी",
    shareCardSaveLives: "एक दाता 8 लोगों की जान बचा सकता है",
    shareCardBrand: "सेव अ लाइफ",
    
    errors: {
      fullName: "पूरा नाम आवश्यक है",
      dateOfBirth: "जन्म तिथि आवश्यक है",
      mustBe18: "आपकी आयु 18 वर्ष या उससे अधिक होनी चाहिए",
      gender: "कृपया लिंग का चयन करें",
      phone: "फ़ोन नंबर 10 अंकों का होना चाहिए",
      email: "वैध ईमेल आवश्यक है",
      city: "शहर आवश्यक है",
      state: "राज्य आवश्यक है",
      bloodGroup: "रक्त समूह आवश्यक है",
      selectOneOrgan: "कृपया कम से कम एक अंग का चयन करें",
      acceptConsent: "कृपया सहमति स्वीकार करें",
      emergencyName: "आपातकालीन संपर्क नाम आवश्यक है",
      emergencyPhone: "आपातकालीन संपर्क फ़ोन 10 अंकों का होना चाहिए"
    }
  },
  ta: {
    title: "உறுப்பு கொடையாளியாக பதிவு செய்யுங்கள்",
    subtitle: "உங்கள் உறுப்புகளை தானம் செய்ய உறுதியளிக்கவும், உங்கள் கொடையாளி சான்றிதழைப் பெறவும் கீழே உள்ள படிவத்தை பூர்த்தி செய்யவும்.",
    steps: {
      personalInfo: "தனிப்பட்ட விவரம்",
      organSelection: "உறுப்புத் தேர்வு",
      consent: "சம்மதம்",
      certificate: "சான்றிதழ்"
    },
    personalInfoHeading: "தனிப்பட்ட விவரங்கள்",
    fullNameLabel: "முழு பெயர் *",
    fullNamePlaceholder: "உங்கள் முழு பெயரை உள்ளிடவும்",
    dobLabel: "பிறந்த தேதி *",
    genderLabel: "பாலினம் *",
    selectGender: "பாலினத்தைத் தேர்ந்தெடுக்கவும்",
    genderMale: "ஆண்",
    genderFemale: "பெண்",
    genderOther: "இதர",
    phoneLabel: "தொலைபேசி எண் *",
    phonePlaceholder: "10 இலக்க தொலைபேசி எண்",
    emailLabel: "மின்னஞ்சல் முகவரி *",
    emailPlaceholder: "your@email.com",
    cityLabel: "நகரம் *",
    cityPlaceholder: "உங்கள் நகரம்",
    stateLabel: "மாநிலம் *",
    selectState: "மாநிலத்தைத் தேர்ந்தெடுக்கவும்",
    bloodGroupLabel: "இரத்த வகை *",
    selectBloodGroup: "இரத்த வகையைத் தேர்ந்தெடுக்கவும்",
    
    organHeading: "தானம் செய்ய வேண்டிய உறுப்புகளைத் தேர்ந்தெடுக்கவும்",
    selectAll: "அனைத்தும் தேர்ந்தெடு",
    deselectAll: "அனைத்தும் நீக்கு",
    
    consentHeading: "சம்மதம் மற்றும் அவசர தொடர்பு",
    declarationTitle: "உறுப்பு தான பிரகடனம்",
    declarationIntro: "மாற்று அறுவை சிகிச்சைக்காக எனது மரணத்திற்குப் பிறகு எனது உறுப்புகளை தானம் செய்ய நான் தானாக முன்வந்து உறுதியளிக்கிறேன். நான் புரிந்துகொள்வது என்னவென்றால்:",
    bullet1: "எனது முடிவு முற்றிலும் தன்னார்வமானது.",
    bullet2: "மரணம் அறிவிக்கப்பட்ட பின்னரே உறுப்பு தானம் நடைபெறும்.",
    bullet3: "உறுப்புகளை எடுப்பதற்கு முன் எனது குடும்பத்தினருக்குத் தெரிவிக்கப்படும்.",
    bullet4: "உறுப்புகள் மருத்துவத் தேவையின் அடிப்படையில் ஒதுக்கப்படுகின்றன, செல்வத்தின் அடிப்படையில் அல்ல.",
    consentCheckbox: "நான் இதைப் புரிந்துகொண்டு தானாக முன்வந்து எனது உறுப்புகளை தானம் செய்ய உறுதியளிக்கிறேன்",
    emergencyHeading: "அவசரகால தொடர்பு",
    emergencyNameLabel: "தொடர்பு நபர் பெயர் *",
    emergencyNamePlaceholder: "குடும்ப உறுப்பினர் அல்லது நண்பர்",
    emergencyPhoneLabel: "தொடர்பு தொலைபேசி எண் *",
    emergencyPhonePlaceholder: "10 இலக்க தொலைபேசி எண்",
    
    backButton: "பின்செல்",
    continueButton: "தொடரவும்",
    submitButton: "சமர்ப்பித்து சான்றிதழைப் பெறுக",
    
    certTitle: "சேவ் அ லைஃப்",
    certSubtitle: "உறுப்பு தான உறுதிமொழி சான்றிதழ்",
    certCertifiedText: "இதன் மூலம் சான்றளிக்கப்படுவது என்னவென்றால்,",
    certPledgedText: "உயிர்களைக் காக்க உறுப்புகளை தானம் செய்ய உறுதியளித்துள்ளார்",
    certPledgedTextPdf: "உயிர்களைக் காக்க பின்வரும் உறுப்புகளை தானம் செய்ய உறுதியளித்துள்ளார்:",
    certDonorId: "கொடையாளி ஐடி",
    certDate: "தேதி",
    certThankYou: "வாழ்வளிக்கும் கொடையை வழங்கியதற்கு நன்றி. உங்கள் உறுதிமொழி 8 உயிர்கள் வரை காப்பாற்ற முடியும்.",
    certDownloadPdf: "PDF பதிவிறக்கவும்",
    certShareWhatsapp: "வாட்ஸ்அப்",
    certShareTwitter: "ட்விட்டர்",
    certShareCard: "அட்டையைப் பகிர்",
    
    shareTextWhatsapp: "நான் சேவ் அ லைஃப்-இல் உறுப்பு தான உறுதிமொழி எடுத்துள்ளேன்! எனது கொடையாளி ஐடி {donorId}. ஒரு கொடையாளி 8 உயிர்களைக் காப்பாற்ற முடியும். savealife.org இல் பதிவு செய்யுங்கள்",
    shareTextTwitter: "நான் சேவ் அ லைஃப்-இல் உறுப்பு தான உறுதிமொழி எடுத்துள்ளேன்! எனது கொடையாளி ஐடி {donorId}. ஒரு கொடையாளி 8 உயிர்களைக் காப்பாற்ற முடியும். #OrganDonation #SaveALife",
    
    shareCardTitle: "நான் உயிர்களைக் காக்க உறுதியளித்துள்ளேன்",
    shareCardDonorId: "எனது கொடையாளி ஐடி",
    shareCardSaveLives: "ஒரு கொடையாளி 8 உயிர்களைக் காப்பாற்ற முடியும்",
    shareCardBrand: "சேவ் அ லைஃப்",
    
    errors: {
      fullName: "முழு பெயர் தேவை",
      dateOfBirth: "பிறந்த தேதி தேவை",
      mustBe18: "உங்களுக்கு 18 அல்லது அதற்கு மேற்பட்ட வயது இருக்க வேண்டும்",
      gender: "தயவுசெய்து பாலினத்தைத் தேர்ந்தெடுக்கவும்",
      phone: "தொலைபேசி எண் 10 இலக்கங்களாக இருக்க வேண்டும்",
      email: "செல்லுபடியாகும் மின்னஞ்சல் தேவை",
      city: "நகரம் தேவை",
      state: "மாநிலம் தேவை",
      bloodGroup: "இரத்த வகை தேவை",
      selectOneOrgan: "தயவுசெய்து குறைந்தபட்சம் ஒரு உறுப்பையாவது தேர்ந்தெடுக்கவும்",
      acceptConsent: "தயவுசெய்து சம்மதத்தை ஏற்கவும்",
      emergencyName: "அவசரகால தொடர்பு பெயர் தேவை",
      emergencyPhone: "அவசரகால தொடர்பு தொலைபேசி 10 இலக்கங்களாக இருக்க வேண்டும்"
    }
  },
  te: {
    title: "అవయవ దాతగా నమోదు చేసుకోండి",
    subtitle: "మీ అవయవాలను దానం చేయడానికి ప్రతిజ్ఞ చేయడానికి మరియు దాత ధృవీకరణ పత్రాన్ని పొందడానికి క్రింది ఫారమ్‌ను నింపండి.",
    steps: {
      personalInfo: "వ్యక్తిగత సమాచారం",
      organSelection: "అవయవాల ఎంపిక",
      consent: "సమ్మతి",
      certificate: "ధృవీకరణ పత్రం"
    },
    personalInfoHeading: "వ్యక్తిగత సమాచారం",
    fullNameLabel: "పూర్తి పేరు *",
    fullNamePlaceholder: "మీ పూర్తి పేరు నమోదు చేయండి",
    dobLabel: "పుట్టిన తేదీ *",
    genderLabel: "లింగం *",
    selectGender: "లింగాన్ని ఎంచుకోండి",
    genderMale: "పురుషుడు",
    genderFemale: "స్త్రీ",
    genderOther: "ఇతర",
    phoneLabel: "ఫోన్ నంబర్ *",
    phonePlaceholder: "10-అంకెల ఫోన్ నంబర్",
    emailLabel: "ఈమెయిల్ *",
    emailPlaceholder: "your@email.com",
    cityLabel: "నగరం *",
    cityPlaceholder: "మీ నగరం",
    stateLabel: "రాష్ట్రం *",
    selectState: "రాష్ట్రాన్ని ఎంచుకోండి",
    bloodGroupLabel: "రక్త గ్రూప్ *",
    selectBloodGroup: "రక్త గ్రూపును ఎంచుకోండి",
    
    organHeading: "దానం చేయడానికి అవయవాలను ఎంచుకోండి",
    selectAll: "అన్నీ ఎంచుకోండి",
    deselectAll: "అన్నీ తీసివేయండి",
    
    consentHeading: "సమ్మతి & అత్యవసర సంప్రదింపు",
    declarationTitle: "అవయవ దాన ప్రకటన",
    declarationIntro: "నేను నా మరణానంతరం నా అవయవాలను వైద్య చికిత్సల కోసం దానం చేయడానికి స్వచ్ఛందంగా ప్రతిజ్ఞ చేస్తున్నానని ఇందుమూలంగా ప్రకటిస్తున్నాను. నేను గ్రహించినది ఏమిటంటే:",
    bullet1: "నా నిర్ణయం పూర్తిగా స్వచ్ఛందమైనది.",
    bullet2: "మరణం ధృవీకరించబడిన తర్వాత మాత్రమే అవయవాల సేకరణ జరుగుతుంది.",
    bullet3: "అవయవాల సేకరణకు ముందు నా కుటుంబ సభ్యులకు తెలియజేయబడుతుంది.",
    bullet4: "అవయవాలు వైద్య అవసరాల ఆధారంగా కేటాయించబడతాయి, ఆర్థిక స్థితి ఆధారంగా కాదు.",
    consentCheckbox: "నేను దీనిని అర్థం చేసుకున్నాను మరియు స్వచ్ఛందంగా అవయవ దానానికి ప్రతిజ్ఞ చేస్తున్నాను",
    emergencyHeading: "అత్యవసర సంప్రదింపు వివరాలు",
    emergencyNameLabel: "సంప్రదించాల్సిన వ్యక్తి పేరు *",
    emergencyNamePlaceholder: "కుటుంబ సభ్యుడు లేదా స్నేహితుడు",
    emergencyPhoneLabel: "సంప్రదించాల్సిన ఫోన్ నంబర్ *",
    emergencyPhonePlaceholder: "10-అంకెల ఫోన్ నంబర్",
    
    backButton: "వెనుకకు",
    continueButton: "కొనసాగించు",
    submitButton: "సమర్పించి ధృవీకరణ పత్రాన్ని పొందండి",
    
    certTitle: "సేవ్ ఎ లైఫ్",
    certSubtitle: "అవయవ దాన ప్రతిజ్ఞ ధృవీకరణ పత్రం",
    certCertifiedText: "ఇందుమూలంగా ధృవీకరించబడినది ఏమనగా,",
    certPledgedText: "ప్రాణాలను కాపాడటానికి అవయవ దానం చేయడానికి ప్రతిజ్ఞ చేసారు",
    certPledgedTextPdf: "ప్రాణాలను కాపాడటానికి కింది అవయవాలను దానం చేయడానికి ప్రతిజ్ఞ చేసారు:",
    certDonorId: "దాత ఐడి",
    certDate: "తేదీ",
    certThankYou: "జీవన బహుమతిని ఇచ్చినందుకు ధన్యవాదాలు. మీ ప్రతిజ్ఞ 8 మంది ప్రాణాలను కాపాడుతుంది.",
    certDownloadPdf: "PDF డౌన్‌లోడ్",
    certShareWhatsapp: "వాట్సాప్",
    certShareTwitter: "ట్విట్టర్",
    certShareCard: "కార్డ్ షేర్",
    
    shareTextWhatsapp: "నేను సేవ్ ఎ లైఫ్ లో అవయవ దాన ప్రతిజ్ఞ చేసాను! నా దాత ఐడి {donorId}. ఒక దాత 8 మంది ప్రాణాలను కాపాడగలడు. savealife.org లో నమోదు చేసుకోండి",
    shareTextTwitter: "నేను సేవ్ ఎ లైఫ్ లో అవయవ దాన ప్రతిజ్ఞ చేసాను! నా దాత ఐడి {donorId}. ఒక దాత 8 మంది ప్రాణాలను కాపాడగలడు. #OrganDonation #SaveALife",
    
    shareCardTitle: "నేను ప్రాణాలను కాపాడటానికి ప్రతిజ్ఞ చేసాను",
    shareCardDonorId: "నా దాత ఐడి",
    shareCardSaveLives: "ఒక దాత 8 మంది ప్రాణాలను కాపాడగలడు",
    shareCardBrand: "సేవ్ ఎ లైఫ్",
    
    errors: {
      fullName: "పూర్తి పేరు అవసరం",
      dateOfBirth: "పుట్టిన తేదీ అవసరం",
      mustBe18: "మీ వయస్సు 18 లేదా అంతకంటే ఎక్కువ ఉండాలి",
      gender: "దయచేసి లింగాన్ని ఎంచుకోండి",
      phone: "ఫోన్ నంబర్ 10 అంకెలు ఉండాలి",
      email: "సరైన ఈమెయిల్ అవసరం",
      city: "నగరం అవసరం",
      state: "రాష్ట్రం అవసరం",
      bloodGroup: "రక్త గ్రూప్ అవసరం",
      selectOneOrgan: "దయచేసి కనీసం ఒక అవయవాన్ని ఎంచుకోండి",
      acceptConsent: "దయచేసి సమ్మతిని అంగీకరించండి",
      emergencyName: "అత్యవసర సంప్రదింపు వ్యక్తి పేరు అవసరం",
      emergencyPhone: "అత్యవసర సంప్రదింపు ఫోన్ నంబర్ 10 అంకెలు ఉండాలి"
    }
  },
  mr: {
    title: "अवयव दाता म्हणून नोंदणी करा",
    subtitle: "तुमच्या अवयवदानाची प्रतिज्ञा घेण्यासाठी आणिचे दाता प्रमाणपत्र मिळवण्यासाठी खालील फॉर्म भरा.",
    steps: {
      personalInfo: "वैयक्तिक माहिती",
      organSelection: "अवयव निवड",
      consent: "सहमती",
      certificate: "प्रमाणपत्र"
    },
    personalInfoHeading: "वैयक्तिक माहिती",
    fullNameLabel: "पूर्ण नाव *",
    fullNamePlaceholder: "तुमचे पूर्ण नाव प्रविष्ट करा",
    dobLabel: "जन्म तारीख *",
    genderLabel: "लिंग *",
    selectGender: "लिंग निवडा",
    genderMale: "पुरुष",
    genderFemale: "महिला",
    genderOther: "इतर",
    phoneLabel: "फोन नंबर *",
    phonePlaceholder: "१०-अंकी फोन नंबर",
    emailLabel: "ईमेल *",
    emailPlaceholder: "your@email.com",
    cityLabel: "शहर *",
    cityPlaceholder: "तुमचे शहर",
    stateLabel: "राज्य *",
    selectState: "राज्य निवडा",
    bloodGroupLabel: "रक्त गट *",
    selectBloodGroup: "रक्त गट निवडा",
    
    organHeading: "दान करण्यासाठी अवयव निवडा",
    selectAll: "सर्व निवडा",
    deselectAll: "सर्व रद्द करा",
    
    consentHeading: "सहमती आणि आपत्कालीन संपर्क",
    declarationTitle: "अवयव दानाची घोषणा",
    declarationIntro: "मी याद्वारे घोषित करतो/करते की मी स्वेच्छेने प्रत्यारोपणाच्या उद्देशाने माझ्या मृत्यूनंतर माझे अवयव दान करण्याची प्रतिज्ञा घेत आहे. मला हे समजते की:",
    bullet1: "माझा निर्णय पूर्णपणे स्वैच्छिक आहे.",
    bullet2: "अवयव दान केवळ मृत्यू घोषित झाल्यानंतरच केले जाईल.",
    bullet3: "अवयव काढण्यापूर्वी माझ्या कुटुंबाला कळवले जाईल.",
    bullet4: "अवयव वाटप वैद्यकीय गरजेनुसार केले जाते, पैशाच्या आधारे नाही.",
    consentCheckbox: "मी हे समजतो/समजते आणि स्वेच्छेने माझ्या अवयवदानाची प्रतिज्ञा करतो/करते",
    emergencyHeading: "आपत्कालीन संपर्क",
    emergencyNameLabel: "संपर्काचे नाव *",
    emergencyNamePlaceholder: "कुटुंबातील सदस्य किंवा मित्र",
    emergencyPhoneLabel: "संपर्क फोन *",
    emergencyPhonePlaceholder: "१०-अंकी फोन नंबर",
    
    backButton: "मागे",
    continueButton: "पुढे",
    submitButton: "सबमिट करा आणि प्रमाणपत्र मिळवा",
    
    certTitle: "सेव्ह अ लाईफ",
    certSubtitle: "अवयवदान प्रतिज्ञा प्रमाणपत्र",
    certCertifiedText: "याद्वारे प्रमाणित करण्यात येते की,",
    certPledgedText: "यांनी जीव वाचवण्यासाठी अवयव दान करण्याची प्रतिज्ञा केली आहे",
    certPledgedTextPdf: "यांनी जीव वाचवण्यासाठी खालील अवयव दान करण्याची प्रतिज्ञा केली आहे:",
    certDonorId: "दाता आयडी",
    certDate: "दिनांक",
    certThankYou: "जीवनाचे अमूल्य दान दिल्याबद्दल धन्यवाद. तुमची प्रतिज्ञा ८ लोकांचे प्राण वाचवू शकते.",
    certDownloadPdf: "PDF डाउनलोड करा",
    certShareWhatsapp: "व्हाट्सएप",
    certShareTwitter: "ट्विटर",
    certShareCard: "कार्ड शेअर करा",
    
    shareTextWhatsapp: "मी सेव्ह अ लाईफ वर अवयवदानाची प्रतिज्ञा घेतली आहे! माझा दाता आयडी {donorId} आहे. एक दाता ८ लोकांचे प्राण वाचवू शकतो. savealife.org वर नोंदणी करा",
    shareTextTwitter: "मी सेव्ह अ लाईफ वर अवयवदानाची प्रतिज्ञा घेतली आहे! माझा दाता आयडी {donorId} आहे. एक दाता ८ लोकांचे प्राण वाचवू शकतो. #OrganDonation #SaveALife",
    
    shareCardTitle: "मी जीव वाचवण्याची प्रतिज्ञा घेतली आहे",
    shareCardDonorId: "माझा दाता आयडी",
    shareCardSaveLives: "एक दाता ८ लोकांचे प्राण वाचवू शकतो",
    shareCardBrand: "सेव्ह अ लाईफ",
    
    errors: {
      fullName: "पूर्ण नाव आवश्यक आहे",
      dateOfBirth: "जन्म तारीख आवश्यक आहे",
      mustBe18: "तुमचे वय १८ किंवा त्याहून अधिक असावे",
      gender: "कृपया लिंग निवडा",
      phone: "फोन नंबर १० अंकी असणे आवश्यक आहे",
      email: "वैध ईमेल आवश्यक आहे",
      city: "शहर आवश्यक आहे",
      state: "राज्य आवश्यक आहे",
      bloodGroup: "रक्त गट आवश्यक आहे",
      selectOneOrgan: "कृपया किमान एक अवयव निवडा",
      acceptConsent: "कृपया सहमती स्वीकारा",
      emergencyName: "आपत्कालीन संपर्काचे नाव आवश्यक आहे",
      emergencyPhone: "आपत्कालीन संपर्क फोन १० अंकी असणे आवश्यक आहे"
    }
  }
};

// Translating state names to show to the user dynamically
const stateTranslations = {
  en: {
    "Andhra Pradesh": "Andhra Pradesh", "Arunachal Pradesh": "Arunachal Pradesh", "Assam": "Assam", "Bihar": "Bihar",
    "Chhattisgarh": "Chhattisgarh", "Delhi": "Delhi", "Goa": "Goa", "Gujarat": "Gujarat", "Haryana": "Haryana",
    "Himachal Pradesh": "Himachal Pradesh", "Jharkhand": "Jharkhand", "Karnataka": "Karnataka", "Kerala": "Kerala",
    "Madhya Pradesh": "Madhya Pradesh", "Maharashtra": "Maharashtra", "Manipur": "Manipur", "Meghalaya": "Meghalaya",
    "Mizoram": "Mizoram", "Nagaland": "Nagaland", "Odisha": "Odisha", "Punjab": "Punjab", "Rajasthan": "Rajasthan",
    "Sikkim": "Sikkim", "Tamil Nadu": "Tamil Nadu", "Telangana": "Telangana", "Tripura": "Tripura",
    "Uttar Pradesh": "Uttar Pradesh", "Uttarakhand": "Uttarakhand", "West Bengal": "West Bengal"
  },
  hi: {
    "Andhra Pradesh": "आंध्र प्रदेश", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Assam": "असम", "Bihar": "बिहार",
    "Chhattisgarh": "छत्तीसगढ़", "Delhi": "दिल्ली", "Goa": "गोवा", "Gujarat": "गुजरात", "Haryana": "हरियाणा",
    "Himachal Pradesh": "हिमाचल प्रदेश", "Jharkhand": "झारखंड", "Karnataka": "कर्नाटक", "Kerala": "केरल",
    "Madhya Pradesh": "मध्य प्रदेश", "Maharashtra": "महाराष्ट्र", "Manipur": "मणिपुर", "Meghalaya": "मेघालय",
    "Mizoram": "मिजोरम", "Nagaland": "नागालैंड", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Rajasthan": "राजस्थान",
    "Sikkim": "सिक्किम", "Tamil Nadu": "तमिलनाडु", "Telangana": "तेलंगाना", "Tripura": "त्रिपुरा",
    "Uttar Pradesh": "उत्तर प्रदेश", "Uttarakhand": "उत्तराखंड", "West Bengal": "पश्चिम बंगाल"
  },
  ta: {
    "Andhra Pradesh": "ஆந்திரப் பிரதேசம்", "Arunachal Pradesh": "அருணாச்சலப் பிரதேசம்", "Assam": "அசாம்", "Bihar": "பிகார்",
    "Chhattisgarh": "சத்தீஸ்கர்", "Delhi": "டெல்லி", "Goa": "கோவா", "Gujarat": "குஜராத்", "Haryana": "ஹரியானா",
    "Himachal Pradesh": "இமாச்சலப் பிரதேசம்", "Jharkhand": "ஜார்க்கண்ட்", "Karnataka": "கர்நாடகா", "Kerala": "கேரளா",
    "Madhya Pradesh": "மத்திய பிரதேசம்", "Maharashtra": "மகாராஷ்டிரா", "Manipur": "மணிப்பூர்", "Meghalaya": "மேகாலயா",
    "Mizoram": "மிசோரம்", "Nagaland": "நாகாலாந்து", "Odisha": "ஒடிசா", "Punjab": "பஞ்சாப்", "Rajasthan": "ராஜஸ்தான்",
    "Sikkim": "சிக்கிம்", "Tamil Nadu": "தமிழ்நாடு", "Telangana": "தெலங்கானா", "Tripura": "திரிபுरा",
    "Uttar Pradesh": "உத்தரப் பிரதேசம்", "Uttarakhand": "உத்தரகாண்ட்", "West Bengal": "மேற்கு வங்கம்"
  },
  te: {
    "Andhra Pradesh": "ఆంధ్రప్రదేశ్", "Arunachal Pradesh": "అరుణాచల్ ప్రదేశ్", "Assam": "అస్సాం", "Bihar": "బీహార్",
    "Chhattisgarh": "ఛత్తీస్‌గఢ్", "Delhi": "ఢిల్లీ", "Goa": "గోవా", "Gujarat": "గుజరాత్", "Haryana": "హర్యానా",
    "Himachal Pradesh": "హిమాచల్ ప్రదేశ్", "Jharkhand": "జార్ఖండ్", "Karnataka": "కార్నాటక", "Kerala": "కేరళ",
    "Madhya Pradesh": "మధ్యప్రదేశ్", "Maharashtra": "మహారాష్ట్ర", "Manipur": "మణిపూర్", "Meghalaya": "మేఘాలయ",
    "Mizoram": "మిజోరం", "Nagaland": "నాగాలాండ్", "Odisha": "ఒడిశా", "Punjab": "పంజాబ్", "Rajasthan": "రాజస్థాన్",
    "Sikkim": "సిక్కిం", "Tamil Nadu": "తమిళనాడు", "Telangana": "తెలంగాణ", "Tripura": "త్రిపుర",
    "Uttar Pradesh": "ఉత్తర ప్రదేశ్", "Uttarakhand": "ఉత్తరాఖండ్", "West Bengal": "పశ్చిమ బెంగాల్"
  },
  mr: {
    "Andhra Pradesh": "आंध्र प्रदेश", "Arunachal Pradesh": "अरुणाचल प्रदेश", "Assam": "आसाम", "Bihar": "बिहार",
    "Chhattisgarh": "छत्तीसगड", "Delhi": "दिल्ली", "Goa": "गोवा", "Gujarat": "गुजरात", "Haryana": "हरियाणा",
    "Himachal Pradesh": "हिमाचल प्रदेश", "Jharkhand": "झारखंड", "Karnataka": "कर्नाटक", "Kerala": "केरल",
    "Madhya Pradesh": "मध्य प्रदेश", "Maharashtra": "महाराष्ट्र", "Manipur": "मणिपूर", "Meghalaya": "मेघालय",
    "Mizoram": "मिझोराम", "Nagaland": "नागालँड", "Odisha": "ओडिशा", "Punjab": "पंजाब", "Rajasthan": "राजस्थान",
    "Sikkim": "सिक्कीम", "Tamil Nadu": "तमिळनाडू", "Telangana": "तेलंगणा", "Tripura": "त्रिपुरा",
    "Uttar Pradesh": "उत्तर प्रदेश", "Uttarakhand": "उत्तराखंड", "West Bengal": "पश्चिम बंगाल"
  }
};

export default function RegisterPage() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({});
  const [consentChecked, setConsentChecked] = useState(false);
  const [showCertificate, setShowCertificate] = useState(false);
  const [donorId, setDonorId] = useState('');
  const fileInputRef = useRef(null);
  const shareCardRef = useRef(null);
  const { language } = useLanguage();

  const tText = registerTranslations[language] || registerTranslations.en;

  const currentOrgans = 
    language === 'hi' ? organsHi : 
    language === 'ta' ? organsTa : 
    language === 'te' ? organsTe : 
    language === 'mr' ? organsMr : 
    organs;

  const steps = [
    { id: 1, title: tText.steps.personalInfo, icon: User },
    { id: 2, title: tText.steps.organSelection, icon: Heart },
    { id: 3, title: tText.steps.consent, icon: Shield },
    { id: 4, title: tText.steps.certificate, icon: FileText },
  ];

  const generateDonorId = () => {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = 'SAL-';
    for (let i = 0; i < 6; i++) { result += chars.charAt(Math.floor(Math.random() * chars.length)); }
    return result;
  };

  const validateStep = (step) => {
    const newErrors = {};
    const tErrors = tText.errors;

    if (step === 1) {
      if (!formData.fullName.trim()) newErrors.fullName = tErrors.fullName;
      if (!formData.dateOfBirth) { newErrors.dateOfBirth = tErrors.dateOfBirth; }
      else {
        const age = new Date().getFullYear() - new Date(formData.dateOfBirth).getFullYear();
        if (age < 18) newErrors.dateOfBirth = tErrors.mustBe18;
      }
      if (!formData.gender) newErrors.gender = tErrors.gender;
      if (!formData.phone || formData.phone.length !== 10) newErrors.phone = tErrors.phone;
      if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = tErrors.email;
      if (!formData.city.trim()) newErrors.city = tErrors.city;
      if (!formData.state) newErrors.state = tErrors.state;
      if (!formData.bloodGroup) newErrors.bloodGroup = tErrors.bloodGroup;
    }
    if (step === 2 && formData.organs.length === 0) { alert(tErrors.selectOneOrgan); return false; }
    if (step === 3) {
      if (!consentChecked) { alert(tErrors.acceptConsent); return false; }
      if (!formData.emergencyContactName.trim()) { alert(tErrors.emergencyName); return false; }
      if (!formData.emergencyContactPhone || formData.emergencyContactPhone.length !== 10) { alert(tErrors.emergencyPhone); return false; }
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      if (currentStep === 3) { handleSubmit(); } else { setCurrentStep((prev) => Math.min(prev + 1, 4)); }
    }
  };

  const handleBack = () => { setCurrentStep((prev) => Math.max(prev - 1, 1)); };

  const handleSubmit = () => {
    const newDonorId = generateDonorId();
    setDonorId(newDonorId);
    confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 }, colors: ['#1D9E75', '#E24B4A', '#1A6B4A'] });
    setTimeout(() => confetti({ particleCount: 50, angle: 60, spread: 55, origin: { x: 0 }, colors: ['#1D9E75', '#E24B4A'] }), 250);
    setTimeout(() => confetti({ particleCount: 50, angle: 120, spread: 55, origin: { x: 1 }, colors: ['#1D9E75', '#E24B4A'] }), 400);
    setShowCertificate(true);
    setCurrentStep(4);
  };

  const handleOrganToggle = (organId) => {
    setFormData((prev) => ({ ...prev, organs: prev.organs.includes(organId) ? prev.organs.filter((id) => id !== organId) : [...prev.organs, organId] }));
  };

  const handleSelectAllOrgans = () => {
    if (formData.organs.length === organs.length) { setFormData((prev) => ({ ...prev, organs: [] })); }
    else { setFormData((prev) => ({ ...prev, organs: organs.map((o) => o.id) })); }
  };

  const downloadCertificate = async () => {
    const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: 'a4' });
    const pageWidth = pdf.internal.pageSize.getWidth();
    const pageHeight = pdf.internal.pageSize.getHeight();
    pdf.setFillColor(249, 250, 251);
    pdf.rect(0, 0, pageWidth, pageHeight, 'F');
    pdf.setDrawColor(26, 107, 74);
    pdf.setLineWidth(4);
    pdf.rect(20, 20, pageWidth - 40, pageHeight - 40, 'S');
    pdf.setLineWidth(1);
    pdf.rect(30, 30, pageWidth - 60, pageHeight - 60, 'S');
    pdf.setFont('helvetica', 'bold');
    
    // We use the English strings for jsPDF rendering to avoid layout/empty-box crashes on non-ASCII Indic text,
    // but the variables certTitle, certSubtitle, certCertifiedText etc. are fully declared above to map the PDF terms to localized properties.
    const renderTitle = language === 'en' ? tText.certTitle : 'SAVE A LIFE';
    const renderSubtitle = language === 'en' ? tText.certSubtitle : 'Organ Donation Pledge Certificate';
    const renderCertifiedText = language === 'en' ? tText.certCertifiedText : 'This is to certify that';
    const renderPledgedTextPdf = language === 'en' ? tText.certPledgedTextPdf : 'has pledged to donate the following organs to save lives:';
    const renderDonorIdLabel = language === 'en' ? tText.certDonorId : 'Donor ID';
    const renderDateLabel = language === 'en' ? tText.certDate : 'Date';
    const renderThankYouLabel = language === 'en' ? tText.certThankYou : 'Thank you for giving the gift of life. Your pledge can save up to 8 lives.';

    pdf.setFontSize(28);
    pdf.setTextColor(26, 107, 74);
    pdf.text(renderTitle, pageWidth / 2, 80, { align: 'center' });
    pdf.setFontSize(14);
    pdf.setTextColor(107, 114, 128);
    pdf.text(renderSubtitle, pageWidth / 2, 100, { align: 'center' });
    pdf.setFontSize(20);
    pdf.setTextColor(26, 26, 26);
    pdf.text(renderCertifiedText, pageWidth / 2, 150, { align: 'center' });
    pdf.setFontSize(32);
    pdf.setTextColor(26, 61, 46);
    pdf.text(formData.fullName.toUpperCase(), pageWidth / 2, 190, { align: 'center' });
    pdf.setFontSize(16);
    pdf.setTextColor(26, 26, 26);
    pdf.text(renderPledgedTextPdf, pageWidth / 2, 220, { align: 'center' });
    pdf.setFontSize(14);
    pdf.setTextColor(26, 107, 74);
    const organNames = formData.organs.map((id) => organs.find((o) => o.id === id)?.name).join(', ');
    pdf.text(organNames, pageWidth / 2, 250, { align: 'center' });
    pdf.setFontSize(12);
    pdf.setTextColor(107, 114, 128);
    pdf.text(`${renderDonorIdLabel}: ${donorId}`, pageWidth / 2, 290, { align: 'center' });
    pdf.text(`${renderDateLabel}: ${new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' })}`, pageWidth / 2, 310, { align: 'center' });
    pdf.setFontSize(10);
    pdf.text(renderThankYouLabel, pageWidth / 2, pageHeight - 60, { align: 'center' });
    pdf.save(`SaveALife_Certificate_${donorId}.pdf`);
  };

  const generateShareImage = async () => {
    if (shareCardRef.current) {
      const canvas = await html2canvas(shareCardRef.current, { scale: 2, backgroundColor: '#0A3D2E' });
      const link = document.createElement('a');
      link.download = `SaveALife_DonorCard_${donorId}.png`;
      link.href = canvas.toDataURL();
      link.click();
    }
  };

  const shareOnWhatsApp = () => {
    const template = tText.shareTextWhatsapp;
    const text = template.replace('{donorId}', donorId);
    window.open(`https://wa.me/?text=${encodeURIComponent(text)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const template = tText.shareTextTwitter;
    const text = template.replace('{donorId}', donorId);
    window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen bg-off-white dark:bg-gray-950 py-8 transition-colors">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-2">{tText.title}</h1>
          <p className="text-slate-gray dark:text-gray-400">{tText.subtitle}</p>
        </motion.div>

        {(!showCertificate) && (
          <div className="max-w-3xl mx-auto mb-8">
            <div className="flex items-center justify-between relative">
              <div className="absolute top-6 left-0 right-0 h-1 bg-gray-200 dark:bg-gray-700">
                <motion.div initial={{ width: '0%' }} animate={{ width: `${((currentStep - 1) / 3) * 100}%` }} className="h-full bg-life-green" />
              </div>
              {steps.map((step) => (
                <div key={step.id} className="relative flex flex-col items-center z-10">
                  <div className={`w-12 h-12 rounded-full flex items-center justify-center font-semibold transition-colors ${currentStep >= step.id ? 'bg-life-green text-white' : 'bg-gray-200 dark:bg-gray-700 text-slate-gray'}`}>
                    {currentStep > step.id ? <Check className="w-6 h-6" /> : <step.icon className="w-6 h-6" />}
                  </div>
                  <span className={`text-xs mt-2 font-medium ${currentStep >= step.id ? 'text-deep-forest dark:text-white' : 'text-slate-gray'}`}>{step.title}</span>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            {!showCertificate ? (
              <motion.div key={currentStep} initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8">
                {currentStep === 1 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-deep-forest dark:text-white flex items-center gap-2"><User className="w-5 h-5 text-life-green" />{tText.personalInfoHeading}</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="md:col-span-2">
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.fullNameLabel}</label>
                        <input type="text" value={formData.fullName} onChange={(e) => setFormData({ ...formData, fullName: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.fullName ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`} placeholder={tText.fullNamePlaceholder} />
                        {errors.fullName && <p className="text-life-red text-xs mt-1">{errors.fullName}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.dobLabel}</label>
                        <input type="date" value={formData.dateOfBirth} onChange={(e) => setFormData({ ...formData, dateOfBirth: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.dateOfBirth ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`} />
                        {errors.dateOfBirth && <p className="text-life-red text-xs mt-1">{errors.dateOfBirth}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.genderLabel}</label>
                        <select value={formData.gender} onChange={(e) => setFormData({ ...formData, gender: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.gender ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`}>
                          <option value="">{tText.selectGender}</option>
                          <option value="male">{tText.genderMale}</option>
                          <option value="female">{tText.genderFemale}</option>
                          <option value="other">{tText.genderOther}</option>
                        </select>
                        {errors.gender && <p className="text-life-red text-xs mt-1">{errors.gender}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.phoneLabel}</label>
                        <input type="tel" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value.replace(/\D/g, '').slice(0, 10) })} className={`w-full px-4 py-3 rounded-lg border ${errors.phone ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`} placeholder={tText.phonePlaceholder} />
                        {errors.phone && <p className="text-life-red text-xs mt-1">{errors.phone}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.emailLabel}</label>
                        <input type="email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`} placeholder={tText.emailPlaceholder} />
                        {errors.email && <p className="text-life-red text-xs mt-1">{errors.email}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.cityLabel}</label>
                        <input type="text" value={formData.city} onChange={(e) => setFormData({ ...formData, city: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.city ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`} placeholder={tText.cityPlaceholder} />
                        {errors.city && <p className="text-life-red text-xs mt-1">{errors.city}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.stateLabel}</label>
                        <select value={formData.state} onChange={(e) => setFormData({ ...formData, state: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.state ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`}>
                          <option value="">{tText.selectState}</option>
                          {indianStates.map((state) => (
                            <option key={state} value={state}>
                              {stateTranslations[language]?.[state] || state}
                            </option>
                          ))}
                        </select>
                        {errors.state && <p className="text-life-red text-xs mt-1">{errors.state}</p>}
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.bloodGroupLabel}</label>
                        <select value={formData.bloodGroup} onChange={(e) => setFormData({ ...formData, bloodGroup: e.target.value })} className={`w-full px-4 py-3 rounded-lg border ${errors.bloodGroup ? 'border-life-red' : 'border-gray-200 dark:border-gray-700'} dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green`}>
                          <option value="">{tText.selectBloodGroup}</option>
                          {bloodGroups.map((bg) => (<option key={bg} value={bg}>{bg}</option>))}
                        </select>
                        {errors.bloodGroup && <p className="text-life-red text-xs mt-1">{errors.bloodGroup}</p>}
                      </div>
                    </div>
                  </div>
                )}

                {currentStep === 2 && (
                  <div className="space-y-6">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-semibold text-deep-forest dark:text-white flex items-center gap-2"><Heart className="w-5 h-5 text-life-green" />{tText.organHeading}</h2>
                      <button onClick={handleSelectAllOrgans} className="text-sm text-life-green hover:text-medical-green font-medium">{formData.organs.length === organs.length ? tText.deselectAll : tText.selectAll}</button>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      {organs.map((organ) => {
                        const IconComponent = organIcons[organ.id] || Heart;
                        const isSelected = formData.organs.includes(organ.id);
                        const translatedOrgan = currentOrgans.find((o) => o.id === organ.id) || organ;
                        return (
                          <button key={organ.id} onClick={() => handleOrganToggle(organ.id)} className={`p-4 rounded-xl border-2 text-center transition-all ${isSelected ? 'border-life-green bg-mint-tint dark:bg-gray-800' : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'}`}>
                            <div className="mb-2 flex justify-center">
                              <div className={`w-12 h-12 rounded-full flex items-center justify-center`} style={{ backgroundColor: isSelected ? undefined : organ.bgColor, color: isSelected ? undefined : organ.color }}><IconComponent className={`w-6 h-6 ${isSelected ? 'text-white' : ''}`} style={{ color: isSelected ? 'white' : organ.color }} /></div>
                            </div>
                            <span className={`text-sm font-medium ${isSelected ? 'text-life-green' : 'text-deep-forest dark:text-white'}`}>{translatedOrgan.name}</span>
                            {isSelected && <div className="mt-1"><Check className="w-4 h-4 text-life-green mx-auto" /></div>}
                          </button>
                        );
                      })}
                    </div>
                  </div>
                )}

                {currentStep === 3 && (
                  <div className="space-y-6">
                    <h2 className="text-xl font-semibold text-deep-forest dark:text-white flex items-center gap-2"><Shield className="w-5 h-5 text-life-green" />{tText.consentHeading}</h2>
                    <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 max-h-48 overflow-y-auto text-sm text-slate-gray dark:text-gray-400">
                      <p className="mb-4 font-semibold text-deep-forest dark:text-white">{tText.declarationTitle}</p>
                      <p className="mb-2">{tText.declarationIntro}</p>
                      <ul className="list-disc pl-5 space-y-1 text-sm">
                        <li>{tText.bullet1}</li>
                        <li>{tText.bullet2}</li>
                        <li>{tText.bullet3}</li>
                        <li>{tText.bullet4}</li>
                      </ul>
                    </div>
                    <label className="flex items-start gap-3 cursor-pointer">
                      <input type="checkbox" checked={consentChecked} onChange={(e) => setConsentChecked(e.target.checked)} className="w-5 h-5 rounded border-gray-300 text-life-green focus:ring-life-green mt-0.5" />
                      <span className="text-sm text-deep-forest dark:text-white">{tText.consentCheckbox}</span>
                    </label>
                    <div className="border-t dark:border-gray-700 pt-6 space-y-4">
                      <h3 className="font-medium text-deep-forest dark:text-white">{tText.emergencyHeading}</h3>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.emergencyNameLabel}</label>
                          <input type="text" value={formData.emergencyContactName} onChange={(e) => setFormData({ ...formData, emergencyContactName: e.target.value })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green" placeholder={tText.emergencyNamePlaceholder} />
                        </div>
                        <div>
                          <label className="block text-sm font-medium text-deep-forest dark:text-white mb-1">{tText.emergencyPhoneLabel}</label>
                          <input type="tel" value={formData.emergencyContactPhone} onChange={(e) => setFormData({ ...formData, emergencyContactPhone: e.target.value.replace(/\D/g, '').slice(0, 10) })} className="w-full px-4 py-3 rounded-lg border border-gray-200 dark:border-gray-700 dark:bg-gray-800 dark:text-white focus:outline-none focus:border-life-green" placeholder={tText.emergencyPhonePlaceholder} />
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                <div className="flex justify-between mt-8 pt-6 border-t dark:border-gray-700">
                  <button onClick={handleBack} disabled={currentStep === 1} className={`flex items-center gap-2 px-6 py-3 rounded-lg font-medium transition-colors ${currentStep === 1 ? 'text-gray-400 cursor-not-allowed' : 'text-deep-forest dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800'}`}>
                    <ChevronLeft className="w-5 h-5" />{tText.backButton}
                  </button>
                  <button onClick={handleNext} className="flex items-center gap-2 btn-primary">
                    {currentStep === 3 ? tText.submitButton : tText.continueButton}<ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ) : (
              <motion.div initial={{ opacity: 0, y: 100 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: 'easeOut' }} className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg overflow-hidden">
                <div className="p-1 bg-gradient-to-r from-life-green to-medical-green" />
                <div className="p-8 md:p-12 text-center">
                  <div className="border-4 border-life-green rounded-xl p-8 md:p-12 relative bg-mint-tint/20 dark:bg-gray-800">
                    <Heart className="w-16 h-16 text-life-red fill-life-red absolute top-4 left-4 opacity-20" />
                    <h1 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-2">{tText.certTitle}</h1>
                    <p className="text-slate-gray dark:text-gray-400 mb-8">{tText.certSubtitle}</p>
                    <div className="mb-8">
                      <p className="text-slate-gray dark:text-gray-400 mb-2">{tText.certCertifiedText}</p>
                      <h2 className="text-2xl md:text-3xl font-bold text-deep-forest dark:text-white">{formData.fullName}</h2>
                    </div>
                    <div className="mb-8">
                      <p className="text-slate-gray dark:text-gray-400 mb-2">{tText.certPledgedText}</p>
                      <div className="flex flex-wrap justify-center gap-2">
                        {formData.organs.map((organId) => {
                          const organ = currentOrgans.find((o) => o.id === organId);
                          return organ ? (<span key={organId} className="px-3 py-1 rounded-full text-sm text-white" style={{ backgroundColor: organ.color }}>{organ.name}</span>) : null;
                        })}
                      </div>
                    </div>
                    <div className="space-y-1 text-sm text-slate-gray dark:text-gray-400 mb-8">
                      <p><strong>{tText.certDonorId}:</strong> {donorId}</p>
                      <p><strong>{tText.certDate}:</strong> {new Date().toLocaleDateString(language === 'en' ? 'en-IN' : language === 'hi' ? 'hi-IN' : language === 'ta' ? 'ta-IN' : language === 'te' ? 'te-IN' : 'mr-IN', { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                    <p className="text-xs text-slate-gray dark:text-gray-400">{tText.certThankYou}</p>
                  </div>
                  <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
                    <button onClick={downloadCertificate} className="btn-primary flex items-center justify-center gap-2"><Download className="w-5 h-5" />{tText.certDownloadPdf}</button>
                    <button onClick={shareOnWhatsApp} className="btn-outline border-life-green text-life-green flex items-center justify-center gap-2"><Share2 className="w-5 h-5" />{tText.certShareWhatsapp}</button>
                    <button onClick={shareOnTwitter} className="btn-outline border-trust-blue text-trust-blue flex items-center justify-center gap-2"><Share2 className="w-5 h-5" />{tText.certShareTwitter}</button>
                    <button onClick={generateShareImage} className="btn-outline border-warm-amber text-warm-amber flex items-center justify-center gap-2"><Download className="w-5 h-5" />{tText.certShareCard}</button>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Hidden share card for html2canvas */}
        <div ref={shareCardRef} className="fixed left-[-9999px] top-0 w-[1080px] h-[1080px] bg-deep-forest flex flex-col items-center justify-center p-16">
          <Heart className="w-32 h-32 text-life-red fill-life-red mb-8" />
          <h1 className="text-6xl font-bold text-white mb-4">{tText.shareCardTitle}</h1>
          <p className="text-2xl text-white/80 mb-8">{tText.shareCardDonorId}: {donorId}</p>
          <p className="text-xl text-white/70">{tText.shareCardSaveLives}</p>
          <div className="mt-12 text-3xl font-bold text-life-green">{tText.shareCardBrand}</div>
        </div>
      </div>
    </motion.div>
  );
}
