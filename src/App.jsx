import { LanguageProvider } from './contexts/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Services } from './components/Services';
import { BeforeAfter } from './components/BeforeAfter';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { BookingForm } from './components/BookingForm';
import { Footer } from './components/Footer';

function App() {
  return (
    <LanguageProvider>
      <div className="min-h-screen bg-background overflow-x-hidden selection:bg-primaryGold selection:text-white">
        <Navbar />
        <main>
          <Hero />
          <Services />
          <BeforeAfter />
          <WhyChooseUs />
          <Testimonials />
          <BookingForm />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}

export default App;
