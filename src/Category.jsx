function Category(props) {
  return (
    <section>
      <div
        className="flex justify-between items-center gap-6 cursor-pointer"
        style={{
          border: '1px solid rgba(0,0,0,0.08)',
          padding: '14px 18px',
          borderRadius: 12,
          fontFamily: "'DM Sans', sans-serif",
          fontWeight: 600,
          fontSize: 14,
          background: '#fff',
          marginBottom: 12,
          boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
          transition: 'all 0.25s ease',
          color: '#111110',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.background = '#F75D02';
          e.currentTarget.style.color = '#fff';
          e.currentTarget.style.transform = 'translateY(-2px)';
          e.currentTarget.style.boxShadow = '0 8px 24px rgba(247,93,2,0.25)';
          e.currentTarget.style.borderColor = '#F75D02';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.background = '#fff';
          e.currentTarget.style.color = '#111110';
          e.currentTarget.style.transform = 'translateY(0)';
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0,0,0,0.05)';
          e.currentTarget.style.borderColor = 'rgba(0,0,0,0.08)';
        }}
      >
        <img src={props.pic} alt="" style={{ width: 32, height: 32, objectFit: 'contain' }} />
        <label style={{ cursor: 'pointer' }}>{props.name}</label>
      </div>
    </section>
  );
}

export default Category;