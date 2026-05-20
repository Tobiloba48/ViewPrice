import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useRef } from 'react'

import Header from './Header/Header.jsx'
import Hero from './Hero/Hero.jsx'
import LabelAndScroll from './components/LabelAndScroll.jsx'
import CardCarousel from './components/CardCarousel.jsx'
import ExploreCardCarousel from './components/ExploreCardCarousel.jsx'
import PriceView from './components/PriceView.jsx'
import Newsletter from './components/Newsletter.jsx'
import Footer from './components/Footer.jsx'
import BlackFriday from './assets/purple-woman.png'
import ProductPage from './pages/ProductPage.jsx'

import SignUpPage from './Login/SignUpPage.jsx'
import SignInPage from './Login/SignInPage.jsx'
import PasswordReset from './Login/PasswordReset.jsx'
import ConfirmEmail from './Login/ConfirmEmail.jsx'

function HomePage() {
  const topSalesRef = useRef(null);
  const newGadgetRef = useRef(null);

  const scrollLeft = (ref) => ref.current.scrollBy({ left: -ref.current.offsetWidth, behavior: 'smooth' });
  const scrollRight = (ref) => ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: 'smooth' });

  return (
    <section style={{ background: '#fafaf8' }}>
      <Hero />

      <section style={{ padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 56px) clamp(40px, 6vw, 64px)' }}>
        <div style={{ marginBottom: 48 }}>
          <LabelAndScroll label="Top Sales" onLeft={() => scrollLeft(topSalesRef)} onRight={() => scrollRight(topSalesRef)} />
          <CardCarousel ref={topSalesRef} />
        </div>
        <div>
          <LabelAndScroll label="New Gadget Collection" onLeft={() => scrollLeft(newGadgetRef)} onRight={() => scrollRight(newGadgetRef)} />
          <CardCarousel ref={newGadgetRef} />
        </div>
      </section>

      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
        <img src={BlackFriday} alt="Promotional banner" style={{ width: '100%', objectFit: 'cover', borderRadius: 16, maxHeight: 420, display: 'block' }} />
      </div>

      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
        <ExploreCardCarousel />
      </div>

      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 8 }}>
        <PriceView />
      </div>

      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 8 }}>
        <Newsletter />
      </div>

      <Footer />
    </section>
  );
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<><Header /><HomePage /></>} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/login" element={<SignInPage />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path='/confirm-email' element={<ConfirmEmail/>}/>
      </Routes>
    </Router>
  );
}

export default App