import { useEffect, useRef } from 'react';
import { trackEvent } from '../utils/tracking';

export function useSectionTracking(sectionId) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            trackEvent('scroll_section', { section: sectionId });
            obs.unobserve(e.target);
          }
        });
      },
      { threshold: 0.3 }
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [sectionId]);

  return ref;
}
