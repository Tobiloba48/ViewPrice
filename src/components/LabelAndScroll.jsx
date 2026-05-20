import LeftArrow from '../assets/keyboard_arrow_left_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'
import RightArrow from '../assets/keyboard_arrow_right_24dp_000000_FILL0_wght400_GRAD0_opsz24.png'

function LabelAndScroll({ onLeft, onRight, label }) {
  return (
    <div
      className="flex justify-between items-center mb-4 mt-8"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Label */}
      <p
        style={{
          fontFamily: "'Syne', sans-serif",
          fontWeight: 700,
          fontSize: 'clamp(18px, 2.5vw, 24px)',
          letterSpacing: '-0.3px',
          color: '#111110',
        }}
      >
        {label}
      </p>

      {/* Scroll Buttons */}
      <div className="flex gap-2">
        <button
          onClick={onLeft}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.1)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#F75D02';
            e.currentTarget.style.borderColor = '#F75D02';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
          }}
        >
          <img src={LeftArrow} alt="Previous" style={{ width: 18, height: 18 }} />
        </button>

        <button
          onClick={onRight}
          style={{
            width: 38,
            height: 38,
            borderRadius: '50%',
            border: '1px solid rgba(0,0,0,0.1)',
            background: '#fff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'all 0.2s',
            boxShadow: '0 2px 8px rgba(0,0,0,0.06)',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#F75D02';
            e.currentTarget.style.borderColor = '#F75D02';
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#fff';
            e.currentTarget.style.borderColor = 'rgba(0,0,0,0.1)';
          }}
        >
          <img src={RightArrow} alt="Next" style={{ width: 18, height: 18 }} />
        </button>
      </div>
    </div>
  );
}

export default LabelAndScroll;