import LeftArrow from './assets/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import RightArrow from './assets/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

function LabelAndScroll({ onLeft, onRight, label }) {
  return (
    <div className="flex justify-between mb-3 mt-[6em] mr-14">
      <p className="font-bold text-xl">{label}</p>

      <div className="flex gap-5">
        <button
          onClick={onLeft}
          className="bg-amber-300 rounded-full p-2 hover:scale-110 transition"
        >
          <img src={LeftArrow} alt="Previous" />
        </button>

        <button
          onClick={onRight}
          className="bg-amber-300 rounded-full p-2 hover:scale-110 transition"
        >
          <img src={RightArrow} alt="Next" />
        </button>
      </div>
    </div>
  );
}

export default LabelAndScroll;
