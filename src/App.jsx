import './App.css';
import Navbar from './components/Navbar';
import PresaleCalculator from './components/PresaleCalculator';
import BonusTiers from './components/BonusTiers';
import {
  HeroSection,
  TrustBar,
  PresaleSection,
  TokenomicsSection,
  ImpactSection,
  GoalsSection,
  RoadmapSection,
  AirdropSection,
  CommunitySection,
  FaqSection,
  FooterSection,
} from './components/AppSections';

function App() {
  return (
    <>
      <Navbar />
      <main id="top">
        <HeroSection />
        <TrustBar />
        <PresaleSection />
        <PresaleCalculator />
        <BonusTiers activeValue={1} />
        <TokenomicsSection />
        <ImpactSection />
        <GoalsSection />
        <RoadmapSection />
        <AirdropSection />
        <CommunitySection />
        <FaqSection />
      </main>
      <FooterSection />
    </>
  );
}

export default App;
