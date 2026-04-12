import Card from "./Card";
import { forwardRef } from "react";


const CardCarousel = forwardRef(({ onLeft, onRight }, carouselRef) => {
  return (
    <div className="relative w-full mx-auto">
      {/* Carousel wrapper */}
      <div
        ref={carouselRef}
        className="flex gap-6 overflow-x-hidden sm:overflow-x-hidden md:overflow-x-auto scroll-smooth snap-x snap-mandatory"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="
              snap-start
              flex-shrink-0
              w-full      /* mobile: 1 card */
              sm:w-full   /* tablet: 1 card */
              md:w-[32%]  /* desktop: 3 cards */
              lg:w-[24%]  /* large desktop: 4 cards */
            "
          >
            <Card />
          </div>
        ))}
      </div>

      
    </div>
  );
});

export default CardCarousel;
