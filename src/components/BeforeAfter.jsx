import { motion } from 'framer-motion';
import { BadgeCheck, Sparkles } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Section } from './ui/Section';

export const BeforeAfter = () => {
  const { language } = useLanguage();
  const t = translations[language].beforeAfter;

  const cases = [
    {
      before: '/1.jfif',
      after: '/2.jfif',
      title: language === 'ar' ? 'حالة زراعة أسنان كاملة' : 'Full Mouth Implant Case',
      category: language === 'ar' ? 'زراعة الأسنان' : 'Implants',
    },
    {
      before: '/3.jfif',
      after: '/4.jfif',
      title: language === 'ar' ? 'تجميل فينير للأسنان الأمامية' : 'Anterior Veneers Cosmetic',
      category: language === 'ar' ? 'تجميل الأسنان' : 'Cosmetic',
    },
    {
      before: '/5.jfif',
      after: '/6.jfif',
      title: language === 'ar' ? 'علاج تقويم الأسنان' : 'Orthodontic Treatment',
      category: language === 'ar' ? 'تقويم الأسنان' : 'Orthodontics',
    },
  ];

  return (
    <Section id="before-after" className="bg-primaryDark overflow-hidden py-24 relative">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-primaryGold/5 blur-3xl rounded-full translate-x-1/2" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-white font-playfair after:bg-primaryGold">{t.title}</h2>
          <p className="text-gray-400 max-w-2xl mx-auto mt-4 font-cairo text-lg">
            {language === 'ar' ? 'تحول حقيقي لابتسامتك بأيدي خبراء في عيادتنا بالمنيا' : 'Real smile transformations by experts at our clinic in Minia'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {cases.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="flex flex-col group"
            >
              {/* Category Tag */}
              <div className="mb-4 self-center lg:self-start">
                <span className="bg-primaryGold text-primaryDark px-4 py-1.5 rounded-full text-sm font-bold font-cairo flex items-center gap-2 shadow-lg shadow-primaryGold/20">
                  <Sparkles size={14} />
                  {item.category}
                </span>
              </div>

              {/* Comparison Slider Card */}
              <div className="relative aspect-[4/5] md:aspect-square overflow-hidden rounded-[24px] border-2 border-primaryGold/30 group-hover:border-primaryGold transition-colors duration-500 shadow-2xl">
                {/* After Image (Background) */}
                <img
                  src={item.after}
                  alt="After"
                  className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transition-all duration-700"
                />
                
                {/* Before Image (Foreground with Clip Path) */}
                <div 
                  className="absolute inset-0 w-full h-full z-10 overflow-hidden"
                  style={{
                    clipPath: 'polygon(0 0, 50% 0, 50% 100%, 0 100%)',
                  }}
                >
                  <img
                    src={item.before}
                    alt="Before"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                  {/* Before Label */}
                  <div className="absolute top-6 right-8 bg-black/50 backdrop-blur-md text-white px-3 py-1 rounded-md text-xs font-bold font-cairo">
                    {language === 'ar' ? 'قبل' : 'Before'}
                  </div>
                </div>

                {/* Slider Handle (CSS Only Animated) */}
                <motion.div 
                  initial={{ left: '50%' }}
                  whileHover={{ left: ['50%', '30%', '70%', '50%'] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1 bg-primaryGold z-20 cursor-ew-resize opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 bg-primaryGold rounded-full flex items-center justify-center shadow-xl">
                    <div className="w-1.5 h-1.5 bg-primaryDark rounded-sm mx-0.5" />
                    <div className="w-1.5 h-1.5 bg-primaryDark rounded-sm mx-0.5" />
                  </div>
                </motion.div>

                {/* After Label */}
                <div className="absolute bottom-6 right-6 z-10">
                   <div className="bg-primaryGold text-primaryDark px-4 py-2 rounded-lg flex items-center gap-2 shadow-lg font-bold font-cairo text-sm">
                    <BadgeCheck size={18} />
                    {t.badge}
                  </div>
                </div>
              </div>

              {/* Case Title */}
              <h3 className="text-xl font-playfair font-bold text-white mt-6 text-center lg:text-start group-hover:text-primaryGold transition-colors">
                {item.title}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Note: In a real app, I'd use a JS-based slider for better UX, 
            but using CSS clip-path for speed as requested. */}
      </div>
      
      <style dangerouslySetInnerHTML={{ __html: `
        .group:hover [style*="clip-path"] {
           animation: slideCompare 4s ease-in-out infinite alternate;
        }
        @keyframes slideCompare {
          0% { clip-path: polygon(0 0, 30% 0, 30% 100%, 0 100%); }
          100% { clip-path: polygon(0 0, 70% 0, 70% 100%, 0 100%); }
        }
      `}} />
    </Section>
  );
};
