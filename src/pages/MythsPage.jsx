import { useState } from 'react';
import { motion } from 'framer-motion';
import { X, Check, AlertTriangle, Award } from 'lucide-react';
import { mythsAndFacts } from '../data/organData';
import { mythsAndFactsHi } from '../data/organDataHindi';
import { mythsAndFactsTa, mythsAndFactsTe, mythsAndFactsMr } from '../data/organDataI18n';
import { useLanguage } from '../context/LanguageContext';

export default function MythsPage() {
  const [flippedCards, setFlippedCards] = useState(new Set());
  const { language, t } = useLanguage();
  const currentMythsList = 
    language === 'hi' ? mythsAndFactsHi : 
    language === 'ta' ? mythsAndFactsTa : 
    language === 'te' ? mythsAndFactsTe : 
    language === 'mr' ? mythsAndFactsMr : 
    mythsAndFacts;

  const toggleCard = (id) => {
    setFlippedCards((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(id)) { newSet.delete(id); } else { newSet.add(id); }
      return newSet;
    });
  };

  const bustedCount = flippedCards.size;
  const total = currentMythsList.length;
  const progress = (bustedCount / total) * 100;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="min-h-screen bg-off-white dark:bg-gray-950 transition-colors">
      <section className="py-16 bg-gradient-to-br from-blush-tint to-mint-tint dark:from-gray-900 dark:to-gray-800">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-deep-forest dark:text-white mb-6">{t('myths.title')}</h1>
            <p className="text-lg text-slate-gray dark:text-gray-400 mb-8">{t('myths.subtitle')}</p>
            <div className="max-w-md mx-auto">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-deep-forest dark:text-white">
                  {bustedCount === total ? <span className="flex items-center gap-2"><Award className="w-5 h-5 text-life-green" />{t('myths.allBusted')}</span> : `${t('myths.busted')} ${bustedCount}/${total} ${language === 'hi' ? '' : t('myths.mythLabel').toLowerCase() + 's'}`}
                </span>
                <span className="text-sm text-slate-gray dark:text-gray-400">{Math.round(progress)}%</span>
              </div>
              <div className="h-3 bg-white dark:bg-gray-700 rounded-full overflow-hidden shadow-inner">
                <motion.div initial={{ width: 0 }} animate={{ width: `${progress}%` }} transition={{ duration: 0.5, ease: 'easeOut' }} className="h-full bg-gradient-to-r from-life-green to-medical-green rounded-full" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentMythsList.map((item, index) => {
              const isFlipped = flippedCards.has(item.id);
              return (
                <motion.div key={item.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: index * 0.05 }} className="perspective-1000 cursor-pointer" onClick={() => toggleCard(item.id)}>
                  <div className={`relative w-full h-64 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`} style={{ transition: 'transform 0.6s' }}>
                    <div className="absolute inset-0 backface-hidden rounded-[32px] p-6 flex flex-col" style={{ background: '#FCEBEB', border: '2px solid #E24B4A' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-life-red/20 flex items-center justify-center"><X className="w-4 h-4 text-life-red" /></div>
                        <span className="text-sm font-semibold text-life-red">{t('myths.mythLabel')}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-rich-black flex-1 flex items-center justify-center text-center px-4">"{item.myth}"</h3>
                      <p className="text-xs text-slate-gray text-center mt-4">{t('myths.clickReveal')}</p>
                      {isFlipped && <div className="absolute top-2 right-2"><Check className="w-5 h-5 text-life-green" /></div>}
                    </div>
                    <div className="absolute inset-0 backface-hidden rounded-[32px] p-6 flex flex-col rotate-y-180" style={{ background: '#E1F5EE', border: '2px solid #1D9E75' }}>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-8 h-8 rounded-full bg-life-green/20 flex items-center justify-center"><Check className="w-4 h-4 text-life-green" /></div>
                        <span className="text-sm font-semibold text-life-green">{t('myths.factLabel')}</span>
                      </div>
                      <p className="text-base text-rich-black flex-1 flex items-center justify-center text-center px-2">{item.fact}</p>
                      <div className="flex justify-center mt-4"><span className="text-xs bg-life-green text-white px-3 py-1 rounded-full">{t('myths.mythBusted')}</span></div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-deep-forest dark:bg-gray-900">
        <div className="container-custom">
          <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="text-center text-white max-w-2xl mx-auto">
            <AlertTriangle className="w-12 h-12 mx-auto mb-6 text-warm-amber" />
            <h2 className="text-3xl font-bold mb-4">{t('myths.knowledge')}</h2>
            <p className="text-white/80 mb-8">{t('myths.knowledgeSub')}</p>
            <motion.a href="/register" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="btn-primary inline-block">{t('myths.registerCTA')}</motion.a>
          </motion.div>
        </div>
      </section>
    </motion.div>
  );
}
