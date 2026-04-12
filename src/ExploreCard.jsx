import SpecialDeal from './assets/red-sneakers.jpg';
import WhiteCart from './assets/white-cart.png';

function ExploreCard({
  label = "Clearance Sales",
  cardImage = SpecialDeal,
  fit = "cover", // "cover" | "contain"
}) {
  return (
    <div className="relative group w-full max-w-sm sm:max-w-md md:max-w-lg overflow-hidden rounded-sm shadow-md">
      {/* Image */}
      <img
        src={cardImage}
        alt={label}
        className={`h-64 sm:h-80 md:h-96 w-full ${
          fit === "contain"
            ? "object-contain bg-gray-100 p-6"
            : "object-cover"
        }`}
      />

      {/* Overlay + Text */}
      <div className="absolute inset-0 flex justify-start">
        <p className="text-white text-2xl sm:text-3xl md:text-5xl font-semibold text-start 
                      pt-4 sm:pt-5 px-4 sm:px-8 drop-shadow-lg">
          {label}
        </p>
      </div>   

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />

      {/* Shop Now Button */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2
                      bg-black/80 flex items-center gap-2
                      px-4 sm:px-3 py-2 sm:py-3 text-white font-semibold
                      rounded-sm w-fit
                      transition-transform duration-300
                      group-hover:scale-105 cursor-pointer">
        <p className="text-[10px] md:text-[16px] lg:text-[12px]">Shop Now</p>
        <img src={WhiteCart} alt="" className="h-4 sm:h-5" />
      </div>
    </div>
  );
}

export default ExploreCard;
