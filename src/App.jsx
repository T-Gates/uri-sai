import { useState } from 'react';
import StarField from './components/StarField';
import Hero from './components/Hero';
import Features from './components/Features';
import ResultPreview from './components/ResultPreview';
import AiConsult from './components/AiConsult';
import BottomZone from './components/BottomZone';
import Modal from './components/Modal';
import Footer from './components/Footer';
import { utmParams, trackEvent } from './utils/tracking';
import './App.css';

const isSecure = utmParams.utm_content === 'secure';
if (isSecure) trackEvent('utm_variant', { variant: 'secure' });

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <StarField />
      <div className="container">
        <Hero />
        <Features showPrivacy={isSecure} />
        <ResultPreview />
        <AiConsult />
        <BottomZone showPrivacy={isSecure} onCtaClick={() => setModalOpen(true)} />
        <Footer />
      </div>
      <Modal open={modalOpen} onClose={() => setModalOpen(false)} />
    </>
  );
}
