import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';
import { testimonials } from '../../data/organData';
import { useLanguage } from '../../context/LanguageContext';

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const { t } = useLanguage();

  const currentTestimonials = testimonials.map(item => ({
    ...item,
    quote: t(`testimonials.list.${item.id}.quote`),
    name: t(`testimonials.list.${item.id}.name`),
    city: t(`testimonials.list.${item.id}.city`),
    role: t(`testimonials.list.${item.id}.role`),
    organ: t(`testimonials.list.${item.id}.organ`),
  }));

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % currentTestimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentTestimonials.length]);

  const next = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev + 1) % currentTestimonials.length); };
  const prev = () => { setIsAutoPlaying(false); setCurrent((prev) => (prev - 1 + currentTestimonials.length) % currentTestimonials.length); };

  return (
    <section className="py-16 bg-off-white dark:bg-gray-800 transition-colors">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-deep-forest dark:text-white mb-4">{t('testimonials.title')}</h2>
          <p className="text-slate-gray dark:text-gray-400 max-w-xl mx-auto">{t('testimonials.subtitle')}</p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
              className="bg-white dark:bg-gray-900 rounded-2xl p-8 md:p-12 shadow-lg relative"
            >
              <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-20 bg-life-green rounded-r-full" />
              <Quote className="w-12 h-12 text-life-green/20 absolute top-8 right-8" />
              <blockquote className="text-lg md:text-xl text-rich-black dark:text-white mb-8 leading-relaxed relative z-10">
                "{currentTestimonials[current].quote}"
              </blockquote>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-mint-tint dark:bg-gray-700 flex items-center justify-center">
                  <span className="text-2xl font-bold text-medical-green">{currentTestimonials[current].name.charAt(0)}</span>
                </div>
                <div>
                  <p className="font-semibold text-deep-forest dark:text-white">{currentTestimonials[current].name}</p>
                  <p className="text-sm text-slate-gray dark:text-gray-400">{currentTestimonials[current].city} | {currentTestimonials[current].role}</p>
                </div>
                <div className="ml-auto">
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-mint-tint text-medical-green dark:bg-gray-700">
                    {currentTestimonials[current].organ}
                  </span>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-4 mt-8">
            <button onClick={prev} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronLeft className="w-6 h-6 text-deep-forest dark:text-white" />
            </button>
            <div className="flex gap-2">
              {currentTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => { setIsAutoPlaying(false); setCurrent(index); }}
                  className={`w-2 h-2 rounded-full transition-all ${index === current ? 'bg-life-green w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                />
              ))}
            </div>
            <button onClick={next} className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors">
              <ChevronRight className="w-6 h-6 text-deep-forest dark:text-white" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
