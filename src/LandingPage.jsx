import Hero from './Hero/Hero.jsx'
import LabelAndScroll from './LabelAndScroll.jsx'
import CardCarousel from './CardCarousel.jsx'
import BlackFriday from './assets/purple-woman.png'
import ExploreCardCarousel from './ExploreCardCarousel.jsx'
import PriceView from './PriceView.jsx'
import Newsletter from './Newsletter.jsx'
import Footer from './Footer.jsx'
import { useRef } from "react";

function LandingPage() {
  const topSalesRef = useRef(null);
  const newGadgetRef = useRef(null);

  const scrollLeft = (ref) => {
    ref.current.scrollBy({ left: -ref.current.offsetWidth, behavior: "smooth" });
  };

  const scrollRight = (ref) => {
    ref.current.scrollBy({ left: ref.current.offsetWidth, behavior: "smooth" });
  };

  return (
    <section style={{ background: '#fafaf8' }}>

      <Hero />

      {/* Product carousels */}
      <section
        style={{
          padding: 'clamp(80px, 10vw, 120px) clamp(16px, 4vw, 56px) clamp(40px, 6vw, 64px)',
        }}
      >
        <div style={{ marginBottom: 48 }}>
          <LabelAndScroll
            label="Top Sales"
            onLeft={() => scrollLeft(topSalesRef)}
            onRight={() => scrollRight(topSalesRef)}
          />
          <CardCarousel ref={topSalesRef} />
        </div>

        <div>
          <LabelAndScroll
            label="New Gadget Collection"
            onLeft={() => scrollLeft(newGadgetRef)}
            onRight={() => scrollRight(newGadgetRef)}
          />
          <CardCarousel ref={newGadgetRef} />
        </div>
      </section>

      {/* Banner image */}
      <div
        style={{
          padding: '0 clamp(16px, 4vw, 56px)',
          marginBottom: 'clamp(32px, 5vw, 64px)',
          borderRadius: 0,
        }}
      >
        <img
          src={BlackFriday}
          alt="Promotional banner"
          style={{
            width: '100%',
            objectFit: 'cover',
            borderRadius: 16,
            maxHeight: 420,
            display: 'block',
          }}
        />
      </div>

      {/* Explore deals */}
      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 'clamp(32px, 5vw, 64px)' }}>
        <ExploreCardCarousel />
      </div>

      {/* Price compare */}
      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 8 }}>
        <PriceView />
      </div>

      {/* Newsletter */}
      <div style={{ padding: '0 clamp(16px, 4vw, 56px)', marginBottom: 8 }}>
        <Newsletter />
      </div>

      <Footer />

    </section>
  );
}

export default LandingPage;