import { createContext, useContext, useState, useEffect } from 'react';

const LanguageContext = createContext();

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('ar');
  const [dir, setDir] = useState('rtl');

  useEffect(() => {
    document.documentElement.lang = language;
    document.documentElement.dir = dir;
  }, [language, dir]);

  const toggleLanguage = () => {
    if (language === 'ar') {
      setLanguage('en');
      setDir('ltr');
    } else {
      setLanguage('ar');
      setDir('rtl');
    }
  };

  return (
    <LanguageContext.Provider value={{ language, dir, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
