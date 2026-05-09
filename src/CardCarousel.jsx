import Card from "./Card";
import { forwardRef } from "react";

const CardCarousel = forwardRef(({ onLeft, onRight }, carouselRef) => {
  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="card-carousel-track"
        style={{
          display: 'flex',
          gap: 16,
          overflowX: 'auto',
          scrollSnapType: 'x mandatory',
          scrollBehavior: 'smooth',
          paddingBottom: 4,
        }}
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            style={{
              scrollSnapAlign: 'start',
              flexShrink: 0,
              // 1 card on mobile, 2 on sm, 3 on md, 4 on lg
              width: 'clamp(220px, 30vw, 280px)',
              transition: 'transform 0.25s, box-shadow 0.25s',
              borderRadius: 12,
              overflow: 'hidden',
              boxShadow: '0 2px 12px rgba(0,0,0,0.07)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 10px 32px rgba(0,0,0,0.13)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.07)';
            }}
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardCarousel;