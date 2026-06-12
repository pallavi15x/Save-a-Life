import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle, XCircle, Trophy, Share2, RotateCcw } from 'lucide-react';
import confetti from 'canvas-confetti';
import { quizQuestions } from '../data/organData';
import { useLanguage } from '../context/LanguageContext';

const quizQuestionsHi = [
  { id: 1, question: "एक अंगदाता कितने लोगों की जान बचा सकता है?", options: ["8 जिंदगियों तक", "2 जिंदगियों तक", "5 जिंदगियों तक", "केवल 1 जिंदगी"], correct: 0, fact: "एक दाता हृदय, फेफड़े, यकृत, गुर्दे, अग्न्याशय और आंतों को दान करके 8 लोगों की जान बचा सकता है।" },
  { id: 2, question: "क्या अंगदान के लिए कोई आयु सीमा है?", options: ["हां, केवल 65 वर्ष से कम", "हां, केवल 50 वर्ष से कम", "नहीं, कोई आयु सीमा नहीं है", "हां, केवल 80 वर्ष से कम"], correct: 2, fact: "अंगदान के लिए कोई आयु सीमा नहीं है। 80 वर्ष से अधिक उम्र के लोगों ने भी सफलतापूर्वक अंगों का दान किया है।" },
  { id: 3, question: "क्या जीवित दाता अंग दान कर सकते हैं?", options: ["नहीं, कभी नहीं", "केवल गुर्दे", "हाँ - किडनी, यकृत का हिस्सा, अस्थि मज्जा", "केवल रक्त"], correct: 2, fact: "जीवित दाता जीवित रहते हुए एक गुर्दा, यकृत का हिस्सा, या अस्थि मज्जा दान कर सकते हैं।" },
  { id: 4, question: "क्या अंगदान से शरीर विकृत हो जाता है?", options: ["हाँ, काफी हद तक", "नहीं, शरीर का सम्मान किया जाता है", "केवल कुछ अंगों के लिए", "हाँ, लेकिन यह छिपा रहता है"], correct: 1, fact: "अंगदान की सर्जरी अत्यंत सम्मान के साथ की जाती है। अंतिम संस्कार के लिए शरीर पूरी तरह से सामान्य दिखता है।" },
  { id: 5, quote: "", question: "अंगदान के खर्चों का भुगतान कौन करता है?", options: ["दाता का परिवार", "प्राप्तकर्ता", "अस्पताल/सरकार", "बीमा कंपनियां"], correct: 2, fact: "अंगदान से संबंधित सभी खर्चे अस्पताल या अंग आवंटन संगठन द्वारा वहन किए जाते हैं, दाता के परिवार द्वारा नहीं।" },
  { id: 6, question: "मस्तिष्क मृत्यु (ब्रेन डेथ) क्या है?", options: ["कोमा की स्थिति", "मस्तिष्क कार्य की अपरिवर्तनीय हानि", "दिल का रुकना", "अस्थायी बेहोशी"], correct: 1, fact: "ब्रेन डेथ मस्तिष्क के सभी कार्यों का अपरिवर्तनीय नुकसान है। व्यक्ति कानूनी रूप से मृत है, भले ही हृदय कृत्रिम रूप से धड़क रहा हो।" },
  { id: 7, question: "क्या प्रमुख धर्म अंगदान का समर्थन करते हैं?", options: ["नहीं, अधिकांश विरोध करते हैं", "केवल ईसाई धर्म", "हाँ, सभी प्रमुख धर्म इसका समर्थन करते हैं", "यह क्षेत्र के अनुसार भिन्न होता है"], correct: 2, fact: "हिंदू, इस्लाम, ईसाई, सिख, बौद्ध और जैन धर्म सहित सभी प्रमुख धर्म अंगदान का समर्थन करते हैं।" },
  { id: 8, question: "क्या कोई दाता यह चुन सकता है कि कौन से अंग दान करने हैं?", options: ["नहीं", "हाँ, विशिष्ट अंगों का चयन किया जा सकता है", "केवल कुछ देशों में", "केवल जीवित दाता"], correct: 1, fact: "हाँ, पंजीकरण करते समय दाता निर्दिष्ट कर सकते हैं कि वे कौन से अंग और ऊतक दान करना चाहते हैं।" },
  { id: 9, question: "क्या दाता होने से मेरे चिकित्सीय उपचार पर प्रभाव पड़ेगा?", options: ["हाँ, डॉक्टर उतनी कोशिश नहीं करेंगे", "नहीं, उपचार कभी प्रभावित नहीं होता", "केवल आपात स्थिति में", "केवल कुछ अस्पतालों में"], correct: 1, fact: "दाता की स्थिति का आपातकालीन उपचार पर कोई प्रभाव नहीं पड़ता है। चिकित्सा दल प्रत्यारोपण दलों से अलग होते हैं।" },
  { id: 10, question: "क्या भारत में अंगदान कानूनी है?", options: ["नहीं", "हाँ, पूरी तरह से कानूनी", "केवल कुछ राज्यों में", "केवल जीवित दान के लिए"], correct: 1, fact: "अंगदान भारत में पूरी तरह से कानूनी है और मानव अंग प्रत्यारोपण अधिनियम, 1994 के तहत विनियमित है।" }
];

const quizQuestionsTa = [
  { id: 1, question: "ஒரு உறுப்பு தானம் செய்பவர் எத்தனை உயிர்களைக் காப்பாற்ற முடியும்?", options: ["8 உயிர்கள் வரை", "2 உயிர்கள் வரை", "5 உயிர்கள் வரை", "1 உயிர் மட்டுமே"], correct: 0, fact: "இதயம், நுரையீரல், கல்லீரல், சிறுநீரகம், கணையம் மற்றும் குடல்களை தானம் செய்வதன் மூலம் ஒரு கொடையாளி 8 உயிர்கள் வரை காப்பாற்ற முடியும்." },
  { id: 2, question: "உறுப்பு தானத்திற்கு வயது வரம்பு ஏதேனும் உள்ளதா?", options: ["ஆம், 65 வயதிற்கு உட்பட்டவர்கள் மட்டும்", "ஆம், 50 வயதிற்கு உட்பட்டவர்கள் மட்டும்", "இல்லை, வயது வரம்பு இல்லை", "ஆம், 80 வயதிற்கு உட்பட்டவர்கள் மட்டும்"], correct: 2, fact: "உறுப்பு தானத்திற்கு வயது வரம்பு ஏதும் இல்லை. 80 வயதிற்கு மேற்பட்டவர்கள் கூட வெற்றிகரமாக உறுப்பு தானம் செய்துள்ளனர்." },
  { id: 3, question: "உயிருடன் இருப்பவர்கள் உறுப்புகளை தானம் செய்ய முடியுமா?", options: ["இல்லை, ஒருபோதும் முடியாது", "சிறுநீரகங்கள் மட்டுமே", "ஆம் - சிறுநீரகம், கல்லீரலின் ஒரு பகுதி, எலும்பு மஜ்ஜை", "இரத்தம் மட்டுமே"], correct: 2, fact: "உயிருடன் இருப்பவர்கள் ஒரு சிறுநீரகம், கல்லீரலின் ஒரு பகுதி அல்லது எலும்பு மஜ்ஜையை தானம் செய்ய முடியும்." },
  { id: 4, question: "உறுப்பு தானம் செய்வதால் உடல் சிதைந்து போகுமா?", options: ["ஆம், கணிசமாக", "இல்லை, உடல் மரியாதையுடன் நடத்தப்படும்", "சில உறுப்புகளுக்கு மட்டும்", "ஆம், ஆனால் அது மறைக்கப்படும்"], correct: 1, fact: "உறுப்பு அறுவை சிகிச்சை முழு மரியாதையுடன் செய்யப்படுகிறது. இறுதிச் சடங்கின் போது உடல் சாதாரணமாகவே தோன்றும்." },
  { id: 5, question: "உறுப்பு தானத்திற்கான செலவுகளை யார் செலுத்துகிறார்கள்?", options: ["கொடையாளியின் குடும்பம்", "பெறுபவர்", "மருத்துவமனை/அரசாங்கம்", "காப்பீட்டு நிறுவனங்கள்"], correct: 2, fact: "உறுப்பு தானம் தொடர்பான அனைத்து செலவுகளையும் மருத்துவமனை அல்லது உறுப்பு ஒதுக்கீட்டு அமைப்பே ஏற்கும், கொடையாளியின் குடும்பம் அல்ல." },
  { id: 6, question: "மூளை மரணம் என்றால் என்ன?", options: ["கோமா நிலை", "மீள முடியாத மூளை செயல்பாடு இழப்பு", "இதயம் நின்றுவிடுவது", "தற்காலிக மயக்கம்"], correct: 1, fact: "மூளை மரணம் என்பது மூளையின் செயல்பாடுகள் முழுமையாக நிற்பதாகும். இதயம் செயற்கையாக துடித்தாலும் நபர் சட்டப்படி இறந்தவர் ஆவார்." },
  { id: 7, question: "முக்கிய மதங்கள் உறுப்பு தானத்தை ஆதரிக்கின்றனவா?", options: ["இல்லை, பெரும்பாலானவை எதிர்க்கின்றன", "கிறிஸ்தவம் மட்டுமே", "ஆம், அனைத்து முக்கிய மதங்களும் ஆதரிக்கின்றன", "மாநிலத்திற்கு மாநிலம் மாறுபடும்"], correct: 2, fact: "இந்து, இஸ்லாம், கிறிஸ்தவம், சீக்கியம், பௌத்தம் மற்றும் ஜைன மதம் உட்பட அனைத்து முக்கிய மதங்களும் உறுப்பு தானத்தை ஆதரிக்கின்றன." },
  { id: 8, question: "தான் எந்த உறுப்புகளை தானம் செய்ய வேண்டும் என்பதை கொடையாளி தேர்வு செய்யலாமா?", options: ["இல்லை", "ஆம், குறிப்பிட்ட உறுப்புகளை தேர்வு செய்யலாம்", "சில நாடுகளில் மட்டும்", "உயிருள்ள கொடையாளிகள் மட்டும்"], correct: 1, fact: "ஆம், பதிவு செய்யும் போதே எந்தெந்த உறுப்புகளை தானம் செய்ய விரும்புகிறீர்கள் என்பதை கொடையாளிகள் குறிப்பிடலாம்." },
  { id: 9, question: "தானம் செய்ய ஒப்புக்கொண்டதால் எனது மருத்துவ சிகிச்சை பாதிக்கப்படுமா?", options: ["ஆம், மருத்துவர்கள் அதிகம் முயற்சி செய்ய மாட்டார்கள்", "இல்லை, சிகிச்சை ஒருபோதும் பாதிக்கப்படாது", "அவசர காலங்களில் மட்டும்", "சில மருத்துவமனைகளில் மட்டும்"], correct: 1, fact: "தானதாரி என்ற நிலை அவசர சிகிச்சையை எந்த வகையிலும் பாதிக்காது. அவசர சிகிச்சை குழுவும் மாற்று அறுவை சிகிச்சை குழுவும் வெவ்வேறு பிரிவுகள் ஆகும்." },
  { id: 10, question: "இந்தியாவில் உறுப்பு தானம் சட்டப்பூர்வமானதா?", options: ["இல்லை", "ஆம், முற்றிலும் சட்டப்பூர்வமானது", "சில மாநிலங்களில் மட்டும்", "உயிருடன் தானம் செய்ய மட்டும்"], correct: 1, fact: "இந்தியாவில் உறுப்பு தானம் முற்றிலும் சட்டப்பூர்வமானது மற்றும் இது மனித உறுப்புகள் மாற்றுச் சட்டம் 1994 இன் கீழ் கட்டுப்படுத்தப்படுகிறது." }
];

const quizQuestionsTe = [
  { id: 1, question: "ఒక్క అవయవ దాత ఎంతమంది ప్రాణాలను కాపాడగలరు?", options: ["8 మంది వరకు", "ఇద్దరు వరకు", "5 గురు వరకు", "ఒక్కరిని మాత్రమే"], correct: 0, fact: "ఒక దాత గుండె, ఊపిరితిత్తులు, కాలేయం, మూత్రపిండాలు, క్లోమం మరియు ప్రేగులను దానం చేయడం ద్వారా 8 మంది ప్రాణాలను కాపాడవచ్చు." },
  { id: 2, question: "అవయవ దానానికి వయోపరిమితి ఉందా?", options: ["అవును, 65 ఏళ్ల లోపు మాత్రమే", "అవును, 50 ఏళ్ల లోపు మాత్రమే", "లేదు, ఎటువంటి వయోపరిమితి లేదు", "అవును, 80 ఏళ్ల లోపు మాత్రమే"], correct: 2, fact: "అవయవ దానానికి వయోపరిమితి లేదు. 80 ఏళ్లు పైబడిన వారు కూడా విజయవంతంగా అవయవ దానం చేసారు." },
  { id: 3, question: "సజీవ దాతలు అవయవాలను దానం చేయవచ్చా?", options: ["లేదు, ఎప్పటికీ చేయలేరు", "కిడ్నీలు మాత్రమే", "అవును - కిడ్నీ, కాలేయంలో కొంత భాగం, అస్థిమజ్జ", "రక్తం మాత్రమే"], correct: 2, fact: "సజీవ దాతలు ఒక కిడ్నీ, కాలేయంలో కొంత భాగం లేదా అస్థిమజ్జను దానం చేయవచ్చు." },
  { id: 4, question: "అవయవ దానం వల్ల శరీరం వికృతంగా మారుతుందా?", options: ["అవును, చాలా వరకు", "లేదు, శరీరాన్ని గౌరవంగా చూస్తారు", "కొన్ని అవయవాలకు మాత్రమే", "అవును, కానీ అది కనపడదు"], correct: 1, fact: "అవయవాల సేకరణ శస్త్రచికిత్స పూర్తి గౌరవంతో జరుగుతుంది. అంత్యక్రియల సమయంలో శరీరం సాధారణంగానే ఉంటుంది." },
  { id: 5, question: "అవయవ దాన ఖర్చులను ఎవరు భరిస్తారు?", options: ["దాత కుటుంబ సభ్యులు", "గ్రహీత", "ఆసుపత్రి/ప్రభుత్వం", "భీమా సంస్థలు"], correct: 2, fact: "అవయవ దానానికి సంబంధించిన అన్ని ఖర్చులను ఆసుపత్రి లేదా అవయవ కేటాయింపు సంస్థ భరిస్తుంది, దాత కుటుంబం కాదు." },
  { id: 6, question: "మెదడు మరణం (బ్రెయిన్ డెత్) అంటే ఏమిటి?", options: ["కోమా స్థితి", "మెదడు పనితీరు శాశ్వతంగా కోల్పోవడం", "గుండె ఆగిపోవడం", "తాత్కాలిక స్పృహ కోల్పోవడం"], correct: 1, fact: "బ్రెయిన్ డెత్ అంటే మెదడు పనితీరు శాశ్వతంగా నిలిచిపోవడం. గుండె కృత్రిమంగా కొట్టుకుంటున్నప్పటికీ ఆ వ్యక్తి మరణించినట్లే." },
  { id: 7, question: "ప్రధాన మతాలు అవయవ దానాన్ని సమర్థిస్తాయా?", options: ["లేదు, చాలా మతాలు వ్యతిరేకిస్తాయి", "క్రైస్తవ మతం మాత్రమే", "అవును, అన్ని ప్రధాన మతాలు సమర్థిస్తాయి", "ప్రాంతాన్ని బట్టి మారుతుంది"], correct: 2, fact: "హిందూ, ఇస్లాం, క్రైస్తవ, సిక్కు, బౌద్ధ మరియు జైన మతాలు అవయవ దానాన్ని సమర్థిస్తాయి." },
  { id: 8, question: "దాత ఏ అవయవాలను దానం చేయాలో ఎంచుకోవచ్చా?", options: ["లేదు", "అవును, నిర్దిష్ట అవయవాలను ఎంచుకోవచ్చు", "కొన్ని దేశాలలో మాత్రమే", "సజీవ దాతలు మాత్రమే"], correct: 1, fact: "అవును, నమోదు చేసుకునే సమయంలోనే ఏయే అవయవాలను దానం చేయాలనుకుంటున్నారో దాతలు పేర్కొనవచ్చు." },
  { id: 9, question: "నేను దాతగా మారడం వల్ల నా వైద్య చికిత్సపై ప్రభావం పడుతుందా?", options: ["అవును, వైద్యులు ఎక్కువ ప్రయత్నించరు", "లేదు, చికిత్సపై ఎప్పుడూ ప్రభావం ఉండదు", "అత్యవసర పరిస్థితుల్లో మాత్రమే", "కొన్ని ఆసుపత్రులలో మాత్రమే"], correct: 1, fact: "దాత హోదా అత్యవసర చికిత్స నిర్ణయాలను ప్రభావితం చేయదు. చికిత్స చేసే వైద్యులు, మార్పిడి చేసే బృందం వేర్వేరుగా ఉంటారు." },
  { id: 10, question: "భారతదేశంలో అవయవ దానం చట్టబద్ధమేనా?", options: ["కాదు", "అవును, పూర్తిగా చట్టబద్ధం", "కొన్ని రాష్ట్రాలలో మాత్రమే", "సజీవ దానానికి మాత్రమే"], correct: 1, fact: "భారతదేశంలో అవయవ దానం పూర్తిగా చట్టబద్ధమైనది మరియు ఇది మానవ అవయవ మార్పిడి చట్టం 1994 కింద నియంత్రించబడుతుంది." }
];

const quizQuestionsMr = [
  { id: 1, question: "एक अवयवदाता किती लोकांचे प्राण वाचवू शकतो?", options: ["८ लोकांपर्यंत", "२ लोकांपर्यंत", "५ लोकांपर्यंत", "फक्त १ व्यक्ती"], correct: 0, fact: "एक दाता हृदय, फुफ्फुसे, यकृत, मूत्रपिंड, स्वादुपिंड आणि आतडे दान करून ८ लोकांचे प्राण वाचवू शकतो." },
  { id: 2, question: "अवयवदानासाठी वयाची काही अट आहे का?", options: ["होय, फक्त ६५ वर्षांखालील", "होय, फक्त ५० वर्षांखालील", "नाही, वयाची कोणतीही अट नाही", "होय, फक्त ८० वर्षांखालील"], correct: 2, fact: "अवयवदानासाठी कोणतीही वयोमर्यादा नाही. ८० वर्षांपेक्षा जास्त वयाच्या व्यक्तींनीही यशस्वीरीत्या अवयवदान केले आहे." },
  { id: 3, question: "जिवंत व्यक्ती अवयवदान करू शकतात का?", options: ["नाही, कधीही नाही", "फक्त मूत्रपिंड", "होय - किडनी, यकृताचा काही भाग, अस्थिमज्जा", "फक्त रक्त"], correct: 2, fact: "जिवंत दाता जिवंत असताना एक मूत्रपिंड, यकृताचा काही भाग किंवा अस्थिमज्जा दान करू शकतो." },
  { id: 4, question: "अवयवदानामुळे शरीर विद्रूप होते का?", options: ["होय, मोठ्या प्रमाणात", "नाही, शरीराचा पूर्ण आदर राखला जातो", "फक्त काही अवयवांसाठी", "होय, पण ते लपवले जाते"], correct: 1, fact: "अवयवदान शस्त्रक्रिया अत्यंत आदराने केली जाते. अंत्यसंस्कारासाठी शरीर पूर्णपणे सामान्य दिसते." },
  { id: 5, question: "अवयवदानाचा खर्च कोण करते?", options: ["दात्याचे कुटुंब", "प्राप्तकर्ता रुग्ण", "रुग्णालय/शासक", "विमा कंपन्या"], correct: 2, fact: "अवयवदानाशी संबंधित सर्व खर्च रुग्णालय किंवा अवयव वाटप संस्था उचलते, दात्याच्या कुटुंबाला कोणताही खर्च येत नाही." },
  { id: 6, question: "ब्रेन डेथ (मस्तिष्क मृत्यू) म्हणजे काय?", options: ["कोमाची स्थिती", "मेंदूच्या कार्यातील कायमची हानी", "हृदय बंद पडणे", "तात्पुरती बेशुद्धावस्था"], correct: 1, fact: "ब्रेन डेथ म्हणजे मेंदूच्या सर्व कार्यांचे कायमचे नुकसान होणे. हृदय कृत्रिमरित्या चालू असले तरीही व्यक्ती कायदेशीररित्या मृत घोषित होते." },
  { id: 7, question: "प्रमुख धर्म अवयवदानाला पाठिंबा देतात का?", options: ["नाही, बहुतेक विरोध करतात", "फक्त ख्रिश्चन धर्म", "होय, सर्व प्रमुख धर्म पाठिंबा देतात", "प्रदेशानुसार बदलू शकते"], correct: 2, fact: "हिंदू, इस्लाम, ख्रिश्चन, शीख, बौद्ध आणि जैन धर्मासह सर्व प्रमुख धर्म अवयवदानाला पाठिंबा देतात." },
  { id: 8, question: "दाता कोणते अवयव दान करायचे हे निवडू शकतो का?", options: ["नाही", "होय, विशिष्ट अवयव निवडले जाऊ शकतात", "फक्त काही देशांमध्ये", "फक्त जिवंत दाते"], correct: 1, fact: "होय, नोंदणी करताना दाते नेमके कोणते अवयव आणि उती दान करायचे आहेत हे स्पष्ट करू शकतात." },
  { id: 9, question: "दाता असल्याने माझ्या वैद्यकीय उपचारांवर परिणाम होईल का?", options: ["होय, डॉक्टर तेवढा प्रयत्न करणार नाहीत", "नाही, उपचारांवर कधीही परिणाम होत नाही", "फक्त आणीबाणीच्या वेळी", "फक्त काही रुग्णालयांमध्ये"], correct: 1, fact: "दात्याच्या स्थितीचा आणीबाणीच्या उपचारांवर कोणताही परिणाम होत नाही. उपचार करणारी टीम आणि ट्रान्सप्लांट टीम स्वतंत्र असतात." },
  { id: 10, question: "भारतात अवयवदान कायदेशीर आहे का?", options: ["नाही", "होय, पूर्णपणे कायदेशीर", "फक्त काही राज्यांमध्ये", "फक्त जिवंत दानासाठी"], correct: 1, fact: "भारतात अवयवदान पूर्णपणे कायदेशीर असून मानवी अवयव प्रत्यारोपण कायदा, १९९४ अंतर्गत त्याचे नियमन केले जाते." }
];

export default function QuizPage() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState([]);
  const { language } = useLanguage();

  const currentQuestionsList = 
    language === 'hi' ? quizQuestionsHi : 
    language === 'ta' ? quizQuestionsTa : 
    language === 'te' ? quizQuestionsTe : 
    language === 'mr' ? quizQuestionsMr : 
    quizQuestions;

  const handleAnswer = (answerIndex) => {
    if (selectedAnswer !== null) return;
    setSelectedAnswer(answerIndex);
    const isCorrect = answerIndex === currentQuestionsList[currentQuestion].correct;
    if (isCorrect) setScore(prev => prev + 1);
    setAnsweredQuestions(prev => [...prev, { question: currentQuestion, answer: answerIndex, correct: isCorrect }]);
  };

  const nextQuestion = () => {
    if (currentQuestion < currentQuestionsList.length - 1) {
      setCurrentQuestion(prev => prev + 1);
      setSelectedAnswer(null);
    } else {
      setShowResult(true);
      if (score >= 8) {
        confetti({ particleCount: 150, spread: 100, origin: { y: 0.5 }, colors: ['#1D9E75', '#E24B4A', '#EF9F27'] });
      }
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnsweredQuestions([]);
  };

  const pageTexts = {
    en: {
      title: "Organ Donation Awareness Quiz",
      subtitle: "Test your knowledge about organ donation myths and facts.",
      qOf: "Question",
      of: "of",
      score: "Score",
      correct: "Correct!",
      incorrect: "Incorrect",
      explanation: "Explanation",
      btnNext: "Next Question",
      btnResults: "View Results",
      resultsTitle: "Quiz Completed!",
      goodScore: "Congratulations! You have an excellent understanding of organ donation.",
      badScore: "Thank you for taking the quiz! Review the facts below to learn more.",
      finalScore: "Your Score",
      btnShare: "Share Results",
      btnRestart: "Restart Quiz"
    },
    hi: {
      title: "अंगदान जागरूकता प्रश्नोत्तरी",
      subtitle: "अंगदान से जुड़े मिथकों और तथ्यों के बारे में अपने ज्ञान का परीक्षण करें।",
      qOf: "प्रश्न",
      of: "में से",
      score: "अंक",
      correct: "सही जवाब!",
      incorrect: "गलत जवाब",
      explanation: "व्याख्या",
      btnNext: "अगला प्रश्न",
      btnResults: "परिणाम देखें",
      resultsTitle: "प्रश्नोत्तरी पूरी हुई!",
      goodScore: "बधाई हो! आपको अंगदान की उत्कृष्ट समझ है।",
      badScore: "प्रश्नोत्तरी में भाग लेने के लिए धन्यवाद! अधिक जानने के लिए नीचे दिए गए तथ्यों की समीक्षा करें।",
      finalScore: "आपका स्कोर",
      btnShare: "परिणाम साझा करें",
      btnRestart: "प्रश्नोत्तरी पुनरारंभ करें"
    },
    ta: {
      title: "உறுப்பு தான விழிப்புணர்வு வினாடி வினா",
      subtitle: "உறுப்பு தானம் பற்றிய கட்டுக்கதைகள் மற்றும் உண்மைகள் பற்றிய உங்கள் அறிவை சோதிக்கவும்.",
      qOf: "கேள்வி",
      of: "இல்",
      score: "மதிப்பெண்",
      correct: "சரியான விடை!",
      incorrect: "தவறான விடை",
      explanation: "விளக்கம்",
      btnNext: "அடுத்த கேள்வி",
      btnResults: "முடிவுகளைக் காண்க",
      resultsTitle: "வினாடி வினா முடிந்தது!",
      goodScore: "வாழ்த்துகள்! உறுப்பு தானம் பற்றிய சிறந்த புரிதல் உங்களுக்கு உள்ளது.",
      badScore: "வினாடி வினாவில் பங்கேற்றதற்கு நன்றி! மேலும் அறிய கீழே உள்ள உண்மைகளை மதிப்பாய்வு செய்யவும்.",
      finalScore: "உங்கள் மதிப்பெண்",
      btnShare: "முடிவைப் பகிர்க",
      btnRestart: "மீண்டும் தொடங்குக"
    },
    te: {
      title: "అవయవ దానం అవగాహన క్విజ్",
      subtitle: "అవయవ దానానికి సంబంధించిన అపోహలు మరియు వాస్తవాలపై మీ జ్ఞానాన్ని పరీక్షించుకోండి.",
      qOf: "ప్రశ్న",
      of: "లో",
      score: "స్కోర్",
      correct: "సరైన సమాధానం!",
      incorrect: "తప్పు సమాధానం",
      explanation: "వివరణ",
      btnNext: "తదుపరి ప్రశ్న",
      btnResults: "ఫలితాలు చూడండి",
      resultsTitle: "క్విజ్ పూర్తయింది!",
      goodScore: "అభినందనలు! అవయవ దానంపై మీకు అద్భుతమైన అవగాహన ఉంది.",
      badScore: "క్విజ్ లో పాల్గొన్నందుకు ధన్యవాదాలు! మరింత తెలుసుకోవడానికి క్రింది వాస్తవాలను సమీక్షించండి.",
      finalScore: "మీ స్కోర్",
      btnShare: "ఫలితాలను పంచుకోండి",
      btnRestart: "మళ్ళీ ప్రారంభించండి"
    },
    mr: {
      title: "अवयवदान जनजागृती क्विझ",
      subtitle: "अवयवदानाशी संबंधित गैरसमज आणि तथ्यांविषयी तुमच्या ज्ञानाची चाचणी घ्या.",
      qOf: "प्रश्न",
      of: "पैकी",
      score: "गुण",
      correct: "बरोबर उत्तर!",
      incorrect: "चुकीचे उत्तर",
      explanation: "स्पष्टीकरण",
      btnNext: "पुढील प्रश्न",
      btnResults: "निकाल पहा",
      resultsTitle: "क्विझ पूर्ण झाली!",
      goodScore: "अभिनंदन! तुम्हाला अवयवदानाबद्दल उत्कृष्ट समज आहे.",
      badScore: "क्विझमध्ये सहभागी झाल्याबद्दल धन्यवाद! अधिक माहितीसाठी खालील तथ्ये वाचा.",
      finalScore: "तुमचा स्कोअर",
      btnShare: "निकाल शेअर करा",
      btnRestart: "क्विझ पुन्हा सुरू करा"
    }
  };

  const texts = pageTexts[language] || pageTexts.en;
  const currentQ = currentQuestionsList[currentQuestion];

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="min-h-screen bg-off-white dark:bg-gray-950 py-16">
      <div className="container-custom">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-2xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-4">{texts.title}</h1>
            <p className="text-slate-gray dark:text-gray-400">{texts.subtitle}</p>
          </div>

          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between text-sm text-slate-gray dark:text-gray-400 mb-2">
              <span>{texts.qOf} {currentQuestion + 1} {texts.of} {currentQuestionsList.length}</span>
              <span>{texts.score}: {score}/{currentQuestion + (selectedAnswer !== null ? 1 : 0)}</span>
            </div>
            <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                className="h-full bg-life-green"
                initial={{ width: 0 }}
                animate={{ width: `${((currentQuestion + 1) / currentQuestionsList.length) * 100}%` }}
              />
            </div>
          </div>

          {!showResult ? (
            <motion.div
              key={currentQuestion}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8"
            >
              <h2 className="text-xl font-semibold text-deep-forest dark:text-white mb-6">
                {currentQ.question}
              </h2>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswer === index;
                  const isCorrect = index === currentQ.correct;
                  const showCorrectness = selectedAnswer !== null;

                  return (
                    <motion.button
                      key={index}
                      onClick={() => handleAnswer(index)}
                      disabled={selectedAnswer !== null}
                      className={`w-full p-4 rounded-xl text-left transition-all ${
                        showCorrectness
                          ? isCorrect
                            ? 'bg-life-green/20 border-2 border-life-green text-life-green'
                            : isSelected
                            ? 'bg-life-red/20 border-2 border-life-red text-life-red'
                            : 'bg-gray-50 dark:bg-gray-800 text-slate-gray dark:text-gray-400 border-2 border-transparent'
                          : 'bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 text-deep-forest dark:text-white border-2 border-transparent hover:border-life-green'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <span className="font-semibold text-sm w-6 h-6 rounded-full border border-current flex items-center justify-center flex-shrink-0">
                          {String.fromCharCode(65 + index)}
                        </span>
                        <span>{option}</span>
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {selectedAnswer !== null && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border-l-4 border-life-green"
                >
                  <div className="flex items-center gap-2 mb-2">
                    {selectedAnswer === currentQ.correct ? (
                      <CheckCircle className="w-5 h-5 text-life-green" />
                    ) : (
                      <XCircle className="w-5 h-5 text-life-red" />
                    )}
                    <span className="font-semibold text-deep-forest dark:text-white">
                      {selectedAnswer === currentQ.correct ? texts.correct : texts.incorrect}
                    </span>
                  </div>
                  <p className="text-sm text-slate-gray dark:text-gray-300">
                    <strong className="text-deep-forest dark:text-white">{texts.explanation}: </strong>
                    {currentQ.fact}
                  </p>
                </motion.div>
              )}

              {selectedAnswer !== null && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  onClick={nextQuestion}
                  className="mt-6 w-full btn-primary"
                >
                  {currentQuestion === currentQuestionsList.length - 1 ? texts.btnResults : texts.btnNext}
                </motion.button>
              )}
            </motion.div>
          ) : (
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-8 text-center"
            >
              <Trophy className="w-16 h-16 text-warm-amber mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-deep-forest dark:text-white mb-2">
                {texts.resultsTitle}
              </h2>
              <p className="text-slate-gray dark:text-gray-400 mb-6 max-w-md mx-auto">
                {score >= 8 ? texts.goodScore : texts.badScore}
              </p>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 mb-8 max-w-sm mx-auto">
                <span className="text-sm font-medium text-slate-gray dark:text-gray-400 block mb-1">
                  {texts.finalScore}
                </span>
                <span className="text-5xl font-bold text-life-green">
                  {score}
                </span>
                <span className="text-slate-gray dark:text-gray-400 text-xl font-semibold">
                  /{currentQuestionsList.length}
                </span>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => alert(language === 'hi' ? 'परिणाम साझा करने की सुविधा जल्द आ रही है!' : 'Share feature coming soon!')}
                  className="btn-secondary flex items-center justify-center gap-2"
                >
                  <Share2 className="w-5 h-5" />
                  {texts.btnShare}
                </button>
                <button
                  onClick={restartQuiz}
                  className="btn-primary flex items-center justify-center gap-2"
                >
                  <RotateCcw className="w-5 h-5" />
                  {texts.btnRestart}
                </button>
              </div>
            </motion.div>
          )}
        </motion.div>
      </div>
    </motion.div>
  );
}
