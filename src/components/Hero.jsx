export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-dots">
        <div className="dot dot-a" />
        <div className="dot dot-b" />
      </div>
      <h1>우리 지금,<br />어디에 있을까</h1>
      <p className="hero-sub">
        카카오톡 대화를 넣으면<br />우리 사이의 온도를 알려드려요
      </p>
      <div className="scroll-hint">
        <span>SCROLL</span>
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
      <img className="hero-treeline" src="forest-silhouette.png" alt="" />
    </section>
  );
}
