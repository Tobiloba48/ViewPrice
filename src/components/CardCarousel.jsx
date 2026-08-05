import Card from "./Card";
import Products from "../Products/Product";
import { forwardRef } from "react";

const CardCarousel = forwardRef(({ onLeft, onRight }, carouselRef) => {
  return (
    <div className="relative w-full">
      <div
        ref={carouselRef}
        className="card-carousel-track"
        style={{
          display: "flex",
          gap: 16,
          overflowX: "auto",
          scrollSnapType: "x mandatory",
          scrollBehavior: "smooth",
          paddingBottom: 4,
        }}
      >
        {Products.map((product) => (
          <div
            key={product.id}
            style={{
              scrollSnapAlign: "start",
              flexShrink: 0,
              width: "clamp(220px, 30vw, 280px)",
              transition: "transform 0.25s, box-shadow 0.25s",
              borderRadius: 12,
              overflow: "hidden",
              boxShadow: "0 2px 12px rgba(0,0,0,0.07)",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-4px)";
              e.currentTarget.style.boxShadow = "0 10px 32px rgba(0,0,0,0.13)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 2px 12px rgba(0,0,0,0.07)";
            }}
          >
            <Card product={product} />
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardCarousel;
