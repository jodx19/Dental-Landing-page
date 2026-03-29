import { motion } from 'framer-motion';
import { Award, ShieldCheck, MonitorCheck, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Section } from './ui/Section';

const CircularProgress = ({ percentage, delay = 0 }) => {
  const radius = 45;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center">
      <svg className="w-full h-full -rotate-90">
        <circle
          cx="64"
          cy="64"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
          className="text-primaryGold/10"
        />
        <motion.circle
          cx="64"
          cy="64"
          r={radius}
          fill="transparent"
          stroke="currentColor"
          strokeWidth="8"
          strokeDasharray={circumference}
          initial={{ strokeDashoffset: circumference }}
          whileInView={{ strokeDashoffset }}
          viewport={{ once: true }}
          transition={{ duration: 2, delay, ease: "easeOut" }}
          className="text-primaryGold"
          strokeLinecap="round"
        />
      </svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="text-2xl font-playfair font-black text-textHeading">{percentage}%</span>
      </div>
    </div>
  );
};

export const WhyChooseUs = () => {
  const { language } = useLanguage();
  const t = translations[language].whyChooseUs;
  
  const features = [
    {
      icon: <Award size={32} />,
      value: 100,
      label: t.experience,
      isProgress: true,
    },
    {
      icon: <ShieldCheck size={32} />,
      value: 100,
      label: t.sterilization,
      isProgress: true,
    },
    {
      icon: <MonitorCheck size={32} />,
      value: 98,
      label: t.technology,
      isProgress: true,
    },
    {
      icon: <Calendar size={32} />,
      value: '+7',
      label: language === 'ar' ? 'سنوات من الخبرة' : 'Years of Experience',
      isProgress: false,
    },
  ];

  return (
    <Section id="about" className="bg-gradient-to-b from-background to-[#F0E6D3] relative overflow-hidden py-24">
      {/* Floating Tooth Decoration */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-[10%] opacity-10 text-primaryGold pointer-events-none hidden lg:block"
      >
        <svg width="120" height="120" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12,2C10,2 8.35,3.15 7.42,4.88C6.1,4.42 4.47,4.88 3.5,6C2.5,7.12 2.5,8.75 3.5,9.88C3,11.5 3.25,13.25 4.5,14.5C5.75,15.75 7.5,16 9.12,15.5C10.25,16.5 11.88,16.5 13,15.5C14.62,16 16.38,15.75 17.62,14.5C18.88,13.25 19.12,11.5 18.62,9.88C19.62,8.75 19.62,7.12 18.62,6C17.62,4.88 16,4.42 14.68,4.88C13.75,3.15 12.1,2 12,2M12,4C13,4 13.88,4.62 14.28,5.5C13.5,5.12 12.75,5 12,5C11.25,5 10.5,5.12 9.72,5.5C10.12,4.62 11,4 12,4M5,7C5.5,7 6,7.5 6,8C6,8.5 5.5,9 5,9C4.5,9 4,8.5 4,8C4,7.5 4.5,7 5,7M19,7C19.5,7 20,7.5 20,8C20,8.5 19.5,9 19,9C18.5,9 18,8.5 18,8C18,7.5 18.5,7 19,7M12,7C14.21,7 16,8.79 16,11C16,13.21 14.21,15 12,15C9.79,15 8,13.21 8,11C8,8.79 9.79,7 12,7Z" />
        </svg>
      </motion.div>

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-textHeading font-playfair">{t.title}</h2>
          <p className="text-textPrimary max-w-2xl mx-auto mt-4 font-cairo text-lg font-bold">
            {language === 'ar' ? 'نلتزم بتقديم الرعاية الصحية الأكثر تطوراً وأماناً لمرضانا' : 'We are committed to providing the most advanced and safe healthcare for our patients'}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white/60 backdrop-blur-md rounded-3xl p-8 shadow-xl shadow-primaryGold/5 border border-white/40 flex flex-col items-center text-center group hover:bg-white hover:shadow-primaryGold/10 transition-all duration-500"
            >
              <div className="text-primaryGold mb-6 bg-primaryGold/5 p-4 rounded-2xl group-hover:bg-primaryGold group-hover:text-white transition-all duration-300">
                {feature.icon}
              </div>
              
              {feature.isProgress ? (
                <CircularProgress percentage={feature.value} delay={index * 0.1} />
              ) : (
                <div className="h-32 flex items-center justify-center">
                   <span className="text-5xl font-playfair font-black text-textHeading">{feature.value}</span>
                </div>
              )}
              
              <h3 className="text-lg font-cairo font-bold text-textSecondary mt-6 leading-snug">
                {feature.label}
              </h3>
            </motion.div>
          ))}
        </div>

        {/* Location Trust Message - Transformed into Trust Banner-like UI */}
        <motion.div
          className="mt-20 bg-primaryDark rounded-[40px] p-10 md:p-16 relative overflow-hidden text-center md:text-right"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primaryGold/20 via-transparent to-transparent pointer-events-none" />
          
          <div className="flex flex-col md:flex-row items-center justify-between gap-10 relative z-10">
            <div className="flex-1">
              <div className="flex items-center justify-center md:justify-start gap-4 mb-6">
                <div className="bg-primaryGold p-3 rounded-xl animate-pulse">
                  <MapPin size={28} className="text-white" />
                </div>
                <h3 className="text-3xl md:text-4xl font-playfair font-black text-white leading-tight">
                  {t.location}
                </h3>
              </div>
              <p className="text-xl text-white font-cairo leading-relaxed max-w-2xl font-semibold">
                {language === 'ar' 
                  ? 'نفتخر بتقديم أفضل خدمات طب الأسنان لأهلنا في المنيا بأعلى معايير الجودة والاحترافية. عيادتنا مجهزة بأطقم طبية مدربة على أعلى مستوى.'
                  : 'We pride ourselves on providing the best dental care services to our people in Minia with the highest standards of quality and professionalism. Our clinic is equipped with top-tier medical staff.'}
              </p>
            </div>
            
            <div className="grid grid-cols-3 gap-6">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-primaryGold">
                    <ShieldCheck size={32} />
                 </div>
               ))}
            </div>
          </div>
        </motion.div>
      </div>
    </Section>
  );
};
