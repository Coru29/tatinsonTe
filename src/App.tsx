import Header from './components/Header';
import Hero from './components/Hero';
import Marquee from './components/Marquee';
import MenuSection from './components/MenuSection';
import MysteryBoxSection from './components/MysteryBoxSection';
import ClubSection from './components/ClubSection';
import Footer from './components/Footer';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <>
      <CustomCursor />
      <Header />
      <Hero />
      <Marquee />
      <MenuSection />
      <MysteryBoxSection />
      <ClubSection />
      <Footer />
    </>
  );
}

export default App;
