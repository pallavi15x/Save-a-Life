import { useEffect, useRef, useState } from 'react';
import CountUp from 'react-countup';
import { motion } from 'framer-motion';
import { Users, Heart, Activity, Clock } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const stats = [
  { value: 500000, suffix: '+', labelKey: 'stats.registered', icon: Users, color: 'text-medical-green' },
  { value: 8, suffix: '', labelKey: 'stats.livesSaved', icon: Heart, color: 'text-life-red' },
  { value: 22, suffix: '', labelKey: 'stats.organsDonatable', icon: Activity, color: 'text-trust-blue' },
  { value: 1000000, suffix: '+', labelKey: 'stats.awaitingTransplant', icon: Clock, color: 'text-warm-amber' },
];

export default function Stats() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);
  const { t } = useLanguage();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [isVisible]);

  return (
    <section ref={sectionRef} className="py-16 bg-white dark:bg-gray-900 transition-colors">
      <div className="container-custom">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.labelKey}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6"
            >
              <stat.icon className={`w-10 h-10 mx-auto mb-4 ${stat.color}`} />
              <div className="text-4xl md:text-5xl font-bold text-deep-forest dark:text-white mb-2">
                {isVisible ? (
                  <CountUp end={stat.value} duration={2.5} separator="," suffix={stat.suffix} />
                ) : (
                  '0' + stat.suffix
                )}
              </div>
              <p className="text-slate-gray dark:text-gray-400 text-sm md:text-base">{t(stat.labelKey)}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
