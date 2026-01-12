import Card from "./Card";
import { forwardRef } from "react";

const CardCarousel = forwardRef((props, carouselRef) => {
  return (
    <div className="relative w-full mx-auto">
      <div
        ref={carouselRef}
        className=" cardCarousal flex gap-14 overflow-x-auto scroll-smooth px-2 py-4
                   snap-x snap-mandatory scrollbar-hide"
      >
        {Array.from({ length: 12 }).map((_, index) => (
          <div
            key={index}
            className="w-[40%] snap-start"
          >
            <Card />
          </div>
        ))}
      </div>
    </div>
  );
});

export default CardCarousel;
