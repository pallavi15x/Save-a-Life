import { motion } from 'framer-motion';
import { stateDonorData } from '../../data/organData';
import { useLanguage } from '../../context/LanguageContext';

export default function IndiaDonorMap() {
  const { t } = useLanguage();
  const currentStatesData = stateDonorData.map(state => ({
    ...state,
    state: t(`map.states.${state.code}`)
  }));
  const maxDonors = Math.max(...currentStatesData.map(s => s.donors));

  const getIntensity = (donors) => {
    const intensity = donors / maxDonors;
    return `rgba(26, 107, 74, ${0.25 + intensity * 0.75})`;
  };

  return (
    <section className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-4">
            {t('map.title')}
          </h2>
          <p className="text-slate-gray dark:text-gray-400 max-w-xl mx-auto">
            {t('map.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {currentStatesData.map((state, index) => (
            <motion.div
              key={state.code}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              whileHover={{ scale: 1.05 }}
              className="p-4 rounded-[32px] cursor-pointer transition-all hover:shadow-md border border-black/5 dark:border-white/5"
              style={{ backgroundColor: getIntensity(state.donors) }}
            >
              <h3 className="font-semibold text-white text-sm mb-1 text-center">{state.state}</h3>
              <p className="text-white text-xl font-bold text-center">{state.donors.toLocaleString()}</p>
              <p className="text-white/80 text-xs text-center">{t('map.donors')}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
