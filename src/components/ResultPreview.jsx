import { useEffect, useRef } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useSectionTracking } from '../hooks/useSectionTracking';

const WORDS = [
  { text: '보고싶어', cls: 'wc-xl wc-accent', style: { top: '6%', left: '24%' } },
  { text: '바쁘다', cls: 'wc-sm wc-cold', style: { top: '10%', left: '68%' } },
  { text: 'ㅋㅋㅋ', cls: 'wc-lg', style: { top: '24%', left: '6%' } },
  { text: '몰라', cls: 'wc-sm wc-cold', style: { top: '28%', left: '42%' } },
  { text: '좋아', cls: 'wc-lg wc-accent', style: { top: '26%', left: '60%' } },
  { text: '사랑해', cls: 'wc-xl wc-accent', style: { top: '46%', left: '22%' } },
  { text: '알았어', cls: 'wc-sm wc-cold', style: { top: '50%', left: '58%' } },
  { text: '잘자', cls: 'wc-md', style: { top: '44%', left: '76%' } },
  { text: '귀여워', cls: 'wc-md wc-accent', style: { top: '66%', left: '8%' } },
  { text: 'ㅇㅇ', cls: 'wc-sm wc-cold', style: { top: '68%', left: '40%' } },
  { text: 'ㅎㅎ', cls: 'wc-lg', style: { top: '64%', left: '60%' } },
  { text: '나도', cls: 'wc-md', style: { top: '84%', left: '18%' } },
  { text: '그래', cls: 'wc-sm wc-cold', style: { top: '86%', left: '48%' } },
  { text: '밥', cls: 'wc-md wc-accent', style: { top: '82%', left: '66%' } },
];

const MONTHS = [
  { label: '1월', width: '92%', val: '84.2°' },
  { label: '2월', width: '88%', val: '81.0°' },
  { label: '3월', width: '80%', val: '76.5°' },
  { label: '4월', width: '74%', val: '72.4°' },
  { label: '5월', width: '58%', val: '63.1°', danger: true },
];

function MonthlyBars() {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const bars = el.querySelectorAll('.rp-month-bar');
    const widths = Array.from(bars).map((b) => {
      const w = b.style.width;
      b.style.width = '0';
      b.style.transition = 'width 0.8s ease-out';
      return w;
    });

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            bars.forEach((b, i) => {
              setTimeout(() => { b.style.width = widths[i]; }, i * 120);
            });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div className="rp-monthly" ref={ref}>
      {MONTHS.map((m) => (
        <div className="rp-month-row" key={m.label}>
          <span className="rp-month-label">{m.label}</span>
          <div className="rp-month-track">
            <div
              className={`rp-month-bar${m.danger ? ' rp-month-bar--danger' : ''}`}
              style={{ width: m.width }}
            />
          </div>
          <span className="rp-month-val">{m.val}</span>
        </div>
      ))}
    </div>
  );
}

export default function ResultPreview() {
  const revealRef = useScrollReveal();
  const trackRef = useSectionTracking('result_preview');
  const containerRef = useRef(null);

  useEffect(() => {
    const section = containerRef.current;
    if (!section) return;

    const donut = section.querySelector('.rp-donut');
    if (!donut) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            donut.classList.add('animate');
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.6 }
    );

    obs.observe(donut);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      className="result-preview"
      data-reveal
      ref={(el) => { revealRef.current = el; trackRef.current = el; containerRef.current = el; }}
    >
      <p className="result-preview-label">이런 결과를 받아볼 수 있어요</p>
      <div className="result-preview-wrap">
        <div className="rp-section rp-temp">
          <div className="rp-temp-label">LOVE TEMPERATURE</div>
          <div>
            <span className="rp-temp-num">72.4</span>
            <span className="rp-temp-deg">°</span>
          </div>
          <p className="rp-temp-msg">따뜻하지만, 조금 식어가고 있어요</p>
        </div>

        <div className="rp-divider" />

        <div className="rp-section rp-total">
          <div>
            <span className="rp-total-num">200,387</span>
            <span className="rp-total-unit">개의 메시지</span>
          </div>
          <p className="rp-total-desc">우리가 주고 받은 대화</p>
        </div>

        <div className="rp-section rp-ratio">
          <div className="rp-ratio-bar">
            <div className="rp-ratio-me" style={{ width: '57%' }}>57%</div>
            <div className="rp-ratio-you" style={{ width: '43%' }}>43%</div>
          </div>
          <div className="rp-ratio-labels"><span>나</span><span>상대</span></div>
        </div>

        <div className="rp-section rp-first-contact">
          <div className="rp-section-title">먼저 연락 비율</div>
          <div className="rp-ratio-bar">
            <div className="rp-ratio-me" style={{ width: '63%' }}>63%</div>
            <div className="rp-ratio-you" style={{ width: '37%' }}>37%</div>
          </div>
          <div className="rp-ratio-labels"><span>내가 먼저</span><span>상대가 먼저</span></div>
        </div>

        <div className="rp-divider" />

        <div className="rp-section" style={{ marginTop: 20 }}>
          <div className="rp-section-title">월별 대화 온도</div>
          <MonthlyBars />
        </div>

        <div className="rp-section" style={{ marginTop: 20 }}>
          <div className="rp-section-title">답장 속도 변화</div>
          <div className="rp-speed-wrap">
            <div className="rp-speed-period">
              <div className="rp-speed-period-label">초반 (1–2월)</div>
              <div className="rp-speed-row">
                <span className="rp-speed-who">나</span>
                <span className="rp-speed-val">8분</span>
              </div>
              <div className="rp-speed-row">
                <span className="rp-speed-who">상대</span>
                <span className="rp-speed-val">12분</span>
              </div>
            </div>
            <div className="rp-speed-arrow">→</div>
            <div className="rp-speed-period">
              <div className="rp-speed-period-label">최근 (4–5월)</div>
              <div className="rp-speed-row">
                <span className="rp-speed-who">나</span>
                <span className="rp-speed-val rp-speed-slow">24분</span>
              </div>
              <div className="rp-speed-row">
                <span className="rp-speed-who">상대</span>
                <span className="rp-speed-val rp-speed-slow">47분</span>
              </div>
            </div>
          </div>
          <p className="rp-speed-note">상대의 답장이 4배 느려졌어요</p>
        </div>

        <div className="rp-section">
          <div className="rp-section-title">대화를 닫는 쪽</div>
          <div className="rp-donut-wrap">
            <div className="rp-donut">
              <div className="rp-donut-inner">
                <span className="rp-donut-pct">62%</span>
                <span className="rp-donut-label">나</span>
              </div>
            </div>
            <div className="rp-donut-legend">
              <div className="rp-donut-leg">
                <span className="rp-donut-dot rp-donut-dot-me" />
                <span className="rp-donut-leg-name">나</span>
                <span className="rp-donut-leg-val">62%</span>
              </div>
              <div className="rp-donut-leg">
                <span className="rp-donut-dot rp-donut-dot-you" />
                <span className="rp-donut-leg-name">상대</span>
                <span className="rp-donut-leg-val">38%</span>
              </div>
            </div>
          </div>
          <p className="rp-ender-note">대화를 먼저 닫는 건 주로 나예요</p>
        </div>

        <div className="rp-section">
          <div className="rp-section-title">호칭 변화</div>
          <div className="rp-nickname-list">
            <div className="rp-nickname-row">
              <span className="rp-nickname-word rp-nickname-warm">자기야</span>
              <div className="rp-nickname-trend">
                <span className="rp-nickname-before">47회</span>
                <span className="rp-nickname-arrow">→</span>
                <span className="rp-nickname-after rp-nickname-drop">3회</span>
              </div>
            </div>
            <div className="rp-nickname-row">
              <span className="rp-nickname-word rp-nickname-warm">오빠</span>
              <div className="rp-nickname-trend">
                <span className="rp-nickname-before">38회</span>
                <span className="rp-nickname-arrow">→</span>
                <span className="rp-nickname-after rp-nickname-drop">8회</span>
              </div>
            </div>
            <div className="rp-nickname-row">
              <span className="rp-nickname-word rp-nickname-cold">이름 호출</span>
              <div className="rp-nickname-trend">
                <span className="rp-nickname-before">4회</span>
                <span className="rp-nickname-arrow">→</span>
                <span className="rp-nickname-after rp-nickname-rise">29회</span>
              </div>
            </div>
          </div>
          <p className="rp-ender-note">애칭이 이름으로 바뀌고 있어요</p>
        </div>

        <p className="rp-more">
          <strong>+<br />호칭 · 장문 비율 · 부정어 비율 변화 등</strong>
          <br />
          <span className="rp-more-accent">핵심지표 12개 무료 제공</span>
        </p>
        <div className="rp-fade-bottom" />
      </div>
    </section>
  );
}
