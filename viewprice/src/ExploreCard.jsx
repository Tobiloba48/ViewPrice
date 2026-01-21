import SpecialDeal from './assets/red-sneakers.jpg';
import WhiteCart from './assets/white-cart.png'





function ExploreCard({
  label = "Clearance Sales",
  cardImage = SpecialDeal,
  fit = "cover", // "cover" | "contain"
}) {
  return (
    <div className="relative group w-full max-w-md overflow-hidden rounded-sm shadow-md">
      <img
        src={cardImage}
        alt={label}
        className={`h-140 w-full ${
          fit === "contain"
            ? "object-contain bg-gray-100 p-6"
            : "object-cover"
        }`}
      />
      {/* overlay + text */}
        <div className="absolute inset-0 flex justify-start">
            <p className="text-white text-4xl md:text-5xl font-semibold text-start 
                            pt-5 px-[2em] drop-shadow-lg">
                            {label} 
            </p>
        </div>   
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition" />
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2
                    bg-black/80 flex items-center gap-2
                    px-6 py-3 text-white font-semibold
                    rounded-sm w-fit
                    transition-transform duration-300
                    group-hover:scale-105 cursor-pointer">
            <p className="text-lg">Shop Now</p>
            <img src={WhiteCart} alt="" className="h-5" />
        </div>
    </div>
  );
}


export default ExploreCard;
