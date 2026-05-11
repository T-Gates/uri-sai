import { useState, useRef, useEffect } from 'react';
import { trackEvent, utmParams } from '../utils/tracking';
import { supabase } from '../utils/supabase';

const KAKAO_CHANNEL_URL = 'http://pf.kakao.com/_xiiFKX/friend';

export default function Modal({ open, onClose }) {
  const [phone, setPhone] = useState('');
  const [consent, setConsent] = useState(false);
  const [success, setSuccess] = useState(false);
  const [shake, setShake] = useState(false);
  const [error, setError] = useState(false);
  const [phoneFocused, setPhoneFocused] = useState(false);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) trackEvent('modal_open');
  }, [open]);

  const formatPhone = (value) => {
    const v = value.replace(/\D/g, '').slice(0, 11);
    if (v.length > 7) return `${v.slice(0, 3)}-${v.slice(3, 7)}-${v.slice(7)}`;
    if (v.length > 3) return `${v.slice(0, 3)}-${v.slice(3)}`;
    return v;
  };

  const handlePhoneChange = (e) => {
    setError(false);
    setPhone(formatPhone(e.target.value));
  };

  const handlePhoneFocus = () => {
    if (!phoneFocused) {
      setPhoneFocused(true);
      trackEvent('phone_focus');
    }
  };

  const handleChannelAdd = () => {
    trackEvent('channel_add_click');
    try { window.fbq('track', 'Lead'); } catch {}
  };

  const handleSubmit = () => {
    const raw = phone.replace(/\D/g, '');
    if (raw.length < 10 || raw.length > 11) {
      setError(true);
      setPhone('');
      return;
    }
    if (!consent) {
      setShake(true);
      setTimeout(() => setShake(false), 400);
      return;
    }

    trackEvent('phone_submit');

    supabase.from('phone_leads').insert({
      phone,
      posthog_distinct_id: (() => { try { return window.posthog.get_distinct_id(); } catch { return 'unknown'; } })(),
      utm_source: utmParams.utm_source,
      utm_medium: utmParams.utm_medium,
      utm_content: utmParams.utm_content,
      utm_campaign: utmParams.utm_campaign,
      referrer: document.referrer,
    }).then(() => {});

    try { window.fbq('track', 'Lead'); } catch {}
    setSuccess(true);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  if (!open) return null;

  return (
    <div className="modal-overlay active" onClick={handleOverlayClick}>
      <div className="modal">
        <button className="modal-close" onClick={onClose}>×</button>

        {!success ? (
          <div className="modal-form">
            <div className="modal-title">준비 중이에요</div>
            <div className="modal-desc">오픈하면 가장 먼저 알려드릴게요</div>

            <a
              className="kakao-channel-btn"
              href={KAKAO_CHANNEL_URL}
              target="_blank"
              rel="noopener noreferrer"
              onClick={handleChannelAdd}
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                <path d="M10 2C5.58 2 2 4.91 2 8.5c0 2.3 1.44 4.32 3.62 5.53L4.9 17.1a.3.3 0 0 0 .44.34L9.1 15.0A9.3 9.3 0 0 0 10 15c4.42 0 8-2.91 8-6.5S14.42 2 10 2Z" fill="#191919"/>
              </svg>
              카카오톡 채널 추가하기
            </a>

            <div className="modal-divider"><span>또는</span></div>

            <div className="phone-input-wrap">
              <input
                ref={inputRef}
                className="phone-input"
                type="tel"
                inputMode="numeric"
                placeholder={error ? '올바른 번호를 입력해주세요' : '010-0000-0000'}
                maxLength={13}
                value={phone}
                onChange={handlePhoneChange}
                onFocus={handlePhoneFocus}
                style={error ? { borderColor: '#ff6b6b' } : undefined}
              />
              <button className="phone-submit" onClick={handleSubmit}>문자로 알림 받기</button>
            </div>
            <label className={`consent-label${shake ? ' shake' : ''}`}>
              <input
                type="checkbox"
                checked={consent}
                onChange={(e) => setConsent(e.target.checked)}
              />
              <span>개인정보 수집·이용에 동의합니다 <em>(알림 발송 목적, 출시 후 파기)</em></span>
            </label>
          </div>
        ) : (
          <div className="modal-success active">
            <div className="success-check">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--accent)" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <div className="success-title">신청 완료!</div>
            <div className="success-desc">오픈되면 가장 먼저 알려드릴게요</div>
          </div>
        )}
      </div>
    </div>
  );
}
