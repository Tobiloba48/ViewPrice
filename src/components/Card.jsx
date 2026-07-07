import Headset from '../assets/headset.png'
import Love from '../assets/love.png'
import Star from '../assets/Star 1.png'
import Plus from '../assets/plus.png'
import { useNavigate } from 'react-router-dom'

function Card({
  productName = "Product Name",
  product = Headset,
  brandName = "Brand/Vendor Name",
  rating = 4.7,
  isInStock = false,
  price = 0,
  formalPrice = 0
}) {
  const navigate = useNavigate();
  const handlePageClick = () => {
    navigate("/product-page");
  };

  return (
    <div
      className="w-full flex flex-col"
      style={{ fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Image Section */}
      <div
        className="cursor-pointer"
        style={{
          background: "#F5F4F0",
          borderRadius: "12px 12px 0 0",
          position: "relative",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          overflow: "hidden",
        }}
        onClick={handlePageClick}
      >
        {/* Wishlist button */}
        <button
          style={{
            position: "absolute",
            top: 10,
            left: 10,
            width: 34,
            height: 34,
            borderRadius: "50%",
            background: "#fff",
            border: "1px solid rgba(0,0,0,0.08)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
            transition: "transform 0.2s",
            zIndex: 1,
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.transform = "scale(1.12)")
          }
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        >
          <img src={Love} alt="Save" style={{ width: 16, height: 16 }} />
        </button>

        <img
          src={product}
          alt={productName}
          className="h-[14em] sm:h-[16em] md:h-[18em] object-contain p-4"
        />
      </div>

      {/* Content */}
      <div
        style={{
          background: "#fff",
          padding: "12px 14px 10px",
          borderLeft: "1px solid rgba(0,0,0,0.07)",
          borderRight: "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <div className="grid grid-cols-2 gap-2">
          {/* Left: name, brand, rating */}
          <div>
            <p
              style={{
                fontSize: 10,
                fontWeight: 600,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#888780",
                marginBottom: 3,
              }}
            >
              {brandName}
            </p>
            <h1
              style={{
                fontWeight: 700,
                fontSize: 14,
                lineHeight: 1.3,
                marginBottom: 6,
                color: "#111110",
              }}
            >
              {productName}
            </h1>

            <div className="flex items-center gap-1.5">
              <img src={Star} alt="rating" style={{ width: 14, height: 14 }} />
              <span
                style={{
                  fontSize: 12,
                  borderRight: "1px solid rgba(0,0,0,0.15)",
                  paddingRight: 8,
                  color: "#3a3a38",
                }}
              >
                {rating}
              </span>
              <span
                style={{
                  fontSize: 10,
                  fontWeight: 600,
                  paddingLeft: 4,
                  color: isInStock ? "#2e7d32" : "#c62828",
                }}
              >
                {isInStock ? "In stock" : "Out of stock"}
              </span>
            </div>
          </div>

          {/* Right: Add button */}
          <div className="flex justify-end items-center">
            <button
              style={{
                background: "#F75D02",
                borderRadius: "50%",
                width: 40,
                height: 40,
                border: "none",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: "background 0.2s, transform 0.15s",
                boxShadow: "0 2px 8px rgba(247,93,2,0.3)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#d94f00";
                e.currentTarget.style.transform = "scale(1.1)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#F75D02";
                e.currentTarget.style.transform = "scale(1)";
              }}
            >
              <img src={Plus} alt="Add" style={{ width: 18, height: 18 }} />
            </button>
          </div>

          {/* Price row */}
          <div className="col-span-2 flex items-baseline gap-2 pt-1">
            <p style={{ fontWeight: 700, fontSize: 20, color: "#F75D02" }}>
              N{price}
            </p>
            <p
              style={{
                textDecoration: "line-through",
                fontSize: 11,
                color: "#888780",
                fontWeight: 500,
              }}
            >
              N{formalPrice}
            </p>
          </div>
        </div>
      </div>

      {/* Compare bar */}
      <button
        className="w-full"
        style={{
          background: "#111110",
          color: "#fff",
          textAlign: "center",
          padding: "10px",
          fontSize: 13,
          fontWeight: 600,
          letterSpacing: "0.04em",
          border: "none",
          borderRadius: "0 0 12px 12px",
          cursor: "pointer",
          fontFamily: "'DM Sans', sans-serif",
          transition: "background 0.2s",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.background = "#F75D02")}
        onMouseLeave={(e) => (e.currentTarget.style.background = "#111110")}
      >
        Compare Price
      </button>
    </div>
  );
}

export default Card;