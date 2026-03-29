import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Facebook, Instagram, Youtube, Send } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';

export const Footer = () => {
  const { language } = useLanguage();
  const t = translations[language];

  return (
    <motion.footer
      className="bg-primaryDark text-white pt-24 pb-12 relative overflow-hidden"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      {/* Top Gold Border Gradient */}
      <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primaryGold to-transparent" />
      
      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 mb-20">
          
          {/* Column 1: Clinic Brand */}
          <div className="space-y-8">
            <h3 className="text-3xl font-playfair font-black text-primaryGold tracking-tight">
               {language === 'ar' ? 'د. محمود عمران' : 'Dr. Mahmoud Omran'}
               <span className="block text-sm font-cairo font-bold text-textFooterLinks mt-2 uppercase tracking-widest">
                 {language === 'ar' ? 'عيادة الأسنان التخصصية' : 'Specialized Dental Clinic'}
               </span>
            </h3>
            <p className="text-textFooterLinks font-cairo leading-relaxed font-medium">
              {language === 'ar'
                ? 'نقدم أفضل خدمات تجميل وزراعة الأسنان في المنيا باستخدام أحدث التقنيات العالمية لضمان راحتكم وجمال ابتسامتكم.'
                : 'Offering the best cosmetic and dental implant services in Minia using latest global technologies to ensure your comfort and the beauty of your smile.'}
            </p>
            <div className="flex gap-4">
               {[Facebook, Instagram, Youtube].map((Icon, i) => (
                 <motion.a 
                   key={i} 
                   href="#" 
                   whileHover={{ y: -5, color: '#C9A96E' }}
                   className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-textFooterLinks transition-all duration-300 hover:border-primaryGold"
                 >
                   <Icon size={24} />
                 </motion.a>
               ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-8">
            <h4 className="text-xl font-playfair font-black text-white border-r-4 border-primaryGold rtl:pr-4 ltr:pl-4">
               {language === 'ar' ? 'روابط سريعة' : 'Quick Links'}
            </h4>
            <ul className="space-y-4 font-cairo text-textFooterLinks font-bold">
               {t.nav.home && <li><a href="#home" className="hover:text-primaryGold transition-colors">{t.nav.home}</a></li>}
               {t.nav.services && <li><a href="#services" className="hover:text-primaryGold transition-colors">{t.nav.services}</a></li>}
               {t.nav.beforeAfter && <li><a href="#before-after" className="hover:text-primaryGold transition-colors">{t.nav.beforeAfter}</a></li>}
               {t.nav.about && <li><a href="#about" className="hover:text-primaryGold transition-colors">{t.nav.about}</a></li>}
            </ul>
          </div>

          {/* Column 3: Contact Details */}
          <div className="space-y-8">
             <h4 className="text-xl font-playfair font-black text-white border-r-4 border-primaryGold rtl:pr-4 ltr:pl-4">
               {language === 'ar' ? 'تواصل معنا' : 'Contact Us'}
            </h4>
            <div className="space-y-6 text-textFooterLinks font-cairo font-bold">
               <div className="flex gap-4">
                 <MapPin size={20} className="text-primaryGold flex-shrink-0" />
                 <span>{t.booking.address}</span>
               </div>
               <div className="flex gap-4">
                 <Phone size={20} className="text-primaryGold flex-shrink-0" />
                 <a href={`tel:${t.booking.phone}`} className="hover:text-primaryGold transition-colors">{t.booking.phone}</a>
               </div>
               <div className="flex gap-4">
                 <Clock size={20} className="text-primaryGold flex-shrink-0" />
                 <span>{t.booking.hours}</span>
               </div>
            </div>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="space-y-8">
             <h4 className="text-xl font-playfair font-black text-white border-r-4 border-primaryGold rtl:pr-4 ltr:pl-4">
               {language === 'ar' ? 'النشرة البريدية' : 'Newsletter'}
            </h4>
            <p className="text-textFooterLinks font-cairo text-sm font-bold">
               {language === 'ar' ? 'اشترك للحصول على أحدث النصائح والعروض' : 'Subscribe for latest tips and offers'}
            </p>
            <div className="relative group">
               <input 
                 type="email" 
                 placeholder={language === 'ar' ? 'بريدك الإلكتروني' : 'Your Email'} 
                 className="w-full bg-white/5 border border-white/10 rounded-2xl py-4 px-6 outline-none focus:border-primaryGold transition-all font-cairo text-white font-bold"
               />
               <button className="absolute left-2 top-1/2 -translate-y-1/2 w-10 h-10 rounded-xl bg-primaryGold text-white flex items-center justify-center hover:bg-darkGold transition-colors">
                  <Send size={18} />
               </button>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-textFooterLinks font-cairo text-sm text-center font-bold">
          <p>
            {language === 'ar'
              ? `© ${new Date().getFullYear()} عيادة د. محمود عمران - جميع الحقوق محفوظة`
              : `© ${new Date().getFullYear()} Dr. Mahmoud Omran Clinic - All Rights Reserved`}
          </p>
          <div className="flex gap-8">
             <a href="#" className="hover:text-primaryGold transition-colors">{language === 'ar' ? 'سياسة الخصوصية' : 'Privacy Policy'}</a>
             <a href="#" className="hover:text-primaryGold transition-colors">{language === 'ar' ? 'الشروط والأحكام' : 'Terms & Conditions'}</a>
          </div>
        </div>
      </div>
    </motion.footer>
  );
};
