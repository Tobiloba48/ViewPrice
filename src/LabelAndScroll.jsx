import LeftArrow from './assets/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import RightArrow from './assets/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

function LabelAndScroll({ onLeft, onRight, label }) {
  return (
    <div className="flex justify-between items-center sm:items-end mb-2 mt-6 ">
      
      {/* Label */}
      <p className="font-bold text-lg sm:text-xl md:text-2xl mb-2 sm:mb-0 align-center">
        {label}
      </p>

      {/* Scroll Buttons */}
      <div className="flex gap-3 sm:gap-5">
        <button
          onClick={onLeft}
          className="bg-amber-300 rounded-full p-2 sm:p-3 hover:scale-110 transition cursor-pointer"
        >
          <img src={LeftArrow} alt="Previous" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>

        <button
          onClick={onRight}
          className="bg-amber-300 rounded-full p-2 sm:p-3 hover:scale-110 transition cursor-pointer"
        >
          <img src={RightArrow} alt="Next" className="w-4 h-4 sm:w-5 sm:h-5" />
        </button>
      </div>
    </div>
  );
}

export default LabelAndScroll;
