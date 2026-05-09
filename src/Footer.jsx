import Whatsapp from './assets/whatsapp_symbol.svg.png'
import X from './assets/x_logo.svg.png'
import Facebook from './assets/facebook_symbol.svg.png'
import Google from './assets/google_symbol.svg.png'
import Instagram from './assets/Instagram.png'
import OrangeViewprice from './assets/OrangeViewprice.png'
import Visa from './assets/visa_inc_logo.svg.png'
import MasterCard from './assets/mastercard.png'
import Flutterwave from './assets/flutterwave_symbol.svg.png'

const socialIconStyle = {
  width: 34,
  height: 34,
  borderRadius: 8,
  border: '1px solid rgba(255,255,255,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  cursor: 'pointer',
  transition: 'border-color 0.2s, background 0.2s',
  background: 'transparent',
  padding: 6,
};

function Footer() {
  return (
    <>
      <section
        style={{
          background: '#0e0e0c',
          color: 'rgba(255,255,255,0.6)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 40,
          padding: 'clamp(36px, 5vw, 56px) clamp(20px, 5vw, 56px)',
          fontFamily: "'DM Sans', sans-serif",
        }}
      >
        {/* Brand column */}
        <div>
          <img src={OrangeViewprice} alt="ViewPrice" style={{ height: 32, marginBottom: 14, display: 'block' }} />

          <p style={{ fontSize: 13, lineHeight: 1.8, color: 'rgba(255,255,255,0.5)', marginBottom: 16 }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Doloribus totam possimus laborum.
          </p>

          {/* Payment logos */}
          <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 16, flexWrap: 'wrap' }}>
            <img src={Visa} alt="Visa" style={{ height: 22, opacity: 0.8 }} />
            <img src={MasterCard} alt="MasterCard" style={{ height: 22, opacity: 0.8 }} />
            <img src={Flutterwave} alt="Flutterwave" style={{ height: 22, opacity: 0.8 }} />
          </div>
        </div>

        {/* Product column */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Product
          </h2>
          <ol style={{ listStyle: 'none', padding: 0 }}>
            {['Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum','Lorem Ipsum'].map((item, i) => (
              <li
                key={i}
                style={{ fontSize: 13, marginBottom: 9, cursor: 'pointer', transition: 'color 0.2s' }}
                onMouseEnter={e => e.target.style.color = '#F75D02'}
                onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,0.6)'}
              >
                {item}
              </li>
            ))}
          </ol>
        </div>

        {/* Earnings column */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Earnings
          </h2>
          <p style={{ fontSize: 13, lineHeight: 2.1, color: 'rgba(255,255,255,0.6)' }}>
            Become a vendor <br />
            Advertise your product <br />
            Sell on market
          </p>
        </div>

        {/* Contact column */}
        <div>
          <h2
            style={{
              fontFamily: "'Syne', sans-serif",
              fontSize: 12,
              fontWeight: 700,
              color: '#fff',
              letterSpacing: '0.1em',
              textTransform: 'uppercase',
              marginBottom: 16,
            }}
          >
            Contact
          </h2>
          <p style={{ fontSize: 13, lineHeight: 1.9, color: 'rgba(255,255,255,0.6)', marginBottom: 16 }}>
            Floyd_Hyatt@hotmail.com <br />
            100 Lake Road, Fort Dena 93748-2373 <br />
            (520) 363-7288x7389 <br />
            Belgium
          </p>

          {/* Social icons */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {[
              { src: Whatsapp, alt: 'WhatsApp' },
              { src: X, alt: 'X (Twitter)' },
              { src: Facebook, alt: 'Facebook' },
              { src: Google, alt: 'Google' },
              { src: Instagram, alt: 'Instagram' },
            ].map(({ src, alt }) => (
              <div
                key={alt}
                style={socialIconStyle}
                title={alt}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = '#F75D02';
                  e.currentTarget.style.background = 'rgba(247,93,2,0.12)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)';
                  e.currentTarget.style.background = 'transparent';
                }}
              >
                <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'contain', opacity: 0.8 }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer bottom bar */}
      <div
        style={{
          background: '#0e0e0c',
          borderTop: '1px solid rgba(255,255,255,0.06)',
          padding: '16px clamp(20px, 5vw, 56px)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontFamily: "'DM Sans', sans-serif",
          flexWrap: 'wrap',
          gap: 8,
        }}
      >
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          © 2026 ViewPrice. All rights reserved.
        </p>
        <p style={{ fontSize: 12, color: 'rgba(255,255,255,0.3)' }}>
          Privacy Policy · Terms of Service
        </p>
      </div>
    </>
  );
}

export default Footer;