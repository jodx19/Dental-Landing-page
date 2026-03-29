import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Card } from './ui/Card';
import { Section } from './ui/Section';

export const Testimonials = () => {
  const { language } = useLanguage();
  const t = translations[language].testimonials;

  const testimonials = [
    {
      name: language === 'ar' ? 'أحمد محمد' : 'Ahmed Mohamed',
      location: t.location,
      rating: 5,
      text: language === 'ar'
        ? 'الدكتور محمود محترف جداً. تعامل راقي والنتيجة ممتازة. أنصح به بشدة.'
        : 'Dr. Mahmoud is very professional. Elegant treatment and excellent results. I highly recommend him.',
    },
    {
      name: language === 'ar' ? 'فاطمة علي' : 'Fatima Ali',
      location: t.location,
      rating: 5,
      text: language === 'ar'
        ? 'عملت فينير والأسنان طلعت طبيعية جداً. العيادة نظيفة والمعدات حديثة.'
        : 'I got veneers and my teeth look very natural. The clinic is clean and equipment is modern.',
    },
    {
      name: language === 'ar' ? 'محمود حسن' : 'Mahmoud Hassan',
      location: t.location,
      rating: 5,
      text: language === 'ar'
        ? 'زرعت سنين عند دكتور محمود وما حسيت بأي ألم. الله يوفقه في حياته.'
        : 'I did implants with Dr. Mahmoud and felt no pain at all. May God bless him.',
    },
    {
      name: language === 'ar' ? 'سارة إبراهيم' : 'Sarah Ibrahim',
      location: t.location,
      rating: 5,
      text: language === 'ar'
        ? 'عالجت ولادي عنده ورايق جداً معاهم. المكان مريح والأسعار معقولة.'
        : 'I treated my children with him and he\'s very patient with them. Comfortable place and reasonable prices.',
    },
  ];

  // Duplicate for seamless scroll
  const allTestimonials = [...testimonials, ...testimonials];

  return (
    <Section className="bg-background py-24 overflow-hidden relative">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primaryGold/30 to-transparent" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-textHeading font-playfair">{t.title}</h2>
          <p className="text-textMuted max-w-2xl mx-auto mt-4 font-cairo text-lg font-bold">
            {language === 'ar' ? 'فخورون بثقة مرضانا ونسعى دائماً لتقديم الأفضل' : 'Proud of our patients\' trust and always striving to provide the best'}
          </p>
        </motion.div>

        {/* Carousel Container */}
        <div className="relative w-full">
          <motion.div
            className="flex gap-8"
            animate={{
              x: language === 'ar' ? [0, 100 * testimonials.length] : [0, -100 * testimonials.length],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
            style={{ width: 'max-content' }}
          >
            {allTestimonials.map((testimonial, index) => (
              <Card 
                key={index} 
                className="w-[300px] md:w-[400px] p-8 bg-white border border-primaryGold/10 rounded-[32px] shadow-xl shadow-primaryGold/5 relative group transition-all duration-500"
              >
                {/* Large Decorative Quote Mask */}
                <div className="absolute top-0 left-4 text-[10rem] font-serif text-primaryGold opacity-[0.05] leading-none pointer-events-none select-none">
                  “
                </div>

                <div className="relative z-10">
                  {/* Star Rating with Glow */}
                  <div className="flex gap-1 mb-6">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        size={18}
                        className="fill-primaryGold text-primaryGold drop-shadow-[0_0_8px_rgba(201,169,110,0.5)]"
                      />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-[#2D2D2D] text-lg mb-8 font-cairo font-semibold leading-relaxed italic line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                    "{testimonial.text}"
                  </p>

                  {/* Patient Info with Avatar Placeholder */}
                  <div className="flex items-center gap-4 border-t border-primaryGold/10 pt-6">
                    <div className="w-12 h-12 rounded-full bg-primaryGold/10 border-2 border-primaryGold flex items-center justify-center text-primaryGold font-bold text-xl uppercase">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-playfair font-bold text-textHeading text-lg">{testimonial.name}</h4>
                      <p className="text-primaryGold text-sm font-bold font-cairo">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </motion.div>

          {/* Gradient Fades for Carousel Roots */}
          <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background to-transparent z-20 pointer-events-none" />
        </div>
      </div>
    </Section>
  );
};
