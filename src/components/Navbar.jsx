import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../utils/translations';
import { Button } from './ui/Button';

export const Navbar = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language].nav;
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.home, href: '#home' },
    { name: t.services, href: '#services' },
    { name: t.beforeAfter, href: '#before-after' },
    { name: t.about, href: '#about' },
    { name: t.bookNow, href: '#booking' },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/80 backdrop-blur-xl shadow-xl py-2 border-b border-primaryGold/10' 
          : 'bg-transparent py-4'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.div 
            className="flex-shrink-0 group cursor-pointer"
            whileHover={{ scale: 1.05 }}
          >
            <h1 className={`text-2xl md:text-3xl font-playfair font-black transition-colors duration-300 ${isScrolled ? 'text-primaryGold' : 'text-primaryGold md:text-textPrimary'}`}>
              {t.logo.split('-')[0]}
              <span className="text-darkGold block text-xs md:text-sm font-cairo font-bold tracking-[0.2em] uppercase opacity-70">
                {t.logo.split('-')[1]}
              </span>
            </h1>
          </motion.div>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center space-x-10 rtl:space-x-reverse">
            {navLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                className={`relative font-cairo font-bold text-sm tracking-wide transition-colors duration-300 group ${
                  isScrolled ? 'text-textPrimary hover:text-primaryGold' : 'text-textPrimary hover:text-primaryGold'
                }`}
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primaryGold group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-6">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className="hidden md:flex items-center gap-2 text-textPrimary hover:text-primaryGold transition-colors font-bold font-cairo text-sm"
            >
              <Globe size={18} className="text-primaryGold" />
              {language === 'ar' ? 'EN' : 'عربي'}
            </button>

            {/* Call Button */}
            <a href={`tel:${translations[language].booking.phone}`}>
              <Button variant="primary" size="lg" className="hidden md:flex rounded-full px-8 h-12 gap-2 text-sm shadow-lg shadow-primaryGold/20 active:scale-95">
                <Phone size={18} />
                {t.bookNow}
              </Button>
            </a>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden w-12 h-12 rounded-2xl bg-primaryGold/10 flex items-center justify-center text-primaryGold hover:bg-primaryGold hover:text-white transition-all duration-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-2xl border-t border-primaryGold/10 shadow-2xl overflow-hidden"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <div className="px-8 py-10 space-y-6 flex flex-col items-center">
              {navLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  className="text-2xl font-playfair font-bold text-textPrimary hover:text-primaryGold transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.name}
                </motion.a>
              ))}
              
              <div className="w-full h-[1px] bg-primaryGold/10 my-4" />
              
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  toggleLanguage();
                  setIsMobileMenuOpen(false);
                }}
                className="w-full h-14 rounded-2xl border-primaryGold text-primaryGold font-bold"
              >
                {language === 'ar' ? 'Switch to English' : 'تغيير للغة العربية'}
              </Button>
              
              <a href={`tel:${translations[language].booking.phone}`} className="w-full">
                <Button variant="primary" size="lg" className="w-full h-14 rounded-2xl gap-3">
                  <Phone size={22} />
                  {language === 'ar' ? 'اتصل بنا الآن' : 'Call Us Now'}
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};
