import BackgroundImage from '../assets/beautiful-woman-smilling.jpg'
import Header from '../Header/Header.jsx'
import { useState } from "react";
import Search from '../assets/ion_search.png'

function Hero() {
  const [product, setProduct] = useState("");

  return (
    <div className="relative">
      <Header />

      <section className="relative mt-16 h-screen">

        {/* Background image */}
        <img
          src={BackgroundImage}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />

        {/* Dark overlay — slightly lighter at top so header blends */}
        <div className="absolute inset-0" style={{
          background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, rgba(0,0,0,0.65) 60%, rgba(0,0,0,0.80) 100%)'
        }} />

        {/* Hero text */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-center text-white px-6">

          {/* Pill label */}
          {/* <div
            className="mb-5 inline-block"
            style={{
              background: 'rgba(247,93,2,0.18)',
              border: '1px solid rgba(247,93,2,0.4)',
              borderRadius: 100,
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: '0.07em',
              textTransform: 'uppercase',
              padding: '5px 16px',
              color: '#ffb38a',
              fontFamily: "'DM Sans', sans-serif",
            }}
          >
            🔥 Nigeria's #1 Price Comparison Platform
          </div> */}

          <h1
            className="leading-tight mb-4"
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 'clamp(32px, 5.5vw, 62px)',
              fontWeight: 800,
              letterSpacing: '-1px',
            }}
          >
            Unlock the Best Deals Today
          </h1>

          <p
            className="mt-2 max-w-2xl"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: 'clamp(14px, 1.8vw, 18px)',
              color: 'rgba(255,255,255,0.7)',
              lineHeight: 1.7,
            }}
          >
            With our innovative platform, you can effortlessly browse
            through a vast array of products, comparing prices from leading retailers.
          </p>
        </div>

        {/* Search Box — floats on bottom edge */}
        <div
          className="absolute bottom-0 left-1/2 z-20 w-[95%] sm:w-[88%] md:w-[78%]"
          style={{ transform: 'translate(-50%, 50%)' }}
        >
          <div
            style={{
              background: '#fff',
              borderRadius: 14,
              boxShadow: '0 8px 40px rgba(0,0,0,0.18)',
              display: 'flex',
              alignItems: 'center',
              padding: '6px 6px 6px 18px',
              gap: 8,
            }}
          >
            <img src={Search} alt="" style={{ width: 20, height: 20, opacity: 0.45, flexShrink: 0 }} />

            <input
              type="search"
              placeholder="Search Your Favourite Product"
              style={{
                flex: 1,
                border: 'none',
                outline: 'none',
                fontSize: 15,
                fontFamily: "'DM Sans', sans-serif",
                color: '#111110',
                background: 'transparent',
                padding: '10px 0',
                minWidth: 0,
              }}
            />

            <select
              value={product}
              onChange={(e) => setProduct(e.target.value)}
              style={{
                borderLeft: '1px solid rgba(0,0,0,0.1)',
                paddingLeft: 14,
                paddingRight: 14,
                fontSize: 13,
                fontFamily: "'DM Sans', sans-serif",
                color: '#3a3a38',
                background: 'transparent',
                border: 'none',
                borderLeft: '1px solid rgba(0,0,0,0.1)',
                outline: 'none',
                cursor: 'pointer',
                flexShrink: 0,
              }}
            >
              <option value="">All Categories</option>
              <option value="Laptop">Laptop</option>
              <option value="Phone">Phone</option>
              <option value="Headphones">Headphones</option>
              <option value="TV">TV</option>
              <option value="Clothes">Clothes</option>
            </select>

            <button
              style={{
                background: '#F75D02',
                color: '#fff',
                border: 'none',
                borderRadius: 10,
                padding: '11px 24px',
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "'DM Sans', sans-serif",
                cursor: 'pointer',
                whiteSpace: 'nowrap',
                flexShrink: 0,
                transition: 'background 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = '#d94f00'}
              onMouseLeave={e => e.currentTarget.style.background = '#F75D02'}
            >
              Search
            </button>
          </div>
        </div>

      </section>
    </div>
  );
}

export default Hero;