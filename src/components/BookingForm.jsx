import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Phone, MapPin, Clock, CheckCircle, MessageCircle } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { sendWhatsApp } from '../utils/whatsapp';
import { Button } from './ui/Button';
import { Section } from './ui/Section';

export const BookingForm = () => {
  const { language } = useLanguage();
  const t = translations[language].booking;

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: '',
  });
  
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.service) {
      alert(language === 'ar' 
        ? 'يرجى ملء جميع الحقول' 
        : 'Please fill all fields');
      return;
    }

    sendWhatsApp(formData.name, formData.phone, formData.service);
    setIsSuccess(true);
    
    // Reset form after delay
    setTimeout(() => {
      setIsSuccess(false);
      setFormData({ name: '', phone: '', service: '' });
    }, 3000);
  };

  const services = [
    { value: 'implants', label: language === 'ar' ? 'زراعة الأسنان' : 'Dental Implants' },
    { value: 'veneers', label: language === 'ar' ? 'الفينير التجميلي' : 'Cosmetic Veneers' },
    { value: 'rootCanal', label: language === 'ar' ? 'علاج الجذور' : 'Root Canal Treatment' },
    { value: 'pediatric', label: language === 'ar' ? 'أسنان الأطفال' : 'Pediatric Dentistry' },
    { value: 'consultation', label: language === 'ar' ? 'استشارة عامة' : 'General Consultation' },
    { value: 'other', label: language === 'ar' ? 'أخرى' : 'Other' },
  ];

  return (
    <Section id="booking" className="bg-background py-24 relative overflow-hidden">
      {/* Background Decorative Circles */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primaryGold/5 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primaryGold/5 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row shadow-2xl rounded-[40px] overflow-hidden bg-white border border-primaryGold/10">
          
          {/* Left Side: Form */}
          <div className="flex-1 p-10 md:p-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-textHeading text-4xl mb-8 font-playfair font-black text-right lg:text-right after:left-full after:-translate-x-full lg:after:left-full rtl:after:left-0 rtl:after:translate-x-0">
                 {t.title}
              </h2>
              
              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.form 
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    onSubmit={handleSubmit} 
                    className="space-y-8"
                  >
                    {/* Name Field */}
                    <div className="relative group">
                      <input
                        type="text"
                        id="name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="peer w-full px-4 py-4 border-b-2 border-accentLight focus:border-primaryGold outline-none transition-all duration-300 text-textPrimary bg-transparent placeholder-transparent font-cairo font-semibold"
                        placeholder={t.name}
                        autoComplete="off"
                      />
                      <label 
                        htmlFor="name" 
                        className="absolute right-0 -top-3.5 text-textSecondary font-bold text-sm transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primaryGold peer-focus:text-sm font-cairo"
                      >
                        {t.name}
                      </label>
                    </div>

                    {/* Phone Field */}
                    <div className="relative group">
                      <input
                        type="tel"
                        id="phone"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="peer w-full px-4 py-4 border-b-2 border-accentLight focus:border-primaryGold outline-none transition-all duration-300 text-textPrimary bg-transparent placeholder-transparent font-cairo font-semibold"
                        placeholder={t.phone}
                        autoComplete="off"
                      />
                      <label 
                        htmlFor="phone" 
                        className="absolute right-0 -top-3.5 text-textSecondary font-bold text-sm transition-all duration-300 peer-placeholder-shown:text-lg peer-placeholder-shown:top-4 peer-focus:-top-3.5 peer-focus:text-primaryGold peer-focus:text-sm font-cairo"
                      >
                        {t.phone}
                      </label>
                    </div>

                    {/* Service Select */}
                    <div className="relative group">
                       <select
                        id="service"
                        value={formData.service}
                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                        className="peer w-full px-4 py-4 border-b-2 border-accentLight focus:border-primaryGold outline-none transition-all duration-300 text-textPrimary bg-transparent font-cairo font-semibold appearance-none"
                      >
                        <option value="" disabled className="text-textPlaceholder">{t.selectService}</option>
                        {services.map((service, index) => (
                          <option key={index} value={service.value} className="text-textPrimary bg-white">
                            {service.label}
                          </option>
                        ))}
                      </select>
                      <label 
                        htmlFor="service" 
                        className="absolute right-0 -top-3.5 text-textSecondary font-bold text-sm font-cairo"
                      >
                        {t.service}
                      </label>
                      <div className="absolute left-2 top-1/2 -translate-y-1/2 pointer-events-none text-primaryGold">
                        <ArrowDownIcon className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <div className="pt-4 flex flex-col gap-4">
                      <Button
                        type="submit"
                        variant="primary"
                        size="lg"
                        className="w-full h-16 rounded-2xl gap-3 text-xl shadow-xl shadow-primaryGold/20 font-black btn-primary"
                      >
                        <Send size={24} />
                        {t.submit}
                      </Button>
                      
                      {/* WhatsApp CTA */}
                      <a 
                        href={`https://wa.me/201012345678`} 
                        target="_blank" 
                        rel="noreferrer"
                        className="flex items-center justify-center gap-3 w-full h-16 rounded-2xl bg-[#25D366] text-white font-black text-xl hover:bg-[#128C7E] transition-all duration-300 shadow-lg shadow-green-500/20"
                      >
                        <MessageCircle size={24} />
                        {language === 'ar' ? 'تواصل عبر واتساب مباشرة' : 'Contact via WhatsApp Direct'}
                      </a>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1, rotate: 360 }}
                      transition={{ type: "spring", stiffness: 260, damping: 20 }}
                      className="w-24 h-24 bg-success rounded-full flex items-center justify-center text-white mb-6 shadow-2xl"
                    >
                      <CheckCircle size={48} />
                    </motion.div>
                    <h3 className="text-3xl font-playfair font-black text-textHeading mb-2">
                       {language === 'ar' ? 'تم استلام طلبك بنجاح' : 'Request Received Successfully'}
                    </h3>
                    <p className="text-textMuted font-cairo text-lg font-bold">
                       {language === 'ar' ? 'سيتم التواصل معك عبر واتساب خلال دقائق' : 'We will contact you via WhatsApp within minutes'}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>

          {/* Right Side: Clinic Info Card */}
          <div className="w-full lg:w-[400px] bg-primaryDark p-10 md:p-16 text-white relative overflow-hidden flex flex-col justify-center">
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-primaryGold/20 via-transparent to-transparent opacity-50" />
            
            <div className="relative z-10 space-y-12">
              <div className="space-y-4">
                <h3 className="text-2xl md:text-3xl font-playfair font-black text-primaryGold">{t.infoTitle}</h3>
                <div className="w-12 h-1 bg-primaryGold rounded-full" />
              </div>

              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primaryGold flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-bold font-cairo mb-1 uppercase tracking-wider">{language === 'ar' ? 'العنوان' : 'Address'}</h4>
                    <p className="font-cairo text-lg leading-relaxed font-bold text-white">{t.address}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primaryGold flex-shrink-0">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-bold font-cairo mb-1 uppercase tracking-wider">{language === 'ar' ? 'رقم الهاتف' : 'Phone'}</h4>
                    <p className="font-cairo text-lg leading-relaxed font-bold text-white">{t.phone}</p>
                  </div>
                </div>

                <div className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-primaryGold flex-shrink-0">
                    <Clock size={24} />
                  </div>
                  <div>
                    <h4 className="text-gray-400 text-sm font-bold font-cairo mb-1 uppercase tracking-wider">{language === 'ar' ? 'ساعات العمل' : 'Hours'}</h4>
                    <p className="font-cairo text-lg leading-relaxed font-bold text-white">{t.hours}</p>
                  </div>
                </div>
              </div>

              {/* Mini Map Placeholder / Decoration */}
              <div className="aspect-video w-full rounded-2xl bg-white/5 border border-white/10 relative overflow-hidden group">
                 <img 
                   src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&q=80&w=400" 
                   alt="Clinic" 
                   className="w-full h-full object-cover opacity-30 group-hover:opacity-60 transition-opacity duration-700"
                 />
                 <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-primaryGold/80 backdrop-blur-sm p-4 rounded-full shadow-2xl">
                       <MapPin className="text-white animate-bounce" />
                    </div>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

const ArrowDownIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
  </svg>
);
