import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSectionTracking } from '../hooks/useSectionTracking';
import { trackEvent } from '../utils/tracking';

export default function BottomZone({ showPrivacy, onCtaClick }) {
  const revealRef = useScrollReveal();
  const trackRef = useSectionTracking('bottom_zone');

  const handleClick = () => {
    trackEvent('cta_click');
    onCtaClick();
  };

  return (
    <section
      className="bottom-zone"
      data-reveal
      ref={(el) => { revealRef.current = el; trackRef.current = el; }}
    >
      {showPrivacy && (
        <div className="privacy-line">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <rect x="5" y="11" width="14" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 1 1 8 0v4" />
          </svg>
          <span>대화 내용은 서버에 저장되지 않아요</span>
        </div>
      )}
      <button className="cta-button" onClick={handleClick}>
        곧 만나요, 7월 · 알림 받기
      </button>
      <p className="cta-sub">출시 알림 신청 · 무료</p>
    </section>
  );
}
