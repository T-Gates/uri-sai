import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSectionTracking } from '../hooks/useSectionTracking';

const FEATURES = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    title: '실제 대화 기반',
    desc: '카카오톡 대화 원본을 직접 분석해서 숨은 신호를 찾아내요',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="var(--accent)" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="14" width="4" height="7" rx="1" />
        <rect x="10" y="9" width="4" height="12" rx="1" />
        <rect x="16" y="4" width="4" height="17" rx="1" />
      </svg>
    ),
    title: '정교한 통계 분석',
    desc: '흔한 AI 요약이 아닌, 대화 패턴을 수치로 뽑아냅니다',
  },
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 20h18" />
        <polyline points="4 16 8 10 12 13 16 9 20 5" />
      </svg>
    ),
    title: '월별 변화 추이',
    desc: '우리 사이가 어떻게 변해왔는지 한눈에 볼 수 있어요',
  },
];

const PRIVACY_FEATURE = {
  icon: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="11" width="14" height="10" rx="2" />
      <path d="M8 11V7a4 4 0 1 1 8 0v4" />
    </svg>
  ),
  title: '서버 전송 없음',
  desc: '대화 내용은 브라우저에서만 처리돼요. 어디에도 저장되지 않습니다',
};

export default function Features({ showPrivacy }) {
  const revealRef = useScrollReveal();
  const trackRef = useSectionTracking('features');

  return (
    <section
      className="features"
      data-reveal
      ref={(el) => { revealRef.current = el; trackRef.current = el; }}
    >
      <p className="features-label">대화 속 숨은 신호</p>
      <div className="features-list">
        {FEATURES.map((f) => (
          <div className="feature-item" key={f.title}>
            <span className="feature-icon">{f.icon}</span>
            <div className="feature-text">
              <strong>{f.title}</strong>
              <span>{f.desc}</span>
            </div>
          </div>
        ))}
        {showPrivacy && (
          <div className="feature-item">
            <span className="feature-icon">{PRIVACY_FEATURE.icon}</span>
            <div className="feature-text">
              <strong>{PRIVACY_FEATURE.title}</strong>
              <span>{PRIVACY_FEATURE.desc}</span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
