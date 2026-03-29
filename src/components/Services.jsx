import { motion } from 'framer-motion';
import { Activity, Sparkles, FileText, Baby, Scissors, ShieldPlus, Move, Lock } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export const Services = () => {
  const { language } = useLanguage();
  const t = translations[language].services;

  const services = [
    {
      icon: <Activity size={32} />,
      title: t.implants,
      description: language === 'ar' 
        ? 'حلول دائمة وطبيعية للأسنان المفقودة باستخدام أحدث تقنيات الزراعة'
        : 'Permanent and natural solutions for missing teeth using latest implant techniques',
      comingSoon: false,
    },
    {
      icon: <Sparkles size={32} />,
      title: t.veneers,
      description: language === 'ar'
        ? 'تحسين مظهر ابتسامتك بقشور خزفية طبيعية المظهر'
        : 'Enhance your smile appearance with natural-looking ceramic veneers',
      comingSoon: false,
    },
    {
      icon: <FileText size={32} />,
      title: t.rootCanal,
      description: language === 'ar'
        ? 'علاج متقدم وجذور الأسنان بأحدث الأجهزة الرقمية'
        : 'Advanced root canal treatment with latest digital equipment',
      comingSoon: false,
    },
    {
      icon: <Baby size={32} />,
      title: t.pediatric,
      description: language === 'ar'
        ? 'رعاية خاصة لأسنان أطفالك في بيئة مريحة وآمنة'
        : 'Specialized care for your children\'s teeth in a comfortable and safe environment',
      comingSoon: false,
    },
    {
      icon: <Scissors size={32} />,
      title: t.extraction,
      description: language === 'ar'
        ? 'خلع آمن وغير مؤلم للأسنان التالفة بأيدي خبراء'
        : 'Safe and painless tooth extraction by expert professionals',
      comingSoon: false,
    },
    {
      icon: <ShieldPlus size={32} />,
      title: t.whitening,
      description: language === 'ar'
        ? 'تبييض متقدم للأسنان بإشراقة تدوم طويلاً'
        : 'Advanced teeth whitening for long-lasting brightness',
      comingSoon: false,
    },
    {
      icon: <Move size={32} />,
      title: t.removableProsthetics,
      description: language === 'ar'
        ? 'تركيبات متحركة مريحة وقابلة للإزالة مصممة خصيصاً لك'
        : 'Comfortable removable prosthetics custom-designed for you',
      comingSoon: true,
    },
    {
      icon: <Lock size={32} />,
      title: t.fixedProsthetics,
      description: language === 'ar'
        ? 'تركيبات ثابتة دائمة توفر وظيفة ومظهر طبيعي'
        : 'Permanent fixed prosthetics providing natural function and appearance',
      comingSoon: true,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <Section id="services" className="relative overflow-hidden bg-background py-24">
      {/* Background decoration */}
      <div className="absolute inset-0 z-0 bg-stripes pointer-events-none" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-textHeading font-playfair">{t.title}</h2>
          <p className="text-textMuted max-w-2xl mx-auto mt-4 font-cairo text-lg font-medium">
            {language === 'ar' ? 'نقدم مجموعة متكاملة من خدمات الأسنان بأعلى معايير الجودة' : 'Providing a comprehensive range of dental services with the highest quality standards'}
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              <Card className="p-8 h-full flex flex-col items-center text-center bg-white shadow-lg hover:shadow-2xl transition-all duration-300 rounded-2xl border border-accentLight hover:border-primaryGold relative overflow-hidden">
                {/* Gold Top Border Gradient on Hover */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-darkGold via-primaryGold to-darkGold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {service.comingSoon && (
                  <div className="absolute top-4 right-4 bg-primaryGold/10 text-primaryGold text-xs font-black px-3 py-1 rounded-full border border-primaryGold/20">
                    {language === 'ar' ? 'قريباً' : 'Soon'}
                  </div>
                )}

                <div className="w-20 h-20 rounded-2xl bg-primaryGold/5 flex items-center justify-center text-primaryGold mb-6 group-hover:scale-110 group-hover:bg-primaryGold group-hover:text-white transition-all duration-300">
                  {service.icon}
                </div>
                
                <h3 className="text-xl font-playfair font-bold text-textPrimary mb-4">{service.title}</h3>
                <p className="text-textMuted leading-relaxed font-cairo text-sm font-medium">
                  {service.description}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};
