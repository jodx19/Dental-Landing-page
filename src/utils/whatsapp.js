export const sendWhatsApp = (name, phone, service) => {
  const msgAr = `أهلاً د. محمود عمران، أنا ${name}. أود الاستفسار عن ${service}. رقمي هو ${phone}.`;
  const msgEn = `Hello Dr. Mahmoud Omran, I am ${name}. I would like to inquire about ${service}. My number is ${phone}.`;
  
  const msg = document.documentElement.dir === 'rtl' ? msgAr : msgEn;
  window.open(`https://wa.me/201117009738?text=${encodeURIComponent(msg)}`, '_blank');
};
