import SpecialDeal from '../assets/red-sneakers.jpg';
import WhiteCart from '../assets/white-cart.png';

function ExploreCard({
  label = "Clearance Sales",
  cardImage = SpecialDeal,
  fit = "cover",
}) {
  return (
    <div
      className="relative group w-full overflow-hidden"
      style={{
        borderRadius: 14,
        boxShadow: '0 4px 20px rgba(0,0,0,0.12)',
        cursor: 'pointer',
        transition: 'transform 0.3s ease, box-shadow 0.3s ease',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.transform = 'translateY(-4px) scale(1.01)';
        e.currentTarget.style.boxShadow = '0 12px 40px rgba(0,0,0,0.2)';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0,0,0,0.12)';
      }}
    >
      {/* Image */}
      <img
        src={cardImage}
        alt={label}
        className={`w-full ${
          fit === "contain"
            ? "object-contain bg-gray-100 p-6"
            : "object-cover"
        }`}
        style={{ height: 220, display: 'block' }}
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.15) 0%, rgba(0,0,0,0.65) 100%)',
          transition: 'opacity 0.3s',
        }}
      />

      {/* Label — top left */}
      <p
        style={{
          position: 'absolute',
          top: 16,
          left: 16,
          fontFamily: "'Syne', sans-serif",
          fontSize: 'clamp(18px, 2.5vw, 26px)',
          fontWeight: 700,
          color: '#fff',
          lineHeight: 1.2,
          textShadow: '0 2px 8px rgba(0,0,0,0.4)',
          zIndex: 2,
        }}
      >
        {label}
      </p>

      {/* Shop Now button — bottom center */}
      <div
        style={{
          position: 'absolute',
          bottom: 16,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 2,
          background: 'rgba(0,0,0,0.65)',
          backdropFilter: 'blur(4px)',
          border: '1px solid rgba(255,255,255,0.2)',
          borderRadius: 8,
          display: 'flex',
          alignItems: 'center',
          gap: 8,
          padding: '8px 16px',
          transition: 'background 0.25s, transform 0.25s',
          whiteSpace: 'nowrap',
        }}
        className="group-hover:!bg-[#97542d]"
      >
        <p style={{ fontSize: 13, fontWeight: 600, color: '#fff', fontFamily: "'DM Sans', sans-serif" }}>
          Shop Now
        </p>
        <img src={WhiteCart} alt="" style={{ height: 18 }} />
      </div>
    </div>
  );
}

export default ExploreCard;