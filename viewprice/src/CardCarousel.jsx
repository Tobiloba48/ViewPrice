import { useRef } from "react";
import Card from "./Card";

function CardCarousel() {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  const scrollRight = () => {
    carouselRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <div className="relative w-full max-w-[80rem] mx-auto">
      {/* Scroll Buttons */}
      <button
        onClick={scrollLeft}
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        &#8592;
      </button>
      <button
        onClick={scrollRight}
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
      >
        &#8594;
      </button>

      {/* Card container */}
      <div
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto scroll-smooth px-2 py-4 snap-x snap-mandatory scrollbar-hide"
      >
            {Array.from({ length: 12 }).map((_, index) => (
            <div
                key={index}
                className="flex-shrink-0 w-[32%] snap-start"
            >
                <Card />
            </div>
            ))}
      </div>
    </div>
  );
}

export default CardCarousel;
