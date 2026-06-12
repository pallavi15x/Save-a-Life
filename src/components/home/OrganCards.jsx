import { motion } from 'framer-motion';
import { Heart, Wind, Droplet, Eye, Hand, Activity } from 'lucide-react';
import { organs } from '../../data/organData';
import { useLanguage } from '../../context/LanguageContext';

const iconMap = {
  heart: Heart,
  lungs: Wind,
  liver: Droplet,
  kidneys: Activity,
  eyes: Eye,
  skin: Hand,
};

export default function OrganCards() {
  const { language, t } = useLanguage();
  const displayOrgans = organs.slice(0, 6);
  const isIndicLanguage = ['hi', 'ta', 'te', 'mr', 'bn', 'gu', 'kn', 'ml', 'pa', 'ur'].includes(language);

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
            {t('organs.title')}
          </h2>
          <p className="text-slate-gray dark:text-gray-400 max-w-xl mx-auto">
            {t('organs.subtitle')}
          </p>
        </motion.div>

        <div className="overflow-x-auto pb-4 -mx-4 px-4">
          <div className="flex gap-6 min-w-max lg:grid lg:grid-cols-6 lg:min-w-0">
            {displayOrgans.map((organ, index) => {
              const IconComponent = iconMap[organ.id] || Heart;
              return (
                <motion.div
                  key={organ.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex-shrink-0 w-48 lg:w-auto"
                >
                  <div
                    className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-transform duration-200 hover:-translate-y-1 hover:shadow-lg"
                    style={{ borderTop: `4px solid ${organ.color}` }}
                  >
                    <div className="p-6 text-center">
                      <div
                        className="w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center"
                        style={{ backgroundColor: organ.bgColor }}
                      >
                        <IconComponent className="w-8 h-8" style={{ color: organ.color }} />
                      </div>
                      <h3 className="font-semibold text-deep-forest dark:text-white mb-1">
                        {t('organs.list.' + organ.id + '.name')}
                      </h3>
                      <p className="text-xs font-medium mb-2" style={{ color: organ.color }}>
                        {isIndicLanguage 
                          ? `${organ.livesSaved} ${organ.livesSaved === 1 ? t('organs.patient') : t('organs.patients')} ${t('organs.helps')}`
                          : `${t('organs.helps')} ${organ.livesSaved} ${organ.livesSaved === 1 ? t('organs.patient') : t('organs.patients')}`
                        }
                      </p>
                      <p className="text-xs text-slate-gray dark:text-gray-400 line-clamp-2">
                        {t('organs.list.' + organ.id + '.description')}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
