import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Heart } from 'lucide-react';
import { organs } from '../../data/organData';
import { useLanguage } from '../../context/LanguageContext';

export default function BodyDiagram() {
  const [selectedOrgan, setSelectedOrgan] = useState(null);
  const [hoveredOrgan, setHoveredOrgan] = useState(null);
  const { t } = useLanguage();

  const getOrganColor = (organId) => {
    const organ = organs.find(o => o.id === organId);
    return organ?.color || '#1A6B4A';
  };

  const organ = organs.find(o => o.id === selectedOrgan);

  // Interactive organs for cards
  const interactiveOrgans = organs.filter(o => ['heart', 'lungs', 'liver', 'kidneys', 'eyes'].includes(o.id));

  return (
    <section className="py-16 bg-mint-tint/30 dark:bg-gray-800 transition-colors">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-4">
            {t('bodyDiagram.title')}
          </h2>
          <p className="text-slate-gray dark:text-gray-400 max-w-xl mx-auto">
            {t('bodyDiagram.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-center justify-center">
          {/* Human Body SVG Diagram - Transparent Background */}
          <div className="relative w-full max-w-sm">
            <svg viewBox="0 0 200 400" className="w-full h-auto" style={{ minHeight: '400px' }}>
              <defs>
                <radialGradient id="bodyFade" cx="50%" cy="50%" r="50%">
                  <stop offset="60%" stopColor="white" stopOpacity="1" />
                  <stop offset="98%" stopColor="white" stopOpacity="0" />
                </radialGradient>
                <mask id="bodyMask">
                  <rect x="0" y="0" width="200" height="400" fill="url(#bodyFade)" />
                </mask>
              </defs>

              {/* Real Human Body and Organs Image with corner blending */}
              <image
                href="https://img.freepik.com/premium-photo/human-body-with-large-stomach-labeled-with-word-stomach_1287512-40928.jpg?w=2000"
                x="0"
                y="0"
                width="200"
                height="400"
                preserveAspectRatio="xMidYMid meet"
                mask="url(#bodyMask)"
                className="mix-blend-multiply brightness-75 contrast-[1.1] dark:brightness-100 dark:contrast-100 dark:invert dark:hue-rotate-180 dark:mix-blend-screen"
              />

              {/* EYES - positioned on head */}
              <motion.ellipse
                cx="100"
                cy="45"
                rx="15"
                ry="8"
                fill={hoveredOrgan === 'eyes' || selectedOrgan === 'eyes' ? getOrganColor('eyes') : 'transparent'}
                fillOpacity={hoveredOrgan === 'eyes' || selectedOrgan === 'eyes' ? 0.6 : 0.15}
                stroke={getOrganColor('eyes')}
                strokeWidth="3"
                strokeOpacity={hoveredOrgan === 'eyes' || selectedOrgan === 'eyes' ? 1 : 0.85}
                className="cursor-pointer"
                whileHover={{ strokeOpacity: 1 }}
                onMouseEnter={() => setHoveredOrgan('eyes')}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan('eyes')}
              />

              {/* HEART - positioned in torso */}
              <motion.ellipse
                cx="100"
                cy="130"
                rx="12"
                ry="14"
                fill={hoveredOrgan === 'heart' || selectedOrgan === 'heart' ? getOrganColor('heart') : 'transparent'}
                fillOpacity={hoveredOrgan === 'heart' || selectedOrgan === 'heart' ? 0.6 : 0.15}
                stroke={getOrganColor('heart')}
                strokeWidth="3"
                strokeOpacity={hoveredOrgan === 'heart' || selectedOrgan === 'heart' ? 1 : 0.85}
                className="cursor-pointer"
                whileHover={{ strokeOpacity: 1 }}
                onMouseEnter={() => setHoveredOrgan('heart')}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan('heart')}
              />

              {/* LUNGS - positioned in torso */}
              <motion.ellipse
                cx="100"
                cy="135"
                rx="35"
                ry="30"
                fill={hoveredOrgan === 'lungs' || selectedOrgan === 'lungs' ? getOrganColor('lungs') : 'transparent'}
                fillOpacity={hoveredOrgan === 'lungs' || selectedOrgan === 'lungs' ? 0.6 : 0.15}
                stroke={getOrganColor('lungs')}
                strokeWidth="3"
                strokeOpacity={hoveredOrgan === 'lungs' || selectedOrgan === 'lungs' ? 1 : 0.85}
                className="cursor-pointer"
                whileHover={{ strokeOpacity: 1 }}
                onMouseEnter={() => setHoveredOrgan('lungs')}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan('lungs')}
              />

              {/* LIVER - positioned in torso */}
              <motion.ellipse
                cx="85"
                cy="185"
                rx="25"
                ry="15"
                fill={hoveredOrgan === 'liver' || selectedOrgan === 'liver' ? getOrganColor('liver') : 'transparent'}
                fillOpacity={hoveredOrgan === 'liver' || selectedOrgan === 'liver' ? 0.6 : 0.15}
                stroke={getOrganColor('liver')}
                strokeWidth="3"
                strokeOpacity={hoveredOrgan === 'liver' || selectedOrgan === 'liver' ? 1 : 0.85}
                className="cursor-pointer"
                whileHover={{ strokeOpacity: 1 }}
                onMouseEnter={() => setHoveredOrgan('liver')}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan('liver')}
              />

              {/* KIDNEYS - positioned in torso */}
              <motion.ellipse
                cx="100"
                cy="200"
                rx="25"
                ry="12"
                fill={hoveredOrgan === 'kidneys' || selectedOrgan === 'kidneys' ? getOrganColor('kidneys') : 'transparent'}
                fillOpacity={hoveredOrgan === 'kidneys' || selectedOrgan === 'kidneys' ? 0.6 : 0.15}
                stroke={getOrganColor('kidneys')}
                strokeWidth="3"
                strokeOpacity={hoveredOrgan === 'kidneys' || selectedOrgan === 'kidneys' ? 1 : 0.85}
                className="cursor-pointer"
                whileHover={{ strokeOpacity: 1 }}
                onMouseEnter={() => setHoveredOrgan('kidneys')}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan('kidneys')}
              />

              {/* Organ Labels */}
              {hoveredOrgan && (
                <text x="100" y="390" textAnchor="middle" className="text-xs fill-deep-forest dark:fill-white font-medium">
                  {t('organs.list.' + hoveredOrgan + '.name')}
                </text>
              )}
            </svg>

            {/* Hover Tooltip */}
            <AnimatePresence>
              {hoveredOrgan && !selectedOrgan && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-8 left-1/2 -translate-x-1/2 bg-white dark:bg-gray-900 px-4 py-2 rounded-lg shadow-lg z-20 whitespace-nowrap"
                >
                  <p className="text-sm font-medium text-deep-forest dark:text-white">
                    {t('organs.list.' + hoveredOrgan + '.name')}
                  </p>
                  <p className="text-xs text-slate-gray">
                    {t('bodyDiagram.clickToLearn')}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Quick Stats for Organs */}
          <div className="grid grid-cols-2 gap-4 w-full max-w-xs">
            {interactiveOrgans.map((organData) => (
              <motion.div
                key={organData.id}
                className={`p-4 rounded-xl cursor-pointer transition-all ${
                  hoveredOrgan === organData.id || selectedOrgan === organData.id
                    ? 'bg-white dark:bg-gray-700 shadow-lg scale-105'
                    : 'bg-white/50 dark:bg-gray-800/50'
                }`}
                onMouseEnter={() => setHoveredOrgan(organData.id)}
                onMouseLeave={() => setHoveredOrgan(null)}
                onClick={() => setSelectedOrgan(organData.id)}
                whileHover={{ y: -2 }}
              >
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center mb-2"
                  style={{ backgroundColor: organData.bgColor }}
                >
                  <Heart className="w-4 h-4" style={{ color: organData.color }} />
                </div>
                <p className="font-medium text-deep-forest dark:text-white text-sm">{t('organs.list.' + organData.id + '.name')}</p>
                <p className="text-xs text-slate-gray">
                  {t('bodyDiagram.saves')} {organData.livesSaved} {organData.livesSaved === 1 ? t('bodyDiagram.life') : t('bodyDiagram.lives')}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Organ Info Modal */}
        <AnimatePresence>
          {selectedOrgan && organ && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
              onClick={() => setSelectedOrgan(null)}
            >
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                exit={{ scale: 0.9 }}
                className="bg-white dark:bg-gray-800 rounded-2xl p-6 max-w-sm w-full shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: organ.bgColor }}>
                      <Heart className="w-6 h-6" style={{ color: organ.color }} />
                    </div>
                    <h3 className="text-xl font-bold text-deep-forest dark:text-white">{t('organs.list.' + organ.id + '.name')}</h3>
                  </div>
                  <button onClick={() => setSelectedOrgan(null)} className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-full transition-colors">
                    <X className="w-5 h-5 text-slate-gray" />
                  </button>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full text-sm font-medium text-white" style={{ backgroundColor: organ.color }}>
                      {t('bodyDiagram.canSave')} {organ.livesSaved} {organ.livesSaved === 1 ? t('bodyDiagram.life') : t('bodyDiagram.lives')}
                    </span>
                  </div>
                  <p className="text-slate-gray dark:text-gray-300">{t('organs.list.' + organ.id + '.description')}</p>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
