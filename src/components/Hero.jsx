import { motion } from 'framer-motion';
import { Calendar, Image, ArrowDown } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const Hero = () => {
  const { language } = useLanguage();
  const t = translations[language].hero;

  return (
    <Section
      id="home"
      className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 bg-background"
    >
      {/* Background with Diagonal Split */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#FDF8F3] w-full md:w-[60%] h-full" />
        <div className="absolute top-0 right-0 w-full md:w-[40%] h-full hidden md:block">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-15 grayscale-[50%]"
            style={{ backgroundImage: `url('/hero_bg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-l from-primaryGold/10 to-transparent" />
        </div>
      </div>
      
      {/* Decorative Floating Circles */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-20 right-10 w-[300px] h-[300px] bg-primaryGold/15 rounded-full blur-[80px] z-0" 
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-40 left-10 w-[150px] h-[150px] bg-primaryGold/20 rounded-full blur-[60px] z-0" 
      />

      <div className="container mx-auto px-4 relative z-10 flex flex-col items-center">
        <div className="max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-block px-4 py-1 mb-6 rounded-full bg-primaryGold/10 border border-primaryGold/20 text-primaryGold font-bold text-sm"
          >
            {language === 'ar' ? 'عيادة د. محمود عمران التخصصية' : 'Dr. Mahmoud Omran Specialist Clinic'}
          </motion.div>
          
          <motion.h1
            className="text-4xl md:text-7xl font-playfair font-black mb-6 leading-[1.1] tracking-tight text-textHeading"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            style={{ fontWeight: 900 }}
          >
            {t.heading}
          </motion.h1>

          <motion.p
            className="text-lg md:text-2xl text-textDescription mb-10 max-w-2xl mx-auto font-cairo leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {t.subHeading}
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-6 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <a href="#booking" className="relative group">
              <div className="absolute -inset-1 bg-primaryGold/40 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-pulse"></div>
              <Button variant="primary" size="lg" className="px-10 py-4 gap-3 text-lg pulse-ring">
                <Calendar size={22} />
                {t.cta1}
              </Button>
            </a>
            
            <a href="#before-after">
              <Button variant="secondary" size="lg" className="px-10 py-4 gap-3 text-lg border-2 border-primaryGold/30 hover:border-primaryGold">
                <Image size={22} />
                {t.cta2}
              </Button>
            </a>
          </motion.div>
        </div>

        {/* Stats Bar */}
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-20 w-full max-w-5xl"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {t.stats.map((stat, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-2xl shadow-xl shadow-primaryGold/5 border-r-4 border-primaryGold flex flex-col items-center md:items-start group hover:translate-y-[-5px] transition-transform duration-300 border border-accentLight/30"
              >
                <span className="text-3xl md:text-4xl font-playfair font-black text-textHeading mb-1">{stat.value}</span>
                <span className="text-textSecondary font-cairo font-bold">{stat.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-primaryGold cursor-pointer hidden md:block"
        >
          <a href="#services">
            <ArrowDown size={32} />
          </a>
        </motion.div>
      </div>
    </Section>
  );
};
