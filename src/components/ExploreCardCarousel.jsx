import ExploreCard from './ExploreCard.jsx'
import BlackFriday from '../assets/black-friday.jpg'
import Computer from '../assets/macbook.jpg'

function ExploreCardCarousel() {
  return (
    <div className="w-full">
      {/* Section heading */}
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          letterSpacing: '-0.3px',
          color: '#111110',
          marginBottom: 20,
        }}
      >
        Explore Deals
      </p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))',
          gap: 16,
        }}
      >
        <ExploreCard />
        <ExploreCard
          label="Sneakers Deal"
          cardImage={BlackFriday}
        />
        <ExploreCard />
        <ExploreCard
          label="Computing Gadget"
          cardImage={Computer}
        />
        <ExploreCard label="Black Friday" />
        <ExploreCard label="5000 Naira Market" />
      </div>
    </div>
  );
}

export default ExploreCardCarousel;