import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSectionTracking } from '../hooks/useSectionTracking';

export default function AiConsult() {
  const revealRef = useScrollReveal();
  const trackRef = useSectionTracking('ai_consult');
  const chatRef = useRef(null);

  useEffect(() => {
    const chat = chatRef.current;
    if (!chat) return;

    const messages = chat.querySelectorAll('.ac-msg');
    const perk = chat.closest('section').querySelector('.ac-perk');

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            messages.forEach((msg, i) => {
              setTimeout(() => msg.classList.add('visible'), i * 600);
            });
            if (perk) setTimeout(() => perk.classList.add('visible'), messages.length * 600);
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.4 }
    );

    obs.observe(chat);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="ai-consult"
      data-reveal
      ref={(el) => { revealRef.current = el; trackRef.current = el; }}
    >
      <p className="ai-consult-main">지표는 결과예요.<br />이유는 다른 데 있어요.</p>
      <p className="ai-consult-sub">위의 지표를 바탕으로, 하루하루를 따라가요</p>

      <div className="ac-chat" ref={chatRef}>
        <div className="ac-msg ac-msg-user">
          <div className="ac-bubble ac-bubble-user">왜 이렇게 된걸까.</div>
        </div>

        <div className="ac-msg ac-msg-ai">
          <div className="ac-avatar">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="18" height="18">
              <circle cx="11" cy="14" r="4.5" fill="#E8687A"/>
              <circle cx="22" cy="18" r="3.5" fill="#B888F0"/>
            </svg>
          </div>
          <div className="ac-bubble ac-bubble-ai ac-bubble-status">
            갈등 구간 · 답장 속도 · 최근 대화를 교차 분석합니다
            <span className="ac-dots">
              <span>·</span><span>·</span><span>·</span>
            </span>
          </div>
        </div>

        <div className="ac-msg ac-msg-ai ac-msg-cont">
          <div className="ac-bubble ac-bubble-ai">
            작년 11월, 같은 패턴이 있었어요.
          </div>
        </div>

        <div className="ac-msg ac-msg-ai ac-msg-cont">
          <div className="ac-bubble ac-bubble-ai">
            그때는 3일 만에 회복됐는데 — 이번엔 18일째예요.
          </div>
        </div>

        <div className="ac-msg ac-msg-ai ac-msg-cont">
          <div className="ac-bubble ac-bubble-ai">
            상대는 이 속도가 익숙해졌을 수도 있어요.
          </div>
        </div>

        <div className="ac-msg ac-msg-ai ac-msg-cont">
          <div className="ac-bubble ac-bubble-ai">
            시작은 바쁨이 아니라, 그때의 침묵이에요.
          </div>
        </div>
      </div>
      <p className="ac-perk">사전 신청자에게 심층상담 2회를 무료로 드려요</p>
    </section>
  );
}
