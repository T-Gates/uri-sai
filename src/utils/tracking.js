import { supabase } from './supabase';

const params = new URLSearchParams(window.location.search);

export const utmParams = {
  utm_source: params.get('utm_source') || '',
  utm_medium: params.get('utm_medium') || '',
  utm_content: params.get('utm_content') || '',
  utm_campaign: params.get('utm_campaign') || '',
};

const isOrganic = !utmParams.utm_source && !utmParams.utm_medium && !utmParams.utm_content && !utmParams.utm_campaign;
if (isOrganic) {
  localStorage.setItem('uri-sai-organic', '1');
} else {
  localStorage.removeItem('uri-sai-organic');
}
const skipTracking = !!localStorage.getItem('uri-sai-organic');

function getDistinctId() {
  try { return window.posthog.get_distinct_id(); } catch { return 'unknown'; }
}

export function trackEvent(name, props = {}) {
  if (skipTracking) return;
  const merged = { ...utmParams, ...props };
  try { window.posthog.capture(name, merged); } catch {}
  const doInsert = () => {
    supabase.from('events').insert({
      event: name,
      posthog_distinct_id: getDistinctId(),
      properties: merged,
      referrer: document.referrer,
      device: window.innerWidth <= 768 ? 'mobile' : 'desktop',
      url: location.href,
    });
  };
  doInsert();
}

trackEvent('page_view');
