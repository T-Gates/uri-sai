import { useEffect, useRef } from 'react';

export default function StarField({ density = 0.9 }) {
  const ref = useRef(null);

  useEffect(() => {
    const layer = ref.current;
    layer.innerHTML = '';
    const count = Math.round(100 * density);

    for (let i = 0; i < count; i++) {
      const s = document.createElement('div');
      s.className = 'star';
      s.style.left = Math.random() * 100 + '%';
      s.style.top = Math.random() * 100 + '%';
      const size = 1.2 + Math.random() * 1.8;
      s.style.width = size + 'px';
      s.style.height = size + 'px';
      const op = 0.35 + Math.random() * 0.55;
      s.style.setProperty('--star-o', op);
      s.style.animationDelay = Math.random() * 3 + 's';

      setTimeout(() => {
        s.style.animation = `twinkle ${3 + Math.random() * 5}s ease-in-out infinite`;
        s.style.opacity = op;
      }, 2200 + Math.random() * 1200);

      if (Math.random() < 0.18) {
        setTimeout(() => {
          s.style.transition = 'opacity 6s ease-out';
          s.style.opacity = '0';
        }, 8000 + Math.random() * 30000);
      }

      if (Math.random() < 0.06) {
        s.style.background = Math.random() < 0.5
          ? 'rgba(200,180,255,0.9)'
          : 'rgba(255,200,220,0.8)';
      }

      layer.appendChild(s);
    }
  }, [density]);

  return <div className="stars-layer" ref={ref} />;
}
